<script lang="ts" setup>
import type { Book } from '~/shared/types'

interface Props {
  book: Book
}

defineProps<Props>()
</script>

<template>
  <VCard
    class="book-card"
    :to="RoutePaths.Books.Details(book.id)"
    hover
  >
    <img
      :src="book.coverUrl"
      :alt="`Обложка книги ${book.title}`"
      class="book-card-cover"
      height="300"
    >
    <!-- <NuxtImg
      :src="book.coverUrl"
      :alt="`Обложка книги ${book.title}`"
      class="book-card-cover"
      height="300"
      provider="ipx"
      format="webp"
      placeholder
    /> -->
    <VCardTitle class="book-card-title">
      {{ book.title }}
    </VCardTitle>
    <VCardSubtitle class="book-card-author">
      {{ book.author }}
    </VCardSubtitle>
  </VCard>
</template>

<style scoped lang="scss">
.book-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  &-cover {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  &-title {
    font-size: 1rem;
    line-height: 1.2;
    padding-bottom: 4px;
    white-space: normal;
    background-color: var(--bg-secondary-color);
    color: var(--fg-primary-color);
  }

  &-author {
    font-size: 0.85rem;
    background-color: var(--bg-secondary-color);
    color: var(--fg-primary-color);
  }
}
</style>
