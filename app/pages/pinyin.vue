<script setup lang="ts">
import { PageLoader } from '~/components/02.shared/page-loader'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { PinyinTable } from '~/components/05.modules/pinyin/index'

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
    store.pinyin.getAndSetPinyin(),
    store.pinyin.getAndSetDescriptionKeys(),
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
