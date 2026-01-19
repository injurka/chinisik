<script setup lang="ts">
defineProps<{ isHidden: boolean }>()

const isExample = defineModel<boolean>({ default: false })
</script>

<template>
  <v-btn
    v-if="!isHidden"
    class="example-btn"
    rounded
    variant="tonal"
    @click="isExample = !isExample"
  >
    <span> {{ isExample ? 'Скрыть' : 'Показать' }} пример для 打电话</span>
  </v-btn>
</template>

<style scoped lang="scss">
.example-btn {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-action-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>
