<script lang="ts" setup>
import type { BookGeneralDifficulty, BookGenre } from '~/shared/types'

interface Filters {
  search: string
  genre: BookGenre | null
  difficulty: BookGeneralDifficulty | null
}

interface Props {
  genres: string[]
  difficulties: string[]
}

defineProps<Props>()

const model = defineModel<Filters>({ required: true })
</script>

<template>
  <div class="filters-container">
    <div class="search-bar-wrapper">
      <VTextField
        v-model="model.search"
        placeholder="Искать по названию, автору, ISBN..."
        variant="solo"
        density="comfortable"
        hide-details
        prepend-inner-icon="mdi-magnify"
        clearable
        class="main-search-input"
        autofocus
      />
      <VBtn
        color="primary"
        size="large"
        class="search-button"
        variant="tonal"
        elevation="0"
      >
        Поиск
      </VBtn>
    </div>

    <div class="filters-label">
      Дополнительные фильтры
    </div>

    <div class="filter-options">
      <VSelect
        v-model="model.genre"
        :items="genres"
        label="Жанр"
        variant="outlined"
        density="comfortable"
        hide-details
        clearable
        prepend-inner-icon="mdi-shape-outline"
        class="filter-select"
      />
      <VSelect
        v-model="model.difficulty"
        :items="difficulties"
        label="Уровень сложности"
        variant="outlined"
        density="comfortable"
        hide-details
        clearable
        prepend-inner-icon="mdi-stairs"
        class="filter-select"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters-container {
  max-width: 800px;
  margin: 0 auto;
}

.search-bar-wrapper {
  display: flex;
}

.main-search-input {
  flex-grow: 1;

  :deep(.v-field) {
    background-color: var(--bg-primary-color) !important;
    color: var(--fg-primary-color) !important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
}

.search-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 50px !important;
  text-transform: none;
  background-color: var(--bg-accent-color) !important;
  border: 1px solid var(--border-button-secondary-color) !important;
  color: var(--fg-primary-color) !important;
  text-transform: none;
}

.filters-label {
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--fg-secondary-color);
  text-align: center;
}

.filter-options {
  display: flex;
  gap: 16px;
  justify-content: center;

  @include mobile {
    flex-direction: column;
  }
}

.filter-select {
  flex: 1;
  max-width: 280px;

  :deep(.v-field) {
    border-radius: 8px;
  }
}
</style>
