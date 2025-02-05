<script setup lang="ts">
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'

defineProps<{ isHidden: boolean }>()

const isExample = defineModel<boolean>({ default: false })
</script>

<template>
  <VBtn
    v-if="!isHidden"
    class="example-btn"
    rounded
    variant="tonal"
    @click="isExample = !isExample"
  >
    <span> {{ isExample ? 'Скрыть' : 'Показать' }} пример для </span>
    <HieroglyphWord
      :variant="0"
      glyph="打电话"
      translate="Привет"
      pinyin="ni hao"
    />
  </VBtn>
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

  .hw-word {
    margin-left: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>
