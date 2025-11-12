<script lang="ts" setup>
import type { Sentence } from '~/shared/types'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { processPinyinForRender } from '../lib/use-processed-pinyin'
import { AddToDictionaryModal, LexicalAnalysisModal } from './dialogs'

interface Props {
  sentence: Sentence
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'speak', sentence: string): void
  (e: 'bookmark', sentence: string): void
  (e: 'close'): void
}>()

const isAddToBookmarksModalOpen = ref(false)
const isLexicalAnalysisModalOpen = ref(false)

const fullPinyinLine = computed(() => {
  let result = ''
  let lastIndex = 0
  props.sentence.words.forEach((word) => {
    const [start, end] = word.indices
    if (start > lastIndex) {
      const nonWordPart = props.sentence.originalText.substring(lastIndex, start)
      result += ' '.repeat(nonWordPart.length)
    }
    result += word.pronunciation.pinyin
    lastIndex = end
  })
  if (lastIndex < props.sentence.originalText.length) {
    const remainingPart = props.sentence.originalText.substring(lastIndex)
    result += ' '.repeat(remainingPart.length)
  }
  return result
})

const pinyinProps = computed(() => processPinyinForRender(fullPinyinLine.value))
</script>

<template>
  <div
    class="sentence-tooltip"
  >
    <div class="tooltip-content">
      <div class="original-sentence">
        {{ sentence.originalText }}
      </div>
      <PinyinText v-if="pinyinProps" class="pinyin-line" v-bind="pinyinProps" />
      <p class="translated-sentence">
        {{ sentence.translation }}
      </p>
    </div>
    <div class="tooltip-actions">
      <VBtn icon variant="tonal" size="small" @click.stop="isAddToBookmarksModalOpen = true">
        <VTooltip activator="parent" location="top">
          В закладки
        </VTooltip>
        <Icon name="mdi:bookmark-plus-outline" />
      </VBtn>
      <VBtn icon variant="tonal" size="small" @click.stop="isLexicalAnalysisModalOpen = true">
        <VTooltip activator="parent" location="top">
          Лексический анализ
        </VTooltip>
        <Icon name="mdi:text-box-search-outline" />
      </VBtn>
      <VBtn icon variant="tonal" size="small" @click.stop="emit('speak', sentence.originalText)">
        <Icon name="mdi:volume-high" />
      </VBtn>
      <VSpacer />
      <VBtn icon variant="text" size="small" @click.stop="emit('close')">
        <Icon name="mdi:close" />
      </VBtn>
    </div>

    <AddToDictionaryModal
      v-model="isAddToBookmarksModalOpen"
      title="Добавить в закладки"
    />
    <LexicalAnalysisModal
      v-model="isLexicalAnalysisModalOpen"
      :text-to-analyze="sentence.originalText"
    />
  </div>
</template>

<style scoped lang="scss">
.sentence-tooltip {
  position: absolute;
  width: clamp(300px, 90vw, 500px);
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 8px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  z-index: 101;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.tooltip-content {
  padding: 16px;
  .original-sentence {
    font-size: 1rem;
    font-family: var(--font-family-cn);
    color: var(--fg-secondary-color);
    margin-bottom: 4px;
    line-height: 1.5;
  }
  .pinyin-line {
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    margin-bottom: 12px;
    line-height: 1.4;
    letter-spacing: 0.5px;
    flex-wrap: wrap;
    justify-content: flex-start;
    word-break: break-word;
  }
  .translated-sentence {
    font-size: 1rem;
    color: var(--fg-primary-color);
    font-weight: 500;
    border-top: 1px dashed var(--border-secondary-color);
    padding-top: 12px;
  }
}

.tooltip-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: var(--bg-tertiary-color);
  border-top: 1px solid var(--border-secondary-color);
  border-radius: 0 0 8px 8px;

  .v-btn {
    text-transform: none;
  }
}
</style>
