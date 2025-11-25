<script setup lang="ts">
import { DayMaterial } from '~/components/05.modules/day-material'

definePageMeta({
  layout: 'base-with-effects',
})
</script>

<template>
  <section class="content-wrapper">
    <DayMaterial />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @include mobile() {
    padding: 8px;
    padding-top: 20px;
  }
}
</style>
