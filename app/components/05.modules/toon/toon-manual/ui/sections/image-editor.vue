<script setup lang="ts">
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { useImageSelection } from '../../composables/use-image-selection'
import { useToonManuallyStore } from '../../store'
import ImageUploader from './image-uploader.vue'

const store = useToonManuallyStore()
const {
  uploadedImage,
  isProcessing,
  selectedArea: storeSelectedArea,
  isContainerFitted,
} = storeToRefs(store)

const uploadNewDialog = ref<boolean>(false)

const {
  // isSelecting,
  // extractedSnippetSrc,
  selectedArea,
  canvasRef,

  resetSelection,
  setupListeners,
  cleanupListeners,

  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handlePointerLeave,
  initCanvas,
  // redrawFullCanvas,
} = useImageSelection(uploadedImage.value!)

watch(uploadedImage, (newImage) => {
  if (newImage) {
    nextTick(() => {
      initCanvas()
    })
  }
})

onMounted(() => {
  setupListeners()
  if (uploadedImage.value) {
    initCanvas()
  }
})

onUnmounted(() => {
  cleanupListeners()
})

async function handleTranslateSelection() {
  if (!storeSelectedArea.value)
    return
  await store.translateSelectedArea()
}

function resetImage() {
  store.resetToUpload()
}

function uploadNew() {
  resetSelection()
  store.translationResults = null
  uploadNewDialog.value = true
}
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
          :disabled="!storeSelectedArea || isProcessing"
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

    <div class="image-viewer-wrapper">
      <div class="image-viewer">
        <canvas
          ref="canvasRef"
          class="toon-canvas"
          :class="{ fitted: isContainerFitted }"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
          @pointerup="handlePointerUp"
          @pointerleave="handlePointerLeave"
        />
      </div>
    </div>

    <div v-if="storeSelectedArea" class="selection-info">
      <div class="info-item">
        <span class="label">Координаты:</span>
        <span class="value">{{ storeSelectedArea.x }}, {{ storeSelectedArea.y }}</span>
      </div>
      <div class="info-item">
        <span class="label">Размер:</span>
        <span class="value">{{ storeSelectedArea.width }} × {{ storeSelectedArea.height }}</span>
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

    <div v-if="!storeSelectedArea && !selectedArea" class="selection-hint">
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

.image-viewer-wrapper {
  width: 100%;
  position: relative;
  margin: 0 auto;

  .image-viewer {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid var(--border-primary-color);
    background-color: var(--bg-tertiary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px var(--bg-overlay-primary-color);
  }

  .toon-canvas {
    display: block;
    max-width: 100%;
    min-width: 50%;
    max-height: 100%;
    object-fit: contain;

    &.fitted {
      width: 100%;
    }
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
