<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

// --- Props ---
const props = defineProps<{
  targetCharacter?: string
}>()

const { isMobile } = useDevice()

// --- Refs ---
const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctxRef = ref<CanvasRenderingContext2D | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

// --- State ---
const isDrawing = ref(false)
const hasDrawing = ref(false)
const lastPos = reactive({ x: 0, y: 0 })
const lastTimestamp = ref(0)
const lastLineWidth = ref(5)
const showTargetOverlay = ref(false)
const canvasSize = reactive({ width: 400, height: 400 })

// --- State for Undo ---
const strokesHistory = ref<ImageData[]>([])

// --- Constants ---
const BASE_LINE_WIDTH = isMobile ? 10 : 15
const MAX_LINE_WIDTH = isMobile ? 15 : 25
const MIN_LINE_WIDTH = 2
const VELOCITY_FACTOR = 15
const GRID_COLOR = '#ddd'
const GRID_LINE_WIDTH = 0.5
const DEFAULT_TARGET_COLOR = 'rgba(150, 150, 150, 0.3)'
const DEFAULT_TARGET_FONT_FAMILY = 'MapleMono-CN'

// --- Computed ---
const computedStyles = computed(() => {
  if (typeof window !== 'undefined' && containerRef.value)
    return getComputedStyle(containerRef.value)
  return null
})

const targetCharacterStyle = computed(() => ({
  color: computedStyles.value?.getPropertyValue('--fg-accent-color').trim() || DEFAULT_TARGET_COLOR,
  fontFamily: computedStyles.value?.getPropertyValue('--font-family-cn').trim() || DEFAULT_TARGET_FONT_FAMILY,
}))

// --- Canvas Setup ---
function setupCanvas() {
  const ctx = ctxRef.value
  if (!ctx)
    return
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = computedStyles.value?.getPropertyValue('--fg-primary-color').trim() || '#000000'
  ctx.fillStyle = computedStyles.value?.getPropertyValue('--fg-primary-color').trim() || '#000000'
  ctx.lineWidth = lastLineWidth.value
}

// --- Grid Drawing ---
function drawGridOnContext(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.save()
  ctx.strokeStyle = GRID_COLOR
  ctx.lineWidth = GRID_LINE_WIDTH
  ctx.beginPath()
  ctx.moveTo(1, 1); ctx.lineTo(w - 1, 1); ctx.lineTo(w - 1, h - 1); ctx.lineTo(1, h - 1); ctx.closePath()
  ctx.moveTo(w / 2, 1); ctx.lineTo(w / 2, h - 1)
  ctx.moveTo(1, h / 2); ctx.lineTo(w - 1, h / 2)
  ctx.moveTo(1, 1); ctx.lineTo(w - 1, h - 1)
  ctx.moveTo(w - 1, 1); ctx.lineTo(1, h - 1)
  ctx.stroke()
  ctx.restore()
}

// --- Coordinate Helper ---
function getEventCoordinates(event: MouseEvent | TouchEvent): { x: number, y: number } | null {
  if (!canvasRef.value)
    return null
  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  let clientX: number, clientY: number

  if (event instanceof MouseEvent) {
    clientX = event.clientX
    clientY = event.clientY
  }
  else if (event.touches && event.touches.length > 0) {
    clientX = event.touches[0]!.clientX
    clientY = event.touches[0]!.clientY
  }
  else { return null }

  return { x: clientX - rect.left, y: clientY - rect.top }
}

// --- Drawing Logic ---
function saveState() {
  if (!ctxRef.value || !canvasRef.value)
    return
  const imageData = ctxRef.value.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
  strokesHistory.value.push(imageData)
}

function startDrawing(event: MouseEvent | TouchEvent) {
  const coords = getEventCoordinates(event)
  if (!coords || !ctxRef.value)
    return

  saveState() // Сохраняем состояние перед началом нового штриха

  isDrawing.value = true
  hasDrawing.value = true
  lastPos.x = coords.x
  lastPos.y = coords.y
  lastTimestamp.value = performance.now()
  lastLineWidth.value = BASE_LINE_WIDTH

  setupCanvas()
  ctxRef.value.beginPath()
  ctxRef.value.moveTo(lastPos.x, lastPos.y)
}

function draw(event: MouseEvent | TouchEvent) {
  if (!isDrawing.value || !ctxRef.value)
    return

  const coords = getEventCoordinates(event)
  if (!coords)
    return

  const currentTimestamp = performance.now()
  const deltaTime = Math.max(1, currentTimestamp - lastTimestamp.value)
  const deltaX = coords.x - lastPos.x
  const deltaY = coords.y - lastPos.y
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)
  const velocity = distance / deltaTime
  const targetLineWidth = BASE_LINE_WIDTH / (1 + velocity * (VELOCITY_FACTOR / 100))
  let newLineWidth = Math.max(MIN_LINE_WIDTH, Math.min(MAX_LINE_WIDTH, targetLineWidth))
  newLineWidth = lastLineWidth.value * 0.8 + newLineWidth * 0.2

  ctxRef.value.lineWidth = newLineWidth
  ctxRef.value.lineTo(coords.x, coords.y)
  ctxRef.value.stroke()

  lastPos.x = coords.x
  lastPos.y = coords.y
  lastTimestamp.value = currentTimestamp
  lastLineWidth.value = newLineWidth

  ctxRef.value.beginPath()
  ctxRef.value.moveTo(lastPos.x, lastPos.y)
}

function stopDrawing() {
  if (!isDrawing.value || !ctxRef.value)
    return
  isDrawing.value = false
  ctxRef.value.beginPath()
}

// --- Canvas Actions ---
function clearCanvas() {
  const ctx = ctxRef.value
  const canvas = canvasRef.value
  if (!ctx || !canvas)
    return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawGridOnContext(ctx, canvas.width, canvas.height)
  setupCanvas()

  strokesHistory.value = []

  hasDrawing.value = false
  isDrawing.value = false
  showTargetOverlay.value = false
}

function undoLastStroke() {
  if (strokesHistory.value.length > 0) {
    const ctx = ctxRef.value
    const canvas = canvasRef.value
    if (!ctx || !canvas)
      return

    // Очищаем холст и рисуем сетку
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawGridOnContext(ctx, canvas.width, canvas.height)

    // Восстанавливаем предыдущее состояние
    const lastState = strokesHistory.value.pop()
    if (lastState) {
      ctx.putImageData(lastState, 0, 0)
    }

    // Если история пуста, значит рисунка нет
    if (strokesHistory.value.length === 1) {
      hasDrawing.value = false
    }
  }
}

// --- Get Data ---
function isCanvasEmpty(): boolean {
  return !hasDrawing.value
}

/**
 * Улучшенная функция для получения изображения.
 * Находит границы нарисованного, обрезает пустоту, центрирует,
 * добавляет отступы и масштабирует для лучшего распознавания.
 */
function getImageDataURL(): string | null {
  const canvas = canvasRef.value
  const ctx = ctxRef.value
  if (!canvas || !ctx || isCanvasEmpty()) {
    return null
  }

  // 1. Находим границы рисунка (bounding box)
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data
  let minX = canvas.width; let minY = canvas.height; let maxX = 0; let maxY = 0
  let foundPixel = false

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      // Ищем непрозрачные пиксели (альфа-канал > 0)
      const alphaIndex = (y * canvas.width + x) * 4 + 3
      if (data[alphaIndex]! > 0) {
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
        foundPixel = true
      }
    }
  }

  if (!foundPixel)
    return null

  // 2. Создаем временный холст для подготовки изображения
  const TARGET_SIZE = 256 // Целевой размер изображения
  const PADDING = 30 // Отступ вокруг иероглифа
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = TARGET_SIZE
  tempCanvas.height = TARGET_SIZE
  const tempCtx = tempCanvas.getContext('2d')

  if (!tempCtx)
    return null

  // 3. Заливаем белым фоном
  tempCtx.fillStyle = 'white'
  tempCtx.fillRect(0, 0, TARGET_SIZE, TARGET_SIZE)

  // 4. Масштабируем и центрируем обрезанный иероглиф
  const charWidth = maxX - minX
  const charHeight = maxY - minY
  const scale = Math.min((TARGET_SIZE - PADDING * 2) / charWidth, (TARGET_SIZE - PADDING * 2) / charHeight)
  const destWidth = charWidth * scale
  const destHeight = charHeight * scale
  const destX = (TARGET_SIZE - destWidth) / 2
  const destY = (TARGET_SIZE - destHeight) / 2

  // Делаем линии толще для лучшего распознавания
  tempCtx.filter = 'blur(1px) contrast(200%)'
  tempCtx.drawImage(
    canvas,
    minX, // Обрезаем по X
    minY, // Обрезаем по Y
    charWidth, // Ширина обрезанной области
    charHeight, // Высота обрезанной области
    destX, // Целевая позиция X
    destY, // Целевая позиция Y
    destWidth, // Целевая ширина
    destHeight, // Целевая высота
  )

  return tempCanvas.toDataURL('image/png')
}

function showTargetCharacter() {
  if (props.targetCharacter)
    showTargetOverlay.value = true
}

function hideTargetCharacter() {
  showTargetOverlay.value = false
}

// --- Lifecycle Hooks ---
onMounted(() => {
  if (!canvasRef.value || !containerRef.value)
    return
  const canvas = canvasRef.value
  const context = canvas.getContext('2d', { willReadFrequently: true })

  if (!context) {
    console.error('Не удалось получить 2D контекст для canvas')
    return
  }
  ctxRef.value = context

  const container = containerRef.value
  const width = container.clientWidth > 0 ? container.clientWidth : 400
  canvas.width = width
  canvas.height = width
  canvasSize.width = width
  canvasSize.height = width

  setupCanvas()
  drawGridOnContext(ctxRef.value, canvasSize.width, canvasSize.height)
  // Сохраняем начальное чистое состояние
  saveState()
})

defineExpose({
  clearCanvas,
  isCanvasEmpty,
  showTargetCharacter,
  hideTargetCharacter,
  showTargetOverlay,
  getImageDataURL,
  undoLastStroke,
})
</script>

<template>
  <div ref="containerRef" class="hanzi-drawing-board-container">
    <canvas
      ref="canvasRef"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart.prevent="startDrawing"
      @touchmove.prevent="draw"
      @touchend.prevent="stopDrawing"
    />
    <div
      v-if="showTargetOverlay && props.targetCharacter"
      class="target-character-overlay"
      :style="`font-size: calc(${canvasSize.width} * 0.8 * 1px);`"
    >
      {{ props.targetCharacter }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Стили остаются без изменений */
.hanzi-drawing-board-container {
  aspect-ratio: 1 / 1;
  border: 2px solid var(--border-secondary-color);
  position: relative;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: crosshair;
  background-color: var(--bg-primary-color);
  touch-action: none;
}

.target-character-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--fg-accent-color);
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  font-family: 'MapleMono-CN';
}
</style>
