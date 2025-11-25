import type { DayMaterialQuiz } from '~/shared/types'
import confetti from 'canvas-confetti'

export const QUIZ_STAGES = {
  INTRO: 'intro',
  STAGE_1: 'stage_1', // Vocabulary
  STAGE_2: 'stage_2', // Sentence Construction
  STAGE_3: 'stage_3', // Proverb
  RESULTS: 'results',
} as const

export type QuizStage = typeof QUIZ_STAGES[keyof typeof QUIZ_STAGES]

export interface QuizAttempt {
  id: string
  timestamp: number
  score: number
  mistakes: number
  totalQuestions: number
}

export function useDayMaterialQuiz(quizData: Ref<DayMaterialQuiz | undefined>) {
  // --- Dependencies ---
  const { api } = useApi()
  const store = useStore(['auth'])

  // --- Global State ---
  const currentStage = ref<QuizStage>(QUIZ_STAGES.INTRO)
  const score = ref(0)
  const mistakes = ref(0)
  const quizHistory = ref<QuizAttempt[]>([])
  const completedQuestions = ref(0)
  const isHistoryLoading = ref(false)

  // --- API Logic ---
  async function loadHistory() {
    if (!store.auth.isAuthenticated) {
      quizHistory.value = []
      return
    }

    isHistoryLoading.value = true

    try {
      const data = await api.dayMaterial.v1.getHistory()

      quizHistory.value = data.map(item => ({
        id: item.id.toString(),
        timestamp: new Date(item.createdAt).getTime(),
        score: item.score,
        mistakes: item.mistakes,
        totalQuestions: item.totalQuestions,
      }))
    }
    catch (error) {
      console.error('Failed to load quiz history:', error)
      quizHistory.value = []
    }
    finally {
      isHistoryLoading.value = false
    }
  }

  async function saveHistory() {
    if (!store.auth.isAuthenticated)
      return

    try {
      const savedResult = await api.dayMaterial.v1.saveResult({
        score: score.value,
        mistakes: mistakes.value,
        // eslint-disable-next-line ts/no-use-before-define
        totalQuestions: totalQuestions.value,
      })

      const newAttempt: QuizAttempt = {
        id: savedResult.id.toString(),
        timestamp: new Date(savedResult.createdAt).getTime(),
        score: savedResult.score,
        mistakes: savedResult.mistakes,
        totalQuestions: savedResult.totalQuestions,
      }

      quizHistory.value.unshift(newAttempt)
    }
    catch (error) {
      console.error('Failed to save quiz result:', error)
    }
  }

  // --- Computed ---
  const currentStageTitle = computed(() => {
    switch (currentStage.value) {
      case QUIZ_STAGES.STAGE_1: return 'Этап 1: Словарный запас'
      case QUIZ_STAGES.STAGE_2: return 'Этап 2: Грамматика'
      case QUIZ_STAGES.STAGE_3: return 'Этап 3: Мудрость'
      default: return ''
    }
  })

  const totalQuestions = computed(() => {
    if (!quizData.value)
      return 0
    const s1 = quizData.value.stage1?.questions?.length || 0
    const s2 = quizData.value.stage2?.length || 0
    const s3 = quizData.value.stage3 ? 1 : 0
    return s1 + s2 + s3
  })

  const progress = computed(() => {
    if (!totalQuestions.value)
      return 0
    if (currentStage.value === QUIZ_STAGES.RESULTS)
      return 100
    if (currentStage.value === QUIZ_STAGES.INTRO)
      return 0

    const percent = (completedQuestions.value / totalQuestions.value) * 100
    return Math.min(percent, 100)
  })

  const hasPerfectScore = computed(() => {
    return quizHistory.value.some(attempt => attempt.mistakes === 0)
  })

  // --- Actions ---
  function startQuiz() {
    score.value = 0
    mistakes.value = 0
    completedQuestions.value = 0
    currentStage.value = QUIZ_STAGES.STAGE_1
  }

  function setStage(stage: QuizStage) {
    currentStage.value = stage
  }

  function addScore() {
    score.value++
  }

  function addMistake() {
    mistakes.value++
  }

  function incrementProgress() {
    completedQuestions.value++
  }

  function finishQuiz() {
    completedQuestions.value = totalQuestions.value
    currentStage.value = QUIZ_STAGES.RESULTS

    saveHistory()

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  function retry() {
    startQuiz()
  }

  onMounted(() => {
    loadHistory()
  })

  watch(() => store.auth.isAuthenticated, (isAuthenticated) => {
    if (isAuthenticated) {
      loadHistory()
    }
    else {
      quizHistory.value = []
    }
  })

  return {
    currentStage,
    score,
    mistakes,
    quizHistory,
    currentStageTitle,
    progress,
    isHistoryLoading,
    hasPerfectScore,
    startQuiz,
    setStage,
    finishQuiz,
    retry,
    addScore,
    addMistake,
    incrementProgress,
  }
}
