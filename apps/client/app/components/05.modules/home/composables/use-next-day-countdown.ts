/**
 * Composable для таймера обратного отсчета до следующей полуночи по МСК.
 */
export function useNextDayCountdown() {
  const timeLeft = ref(0)
  let timerInterval: NodeJS.Timeout | null = null

  const hours = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60)).toString().padStart(2, '0'))
  const minutes = computed(() => Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'))
  const seconds = computed(() => Math.floor((timeLeft.value % (1000 * 60)) / 1000).toString().padStart(2, '0'))

  function updateTimer() {
    const now = new Date()
    // Получаем текущее время в таймзоне 'Europe/Moscow'
    const moscowTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }))

    const tomorrowMoscow = new Date(moscowTime)
    tomorrowMoscow.setDate(tomorrowMoscow.getDate() + 1)
    tomorrowMoscow.setHours(0, 0, 0, 0)

    timeLeft.value = tomorrowMoscow.getTime() - moscowTime.getTime()
  }

  function start() {
    updateTimer()
    if (!timerInterval) {
      timerInterval = setInterval(updateTimer, 1000)
    }
  }

  function stop() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  onMounted(start)
  onUnmounted(stop)

  return {
    hours,
    minutes,
    seconds,
  }
}
