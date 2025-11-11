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

const languageNames: Record<string, string> = {
  en: 'Английский',
  fr: 'Французский',
  es: 'Испанский',
  de: 'Немецкий',
  jp: 'Японский',
}
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
        <NuxtImg
          :src="book.coverUrl"
          :alt="`Обложка ${book.title}`"
          class="cover-image"
          provider="ipx"
          format="webp"
          placeholder
        />
      </div>

      <div class="info-section">
        <h1 class="title">
          {{ book.title }}
        </h1>
        <h2 class="author">
          {{ book.author }}
        </h2>
        <p v-if="book.originalTitle !== book.title" class="original-title">
          Оригинальное название: {{ book.originalTitle }}
        </p>

        <div class="summary">
          <h3>Аннотация</h3>
          <p>{{ book.summary }}</p>
        </div>

        <div class="language-info">
          <h3>Информация для изучающих язык</h3>
          <div class="stats-grid">
            <VCard variant="tonal" class="stat-card">
              <VCardTitle>Уровни сложности</VCardTitle>
              <VCardText>
                <VChip
                  v-for="(level, lang) in book.difficultyLevels"
                  :key="lang"
                  class="ma-1"
                  color="primary"
                  label
                >
                  {{ languageNames[lang] }}: {{ level }}
                </VChip>
              </VCardText>
            </VCard>

            <VCard variant="tonal" class="stat-card">
              <VCardTitle>Лексический профиль</VCardTitle>
              <VCardText>
                <div class="lexical-item">
                  <strong>Уникальных слов:</strong> {{ book.lexicalProfile.uniqueWords.toLocaleString('ru-RU') }}
                </div>
                <div class="lexical-item">
                  <strong>Базовая лексика:</strong>
                  <VProgressLinear
                    :model-value="book.lexicalProfile.basicVocabularyPercentage"
                    color="success"
                    height="20"
                    rounded
                  >
                    <strong>{{ book.lexicalProfile.basicVocabularyPercentage }}%</strong>
                  </VProgressLinear>
                </div>
                <div class="lexical-item">
                  <strong>Продвинутая лексика:</strong>
                  <VProgressLinear
                    :model-value="book.lexicalProfile.advancedVocabularyPercentage"
                    color="warning"
                    height="20"
                    rounded
                  >
                    <strong>{{ book.lexicalProfile.advancedVocabularyPercentage }}%</strong>
                  </VProgressLinear>
                </div>
              </VCardText>
            </VCard>
          </div>
        </div>

        <VBtn
          :to="RoutePaths.Books.Read(bookId)"
          color="primary"
          size="x-large"
          block
          class="read-button"
        >
          Начать читать
        </VBtn>
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
  grid-template-columns: 300px 1fr;
  gap: 32px;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.cover-section {
  .cover-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
}

.info-section {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.2;
  }

  .author {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--fg-secondary-color);
    margin-bottom: 8px;
  }

  .original-title {
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    font-style: italic;
  }

  .summary,
  .language-info {
    margin-top: 24px;
    h3 {
      font-size: 1.3rem;
      margin-bottom: 12px;
      border-bottom: 1px solid var(--border-secondary-color);
      padding-bottom: 8px;
    }
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .lexical-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    strong {
      flex-shrink: 0;
    }
    .v-progress-linear {
      flex-grow: 1;
    }
  }

  .read-button {
    margin-top: 32px;
    text-transform: none;
    font-size: 1.2rem;
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
