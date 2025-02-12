function useCardQueue(initialWords: HieroglyphHsk[]) {
  const queue = ref(shuffle(initialWords))
  const currentCard = computed(() => queue.value[0])

  function shuffle(array: HieroglyphHsk[]) {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }

    return shuffledArray
  }

  function markAsKnown() {
    queue.value.shift()
  }

  function markForRepeat() {
    const card = queue.value.shift()
    if (card) {
      queue.value.push(card)
    }
  }

  function resetQueue() {
    queue.value = [...initialWords]
  }

  function shuffleQueue() {
    queue.value = shuffle(queue.value)
  }

  return {
    queue,
    currentCard,
    markAsKnown,
    markForRepeat,
    resetQueue,
    shuffleQueue,
  }
}

export { useCardQueue }
