<script setup lang="ts">
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
    [sysname]
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
}
</style>
