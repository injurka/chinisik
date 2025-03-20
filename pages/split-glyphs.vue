<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import { SplitGlyphs } from '~/components/modules/split-glyphs'
import { PageLoader } from '~/components/shared/page-loader'
import { mockCms } from '~/server/utils/mock/cms/description'

const store = useStore(['keys'])
const { isLoadingContent } = storeToRefs(store.keys)

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAndSetAllKeys(),
    store.keys.getAndSetDescriptionKeys(),
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
    <div class="deprecated">
      УСТАРЕВШИЙ ФУНКЦИОНАЛ
    </div>
    <JsonToDom :node="mockCms.splitGlyphs!" />
    <SplitGlyphs />
  </section>
</template>

<style scoped lang="scss">
.deprecated {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(230, 173, 0);
  letter-spacing: 3px;
  border-top: 1px solid var(--border-primary-color);
  border-bottom: 1px solid var(--border-primary-color);
  margin-bottom: 32px;
  font-size: 0.8rem;
  font-weight: 500;
}

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
    padding: 0 6px;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
</style>
