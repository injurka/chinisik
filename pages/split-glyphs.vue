<script setup lang="ts">
import type { JsonToDomChildren } from '~/components/domain/json-to-dom'
import { JsonToDom } from '~/components/domain/json-to-dom'
import { SplitGlyphs } from '~/components/modules/split-glyphs'

const store = useStore(['keys'])
const { isLoadingContent } = storeToRefs(store.keys)

const description: JsonToDomChildren = {
  tag: 'div',
  class: 'description',
  children: [
    {
      tag: 'h2',
      children: 'Разбор иероглифа на его состовляющие',
    },
    {
      tag: 'p',
      children: 'В данном разделе вы можете раздробить какой либо иероглиф на его составлющие.',
    },
  ],
}

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAllKeys(),
    store.keys.getDescriptionKeys(),
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
  <section v-if="isLoadingContent" class="loader">
    <Icon name="line-md:loading-loop" />
  </section>
  <section v-else class="content">
    <JsonToDom :node="description" />

    <SplitGlyphs />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @include mobile {
    padding: 4px;
  }

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 16px 6px;
    padding-bottom: 0;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
  font-size: 4rem;
  color: var(--fg-accent-color);
}
</style>
