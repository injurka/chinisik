import type { QuizStage1 } from '~/shared/types'

interface UseQuizVocabularyProps {
  data: Ref<QuizStage1 | undefined>
  onComplete: () => void
  onCorrect: () => void
  onWrong: () => void
}

export function useQuizVocabulary({ data, onComplete, onCorrect, onWrong }: UseQuizVocabularyProps) {
  const currentIndex = ref(0)
  const selectedOption = ref<string | null>(null)
  const isSelectionCorrect = ref<boolean | null>(null)
  const currentOptions = ref<string[]>([])

  const currentQuestion = computed(() => data.value?.questions?.[currentIndex.value])

  function isChinese(text: string): boolean {
    return /[\u4E00-\u9FA5]/.test(text)
  }

  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // @ts-expect-error idk
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function generateOptions() {
    if (!data.value || !currentQuestion.value) {
      currentOptions.value = []
      return
    }

    const question = currentQuestion.value
    const correct = question.correctAnswer
    const allOptions = data.value.options || []
    const targetShouldBeChinese = question.questionLang === 'ru'

    const relevantOptions = allOptions.filter((opt) => {
      if (opt === correct)
        return false

      const optIsChinese = isChinese(opt)
      return targetShouldBeChinese ? optIsChinese : !optIsChinese
    })

    const randomDistractors = shuffleArray(relevantOptions).slice(0, 2)

    if (randomDistractors.length < 2) {
      const remainingNeeded = 2 - randomDistractors.length
      const otherDistractors = allOptions
        .filter(opt => opt !== correct && !relevantOptions.includes(opt))
        .slice(0, remainingNeeded)
      randomDistractors.push(...otherDistractors)
    }

    currentOptions.value = shuffleArray([correct, ...randomDistractors])
  }

  function handleAnswer(option: string) {
    if (selectedOption.value || !currentQuestion.value)
      return

    selectedOption.value = option
    const isCorrect = option === currentQuestion.value.correctAnswer
    isSelectionCorrect.value = isCorrect

    if (isCorrect) {
      onCorrect()
    }
    else {
      onWrong()
    }

    setTimeout(() => {
      next()
    }, 800)
  }

  function next() {
    if (!data.value?.questions)
      return

    if (currentIndex.value < data.value.questions.length - 1) {
      currentIndex.value++
      resetState()
      generateOptions()
    }
    else {
      onComplete()
    }
  }

  function resetState() {
    selectedOption.value = null
    isSelectionCorrect.value = null
  }

  function resetStage() {
    currentIndex.value = 0
    resetState()
    generateOptions()
  }

  watch(data, () => {
    if (currentIndex.value === 0) {
      generateOptions()
    }
  }, { immediate: true })

  return {
    currentIndex,
    currentQuestion,
    currentOptions,
    selectedOption,
    isSelectionCorrect,
    handleAnswer,
    resetStage,
  }
}
