<!-- pages/practice/[character].vue -->
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HanziDrawingBoard from '~/components/shared/hanzi-drawing-board/ui/hanzi-drawing-board.vue' // Убедитесь, что путь верный

interface CheckResult {
  similarity: number
  feedback: string
}

interface DrawingBoardExposed {
  clearCanvas: () => void
  getImageDataURL: (type?: string, quality?: number) => { userImage: string | null, targetImage: string | null } | null
  isCanvasEmpty: () => boolean
  showTargetCharacter: () => void
  hideTargetCharacter: () => void
  showTargetOverlay: Ref<boolean>
}

const route = useRoute()
const drawingBoardRef = ref<DrawingBoardExposed | null>(null)

const targetCharacter = ref<string>('')
const instructions = ref<string>('Нарисуйте иероглиф в квадрате.')
const isLoading = ref(false)
const result = ref<CheckResult | null>(null)
const error = ref<string | null>(null)
const hasAttemptedDrawing = ref(false)

const isCheckingDisabled = computed(() => {
  return !drawingBoardRef.value
})

function handleClear() {
  if (drawingBoardRef.value) {
    drawingBoardRef.value.clearCanvas()
    result.value = null
    error.value = null
    hasAttemptedDrawing.value = false
  }
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
  if (!drawingBoardRef.value || isLoading.value)
    return

  const imageDataUrl = drawingBoardRef.value.getImageDataURL('image/png', 0.5)

  if (!imageDataUrl) {
    error.value = 'Не удалось получить изображение с доски.'
    return
  }

  isLoading.value = true
  result.value = null
  error.value = null
  hasAttemptedDrawing.value = true

  try {
    const response = await $fetch<CheckResult>('http://localhost:8080/api/v1/hanzi-check', {
      method: 'POST',
      // @ts-expect-error todo
      body: {
        userImage: imageDataUrl.userImage,
        targetImage: imageDataUrl.targetImage,
        targetWord: targetCharacter.value,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (typeof response.similarity === 'number' && typeof response.feedback === 'string') {
      result.value = response
    }
    else {
      throw new TypeError('Некорректный формат ответа от сервера.')
    }
  }
  catch (err: any) {
    console.error('Ошибка при проверке иероглифа:', err)
    error.value = err.data?.message || err.message || 'Произошла ошибка при проверке.'
    result.value = null
  }
  finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if (typeof route.params.character === 'string') {
    targetCharacter.value = route.params.character
  }
  else {
    targetCharacter.value = '?'
    error.value = 'Не удалось определить целевой иероглиф.'
  }
})
</script>

<template>
  <div class="practice-page">
    <h1>Практика: {{ targetCharacter }}</h1>
    <p v-if="instructions">
      Инструкция: {{ instructions }}
    </p>

    <div class="board-wrapper">
      <HanziDrawingBoard
        ref="drawingBoardRef"
        :target-character="targetCharacter"
      />
    </div>

    <div class="controls">
      <button :disabled="isLoading" @click="handleClear">
        Очистить
      </button>
      <button :disabled="isCheckingDisabled || isLoading" @click="handleCheck">
        {{ isLoading ? 'Проверка...' : 'Проверить' }}
      </button>
      <button @click="handleVisibility">
        {{ 'Показать' }}
      </button>
    </div>

    <div v-if="result" class="result">
      <h2>Результат:</h2>
      <p>Схожесть: {{ result.similarity }}%</p>
      <p>Комментарий: {{ result.feedback }}</p>
    </div>
    <div v-if="error" class="error">
      <p>Ошибка: {{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.practice-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.board-wrapper {
  width: 90%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
}

.controls {
  display: flex;
  gap: 15px;

  button {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover:not(:disabled) {
      background-color: #e0e0e0;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.result,
.error {
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

.result {
  border: 1px solid #4caf50;
  background-color: #e8f5e9;
  color: #2e7d32;
  h2 {
    margin: 0 0 10px 0;
    color: #1b5e20;
  }
}

.error {
  border: 1px solid #f44336;
  background-color: #ffebee;
  color: #c62828;
}
</style>
