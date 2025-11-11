<script lang="ts" setup>
import { BookDetails } from '~/components/05.modules/book/book-details'

definePageMeta({
  layout: 'base-with-effects',
})
</script>

<template>
  <section class="content-wrapper">
    <BookDetails />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @include mobile() {
    padding: 8px;
    padding-top: 20px;
  }
}
</style>
