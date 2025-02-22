<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import { PinyinTable } from '~/components/modules/pinyin/index'
import { PageLoader } from '~/components/shared/page-loader'

const store = useStore(['pinyin'])
const {
  isLoadingContent,
  finals,
  initials,
  initialWithFinal,
  description,
} = storeToRefs(store.pinyin)

await useAsyncData(
  'pinyin',
  () => Promise.all([
    store.pinyin.getPinyin(),
    store.pinyin.getDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content-wrapper">
    <JsonToDom
      :node="description!"
    />

    <PinyinTable
      :finals="finals!"
      :initials="initials!"
      :initial-with-final="initialWithFinal!"
    />
  </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
  max-width: 100%;
}
</style>
