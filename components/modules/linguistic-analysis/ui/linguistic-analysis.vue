<script setup lang="ts">
import { linguisticAnalysisMock } from '~/server/utils/mock/linguistic-analysis'
</script>

<template>
  <div class="content">
    {{ linguisticAnalysisMock }}
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.loader {
  margin: 0 auto;
  font-size: 4rem;
  color: var(--fg-accent-color);
}
</style>
