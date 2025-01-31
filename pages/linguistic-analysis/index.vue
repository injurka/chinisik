<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import { LinguisticAnalysis } from '~/components/modules/linguistic-analysis'

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content">
    <!-- <JsonToDom :node="mockCms.splitGlyphs!" /> -->
    <LinguisticAnalysis />
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
    padding: 0 6px;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
</style>
