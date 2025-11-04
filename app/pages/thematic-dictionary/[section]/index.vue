<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/../server/utils/mock/thematic-dictionary'
import { ThematicDictionarySection } from '~/components/05.modules/thematic-dictionary/thematic-dictionary-section'

const route = useRoute()
const sectionSysname = route.params.section as string

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

const currentSection = data.value?.find(s => s.sysname === sectionSysname) ?? null

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionarySection
      v-if="currentSection"
      :section="currentSection"
      :sections="thematicDictionaryDataMock.catalog"
    />
    <p v-else>
      Раздел не найден.
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
