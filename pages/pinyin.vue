<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import { PinyinTable } from '~/components/modules/pinyin/index'

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
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content">
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
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Rubik';

  width: 100%;
  padding: 16px;

  @include mobile() {
    padding: 2px;
  }

  .description {
    font-size: 1rem;
    max-width: 1200px;
    padding: 18px 14px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
</style>
