<script lang="ts" setup>
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import HskWordsControl from '~/components/modules/hsk/words/ui/hsk-words-control.vue'
import PageLoader from '~/components/shared/page-loader/ui/page-loader.vue'
import { useHskControls, useHskWords, usePinyinFormatter } from '../composables'

const {
  HSK_LEVELS,
  VISIBLE_PAGES,
  MOBILE_VISIBLE_PAGES,
  page,
  searchKeyword,
  selectedLevel,
  isMobile,
  data,
  isLoading,
  totalPages,
  error,
} = await useHskWords()

const { formatPinyinData } = usePinyinFormatter()
const { controlMenu, controls, toggleControl } = useHskControls()
</script>

<template>
  <div class="hsk-words">
    <div class="controls">
      <v-select
        v-model="selectedLevel"
        :items="HSK_LEVELS"
        class="controls-hsk"
        label="HSK"
        variant="outlined"
        density="comfortable"
        hide-details
        prepend-inner-icon="mdi-trophy-outline"
      />
      <v-text-field
        v-model="searchKeyword"
        label="Поиск"
        placeholder="Введите иероглиф, пиньин или перевод..."
        class="controls-keyword"
        clearable
        outlined
        hide-details
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="comfortable"
      />
      <v-menu
        v-model="controlMenu"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            variant="plain"
            v-bind="props"
          >
            <Icon size="24" name="mdi-tune" />
          </v-btn>
        </template>

        <HskWordsControl v-model="controls" @toggle-control="toggleControl" />
      </v-menu>
    </div>

    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data?.length && !error?.data" class="words-list">
      <HieroglyphWord
        v-for="item in data.data"
        :key="item.id"
        :variant="controls.isFixedStyle ? 5 : undefined"
        :glyph="item.glyph"
        :translate="item.translation.ru"
        :pinyin="formatPinyinData(item.pinyin)"
      />

      <v-pagination
        v-model="page"
        :length="totalPages"
        :total-visible="isMobile ? MOBILE_VISIBLE_PAGES : VISIBLE_PAGES"
        color="primary"
      />
    </div>

    <div v-else class="empty">
      <NuxtImg
        width="200"
        height="200"
        src="/images/not-found.gif"
      />
      <span v-if="error?.data">
        Ошибка получения данных :(
      </span>
      <span v-else>
        Ничего не найдено :(
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hsk-words {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  &:deep(.v-pagination__list) {
    .v-btn {
      color: var(--fg-accent-color) !important;
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    margin-top: 16px;

    &-hsk {
      max-width: 100px;
    }

    @include mobile() {
      flex-direction: column;
      gap: 8px;

      &-hsk {
        max-width: 100%;
      }
    }
  }
  .words-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include mobile {
      font-size: 0.9rem;

      &:deep(.hw-word) {
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
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
