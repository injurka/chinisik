// composables/use-image-selection.ts
import { storeToRefs } from 'pinia'
import { useToonManuallyStore } from '../store'

function useImageSelection() { // Убираем параметр image
  const store = useToonManuallyStore()
  const { selectedArea, isSelecting, uploadedImage } = storeToRefs(store) // Добавляем uploadedImage

  // --- State -------------------------------------------------------------------
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctxRef = ref<CanvasRenderingContext2D | null>(null)
  const originalImageRef = ref<HTMLImageElement | null>(null)

  const selectionStart = ref<{ x: number, y: number } | null>(null)
  const selectionEnd = ref<{ x: number, y: number } | null>(null)
  const currentSelectionRect = ref<{ x: number, y: number, width: number, height: number } | null>(null)
  const extractedSnippetSrc = ref<string | null>(null)

  // --- Computed Properties ---------------------------------------------------
  const computedStyles = computed(() => {
    if (typeof window !== 'undefined' && canvasRef.value) {
      return getComputedStyle(canvasRef.value)
    }
    return null
  })

  // --- Canvas and Image Handling ---------------------------------------------
  const resetSelection = () => {
    store.clearSelectedArea()
    store.isSelecting = false
    currentSelectionRect.value = null
    extractedSnippetSrc.value = null
    redrawFullCanvas()
  }

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

  async function drawImageOnCanvas(imageSrc: string | null = null) {
    if (!canvasRef.value)
      return

    // Используем uploadedImage из store, если imageSrc не передан
    const imageToUse = imageSrc || uploadedImage.value

    extractedSnippetSrc.value = null
    currentSelectionRect.value = null

    const canvas = canvasRef.value
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }
    ctxRef.value = ctx
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!imageToUse) {
      ctx.fillStyle = 'lightgrey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText('No image selected', canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas()
      return
    }

    try {
      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const imageElement = new Image()
        imageElement.crossOrigin = 'anonymous'
        imageElement.onload = () => resolve(imageElement)
        imageElement.onerror = err => reject(err)
        imageElement.src = imageToUse
      })

      originalImageRef.value = img
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      redrawFullCanvas()
    }
    catch (error) {
      console.error('Failed to load image:', imageToUse, error)
      ctx.fillStyle = 'grey'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.font = `${Math.min(canvas.width, canvas.height) * 0.05}px Arial`
      ctx.fillText(`Error loading image`, canvas.width / 2, canvas.height / 2)
      originalImageRef.value = null
      redrawFullCanvas()
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
    }

    const canvasRect = canvas.getBoundingClientRect()
    const scaleFactor = canvas.width > 0 && canvasRect.width > 0 ? canvas.width / canvasRect.width : 1

    // Рисуем выделенную область из store
    if (selectedArea.value) {
      ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-action-color').trim() ?? 'blue'
      ctx.fillStyle = 'rgba(0, 100, 255, 0.2)'
      ctx.lineWidth = 2 * scaleFactor
      const { x, y, width, height } = selectedArea.value
      ctx.fillRect(x, y, width, height)
      ctx.strokeRect(x, y, width, height)
    }
    // Рисуем текущее выделение
    else if (currentSelectionRect.value) {
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
    if (!canvasRef.value)
      return

    resetSelection()
    const coords = getCanvasCoordinates(event)

    store.isSelecting = true
    selectionStart.value = coords
    selectionEnd.value = coords
    currentSelectionRect.value = { x: coords.x, y: coords.y, width: 0, height: 0 }
    extractedSnippetSrc.value = null

    redrawFullCanvas()
  }

  function handlePointerMove(event: PointerEvent) {
    if (!canvasRef.value)
      return
    const coords = getCanvasCoordinates(event)

    if (isSelecting.value && selectionStart.value) {
      selectionEnd.value = coords
      const x = Math.min(selectionStart.value.x, selectionEnd.value.x)
      const y = Math.min(selectionStart.value.y, selectionEnd.value.y)
      const width = Math.abs(selectionStart.value.x - selectionEnd.value.x)
      const height = Math.abs(selectionStart.value.y - selectionEnd.value.y)
      currentSelectionRect.value = { x, y, width, height }
      redrawFullCanvas()
      canvasRef.value.style.cursor = 'crosshair'
    }
  }

  function handlePointerUp() {
    if (!canvasRef.value)
      return

    if (isSelecting.value && currentSelectionRect.value && currentSelectionRect.value.width > 5 && currentSelectionRect.value.height > 5) {
      if (!originalImageRef.value) {
        store.isSelecting = false
        currentSelectionRect.value = null
        redrawFullCanvas()
        return
      }

      // Сохраняем выделенную область в store
      store.setSelectedArea(currentSelectionRect.value)
      extractSelectionAndCreateArea()
    }

    store.isSelecting = false
    selectionStart.value = null
    selectionEnd.value = null
    currentSelectionRect.value = null

    redrawFullCanvas()
  }

  function handlePointerLeave() {
    if (canvasRef.value)
      canvasRef.value.style.cursor = 'default'

    if (isSelecting.value) {
      store.isSelecting = false
      selectionStart.value = null
      selectionEnd.value = null
      currentSelectionRect.value = null
      redrawFullCanvas()
    }
  }

  function extractSelectionAndCreateArea() {
    if (!canvasRef.value || !selectedArea.value || !originalImageRef.value)
      return

    const { x, y, width, height } = selectedArea.value
    if (width <= 0 || height <= 0) {
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
  }

  // --- Other functions

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        resetSelection()
        event.preventDefault()
        break

      case 'Delete':
      case 'Backspace':
        if (selectedArea.value) {
          resetSelection()
          event.preventDefault()
        }
        break

      case 'Enter':
        if (selectedArea.value) {
          event.preventDefault()
          store.translateSelectedArea()
        }
        break
    }
  }

  const setupListeners = () => {
    document.addEventListener('keydown', handleKeydown)
  }

  const cleanupListeners = () => {
    document.removeEventListener('keydown', handleKeydown)
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
      await drawImageOnCanvas() // Убираем параметр, будет использоваться uploadedImage из store
    }
  }

  // Следим за изменениями uploadedImage в store
  watch(uploadedImage, async (newImage) => {
    if (newImage) {
      await nextTick()
      await drawImageOnCanvas(newImage)
    }
  })

  // Следим за изменениями selectedArea в store
  watch(selectedArea, () => {
    redrawFullCanvas()
  })

  return {
    isSelecting,
    selectedArea,
    canvasRef,
    extractedSnippetSrc,

    resetSelection,
    setupListeners,
    cleanupListeners,

    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    initCanvas,
    redrawFullCanvas,
  }
}

export { useImageSelection }
