<script setup lang="ts">
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import TranslationControl from '~/components/modules/toon/toon-manual/ui/sections/translation-control.vue'
import { useToonTranslateControls } from '../../composables'
import { useToonManuallyStore } from '../../store'

const { controlMenu, controls } = useToonTranslateControls()
const store = useToonManuallyStore()
const {
  errorProcessing,
  translationResults,
  selectedArea,
  uploadedImage,
} = storeToRefs(store)

const previewCanvas = ref<HTMLCanvasElement>()

function resetSelection() {
  store.$patch({
    translationResults: null,
    selectedArea: null,
    isSelecting: false,
  })
}

async function soundSource() {
  // TODO: Реализация воспроизведения звука
}

function drawPreview() {
  if (!previewCanvas.value || !uploadedImage.value || !selectedArea.value)
    return

  const canvas = previewCanvas.value
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return

  const img = new Image()
  img.onload = () => {
    const area = selectedArea.value!

    canvas.width = area.width
    canvas.height = area.height

    ctx.drawImage(
      img,
      area.x,
      area.y,
      area.width,
      area.height,
      0,
      0,
      area.width,
      area.height,
    )
  }
  img.src = uploadedImage.value
}

// Следим за изменениями selectedArea и перерисовываем превью
watch([selectedArea, uploadedImage], () => {
  nextTick(() => {
    drawPreview()
  })
})

onMounted(() => {
  drawPreview()
})
</script>

<template>
  <Transition name="slide-up" appear>
    <div v-if="!errorProcessing" class="translation-results-wrapper">
      <div class="translation-results">
        <div class="results-content" :class="{ flex: !controls.selectionBlock }">
          <!-- Превью выделенной области -->
          <div v-show="controls.selectionBlock" class="selected-area-preview">
            <div class="preview-header">
              <h3>Выделенная область</h3>
            </div>

            <div class="preview-container">
              <canvas ref="previewCanvas" class="preview-canvas" />
            </div>
          </div>

          <!-- Результаты перевода -->
          <div class="translation-section">
            <div class="text-block">
              <div class="text-block-header">
                <h3>Распознанный текст</h3>

                <VBtn
                  size="small"
                  variant="text"
                  icon="mdi-volume-high"
                  density="comfortable"
                  style="font-size: 0.7rem;"
                  @click="soundSource"
                />
              </div>

              <div class="text-content container">
                <HieroglyphWord
                  v-if="translationResults?.source"
                  :variant="controls.displayStyle ?? undefined"
                  :glyph="translationResults?.source"
                  :translate="translationResults?.translate"
                  :pinyin="translationResults?.transcription"
                />
                <span v-else>Не удалось распознать текст</span>
              </div>
            </div>

            <div v-show="controls.grammarBlock" class="text-block">
              <div class="text-block-header">
                <h3>Граматические конструкции</h3>
              </div>
              <div class="text-content container">
                Ничего не выявлено
              </div>
            </div>
          </div>
        </div>

        <VBtn
          icon
          variant="text"
          class="close"
          @click="resetSelection()"
        >
          <Icon size="18" name="mdi:close" />
        </VBtn>

        <div class="settings">
          <VMenu
            v-model="controlMenu"
            :close-on-content-click="false"
          >
            <template #activator="{ props }">
              <VBtn
                icon
                variant="text"
                v-bind="props"
              >
                <Icon size="20" name="mdi-tune" />
              </VBtn>
            </template>

            <TranslationControl v-model="controls" />
          </VMenu>
        </div>
      </div>
    </div>
  </Transition>

  <VSnackbar
    :model-value="!!errorProcessing"
    :timeout="2000"
    color="red"
  >
    <div>
      {{ errorProcessing?.message }}
    </div>
  </VSnackbar>
</template>

<style scoped lang="scss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.translation-results {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-top: 1px solid var(--border-secondary-color);

  .close {
    position: absolute;
    right: 6px;
    top: -16px;
    width: 30px;
    height: 30px;
    background-color: var(--bg-tertiary-color);
    border: 2px solid var(--border-accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .settings {
    position: absolute;
    right: 42px;
    top: -40px;
    width: 30px;
    height: 30px;
    background-color: var(--bg-tertiary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(var(--bg-header-color), 0.5);
    z-index: 100;
  }
}

.results-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;

  &.flex {
    display: flex;
  }

  @include tablet() {
    grid-template-columns: 1fr;
  }
}

.selected-area-preview {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 16px;

  h3 {
    margin: 0 0 8px;
    color: var(--fg-primary-color);
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 1.1rem !important;
    }
  }

  .preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    background-color: var(--bg-tertiary-color);
    border-radius: 8px;
    border: 2px dashed var(--border-secondary-color);
    flex-grow: 1;

    .preview-canvas {
      max-width: 100%;
      max-height: 300px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }
}

.translation-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
}

.text-block {
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 16px;
  flex-grow: 1;

  &-header {
    display: flex;

    h3 {
      font-size: 0.9rem;
      width: 100%;
    }
  }

  h3 {
    margin: 0 0 12px;
    color: var(--fg-primary-color);
    font-size: 1.1rem !important;
  }

  .text-content {
    padding: 16px;
    border-radius: 8px;
    line-height: 1.6;
    min-height: 80px;
    white-space: pre-wrap;
    word-wrap: break-word;

    &.container {
      background-color: var(--bg-tertiary-color);
      color: var(--fg-secondary-color);
      display: flex;

      &:deep(.hw-word) {
        flex-grow: 1;
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
    }
  }
}

.translation-info {
  grid-column: 1 / -1;
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 20px;

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;

    @include mobile() {
      grid-template-columns: 1fr;
    }
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .label {
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
      font-weight: 500;
    }

    .value {
      color: var(--fg-primary-color);
      font-family: 'JetBrains Mono', monospace;
    }
  }
}
</style>
