/**
 * Composable для умного позиционирования всплывающих подсказок.
 * Вычисляет оптимальное положение, чтобы тултип не выходил за пределы контейнера или экрана.
 */
export function useTooltipPositioning() {
  const tooltipStyle = reactive({
    opacity: 0,
    top: '0px',
    left: '0px',
    transform: '',
  })

  /**
   * Вычисляет и применяет стили для позиционирования тултипа.
   * @param targetRect - BoundingClientRect элемента, к которому привязан тултип.
   * @param tooltipEl - DOM-элемент самого тултипа для получения его размеров.
   * @param containerEl - DOM-элемент контейнера, в пределах которого должен оставаться тултип.
   */
  async function calculatePosition(targetRect: DOMRect, tooltipEl: HTMLElement | null, containerEl?: HTMLElement | null) {
    tooltipStyle.opacity = 0

    await nextTick()

    if (!tooltipEl)
      return

    const tooltipRect = tooltipEl.getBoundingClientRect()
    const margin = 8

    // Определяем границы. Если контейнер предоставлен, используем его, иначе - viewport.
    const containerRect = containerEl
      ? containerEl.getBoundingClientRect()
      : {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth,
        width: window.innerWidth,
        height: window.innerHeight,
      }

    // Позиционирование по вертикали
    const spaceBelow = containerRect.bottom - targetRect.bottom
    const spaceAbove = targetRect.top - containerRect.top
    let top = 0
    let transformY = ''

    if (spaceBelow >= tooltipRect.height + margin) {
      // Достаточно места снизу
      top = targetRect.bottom + window.scrollY + margin
      transformY = 'translateY(0)'
    }
    else if (spaceAbove >= tooltipRect.height + margin) {
      // Достаточно места сверху
      top = targetRect.top + window.scrollY - margin
      transformY = 'translateY(-100%)'
    }
    else {
      // Недостаточно места ни сверху, ни снизу, выбираем где больше
      if (spaceBelow > spaceAbove) {
        top = targetRect.bottom + window.scrollY + margin
        transformY = 'translateY(0)'
      }
      else {
        top = targetRect.top + window.scrollY - margin
        transformY = 'translateY(-100%)'
      }
    }

    // Позиционирование по горизонтали
    const idealLeftCenter = targetRect.left + targetRect.width / 2
    let left = idealLeftCenter
    let transformX = 'translateX(-50%)'

    // Проверяем, не выходит ли за левую границу контейнера
    if (idealLeftCenter - tooltipRect.width / 2 < containerRect.left + margin) {
      left = containerRect.left + margin
      transformX = 'translateX(0)'
    }
    // Проверяем, не выходит ли за правую границу контейнера
    else if (idealLeftCenter + tooltipRect.width / 2 > containerRect.right - margin) {
      left = containerRect.right - margin
      transformX = 'translateX(-100%)'
    }

    tooltipStyle.top = `${top}px`
    tooltipStyle.left = `${left}px`
    tooltipStyle.transform = `${transformX} ${transformY}`
    tooltipStyle.opacity = 1
  }

  function hide() {
    tooltipStyle.opacity = 0
  }

  return {
    tooltipStyle,
    calculatePosition,
    hide,
  }
}
