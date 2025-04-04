<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

// --- Props ---
const props = defineProps<{
  targetCharacter?: string
}>()

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

// --- Constants ---
const BASE_LINE_WIDTH = 15
const MAX_LINE_WIDTH = 20
const MIN_LINE_WIDTH = 2
const VELOCITY_FACTOR = 15
const GRID_COLOR = '#ddd'
const GRID_LINE_WIDTH = 0.5
const DEFAULT_TARGET_COLOR = 'rgba(150, 150, 150, 0.3)'
const DEFAULT_TARGET_FONT_FAMILY = 'MapleMono-CN'

// --- Computed ---
const computedStyles = computed(() => {
  if (typeof window !== 'undefined' && containerRef.value) {
    return getComputedStyle(containerRef.value)
  }
  return null
})

const targetCharacterColor = computed(() => {
  return computedStyles.value?.getPropertyValue('--fg-accent-color').trim() || DEFAULT_TARGET_COLOR
})

const targetCharacterFontFamily = computed(() => {
  return computedStyles.value?.getPropertyValue('--font-family-cn').trim() || DEFAULT_TARGET_FONT_FAMILY
})

// --- Lifecycle Hooks ---
onMounted(() => {
  if (!canvasRef.value || !containerRef.value)
    return
  const canvas = canvasRef.value
  const context = canvas.getContext('2d', {
    willReadFrequently: true,
  })

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
})

// --- Canvas Setup ---
function setupCanvas() {
  const ctx = ctxRef.value
  if (!ctx)
    return
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = '#333'
  ctx.lineWidth = lastLineWidth.value
  ctx.font = '10px sans-serif'
  ctx.textAlign = 'start'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#333'
}

// --- Grid Drawing ---
function drawGridOnContext(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.save()
  ctx.strokeStyle = GRID_COLOR
  ctx.lineWidth = GRID_LINE_WIDTH
  ctx.beginPath()
  ctx.moveTo(1, 1)
  ctx.lineTo(w - 1, 1)
  ctx.lineTo(w - 1, h - 1)
  ctx.lineTo(1, h - 1)
  ctx.closePath()
  ctx.moveTo(w / 2, 1)
  ctx.lineTo(w / 2, h - 1)
  ctx.moveTo(1, h / 2)
  ctx.lineTo(w - 1, h / 2)
  ctx.moveTo(1, 1)
  ctx.lineTo(w - 1, h - 1)
  ctx.moveTo(w - 1, 1)
  ctx.lineTo(1, h - 1)
  ctx.stroke()
  ctx.restore()
}

// --- Coordinate Helper ---
function getEventCoordinates(event: MouseEvent | TouchEvent): { x: number, y: number } | null {
  if (!canvasRef.value)
    return null
  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  let clientX: number
  let clientY: number
  if (event instanceof MouseEvent) {
    clientX = event.clientX
    clientY = event.clientY
  }
  else if (event.touches && event.touches.length > 0) {
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  }
  else { return null }
  return { x: clientX - rect.left, y: clientY - rect.top }
}

// --- Drawing Logic ---
function startDrawing(event: MouseEvent | TouchEvent) {
  const coords = getEventCoordinates(event)
  if (!coords || !ctxRef.value)
    return
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
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
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
  hasDrawing.value = false
  isDrawing.value = false
  showTargetOverlay.value = false
}

function createTempCanvas(width: number, height: number): { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D } | null {
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = width
  tempCanvas.height = height
  const tempCtx = tempCanvas.getContext('2d')

  if (!tempCtx) {
    console.error('Failed to get 2D context for temporary canvas')
    return null
  }
  tempCtx.fillStyle = '#FFFFFF'
  tempCtx.fillRect(0, 0, width, height)
  return { canvas: tempCanvas, ctx: tempCtx }
}

// --- Get Image Data ---
function getImageDataURL(type: string = 'image/png', quality?: number): { userImage: string | null, targetImage: string | null } | null {
  const originalCanvas = canvasRef.value

  if (!originalCanvas || !ctxRef.value) {
    console.error('Original canvas or context not available')
    return null
  }

  const width = originalCanvas.width
  const height = originalCanvas.height

  // --- Generate User Image ---
  let userDataURL: string | null = null
  const userImageCanvasData = createTempCanvas(width, height)
  if (userImageCanvasData) {
    const { canvas: userCanvas, ctx: userCtx } = userImageCanvasData
    userCtx.drawImage(originalCanvas, 0, 0)
    userDataURL = userCanvas.toDataURL(type, quality)
  }

  // --- Generate Target Image ---
  let targetDataURL: string | null = null
  if (props.targetCharacter) {
    const targetImageCanvasData = createTempCanvas(width, height)
    if (targetImageCanvasData) {
      const { canvas: targetCanvas, ctx: targetCtx } = targetImageCanvasData

      // 1. Draw Grid on Target Canvas
      drawGridOnContext(targetCtx, width, height)

      // 2. Draw Target Character
      const fontSize = Math.min(width, height) * 0.8
      targetCtx.font = `${fontSize}px ${targetCharacterFontFamily.value}`
      targetCtx.fillStyle = targetCharacterColor.value
      targetCtx.textAlign = 'center'
      targetCtx.textBaseline = 'middle'
      targetCtx.fillText(props.targetCharacter, width / 2, height / 2)

      targetDataURL = targetCanvas.toDataURL(type, quality)
    }
  }
  else {
    console.warn('Target character prop is not set. Cannot generate target image.')
  }

  return {
    userImage: userDataURL,
    targetImage: targetDataURL,
  }
}

function isCanvasEmpty(): boolean {
  return !hasDrawing.value
}

function showTargetCharacter() {
  if (props.targetCharacter) {
    showTargetOverlay.value = true
  }
  else {
    console.warn('Target character prop is not set. Cannot show overlay.')
  }
}

function hideTargetCharacter() {
  showTargetOverlay.value = false
}

defineExpose({
  clearCanvas,
  getImageDataURL,
  isCanvasEmpty,
  showTargetCharacter,
  hideTargetCharacter,
  showTargetOverlay,
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
    >
      {{ props.targetCharacter }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  font-size: calc(min(var(--canvas-width, 400px), var(--canvas-height, 400px)) * 0.8);
  color: var(--fg-accent-color);
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  font-family: 'MapleMono-CN';
}
</style>
