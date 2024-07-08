<script lang="ts" setup>
definePageMeta({ layout: 'base' })
</script>

<template>
  <section class="content">
    quiz
  </section>
</template>

<style lang="scss">
.content {
  padding: 16px;

  @include mobile() {
    padding: 12px;
  }
}
</style>
