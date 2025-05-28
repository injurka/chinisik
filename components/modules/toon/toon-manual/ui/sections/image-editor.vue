<script setup lang="ts">
import { DialogWithClose } from '~/components/shared/dialog-with-close'
import { useImageSelection } from '../../composables'
import { useToonManuallyStore } from '../../store'
import ImageUploader from './image-uploader.vue'

const store = useToonManuallyStore()
const { uploadedImage, isProcessing, isContainerFitted } = storeToRefs(store)

const canvasRef = ref<HTMLCanvasElement>()
const containerRef = ref<HTMLElement>()
const imageRef = ref<HTMLImageElement>()
const uploadNewDialog = ref<boolean>(false)

const startPoint = ref({ x: 0, y: 0 })
const currentPoint = ref({ x: 0, y: 0 })
const imageOffset = ref({ x: 0, y: 0 })
const imageScale = ref(1)

const {
  isSelecting,
  selectedArea,
  resetSelection,
  setupListeners,
  cleanupListeners,
} = useImageSelection(drawSelection, handleTranslateSelection)

function calculateImageDimensions() {
  if (!imageRef.value || !containerRef.value || isContainerFitted.value) {
    imageOffset.value = {
      x: 0,
      y: 0,
    }
    return
  }

  const container = containerRef.value.getBoundingClientRect()
  const img = imageRef.value

  if (img.naturalWidth === 0 || img.naturalHeight === 0) {
    imageScale.value = 1
    imageOffset.value = { x: 0, y: 0 }
    return
  }

  const scaleX = container.width / img.naturalWidth
  const scaleY = container.height / img.naturalHeight
  const scale = Math.min(scaleX, scaleY, 1)

  imageScale.value = scale

  const scaledWidth = img.naturalWidth * scale
  const scaledHeight = img.naturalHeight * scale

  imageOffset.value = {
    x: (container.width - scaledWidth) / 2,
    y: (container.height - scaledHeight) / 2,
  }
}

function updateDimensionsAndRedraw() {
  if (!imageRef.value || !containerRef.value || !canvasRef.value)
    return

  calculateImageDimensions()

  const containerRect = containerRef.value.getBoundingClientRect()
  canvasRef.value.width = containerRect.width
  canvasRef.value.height = containerRect.height

  drawSelection()
}

function getImageCoordinates(clientX: number, clientY: number) {
  if (!containerRef.value) {
    return { x: 0, y: 0 }
  }

  const rect = containerRef.value.getBoundingClientRect()

  const x = (clientX - rect.left - imageOffset.value.x) / imageScale.value
  const y = (clientY - rect.top - imageOffset.value.y) / imageScale.value

  let targetWidth: number
  let targetHeight: number

  if (isContainerFitted.value) {
    targetWidth = rect.width
    targetHeight = rect.height
  }
  else {
    if (!imageRef.value)
      return { x: 0, y: 0 }

    targetWidth = imageRef.value.naturalWidth
    targetHeight = imageRef.value.naturalHeight
  }

  return {
    x: Math.max(0, Math.min(x, targetWidth)),
    y: Math.max(0, Math.min(y, targetHeight)),
  }
}

function startSelection(event: MouseEvent) {
  if (event.button !== 0)
    return

  const coords = getImageCoordinates(event.clientX, event.clientY)
  startPoint.value = coords
  currentPoint.value = coords
  isSelecting.value = true

  if (store.selectedArea) {
    store.clearSelectedArea()
  }
}

function updateSelection(event: MouseEvent) {
  if (!isSelecting.value)
    return

  currentPoint.value = getImageCoordinates(event.clientX, event.clientY)
  drawSelection()
}

function endSelection(event?: MouseEvent) {
  if (event && event.button !== 0 && event.type === 'mouseup')
    return

  if (!isSelecting.value)
    return

  isSelecting.value = false

  const area = {
    x: Math.min(startPoint.value.x, currentPoint.value.x),
    y: Math.min(startPoint.value.y, currentPoint.value.y),
    width: Math.abs(currentPoint.value.x - startPoint.value.x),
    height: Math.abs(currentPoint.value.y - startPoint.value.y),
  }

  if (area.width > 10 && area.height > 10) {
    store.setSelectedArea(area)
  }
  else {
    store.clearSelectedArea()
  }
  drawSelection()
}

function drawSelection() {
  if (!canvasRef.value)
    return

  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let areaToDraw = null
  if (isSelecting.value) {
    areaToDraw = {
      x: Math.min(startPoint.value.x, currentPoint.value.x),
      y: Math.min(startPoint.value.y, currentPoint.value.y),
      width: Math.abs(currentPoint.value.x - startPoint.value.x),
      height: Math.abs(currentPoint.value.y - startPoint.value.y),
    }
  }
  else if (selectedArea.value) {
    areaToDraw = selectedArea.value
  }

  if (areaToDraw && areaToDraw.width > 0 && areaToDraw.height > 0) {
    const canvasX = areaToDraw.x * imageScale.value + imageOffset.value.x
    const canvasY = areaToDraw.y * imageScale.value + imageOffset.value.y
    const canvasWidth = areaToDraw.width * imageScale.value
    const canvasHeight = areaToDraw.height * imageScale.value

    ctx.strokeStyle = '#007bff'
    ctx.lineWidth = 2
    ctx.strokeRect(canvasX, canvasY, canvasWidth, canvasHeight)

    ctx.fillStyle = '#007bff'
    const cornerSize = 8
    ctx.fillRect(canvasX - cornerSize / 2, canvasY - cornerSize / 2, cornerSize, cornerSize)
    ctx.fillRect(canvasX + canvasWidth - cornerSize / 2, canvasY - cornerSize / 2, cornerSize, cornerSize)
    ctx.fillRect(canvasX - cornerSize / 2, canvasY + canvasHeight - cornerSize / 2, cornerSize, cornerSize)
    ctx.fillRect(canvasX + canvasWidth - cornerSize / 2, canvasY + canvasHeight - cornerSize / 2, cornerSize, cornerSize)
  }
}

function onImageLoadHandler() {
  nextTick(() => {
    updateDimensionsAndRedraw()
  })
}

async function handleTranslateSelection() {
  if (!store.selectedArea)
    return

  let paramsForStore
  if (store.isContainerFitted && containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect()
    paramsForStore = {
      containerWidth: rect.width,
      containerHeight: rect.height,
    }
  }
  await store.translateSelectedArea(paramsForStore)
}

function resetImage() {
  store.resetToUpload()
}

function uploadNew() {
  resetSelection()
  store.translationResults = null
  uploadNewDialog.value = true
}

onMounted(() => {
  window.addEventListener('resize', updateDimensionsAndRedraw)
  setupListeners()

  if (imageRef.value) {
    if (imageRef.value.complete) {
      onImageLoadHandler()
    }
    else {
      imageRef.value.addEventListener('load', onImageLoadHandler)
    }
  }
  if (containerRef.value) {
    containerRef.value.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      if (isSelecting.value || selectedArea.value) {
        resetSelection()
      }
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensionsAndRedraw)
  cleanupListeners()
  if (imageRef.value) {
    imageRef.value.removeEventListener('load', onImageLoadHandler)
  }
})
</script>

<template>
  <div class="image-editor">
    <div class="editor-header">
      <div class="instructions">
        <Icon name="mdi-information" />
        <span>Выделите область с текстом для перевода</span>
      </div>

      <div class="actions">
        <VBtn
          style="font-size: 0.8rem;"
          density="comfortable"
          variant="tonal"
          @click="resetImage"
        >
          Назад
        </VBtn>

        <VBtn
          density="comfortable"
          variant="tonal"
          style="font-size: 0.8rem;"
          color="var(--fg-accent-color)"
          :disabled="!selectedArea || isProcessing"
          :loading="isProcessing"
          prepend-icon="mdi-translate"
          @click="handleTranslateSelection"
        >
          Перевести
        </VBtn>

        <VBtn
          style="font-size: 0.8rem;"
          density="compact"
          color="var(--border-positive-color)"
          variant="tonal"
          icon="mdi-plus"
          @click="uploadNew"
        />
      </div>
    </div>

    <div
      ref="containerRef"
      class="image-container"
      @mousedown.left="startSelection"
      @mousemove="updateSelection"
      @mouseup.left="endSelection"
      @mouseleave="endSelection"
    >
      <img
        ref="imageRef"
        :src="uploadedImage"
        class="main-image"
        :class="{ fitted: isContainerFitted }"
        alt="Uploaded content"
        draggable="false"
        @dragstart.prevent
      >
      <canvas
        ref="canvasRef"
        class="selection-overlay"
      />
    </div>

    <div v-if="selectedArea" class="selection-info">
      <div class="info-item">
        <span class="label">Координаты:</span>
        <span class="value">{{ Math.round(selectedArea.x) }}, {{ Math.round(selectedArea.y) }}</span>
      </div>
      <div class="info-item">
        <span class="label">Размер:</span>
        <span class="value">{{ Math.round(selectedArea.width) }} × {{ Math.round(selectedArea.height) }}</span>
      </div>
      <VBtn
        size="small"
        variant="text"
        prepend-icon="mdi-close"
        class="info-item-btn"
        @click="resetSelection()"
      >
        Очистить
      </VBtn>
    </div>

    <div v-if="!selectedArea && !isSelecting" class="selection-hint">
      <Icon name="mdi-gesture-tap" />
      <p>Нажмите и перетащите левой кнопкой мыши, чтобы выделить область с текстом</p>
      <p class="hint-secondary">
        <kbd>ПКМ</kbd> или <kbd>Esc</kbd> для сброса выделения
      </p>
    </div>

    <DialogWithClose
      v-model="uploadNewDialog"
      class="dialog"
    >
      <VCard class="dialog-content">
        <ImageUploader @on-select="() => uploadNewDialog = false" />
      </VCard>
    </DialogWithClose>
  </div>
</template>

<style scoped lang="scss">
.image-editor {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--bg-secondary-color);
  border-radius: 8px;

  @include mobile() {
    flex-direction: column;
    gap: 16px;
  }

  .instructions {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--fg-secondary-color);
    font-size: 0.9rem;

    svg {
      color: var(--fg-accent-color);
    }
  }

  .actions {
    display: flex;
    gap: 12px;

    .v-btn {
      text-transform: none;
    }
  }
}

.image-container {
  position: relative;
  width: 100%;
  min-width: 300px;
  min-height: 400px;
  background-color: var(--bg-tertiary-color);
  border-radius: 8px;
  overflow: hidden;
  cursor: crosshair;
  display: flex;
  justify-content: center;

  .main-image {
    object-fit: contain;
    user-select: none;
    pointer-events: none;

    &.fitted {
      width: 100%;
      height: 100%;
    }
  }

  .selection-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
}

.selection-info {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  background-color: var(--bg-secondary-color);
  border-radius: 8px;
  font-size: 0.9rem;

  @include mobile() {
    flex-wrap: wrap;
    gap: 12px;
  }

  .info-item {
    display: flex;
    gap: 8px;

    .label {
      color: var(--fg-secondary-color);
      font-weight: 500;
    }

    .value {
      color: var(--fg-primary-color);
      font-family: 'JetBrains Mono', monospace;
    }

    &-btn {
      margin-left: auto;
    }
  }
}

.selection-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px;
  text-align: center;
  color: var(--fg-secondary-color);

  .v-icon {
    font-size: 3rem;
    color: var(--fg-tertiary-color);
  }

  p {
    margin: 0;

    &.hint-secondary {
      font-size: 0.9rem;
      color: var(--fg-tertiary-color);

      kbd {
        background-color: var(--bg-tertiary-color);
        border: 1px solid var(--border-secondary-color);
        border-radius: 4px;
        padding: 2px 6px;
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--fg-primary-color);
      }
    }
  }
}

.dialog {
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding-top: 48px;
  }
}
</style>
