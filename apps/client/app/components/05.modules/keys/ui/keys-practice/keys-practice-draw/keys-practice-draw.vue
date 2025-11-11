<script lang="ts" setup>
import type { DrawingBoardExposed } from '~/components/02.shared/hanzi-drawing-board'
import { HanziDrawingBoard } from '~/components/02.shared/hanzi-drawing-board'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

interface Props {
  items: HieroglyphKey[]
}

interface CheckResult {
  similarity: number
  feedback: string
}

const props = defineProps<Props>()

enum RequestKeys {
  CHECK_HANZI_DRAWING = 'llm_keys-check-hanzi-drawing',
}

const settingsMenu = ref<boolean>(false)

const settings = useLocalStorage('hanziPracticeSettings', {
  showTargetInCanvas: false,
  useLLMCheck: true,
})

const drawingBoardRef = ref<DrawingBoardExposed | null>(null)
const result = ref<CheckResult | null>(null)
const showFullInfo = ref(false)
const hasAttemptedDrawing = ref(false)
const abortController = ref<AbortController>(new AbortController())
const shuffledItems = ref<HieroglyphKey[]>([])
const currentShuffledIndex = ref(0)

const currentItem = computed(() => shuffledItems.value[currentShuffledIndex.value] || null)
const targetCharacter = computed<string>(() => currentItem.value?.glyph ?? '')
const isCheckingDisabled = computed(() => !drawingBoardRef.value || !targetCharacter.value)
const instruction = computed<string>(() => !currentItem.value ? 'Нет данных для отображения.' : `Нарисуйте иероглиф для слова: "${currentItem.value.translate}"`)
const totalItemsCount = computed(() => shuffledItems.value.length)
const isLoading = computed(() => useRequestStatus([RequestKeys.CHECK_HANZI_DRAWING]))
const apiError = computed(() => useRequestError(RequestKeys.CHECK_HANZI_DRAWING))

const resultStyle = computed(() => {
  if (!result.value?.similarity)
    return {}

  const hue = (result.value.similarity / 100) * 120
  const saturation = 80
  const bgLightness = 90
  const borderLightness = 45

  const backgroundColor = `hsl(${hue}, ${saturation}%, ${bgLightness}%)`
  const borderColor = `hsl(${hue}, ${saturation}%, ${borderLightness}%)`
  const color = borderColor

  return {
    backgroundColor,
    borderColor,
    color,
  }
})

function shuffleArray(array: HieroglyphKey[]) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // @ts-expect-error неважно
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function initializePracticeCycle() {
  if (props.items.length > 0) {
    shuffledItems.value = shuffleArray(props.items)
  }
  else {
    shuffledItems.value = []
  }
  currentShuffledIndex.value = 0
  clearDrawing()
}

function clearDrawing() {
  drawingBoardRef.value?.clearCanvas()
  result.value = null
  showFullInfo.value = false
  hasAttemptedDrawing.value = false
}

function handleVisibility() {
  if (!drawingBoardRef.value || isLoading.value)
    return

  if (drawingBoardRef.value.showTargetOverlay)
    drawingBoardRef.value.hideTargetCharacter()
  else
    drawingBoardRef.value.showTargetCharacter()
}

async function handleCheck() {
  if (!settings.value.useLLMCheck) {
    result.value = null
    showFullInfo.value = true
    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value?.showTargetCharacter()

    return
  }

  if (!drawingBoardRef.value || isLoading.value || !currentItem.value)
    return

  const imageDataUrl = drawingBoardRef.value.getImageDataURL('image/png', 0.9)

  if (!imageDataUrl?.userImage) {
    return
  }

  result.value = null
  hasAttemptedDrawing.value = true

  useRequest({
    key: RequestKeys.CHECK_HANZI_DRAWING,
    fn: ({ api }) => api.llm.v1.checkHanziDrawing({
      userImage: imageDataUrl.userImage!,
      targetImage: imageDataUrl.targetImage!,
      targetWord: targetCharacter.value,
    }, abortController.value),
    onSuccess: ({ data }) => {
      result.value = data
      showFullInfo.value = true
      if (settings.value.showTargetInCanvas)
        drawingBoardRef.value?.showTargetCharacter()
    },
    onError: (err) => {
      console.error('Ошибка при проверке иероглифа:', err)
      result.value = null
      showFullInfo.value = false
    },
  })
}

function nextItem() {
  drawingBoardRef.value?.hideTargetCharacter()

  if (currentShuffledIndex.value < shuffledItems.value.length - 1) {
    currentShuffledIndex.value++
    clearDrawing()
  }
  else {
    initializePracticeCycle()
  }
}

function applyCanvasVisibilitySetting() {
  nextTick(() => {
    if (!drawingBoardRef.value)
      return

    if (settings.value.showTargetInCanvas)
      drawingBoardRef.value.showTargetCharacter()
    else
      drawingBoardRef.value.hideTargetCharacter()
  })
}

function getSimilarityText(value: number) {
  if (value >= 85)
    return 'Корректно'

  if (value >= 75)
    return 'Почти корректно'

  return 'Неправильно'
}

watch(() => settings.value.showTargetInCanvas, () => {
  if (showFullInfo.value)
    applyCanvasVisibilitySetting()
})

onMounted(initializePracticeCycle)
</script>

<template>
  <VCard class="content">
    <template v-if="currentItem && totalItemsCount > 0">
      <h2 class="title">
        Практика прописи
      </h2>
      <p class="instruction">
        {{ instruction }}
      </p>

      <div class="board-container">
        <HanziDrawingBoard
          :key="targetCharacter"
          ref="drawingBoardRef"
          :target-character="targetCharacter"
        />
      </div>

      <div v-if="showFullInfo && currentItem" class="full-info">
        <HieroglyphWord
          :variant="5"
          :glyph="currentItem.glyph"
          :translate="currentItem.translate"
          :pinyin="currentItem.pinyin"
        />
      </div>

      <div v-if="result && !isLoading" class="result" :style="resultStyle">
        <p><b>{{ getSimilarityText(+result.similarity) }}</b></p>
        <p>{{ result.feedback }}</p>
      </div>
      <div v-if="apiError && !isLoading" class="error">
        <p>Ошибка: {{ apiError }}</p>
      </div>

      <div class="controls">
        <VBtn
          variant="text"
          rounded
          :disabled="isLoading"
          @click="clearDrawing"
        >
          Очистить
        </VBtn>
        <VBtn
          variant="text"
          rounded
          :disabled="isLoading"
          @click="handleVisibility"
        >
          Показать / Скрыть
        </VBtn>
        <VBtn
          v-if="!showFullInfo"
          variant="tonal"
          class="action-btn"
          rounded
          :disabled="isCheckingDisabled"
          :loading="isLoading"
          @click="handleCheck"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="action-btn"
          rounded
          variant="tonal"
          :disabled="isLoading"
          @click="nextItem"
        >
          {{ currentShuffledIndex < totalItemsCount - 1 ? 'Следующий' : 'Начать заново' }}
        </VBtn>
      </div>
    </template>

    <div class="settings">
      <VMenu
        v-model="settingsMenu"
        :close-on-content-click="false"
      >
        <template #activator="{ props: menuProps }">
          <v-btn
            icon
            variant="text"
            v-bind="menuProps"
          >
            <Icon size="24" name="mdi-tune" />
          </v-btn>
        </template>

        <VList class="settings-menu">
          <VListItem class="settings-item">
            <VSwitch
              v-model="settings.showTargetInCanvas"
              label="Показывать эталон"
              color="var(--fg-accent-color)"
              hide-details
              inset
              density="compact"
            />
          </VListItem>
          <VListItem class="settings-item">
            <VSwitch
              v-model="settings.useLLMCheck"
              label="Проверка LLM"
              color="var(--fg-accent-color)"
              hide-details
              inset
              density="compact"
            />
          </VListItem>
        </VList>
      </VMenu>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.content {
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
  justify-content: center;
  align-items: center;
  gap: 4px;

  .settings {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 48px;
    height: 48px;
  }
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
}

.instruction {
  font-size: 1rem;
  color: var(--fg-secondary-color);
  text-align: center;
  margin-bottom: 8px;
}

.board-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 16px;
  user-select: none;
}

.full-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  padding: 10px;
  width: 100%;

  border-bottom: 1px dashed var(--border-button-secondary-color);
  border-top: 1px dashed var(--border-button-secondary-color);
}

.result,
.error {
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  width: 100%;

  > :first-of-type {
    border-bottom: 1px solid var(--border-secondary-color);
    padding-bottom: 8px;
    font-size: 1rem;
  }
  p {
    margin: 4px 0;
  }
}

.result {
  border: 1px solid #4caf50;
  background-color: #e8f5e9;
  color: #2e7d32;
}

.error {
  border: 1px solid #f44336;
  background-color: #ffebee;
  color: #c62828;
}

.controls {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  .v-btn {
    text-transform: none;
    letter-spacing: 0;
    color: var(--fg-primary-color);
    width: 30%;
  }
  .action-btn {
    background-color: var(--bg-accent-color);
    text-transform: none;
    min-width: 100px;
    border: 1px solid var(--border-button-secondary-color);
  }
}

@include mobile() {
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;

    .settings {
      left: 5px;
      top: 5px;
    }
  }

  .title {
    margin-top: 10px;
    font-size: 1rem;
  }

  .instruction {
    font-size: 0.9rem;
  }

  .controls {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    .v-btn {
      text-transform: none;
      letter-spacing: 0;
      width: 100%;
    }
  }
}
</style>
