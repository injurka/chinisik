<script lang="ts" setup>
import type { Book, BookGeneralDifficulty, BookGenre } from '~/shared/types'
import { PageLoader } from '~/components/02.shared/page-loader'
import BookCard from './book-card.vue'
import BookFilters from './book-filters.vue'

const { api } = useApi()
const { data: books, pending, error } = await useAsyncData<Book[]>('books', () => api.books.v1.all())

const filters = ref({
  search: '',
  genre: null as BookGenre | null,
  difficulty: null as BookGeneralDifficulty | null,
})

const availableGenres = computed(() => {
  if (!books.value)
    return []
  return [...new Set(books.value.map(book => book.genre))]
})

const availableDifficulties = computed(() => {
  if (!books.value)
    return []
  return [...new Set(books.value.map(book => book.difficulty))]
})

const filteredBooks = computed(() => {
  if (!books.value)
    return []

  return books.value.filter((book) => {
    const searchLower = filters.value.search.toLowerCase()
    const titleMatch = book.title.toLowerCase().includes(searchLower)
    const authorMatch = book.author.toLowerCase().includes(searchLower)
    const genreMatch = !filters.value.genre || book.genre === filters.value.genre
    const difficultyMatch = !filters.value.difficulty || book.difficulty === filters.value.difficulty

    return (titleMatch || authorMatch) && genreMatch && difficultyMatch
  })
})
</script>

<template>
  <div class="book-catalog-container">
    <header class="catalog-header">
      <h1 class="header-title">
        Каталог книг
      </h1>
      <p class="header-subtitle">
        Читайте и изучайте китайский язык с помощью адаптированных книг.
      </p>
      <BookFilters
        v-model="filters"
        :genres="availableGenres"
        :difficulties="availableDifficulties"
      />
    </header>

    <div class="catalog-content">
      <PageLoader v-if="pending" />

      <div v-else-if="error" class="error-message">
        <p>Не удалось загрузить книги. Пожалуйста, попробуйте позже.</p>
      </div>

      <div v-else-if="filteredBooks && filteredBooks.length > 0" class="books-grid">
        <BookCard
          v-for="book in filteredBooks"
          :key="book.id"
          :book="book"
        />
      </div>

      <div v-else class="empty-state">
        <p>Книги по вашему запросу не найдены.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.book-catalog-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}

.catalog-header {
  text-align: center;
  padding: 48px 16px;
  background: linear-gradient(to bottom, var(--bg-secondary-color), var(--bg-tertiary-color));
  border-radius: 12px;
}

.header-title {
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--fg-primary-color);
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.header-subtitle {
  font-size: 1.1rem;
  color: var(--fg-secondary-color);
  margin-bottom: 32px;
}

.catalog-content {
  padding: 0 16px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.error-message,
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: var(--bg-secondary-color);
  border-radius: 8px;
  color: var(--fg-secondary-color);
  font-size: 1.1rem;
}
</style>
