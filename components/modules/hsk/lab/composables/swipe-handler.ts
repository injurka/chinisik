import { computed, onUnmounted, ref } from 'vue'

type SwipeDirection = 'left' | 'right' | null
interface SwipeCallbacks {
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

function useSwipeHandler({ onSwipeLeft, onSwipeRight }: SwipeCallbacks) {
  const startX = ref(0)
  const currentX = ref(0)
  const isSwiping = ref(false)
  const swipeDirection = ref<SwipeDirection>(null)

  const cardStyle = computed(() => {
    if (!isSwiping.value)
      return {}

    const deltaX = currentX.value - startX.value
    const rotate = deltaX / 20
    const opacity = Math.max(1 - Math.abs(deltaX) / 500, 0.5)

    return {
      transform: `translateX(${deltaX}px) rotate(${rotate}deg)`,
      opacity,
      transition: isSwiping.value ? 'none' : 'all 0.3s ease',
    }
  })

  function handleStart(clientX: number) {
    startX.value = clientX
    currentX.value = clientX
    isSwiping.value = true
    swipeDirection.value = null
  }

  function handleMove(clientX: number) {
    if (!isSwiping.value)
      return

    currentX.value = clientX
    const deltaX = currentX.value - startX.value
    swipeDirection.value = deltaX > 0 ? 'right' : 'left'
  }

  function resetSwipe() {
    isSwiping.value = false
    startX.value = 0
    currentX.value = 0
    swipeDirection.value = null
  }

  function handleEnd() {
    if (!isSwiping.value)
      return

    const deltaX = currentX.value - startX.value
    if (Math.abs(deltaX) > 100) {
      deltaX > 0 ? onSwipeRight() : onSwipeLeft()
    }

    resetSwipe()
  }

  // Touch handlers
  function onTouchStart(e: TouchEvent) {
    handleStart(e.touches[0].clientX)
  }

  function onTouchMove(e: TouchEvent) {
    handleMove(e.touches[0].clientX)
  }

  // Mouse handlers
  function onMouseMove(e: MouseEvent) {
    handleMove(e.clientX)
  }

  function onMouseUp() {
    handleEnd()
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  function onMouseDown(e: MouseEvent) {
    handleStart(e.clientX)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    const cancelHandler = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
    document.addEventListener('mouseleave', cancelHandler)
    onUnmounted(() => {
      document.removeEventListener('mouseleave', cancelHandler)
    })
  }

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  })

  return {
    cardStyle,
    swipeDirection,
    isSwiping,
    swipeHandlers: {
      touchstart: onTouchStart,
      touchmove: onTouchMove,
      touchend: handleEnd,
      mousedown: onMouseDown,
    },
  }
}

export { useSwipeHandler }
