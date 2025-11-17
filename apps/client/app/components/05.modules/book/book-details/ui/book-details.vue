<script lang="ts" setup>
import type { BookDetails } from '~/shared/types'
import { PageLoader } from '~/components/02.shared/page-loader'

const route = useRoute()
const { api } = useApi()
const bookId = computed(() => route.params.id as string)

const { data: book, pending, error } = await useAsyncData<BookDetails>(
  `book-details-${bookId.value}`,
  () => api.books.v1.details({ id: bookId.value }),
)
</script>

<template>
  <div class="book-details-page">
    <PageLoader v-if="pending" />

    <div v-else-if="error" class="error-state">
      <h2>Не удалось загрузить информацию о книге</h2>
      <p>Пожалуйста, попробуйте вернуться в каталог и выбрать книгу еще раз.</p>
      <VBtn :to="RoutePaths.Books.Index()" color="primary">
        Вернуться в каталог
      </VBtn>
    </div>

    <div v-else-if="book" class="details-layout">
      <div class="cover-section">
        <img
          :src="book.coverUrl"
          :alt="`Обложка ${book.title}`"
          class="cover-image"
        >

        <!-- <NuxtImg
          :src="book.coverUrl"
          :alt="`Обложка ${book.title}`"
          class="cover-image"
          provider="ipx"
          format="webp"
          placeholder
        /> -->
        <VBtn
          :to="RoutePaths.Books.Read(bookId)"
          size="large"
          block
          class="read-button"
          rounded
          variant="tonal"
        >
          Начать читать
        </VBtn>
      </div>

      <div class="info-section">
        <div class="info-header">
          <h1 class="title">
            {{ book.title }}
          </h1>
          <h2 class="author">
            {{ book.author }}
          </h2>
          <p v-if="book.originalTitle !== book.title" class="original-title">
            Оригинальное название: {{ book.originalTitle }}
          </p>
        </div>

        <div class="summary card">
          <h3>Аннотация</h3>
          <p>{{ book.summary }}</p>
        </div>

        <div class="language-info card">
          <h3>Информация для изучающих язык</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <h4>Уровень сложности</h4>
              <div class="difficulty-chips">
                <VChip
                  class="ma-1"
                  color="primary"
                  label
                >
                  {{ book.difficultyGeneral }}
                </VChip>
                <VChip
                  class="ma-1"
                  color="secondary"
                  label
                >
                  {{ book.difficultyFormal }}
                </VChip>
              </div>
            </div>

            <div class="stat-card lexical-profile">
              <h4>Лексический профиль</h4>
              <div class="lexical-stat">
                <span class="label">Уникальных слов</span>
                <span class="value">{{ book.uniqueWords.toLocaleString('ru-RU') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.book-details-page {
  width: 100%;
}

.details-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  align-items: start;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.cover-section {
  position: sticky;
  top: #{$header-height + 24px};

  .cover-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;
  }

  .read-button {
    text-transform: none;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--fg-action-color);
    background-color: var(--bg-accent-color);
    border: 1px solid var(--border-button-secondary-color);
  }

  @include mobile {
    position: static;
    display: grid;
    gap: 24px;
    align-items: center;

    .cover-image {
      margin-bottom: 0;
    }
  }
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 24px;

  .info-header {
    padding: 16px;
    background-color: var(--bg-secondary-color);
    border-radius: 12px;
  }

  .title {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .author {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--fg-secondary-color);
    margin-top: 4px;
    margin-bottom: 8px;
  }

  .original-title {
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    font-style: italic;
  }

  .card {
    background-color: var(--bg-secondary-color);
    border-radius: 12px;
    padding: 20px;
  }

  .summary,
  .language-info {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-secondary-color);
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .stat-card {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h4 {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--fg-secondary-color);
    }
  }

  .difficulty-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .lexical-profile {
    gap: 20px;
  }

  .lexical-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    padding: 8px 12px;
    background-color: var(--bg-tertiary-color);
    border-radius: 8px;

    .label {
      color: var(--fg-primary-color);
      font-weight: 500;
    }
    .value {
      font-weight: 600;
      color: var(--fg-accent-color);
    }
  }
}

.error-state {
  text-align: center;
  padding: 40px;
  h2 {
    margin-bottom: 16px;
  }
}
</style>
