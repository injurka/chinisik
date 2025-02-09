<script lang="ts" setup>
import type { PinyinTextProps, PinyinTextTone } from '~/components/domain/pinyin-text'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import PageLoader from '~/components/shared/page-loader/ui/page-loader.vue'

const HSK_LEVELS = Array.from({ length: 9 }, (_, i) => i + 1)
const ITEMS_PER_PAGE_DEFAULT = 30
const VISIBLE_PAGES = 7
const MOBILE_VISIBLE_PAGES = 3
const KEY = 'hieroglyph-hsk_words'
const SEARCH_DEBOUNCE = 300

const page = ref<number>(1)
const searchKeyword = ref<string>('')
const selectedLevel = ref<number>(1)
const itemsPerPage = ref<number>(ITEMS_PER_PAGE_DEFAULT)

const { isMobile } = useDevice()
const { data, refresh, status } = await useAsyncData(
  KEY,
  () => useRequest({
    key: KEY,
    fn: ({ api }) => api.hsk.v1.hieroglyphsByLevelList({
      level: selectedLevel.value,
      page: page.value,
      limit: itemsPerPage.value,
      keyword: searchKeyword.value,
    }),
  }),
  { dedupe: 'defer' },
)
const debouncedRefresh = useDebounceFn(() => refresh(), SEARCH_DEBOUNCE)

const isLoading = computed(() => status.value === 'pending')

const totalPages = computed(() => {
  const total = data.value?.data?.pagination?.total
  if (!total)
    return 0
  return Math.ceil(total / itemsPerPage.value)
})

function formatPinyinData(pinyinArray: HieroglyphHsk['pinyin']): PinyinTextProps {
  return {
    pinyin: pinyinArray.map(p => p.syllable).join(' '),
    tone: pinyinArray.map((p, index, array) => {
      const offset = array
        .slice(0, index)
        .reduce((sum, curr) => sum + curr.syllable.length + 1, 0)

      return {
        index: offset + p.position,
        type: p.tone,
      }
    }) as unknown as PinyinTextTone,
  }
}

watch(searchKeyword, () => {
  page.value = 1
  debouncedRefresh()
})
watch([page, itemsPerPage, selectedLevel], () => {
  refresh()
})
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
    </div>

    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data?.data.length" class="words-list">
      <HieroglyphWord
        v-for="item in data.data.data"
        :key="item.id"
        :variant="5"
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
