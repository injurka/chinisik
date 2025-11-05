<script lang="ts" setup>
interface Props {
  maxWidth?: number
}

const { maxWidth = 700 } = defineProps<Props>()
const emits = defineEmits<{ afterLeave: [void] }>()

const maxWidthPx = computed(() => `${maxWidth + 48}px`)

const dialog = defineModel<boolean>({ required: true })
</script>

<template>
  <VDialog
    v-model="dialog"
    class="dialog"
    :style="{ maxWidth: maxWidthPx }"
    @after-leave="emits('afterLeave')"
  >
    <slot />
    <VBtn
      icon
      variant="text"
      class="close"
      @click="dialog = false"
    >
      <Icon size="24" name="mdi:close" />
    </VBtn>
  </VDialog>
</template>

<style lang="scss" scoped>
.dialog {
  .close {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 32px;
    height: 32px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
