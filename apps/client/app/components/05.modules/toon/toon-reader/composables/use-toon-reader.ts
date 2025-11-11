import type { HighlightArea, ToonReaderMode } from '../types'

function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

export function useToonReader(
  initialImages: Ref<string[]>,
  initialAreas: Ref<HighlightArea[]>,
  mode: Ref<ToonReaderMode>,
) {
  // --- State -------------------------------------------------------------------
  const manhwaImages = computed(() => initialImages.value)
  const currentPageId = ref<string>('0')
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctxRef = ref<CanvasRenderingContext2D | null>(null)
  const originalImageRef = ref<HTMLImageElement | null>(null)

  const areas = ref<HighlightArea[]>([...initialAreas.value])
  const hoveredAreaId = ref<string | null>(null)
  const selectedAreaForEdit = ref<HighlightArea | null>(null)

  const isSelecting = ref(false)
  const selectionStart = ref<{ x: number, y: number } | null>(null)
  const selectionEnd = ref<{ x: number, y: number } | null>(null)
  const currentSelectionRect = ref<{ x: number, y: number, width: number, height: number } | null>(null)
  const extractedSnippetSrc = ref<string | null>(null)
  const isLoadingImage = ref(false)

  // --- Computed Properties ---------------------------------------------------
  const totalPages = computed(() => manhwaImages.value.length)
  const currentImageSrc = computed(() => {
    // if (totalPages.value > 0 && currentPageId.value < totalPages.value && currentPageId.value >= 0) {
    return manhwaImages.value[+currentPageId.value]
    // }
    return null
  })
  const computedStyles = computed(() => {
    if (typeof window !== 'undefined' && canvasRef.value) {
      return getComputedStyle(canvasRef.value)
    }
    return null
  })

  const areasOnCurrentPage = computed(() => {
    return areas.value.filter(area => area.pageId === currentPageId.value)
  })

  // const canGoPrev = computed(() => currentPageId.value > 0)
  const canGoPrev = computed(() => true)
  // const canGoNext = computed(() => currentPageId.value < totalPages.value - 1)
  const canGoNext = computed(() => true)

  // --- Canvas and Image Handling ---------------------------------------------
  function getCanvasCoordinates(event: MouseEvent | PointerEvent): { x: number, y: number } {
    if (!canvasRef.value)
      return { x: 0, y: 0 }
    const rect = canvasRef.value.getBoundingClientRect()
    const scaleX = canvasRef.value.width / rect.width
    const scaleY = canvasRef.value.height / rect.height
    return {
      x: (event.clientX - rect.left) * scaleX,
      y: (event.clientY - rect.top) * scaleY,
    }
  }

  async function drawImageOnCanvas(imageSrc: string | null) {
    if (!canvasRef.value)
      return
    isLoadingImage.value = true
    extractedSnippetSrc.value = null
    currentSelectionRect.value = null
    hoveredAreaId.value = null
    selectedAreaForEdit.value = null

    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      isLoadingImage.value = false
      return
    }
    ctxRef.value = ctx
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!imageSrc) {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('No image selected', canvas.width / 2, canvas.height / 2)
      isLoadingImage.value = false
      originalImageRef.value = null
      redrawFullCanvas() // Перерисовать, чтобы показать пустой холст с областями, если они есть на этой странице
      return
    }

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const imageElement = new Image()
        imageElement.crossOrigin = 'anonymous'
        imageElement.onload = () => resolve(imageElement)
        imageElement.onerror = err => reject(err)
        imageElement.src = imageSrc
      })

      originalImageRef.value = img
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      redrawFullCanvas()
    }
    catch (error) {
      console.error('Failed to load image:', imageSrc, error)
      ctx.fillStyle = 'grey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText(`Error loading: ${imageSrc.split('/').pop()}`, canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas() // Показать области на сером фоне
    }
    finally {
      isLoadingImage.value = false
    }
  }

  function redrawFullCanvas() {
    if (!ctxRef.value || !canvasRef.value)
      return

    const ctx = ctxRef.value
    const canvas = canvasRef.value

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (originalImageRef.value) {
      ctx.drawImage(originalImageRef.value, 0, 0, canvas.width, canvas.height)
    }
    else {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('Image unavailable', canvas.width / 2, canvas.height / 2)
      // Не выходим, т.к. области все равно нужно нарисовать
    }

    const canvasRect = canvas.getBoundingClientRect()
    // Используем canvas.width, а не rect.width, т.к. rect.width может быть 0 при скрытом canvas
    const scaleFactor = canvas.width > 0 && canvasRect.width > 0 ? canvas.width / canvasRect.width : 1

    // Отрисовка сохраненных областей
    areasOnCurrentPage.value.forEach((area) => {
      const isHovered = area.id === hoveredAreaId.value && mode.value === 'view'
      const isSelectedForEditUI = area.id === selectedAreaForEdit.value?.id && mode.value === 'edit'

      ctx.strokeStyle = isSelectedForEditUI
        ? 'rgba(0, 0, 255, 0.9)'
        : (isHovered
            ? 'rgba(0, 255, 0, 0.7)'
            : mode.value === 'edit'
              ? 'rgba(255, 215, 0, 0.6)'
              : 'transparent')
      ctx.fillStyle = isSelectedForEditUI
        ? 'rgba(0, 0, 255, 0.2)'
        : (isHovered
            ? 'rgba(0, 255, 0, 0.15)'
            : mode.value === 'edit'
              ? 'rgba(255, 215, 0, 0.1)'
              : 'transparent')

      ctx.lineWidth = (isSelectedForEditUI || isHovered ? 3 : 2) * scaleFactor

      // Показываем заливку в режиме view, или если область выбрана для редактирования, или если у области есть текст
      if (mode.value === 'view' || isSelectedForEditUI || (mode.value === 'edit' && area.text)) {
        ctx.fillRect(area.rect.x, area.rect.y, area.rect.width, area.rect.height)
      }
      ctx.strokeRect(area.rect.x, area.rect.y, area.rect.width, area.rect.height)
    })

    // Отрисовка текущего нового выделения в режиме 'edit'
    if (mode.value === 'edit' && currentSelectionRect.value) {
      ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-action-color').trim() ?? 'red'
      ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'
      ctx.lineWidth = 2 * scaleFactor
      const { x, y, width, height } = currentSelectionRect.value
      ctx.fillRect(x, y, width, height)
      ctx.strokeRect(x, y, width, height)
    }
  }

  // --- Event Handlers (Mouse/Pointer) ----------------------------------------
  function handlePointerDown(event: PointerEvent) {
    if (isLoadingImage.value || !canvasRef.value)
      return

    const coords = getCanvasCoordinates(event)

    if (mode.value === 'edit') {
      const clickedArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )

      if (clickedArea) {
        selectedAreaForEdit.value = clickedArea
        isSelecting.value = false
        currentSelectionRect.value = null
        extractedSnippetSrc.value = null
      }
      else {
        if (!originalImageRef.value) { // Запрещаем создавать выделение, если нет основного изображения
          selectedAreaForEdit.value = null // Сбросить, если клик был вне областей
          isSelecting.value = false
          return
        }
        selectedAreaForEdit.value = null
        isSelecting.value = true
        selectionStart.value = coords
        selectionEnd.value = coords
        currentSelectionRect.value = { x: coords.x, y: coords.y, width: 0, height: 0 } // Инициализация
        extractedSnippetSrc.value = null
      }
    }
    else if (mode.value === 'view') {
      // В режиме просмотра клик по области также выбирает ее для отображения информации
      const clickedArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      if (clickedArea) {
        selectedAreaForEdit.value = clickedArea // Переиспользуем для передачи в родительский компонент
      }
      else {
        selectedAreaForEdit.value = null // Сброс, если клик мимо
      }
    }
    redrawFullCanvas()
  }

  function handlePointerMove(event: PointerEvent) {
    if (isLoadingImage.value || !canvasRef.value)
      return
    const coords = getCanvasCoordinates(event)

    if (mode.value === 'view') {
      const foundArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      const newHoverId = foundArea ? foundArea.id : null
      if (hoveredAreaId.value !== newHoverId) {
        hoveredAreaId.value = newHoverId
        redrawFullCanvas()
      }
      canvasRef.value.style.cursor = foundArea ? 'pointer' : 'default'
    }
    else if (mode.value === 'edit' && isSelecting.value && selectionStart.value) {
      if (!originalImageRef.value)
        return // Не позволяем рисовать выделение без основного изображения

      selectionEnd.value = coords
      const x = Math.min(selectionStart.value.x, selectionEnd.value.x)
      const y = Math.min(selectionStart.value.y, selectionEnd.value.y)
      const width = Math.abs(selectionStart.value.x - selectionEnd.value.x)
      const height = Math.abs(selectionStart.value.y - selectionEnd.value.y)
      currentSelectionRect.value = { x, y, width, height }
      redrawFullCanvas()
      canvasRef.value.style.cursor = 'crosshair'
    }
    else if (mode.value === 'edit' && !isSelecting.value) {
      const foundArea = areasOnCurrentPage.value.find(area =>
        coords.x >= area.rect.x && coords.x <= area.rect.x + area.rect.width
        && coords.y >= area.rect.y && coords.y <= area.rect.y + area.rect.height,
      )
      canvasRef.value.style.cursor = foundArea ? 'grab' : 'crosshair'
    }
  }

  function handlePointerUp() {
    if (isLoadingImage.value || !canvasRef.value)
      return

    if (mode.value === 'edit') {
      if (isSelecting.value && currentSelectionRect.value && currentSelectionRect.value.width > 5 && currentSelectionRect.value.height > 5) {
        if (!originalImageRef.value) {
          isSelecting.value = false
          currentSelectionRect.value = null
          redrawFullCanvas()
          return
        }
        extractSelectionAndCreateArea()
      }
      else if (!isSelecting.value && selectedAreaForEdit.value) {
        // Клик по существующей области уже обработан в pointerdown, ничего не делаем
      }
      else {
        // Сброс, если выделение слишком маленькое или не было начато
        currentSelectionRect.value = null
      }
      isSelecting.value = false // Завершаем процесс выделения в любом случае
      selectionStart.value = null
      selectionEnd.value = null
    }
    // В режиме 'view' клик уже обработан в handlePointerDown
    redrawFullCanvas()
  }

  function handlePointerLeave() {
    if (mode.value === 'view' && hoveredAreaId.value !== null) {
      hoveredAreaId.value = null
      redrawFullCanvas()
    }
    if (canvasRef.value)
      canvasRef.value.style.cursor = 'default'

    if (mode.value === 'edit' && isSelecting.value) {
      isSelecting.value = false
      selectionStart.value = null
      selectionEnd.value = null
      currentSelectionRect.value = null
      redrawFullCanvas()
    }
  }

  function extractSelectionAndCreateArea() {
    // originalImageRef.value уже проверен в handlePointerUp перед вызовом этой функции
    if (!canvasRef.value || !currentSelectionRect.value || !originalImageRef.value)
      return

    const { x, y, width, height } = currentSelectionRect.value
    if (width <= 0 || height <= 0) {
      currentSelectionRect.value = null
      return
    }

    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = width
    tempCanvas.height = height
    const tempCtx = tempCanvas.getContext('2d')

    if (!tempCtx)
      return

    tempCtx.drawImage(
      originalImageRef.value,
      x,
      y,
      width,
      height,
      0,
      0,
      width,
      height,
    )
    const snippetDataUrl = tempCanvas.toDataURL('image/png')
    extractedSnippetSrc.value = snippetDataUrl

    const newArea: HighlightArea = {
      id: generateId(),
      pageId: currentPageId.value,
      rect: { ...currentSelectionRect.value },
      text: '',
    } as HighlightArea
    areas.value.push(newArea)
    selectedAreaForEdit.value = newArea
    currentSelectionRect.value = null
    // redrawFullCanvas() // Будет вызван из handlePointerUp
  }

  // --- Area Management ------------------------------------------------------
  function updateAreaText(areaId: string, newText: string) {
    const area = areas.value.find(a => a.id === areaId)
    if (area) {
      area.text = newText
      redrawFullCanvas()
    }
  }

  function deleteArea(areaId: string) {
    areas.value = areas.value.filter(a => a.id !== areaId)
    if (selectedAreaForEdit.value?.id === areaId) {
      selectedAreaForEdit.value = null
    }
    redrawFullCanvas()
  }

  function clearSelectionForEdit() {
    selectedAreaForEdit.value = null
    extractedSnippetSrc.value = null
    redrawFullCanvas()
  }

  // --- Pagination -----------------------------------------------------------
  function nextPage() {
    if (canGoNext.value) {
      // currentPageId.value++
    }
  }

  function prevPage() {
    if (canGoPrev.value) {
      // currentPageId.value--
    }
  }

  // --- Initialization and Watchers ------------------------------------------
  async function initCanvas() {
    await nextTick()
    if (canvasRef.value) {
      if (!canvasRef.value.width || !canvasRef.value.height) {
        const parent = canvasRef.value.parentElement?.parentElement
        if (parent) {
          const rect = parent.getBoundingClientRect()
          canvasRef.value.width = rect.width > 0 ? rect.width : 800
          canvasRef.value.height = rect.height > 0 ? rect.height : 600
        }
        else {
          canvasRef.value.width = 800
          canvasRef.value.height = 600
        }
      }
      await drawImageOnCanvas(currentImageSrc.value!)
    }
  }

  watch(currentImageSrc, async (newSrc) => {
    await drawImageOnCanvas(newSrc!)
  })

  watch(initialImages, async () => {
    // currentPageId.value = 0
    await initCanvas()
  }, { deep: true })

  watch(initialAreas, (newAreas) => {
    areas.value = [...newAreas]
    redrawFullCanvas()
  }, { deep: true })

  watch(mode, () => {
    isSelecting.value = false
    selectionStart.value = null
    selectionEnd.value = null
    currentSelectionRect.value = null
    hoveredAreaId.value = null
    selectedAreaForEdit.value = null
    extractedSnippetSrc.value = null

    if (canvasRef.value) {
      canvasRef.value.style.cursor = mode.value === 'view' ? 'default' : 'crosshair'
    }

    redrawFullCanvas()
  })

  return {
    canvasRef,
    isLoadingImage,
    currentPageIndex: currentPageId,
    totalPages,
    currentImageSrc,
    areasOnCurrentPage,
    selectedAreaForEdit,
    extractedSnippetSrc,
    canGoPrev,
    canGoNext,
    hoveredAreaId,

    nextPage,
    prevPage,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    initCanvas,
    redrawFullCanvas,

    updateAreaText,
    deleteArea,
    clearSelectionForEdit,
  }
}
