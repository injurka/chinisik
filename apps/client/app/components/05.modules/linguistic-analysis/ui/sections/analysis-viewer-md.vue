<script setup lang="ts">
import { MarkdownContent } from '~/components/02.shared/markdown-content'
import { useTextToSpeechPopup } from '~/shared/composables'

interface Props {
  content: string
}

defineProps<Props>()

const mdContainer = ref<HTMLElement | null>(null)
const { popup, isSpeaking, handleVoiceButtonClick } = useTextToSpeechPopup(
  mdContainer,
  {
    popupOffset: { top: -80 },
    popupClass: 'speech-popup',
  },
)
</script>

<template>
  <div ref="mdContainer" class="linguistic-analysis-md">
    <v-btn
      v-if="popup.show"
      class="speech-popup"
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

.speech-popup {
  position: absolute;
  z-index: 10;
  transform: translateX(-50%);
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
</style>
