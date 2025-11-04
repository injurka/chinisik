<script setup lang="ts">
import { LinguisticAnalysisHistory } from '~/components/05.modules/linguistic-analysis-history'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <h1 class="page-title">
      История лексического анализа
    </h1>
    <LinguisticAnalysisHistory />
  </section>
</template>

<style lang="scss" scoped>
.page-title {
  text-align: center;
}
</style>
