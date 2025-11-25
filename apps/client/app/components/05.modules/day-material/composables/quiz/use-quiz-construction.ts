import type { Ref } from 'vue'

interface ConstructionItem {
  sentenceRu?: string
  proverbRu?: string
  correctOrder: string[]
  characters: string[]
}

interface UseQuizConstructionProps {
  items: Ref<ConstructionItem[]>
  onComplete: () => void
  onCorrect: () => void
  onWrong: () => void
}

export interface QuizCharItem {
  id: string
  char: string
  isUsed: boolean
}

export function useQuizConstruction({ items, onComplete, onCorrect, onWrong }: UseQuizConstructionProps) {
  const currentIndex = ref(0)
  const selectedChars = ref<QuizCharItem[]>([])
  const availableChars = ref<QuizCharItem[]>([])

  const isErrorShake = ref(false)
  const isFailed = ref(false)
  // Новое состояние: проверен ли ответ
  const isChecked = ref(false)

  const currentTask = computed(() => items.value?.[currentIndex.value])

  const questionText = computed(() => {
    if (!currentTask.value)
      return ''
    return currentTask.value.sentenceRu || currentTask.value.proverbRu || ''
  })

  const correctSentence = computed(() => {
    if (!currentTask.value)
      return ''
    return currentTask.value.correctOrder.join('')
  })

  function initTask() {
    if (!currentTask.value)
      return

    const charsWithIds = currentTask.value.characters.map((char, idx) => ({
      id: `${char}-${idx}-${Date.now()}`,
      char,
      isUsed: false,
    }))

    availableChars.value = charsWithIds.sort(() => Math.random() - 0.5)
    selectedChars.value = []
    isErrorShake.value = false
    isFailed.value = false
    isChecked.value = false
  }

  function selectChar(item: QuizCharItem) {
    if (isFailed.value || item.isUsed || isChecked.value)
      return

    item.isUsed = true
    selectedChars.value.push(item)
    isErrorShake.value = false
  }

  function unselectChar(item: QuizCharItem) {
    if (isChecked.value)
      return

    const index = selectedChars.value.findIndex(c => c.id === item.id)
    if (index !== -1) {
      selectedChars.value.splice(index, 1)
    }

    const poolItem = availableChars.value.find(c => c.id === item.id)
    if (poolItem) {
      poolItem.isUsed = false
    }

    isErrorShake.value = false
  }

  function checkAnswer() {
    if (!currentTask.value || isChecked.value)
      return

    isChecked.value = true

    const userString = selectedChars.value.map(i => i.char).join('')
    const correctString = currentTask.value.correctOrder.join('')

    if (userString === correctString) {
      onCorrect()
    }
    else {
      onWrong()
      triggerFail()
    }
  }

  function triggerShake() {
    isErrorShake.value = true
    setTimeout(() => {
      isErrorShake.value = false
    }, 500)
  }

  function triggerFail() {
    isFailed.value = true
    triggerShake()
  }

  function nextTask() {
    if (currentIndex.value < items.value.length - 1) {
      currentIndex.value++
      initTask()
    }
    else {
      onComplete()
    }
  }

  function resetStage() {
    currentIndex.value = 0
    initTask()
  }

  watch(items, (newItems) => {
    if (newItems && newItems.length > 0) {
      initTask()
    }
  }, { immediate: true })

  return {
    currentIndex,
    currentTask,
    questionText,
    correctSentence,
    selectedChars,
    availableChars,
    isErrorShake,
    isFailed,
    isChecked,
    initTask,
    selectChar,
    unselectChar,
    checkAnswer,
    nextTask,
    resetStage,
  }
}
