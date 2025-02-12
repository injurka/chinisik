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

    <div v-else-if="data?.data?.data.length" class="words-list">
      <HieroglyphWord
        v-for="item in data.data.data"
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
      Ничего не найдено :(
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
    margin: 0 auto;
    font-size: 1.5rem;
    margin-top: 32px;
    color: var(--fg-secondary-color) !important;
  }
  .loader {
    margin-top: 100px;
  }
}
</style>
