<script lang="ts" setup>
import { BookCatalog } from '~/components/05.modules/book/book-catalog'

definePageMeta({
  layout: 'base-with-effects',
})
</script>

<template>
  <section class="content-wrapper">
    <BookCatalog />
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
