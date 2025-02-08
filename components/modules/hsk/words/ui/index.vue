<script lang="ts" setup>
import type { PinyinTextProps, PinyinTextTone } from '~/components/domain/pinyin-text'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import PageLoader from '~/components/shared/page-loader/ui/page-loader.vue'

const HSK_LEVEL = 1
const ITEMS_PER_PAGE_DEFAULT = 30
const VISIBLE_PAGES = 7
const KEY = 'hieroglyph-hsk_words'

const page = ref(1)
const itemsPerPage = ref(ITEMS_PER_PAGE_DEFAULT)

const { data, refresh, status } = await useAsyncData(
  KEY,
  () => useRequest({
    key: KEY,
    fn: ({ api }) => api.hsk.v1.hieroglyphsByLevelList({
      level: HSK_LEVEL,
      page: page.value,
      limit: itemsPerPage.value,
    }),
  }),
  { dedupe: 'defer' },
)

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

watch([page, itemsPerPage], () => {
  refresh()
})
</script>

<template>
  <div class="hsk-words">
    <PageLoader v-if="isLoading" class="loader" />

    <div v-else-if="data?.data" class="words-list">
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
        :total-visible="VISIBLE_PAGES"
        class="mt-4"
        color="primary"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hsk-words {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .words-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .loader {
    margin-top: 100px;
  }
}
</style>
