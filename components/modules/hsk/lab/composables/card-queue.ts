function useCardQueue(initialWords: HieroglyphHsk[]) {
  const queue = ref([...initialWords])
  const currentCard = computed(() => queue.value[0])

  function markAsKnown() {
    queue.value.shift()
  }

  function markForRepeat() {
    const card = queue.value.shift()
    if (card)
      queue.value.push(card)
  }

  function resetQueue() {
    queue.value = [...initialWords]
  }

  return {
    queue,
    currentCard,
    markAsKnown,
    markForRepeat,
    resetQueue,
  }
}

export { useCardQueue }
