<script lang="ts" setup>
import type { Chapter } from '~/shared/types'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'

interface Props {
  chapters: Chapter[]
  currentChapterId?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'selectChapter', page: number): void
}>()

const isDialog = defineModel<boolean>({ required: true })

function handleChapterClick(page: number) {
  emit('selectChapter', page)
  isDialog.value = false
}
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-chapters"
    :max-width="500"
  >
    <div class="dialog-chapters-wrapper">
      <h2 class="dialog-title">
        Оглавление
      </h2>

      <div class="chapters-list">
        <div
          v-for="chapter in props.chapters"
          :key="chapter.id"
          v-ripple
          class="chapter-item"
          :class="{ active: chapter.id === props.currentChapterId }"
          @click="handleChapterClick(chapter.startPage)"
        >
          <span class="chapter-title">{{ chapter.title }}</span>
          <span class="chapter-page">Страница {{ chapter.startPage }}</span>
        </div>
      </div>
    </div>
  </DialogWithClose>
</template>

<style scoped lang="scss">
.dialog-chapters {
  .dialog-title {
    color: var(--fg-primary-color);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 10px 20px;
    border-bottom: 1px solid var(--border-primary-color);
    margin: 0;
  }

  .chapters-list {
    padding: 8px;
    overflow-y: auto;
    flex-grow: 1;
  }

  .chapter-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    color: var(--fg-secondary-color);
    border-radius: 8px;
    margin: 4px 0;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background-color: var(--bg-tertiary-color);
      color: var(--fg-primary-color);
    }

    &.active {
      background-color: var(--bg-accent-color);
      color: var(--fg-primary-color) !important;
      font-weight: 500;

      .chapter-page {
        color: var(--fg-primary-color);
        opacity: 0.8;
      }
    }
  }

  .chapter-title {
    font-size: 1rem;
  }

  .chapter-page {
    font-size: 0.85rem;
    color: var(--fg-tertiary-color);
  }

  &-wrapper {
    height: 90vh;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 16px 32px;
    overflow: scroll;

    @include mobile() {
      padding: 8px;
    }
  }
}
</style>
