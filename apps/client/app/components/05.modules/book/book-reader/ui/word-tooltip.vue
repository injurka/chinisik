<script lang="ts" setup>
import type { Pronunciation } from '~/shared/types'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { processPinyinForRender } from '../lib/use-processed-pinyin'

interface Props {
  word: string
  translation: string
  pronunciation: Pronunciation
  partOfSpeech: string
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'speak', word: string): void
  (e: 'addToDictionary', word: string): void
  (e: 'close'): void
}>()

const pinyinProps = computed(() => processPinyinForRender(props.pronunciation.pinyin))
</script>

<template>
  <div
    class="word-tooltip"
    @pointerdown.stop
  >
    <div class="tooltip-content">
      <div class="tooltip-header">
        <span class="word">{{ word }}</span>
        <span class="part-of-speech">[{{ partOfSpeech }}]</span>
      </div>
      <div class="tooltip-body">
        <p class="translation">
          {{ translation }}
        </p>
        <p class="pronunciation">
          <PinyinText v-if="pinyinProps" class="pinyin" v-bind="pinyinProps" />
          <span class="palladius">[{{ pronunciation.palladius }}]</span>
        </p>
      </div>
    </div>
    <div class="tooltip-actions">
      <VBtn variant="tonal" size="small" @click.stop="emit('addToDictionary', word)">
        В мой словарь
      </VBtn>
      <VSpacer />
      <VBtn icon variant="tonal" size="small" @click.stop="emit('speak', word)">
        <Icon name="mdi:volume-high" />
      </VBtn>
      <VBtn icon variant="text" size="small" @click.stop="emit('close')">
        <Icon name="mdi:close" />
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.word-tooltip {
  position: absolute;
  width: 280px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.tooltip-content {
  padding: 12px 12px 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tooltip-header {
  display: flex;
  align-items: center;
  gap: 8px;
  .word {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: var(--font-family-cn);
    color: var(--fg-primary-color);
  }
  .part-of-speech {
    font-size: 0.8rem;
    color: var(--fg-tertiary-color);
    font-style: italic;
  }
}

.tooltip-body {
  .translation {
    font-size: 1rem;
    color: var(--fg-action-color);
    font-weight: 500;
    margin: 0;
  }
  .pronunciation {
    font-size: 0.9rem;
    color: var(--fg-secondary-color);
    display: flex;
    gap: 8px;
    align-items: center;
    margin: 4px 0 0 0;
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
