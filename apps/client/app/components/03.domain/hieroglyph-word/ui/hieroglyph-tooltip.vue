<script setup lang="ts">
const emit = defineEmits<{
  (e: 'copy'): void
  (e: 'speak'): void
  (e: 'analyze'): void
}>()
</script>

<template>
  <div class="hieroglyph-tooltip">
    <VBtn
      icon
      variant="tonal"
      size="small"
      @click.stop="emit('copy')"
    >
      <VTooltip activator="parent" location="top">
        Копировать
      </VTooltip>
      <Icon size="18" name="mdi:content-copy" />
    </VBtn>
    <VBtn
      icon
      variant="tonal"
      size="small"
      @click.stop="emit('speak')"
    >
      <VTooltip activator="parent" location="top">
        Озвучить
      </VTooltip>
      <Icon size="18" name="mdi:volume-high" />
    </VBtn>
    <VBtn
      icon
      variant="tonal"
      size="small"
      @click.stop="emit('analyze')"
    >
      <VTooltip activator="parent" location="top">
        Лексический анализ
      </VTooltip>
      <Icon size="18" name="mdi:text-box-search-outline" />
    </VBtn>
  </div>
</template>

<style scoped lang="scss">
.hieroglyph-tooltip {
  display: flex;
  gap: 4px;
  padding: 4px;
  background-color: var(--bg-tertiary-color) !important;
  border-radius: 16px;
  border: 1px solid var(--border-secondary-color);
}
</style>
