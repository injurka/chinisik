<script setup lang="ts">
import type { HighlightArea, ToonReaderMode } from '../types'
import { useToonReader } from '../composables/use-toon-reader'

const props = defineProps<{
  images: string[]
  initialAreas?: HighlightArea[]
  mode: ToonReaderMode
}>()

const emit = defineEmits<{
  (e: 'areaClicked', payload: HighlightArea): void
  (e: 'areaCreated', payload: { area: HighlightArea, snippetBase64: string | null }): void
  (e: 'areaUpdated', payload: HighlightArea): void
  (e: 'areaDeleted', payload: { areaId: string }): void
}>()

const imagesRef = computed(() => props.images)
const initialAreasRef = computed(() => props.initialAreas || [])
const modeRef = toRef(props, 'mode')

const {
  canvasRef,
  isLoadingImage,
  // currentPageIndex,
  totalPages,
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
  // redrawFullCanvas,

  updateAreaText: composableUpdateAreaText,
  deleteArea: composableDeleteArea,
  clearSelectionForEdit,
} = useToonReader(imagesRef, initialAreasRef, modeRef)

const newTextForArea = ref('')

onMounted(async () => {
  await initCanvas()
})

watch(() => props.mode, () => {
  newTextForArea.value = '' // Сбрасываем текст при смене режима
  // selectedAreaForEdit из composable уже сбрасывается через watch в composable
})

watch(selectedAreaForEdit, (newSelectedArea) => {
  if (newSelectedArea) {
    newTextForArea.value = newSelectedArea.text || ''
    if (props.mode === 'view' && newSelectedArea.text) {
      emit('areaClicked', newSelectedArea)
    }
  }
  else {
    newTextForArea.value = ''
  }
})

watch(extractedSnippetSrc, (newSnippet) => {
  // Это событие теперь больше для обработки нового выделения, готового к отправке в AI
  if (newSnippet && selectedAreaForEdit.value && props.mode === 'edit') {
    emit('areaCreated', { area: selectedAreaForEdit.value, snippetBase64: newSnippet })
  }
})

function handleUpdateText() {
  if (selectedAreaForEdit.value) {
    composableUpdateAreaText(selectedAreaForEdit.value.id, newTextForArea.value)
    emit('areaUpdated', { ...selectedAreaForEdit.value, text: newTextForArea.value })
    // Опционально: clearSelectionForEdit(); // или пусть пользователь сам отменит
  }
}

function handleDeleteArea() {
  if (selectedAreaForEdit.value) {
    const areaIdToDelete = selectedAreaForEdit.value.id
    composableDeleteArea(areaIdToDelete)
    emit('areaDeleted', { areaId: areaIdToDelete })
    // selectedAreaForEdit автоматически станет null в composable
  }
}

function cancelEdit() {
  clearSelectionForEdit()
  newTextForArea.value = ''
}
</script>

<template>
  <div class="toon-reader-module">
    <div v-if="totalPages > 0" class="reader-content">
      <div class="image-viewer-wrapper">
        <div class="image-viewer">
          <div v-if="isLoadingImage" class="loading-overlay">
            <v-progress-circular indeterminate color="primary" size="64" />
          </div>
          <canvas
            ref="canvasRef"
            class="toon-canvas"
            @pointerdown="handlePointerDown"
            @pointermove="handlePointerMove"
            @pointerup="handlePointerUp"
            @pointerleave="handlePointerLeave"
          />
        </div>
      </div>

      <div class="controls">
        <v-btn
          :disabled="!canGoPrev || isLoadingImage"
          variant="tonal"
          @click="prevPage"
        >
          <v-icon start>
            mdi-arrow-left
          </v-icon>
          Назад
        </v-btn>
        <span class="page-info">
          <!-- Страница {{ currentPageIndex + 1 }} из {{ totalPages }} -->
        </span>
        <v-btn
          :disabled="!canGoNext || isLoadingImage"
          variant="tonal"
          @click="nextPage"
        >
          Далее
          <v-icon end>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </div>

      <!-- Информация о наведенной области в режиме просмотра -->
      <div v-if="mode === 'view' && hoveredAreaId" class="hover-info-wrapper">
        <div class="hover-info">
          <p>Hovering over an area. Click to see details.</p>
        </div>
      </div>

      <!-- Панель редактирования/информации -->
      <div v-if="selectedAreaForEdit && mode === 'edit'" class="edit-panel-wrapper">
        <div class="edit-panel">
          <h3>Edit Area (ID: {{ selectedAreaForEdit.id.substring(0, 5) }})</h3>
          <v-textarea
            v-model="newTextForArea"
            label="Associated Text"
            rows="3"
            variant="outlined"
            density="compact"
            class="mb-2"
            hide-details
          />
          <div class="edit-panel-actions">
            <v-btn color="primary" variant="tonal" @click="handleUpdateText">
              Save Text
            </v-btn>
            <v-btn color="error" variant="outlined" @click="handleDeleteArea">
              Delete Area
            </v-btn>
            <v-btn variant="text" @click="cancelEdit">
              Cancel / Deselect
            </v-btn>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="no-images-module">
      <p>No images to display.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.toon-reader-module {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.reader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.image-viewer-wrapper {
  width: 100%;
  aspect-ratio: 2/3;
  position: relative;
  margin: 0 auto;
}

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
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;

  .v-btn {
    text-transform: none;
  }
}

.page-info {
  font-size: 0.9rem;
  color: var(--fg-secondary-color);
  min-width: 120px;
  text-align: center;
}

.hover-info {
  font-style: italic;
  color: var(--fg-tertiary-color);
  font-size: 0.9em;
  padding: 0.3em 0.6em;
  background-color: var(--bg-secondary-color);
  border-radius: 4px;

  &-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
}

.edit-panel {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--border-accent-color);
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    font-size: 1.2rem;
    color: var(--fg-primary-color);
    margin-bottom: 0.5rem;
    text-align: center;
  }

  &-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  &-actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}
.snippet-preview-edit {
  margin-top: 1rem;
  padding: 0.8rem;
  border: 1px dashed var(--fg-secondary-color);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-tertiary-color);
  max-width: 100%;

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--fg-primary-color);
  }
  .extracted-image {
    max-width: 100%;
    max-height: 150px;
    border: 1px solid var(--border-primary-color);
    object-fit: contain;
  }
  .text-caption {
    color: var(--fg-tertiary-color);
    font-size: 0.8em;
  }
}

.no-images-module {
  text-align: center;
  color: var(--fg-secondary-color);
  padding: 1rem;
  border: 1px dashed var(--border-secondary-color);
  border-radius: 6px;
  background-color: var(--bg-tertiary-color);
}
</style>
