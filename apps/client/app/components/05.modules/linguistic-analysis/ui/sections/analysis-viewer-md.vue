<script setup lang="ts">
import { MarkdownContent } from '~/components/02.shared/markdown-content'
import {
  cancelSpeech as cancelSpeechHelper,
  initSpeechSynthesis,
  voiceTheText as voiceTextHelper,
} from '~/shared/lib'

interface Props {
  content: string
}

defineProps<Props>()

const mdContainer = ref<HTMLElement | null>(null)
const isSpeaking = ref(false)

const popup = reactive({
  show: false,
  top: 0,
  left: 0,
  text: '',
})

/**
 * Обрабатывает окончание выделения текста.
 */
function handleSelectionEnd() {
  const selection = window.getSelection()
  const selectedText = selection?.toString().trim() ?? ''

  if (selectedText.length > 0 && mdContainer.value) {
    if (selection && mdContainer.value.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      const containerRect = mdContainer.value.getBoundingClientRect()

      popup.top = rect.top - containerRect.top - 55
      popup.left = rect.left - containerRect.left + rect.width / 2
      popup.text = selectedText
      popup.show = true
      return
    }
  }

  if (selectedText.length === 0) {
    popup.show = false
    if (isSpeaking.value) {
      cancelSpeechHelper(() => { isSpeaking.value = false })
    }
  }
}

/**
 * Скрывает всплывающее окно при клике вне его области.
 */
function handleClickOutside(event: MouseEvent | TouchEvent) {
  const target = event.target as HTMLElement
  if (target.closest('.copy-popup')) {
    return
  }
  popup.show = false
  if (isSpeaking.value) {
    cancelSpeechHelper(() => { isSpeaking.value = false })
  }
}

/**
 * Запускает или останавливает озвучивание текста.
 */
function handleVoiceButtonClick() {
  if (isSpeaking.value) {
    cancelSpeechHelper(() => { isSpeaking.value = false })
  }
  else {
    voiceTextHelper(
      popup.text,
      () => { isSpeaking.value = true }, // onStart
      () => { // onEnd
        isSpeaking.value = false
        popup.show = false
      },
    )
  }
}

onMounted(() => {
  initSpeechSynthesis() // Инициализируем голоса

  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('touchstart', handleClickOutside, { passive: true })
  document.addEventListener('mouseup', handleSelectionEnd)
  document.addEventListener('touchend', handleSelectionEnd, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('touchstart', handleClickOutside)
  document.removeEventListener('mouseup', handleSelectionEnd)
  document.removeEventListener('touchend', handleSelectionEnd)

  if (isSpeaking.value) {
    cancelSpeechHelper(() => { isSpeaking.value = false })
  }
})
</script>

<template>
  <div ref="mdContainer" class="linguistic-analysis-md">
    <v-btn
      v-if="popup.show"
      class="copy-popup"
      :icon="isSpeaking ? 'mdi-stop' : 'mdi-volume-high'"
      size="small"
      :style="{ top: `${popup.top}px`, left: `${popup.left}px` }"
      @click="handleVoiceButtonClick"
    />

    <MarkdownContent
      :content="content"
    />
  </div>
</template>

<style scoped lang="scss">
.linguistic-analysis-md {
  margin: 0;
  position: relative;
  user-select: text;
}

.copy-popup {
  position: absolute;
  z-index: 10;
  transform: translateX(-50%);
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
</style>
