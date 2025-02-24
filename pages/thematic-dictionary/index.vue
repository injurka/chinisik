<script lang="ts" setup>
import { ThematicDictionaryCatalog } from '~/components/modules/thematic-dictionary/thematic-dictionary-catalog'
import { thematicDictionaryDataMock } from '~/server/utils/mock/thematic-dictionary'

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <ThematicDictionaryCatalog
      v-if="data"
      :sections="data"
    />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  padding-top: 20px;

  @include mobile() {
    padding: 8px;
    padding-top: 20px;
  }
}
</style>
