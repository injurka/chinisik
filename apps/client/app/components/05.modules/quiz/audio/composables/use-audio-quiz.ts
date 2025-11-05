import type { AudioQuizQuestion, AudioQuizResult, AudioQuizSettings } from '~/shared/types'

enum RequestKeys {
  GENERATE_QUESTION = 'quiz_generate-question',
}

type QuizStatus = 'settings' | 'playing' | 'finished'

export function useAudioQuiz() {
  const isLoading = useRequestStatus([RequestKeys.GENERATE_QUESTION])

  const status = ref<QuizStatus>('settings')
  const settings = ref<AudioQuizSettings | null>(null)
  const currentQuestion = ref<AudioQuizQuestion | null>(null)
  const nextQuestion = ref<AudioQuizQuestion | null>(null)
  const results = ref<AudioQuizResult[]>([])

  const totalQuestions = computed(() => settings.value?.questionCount ?? 0)
  const currentQuestionIndex = computed(() => results.value.length)
  const score = computed(() => results.value.filter(r => r.isCorrect).length)

  const fetchQuestion = async (target: 'current' | 'next') => {
    if (!settings.value)
      return

    await useRequest({
      key: RequestKeys.GENERATE_QUESTION,
      fn: ({ api }) => api.quiz.v1.audio.generate(settings.value!),
      onSuccess: ({ data }) => {
        if (target === 'current')
          currentQuestion.value = data
        else nextQuestion.value = data
      },
      onError: () => {
        status.value = 'settings'
      },
    })
  }

  const startQuiz = async (newSettings: AudioQuizSettings) => {
    settings.value = newSettings
    status.value = 'playing'
    results.value = []
    currentQuestion.value = null
    nextQuestion.value = null

    await fetchQuestion('current')
    if (totalQuestions.value > 1) {
      fetchQuestion('next')
    }
  }

  const submitAnswer = (answerId: number) => {
    if (!currentQuestion.value)
      return

    const isCorrect = currentQuestion.value.correctAnswerId === answerId
    results.value.push({
      questionId: currentQuestion.value.id,
      userAnswerId: answerId,
      isCorrect,
    })

    if (currentQuestionIndex.value >= totalQuestions.value) {
      status.value = 'finished'
      return
    }

    currentQuestion.value = nextQuestion.value
    nextQuestion.value = null

    if (currentQuestionIndex.value < totalQuestions.value - 1) {
      fetchQuestion('next')
    }
  }

  const resetQuiz = () => {
    status.value = 'settings'
    settings.value = null
    currentQuestion.value = null
    nextQuestion.value = null
    results.value = []
  }

  return {
    status,
    isLoading,
    currentQuestion,
    totalQuestions,
    currentQuestionIndex,
    score,
    startQuiz,
    submitAnswer,
    resetQuiz,
  }
}
