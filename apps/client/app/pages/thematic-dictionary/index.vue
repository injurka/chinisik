<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/../server/utils/mock/thematic-dictionary'
import { ThematicDictionaryCatalog } from '~/components/05.modules/thematic-dictionary/thematic-dictionary-catalog'

const { data } = await useAsyncData('thematic-dictionary-catalog', async () => {
  return thematicDictionaryDataMock.catalog
})

useSeoMeta({
  title: 'Тематический словарь китайского языка',
  description: 'Учите китайские слова по темам: Путешествия, Еда, Семья, Работа и многое другое. Структурированные подборки лексики для быстрого пополнения словарного запаса.',
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
