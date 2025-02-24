<script lang="ts" setup>
import { ThematicDictionaryCategory } from '~/components/modules/thematic-dictionary/thematic-dictionary-category'
import { thematicDictionaryDataMock } from '~/server/utils/mock/thematic-dictionary'

const route = useRoute()
const categorySysname = route.params.category as string
const sectionSysname = route.params.section as string

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

const currentSection = data.value?.find(s => s.sysname === sectionSysname) ?? null
const currentCategory = currentSection?.categories.find(c => c.sysname === categorySysname) ?? null

const nextCategory = computed(() => {
  if (!currentSection || !currentCategory)
    return null

  const currentIndex = currentSection.categories.findIndex(cat => cat.sysname === currentCategory?.sysname)
  if (currentIndex === -1 || currentIndex === currentSection.categories.length - 1)
    return null

  return currentSection.categories[currentIndex + 1]
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionaryCategory
      v-if="currentCategory && currentSection"
      :category="currentCategory"
      :section="currentSection"
      :next-category="nextCategory!"
    />
    <p v-else>
      Категория не найдена.
    </p>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  @include mobile() {
    padding: 8px;
  }
}
</style>
