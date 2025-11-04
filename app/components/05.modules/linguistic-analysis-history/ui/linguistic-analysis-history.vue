<script setup lang="ts">
import PageLoader from '~/components/02.shared/page-loader/ui/page-loader.vue'
import { useLinguisticAnalysisList } from '../composable/linguistic-analysis-list'

const {
  VISIBLE_PAGES,
  MOBILE_VISIBLE_PAGES,
  page,
  isMobile,
  data,
  totalPages,
  isLoading,
} = await useLinguisticAnalysisList()

function formatDate(dateString: string | Date | undefined): string {
  if (!dateString)
    return 'N/A'
  try {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString
    return date.toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })
  }
  catch (e) {
    console.error('Error formatting date:', dateString, e)
    return 'Invalid Date'
  }
}
</script>

<template>
  <section class="linguistic-analysis-page">
    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data?.length" class="analysis-list-container">
      <div class="analysis-list">
        <v-card
          v-for="item in data.data"
          :key="item.id"
          class="analysis-item"
          variant="tonal"
        >
          <v-card-text>
            <p><strong>Символ:</strong> {{ item.glyph }}</p>
            <p><strong>Исходный текст:</strong> {{ item.sourceValue }}</p>
            <p><strong>Тип:</strong> {{ item.type }}</p>
            <p><strong>Модель:</strong> {{ item.model }}</p>
            <p><strong>Токены:</strong> {{ item.totalTokens }}</p>
            <p><strong>Время генерации (мс):</strong> {{ item.generationDuration }}</p>
            <p><strong>Создано:</strong> {{ formatDate(item.createdAt) }}</p>
            <p><strong>Тип данных:</strong> {{ item.dataType }}</p>
          </v-card-text>
        </v-card>
      </div>

      <VPagination
        v-if="totalPages > 1"
        v-model="page"
        :length="totalPages"
        :total-visible="isMobile ? MOBILE_VISIBLE_PAGES : VISIBLE_PAGES"
        class="pagination-controls"
        color="primary"
        density="comfortable"
      />
    </div>

    <div v-else class="empty">
      <NuxtImg
        width="200"
        height="200"
        src="/images/not-found.gif"
      />
      <span v-if="data?.data">
        Ошибка получения данных :(
      </span>
      <span v-else>
        Ничего не найдено :(
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.linguistic-analysis-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  .analysis-list-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .analysis-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 1rem;
  }

  .analysis-item {
    p {
      display: flex;
      margin-bottom: 4px;
      font-size: 0.9rem;

      strong {
        margin-right: 0.5em;
        color: var(--v-theme-primary);
      }
    }
  }

  &:deep(.v-pagination__list) {
    .v-btn {
      color: var(--fg-accent-color) !important;
    }
  }

  .empty {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 0;

    > img {
      box-shadow: 0 0 30px var(--bg-error-color);
      border: 2px solid var(--border-primary-color);
      border-radius: 8px;
    }

    > span {
      margin: 0 auto;
      font-size: 1.2rem;
      margin-top: 24px;
      color: var(--fg-secondary-color) !important;
    }
  }
  .loader {
    margin-top: 100px;
  }
}
</style>
