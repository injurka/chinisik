<script lang="ts" setup>
interface Props {
  pinyin: string
  initialWithFinal: InitialWithFinal
}
defineProps<Props>()

const dialog = defineModel<boolean>()
</script>

<template>
  <ClientOnly>
    <VDialog
      v-model="dialog"
      class="dialog"
    >
      <div class="dialog-wrapper">
        <div class="content">
          <span
            v-for="item in initialWithFinal[pinyin]"
            :key="item"
          >
            {{ pinyin.split('+').join('') }} - {{ item }}
          </span>
        </div>
      </div>

      <VBtn
        icon
        variant="text"
        class="close"
        @click="dialog = false"
      >
        <Icon size="24" name="line-md:close-small" />
      </VBtn>
    </VDialog>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dialog {
  max-width: 800px;

  &-wrapper {
    display: flex;
    flex-direction: column;

    padding: 16px;

    position: relative;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-dark-color);
    border: 1px solid var(--border-primary-color);

    border-radius: 24px;
    width: 100%;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;
    }
  }

  .close {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 32px;
    height: 32px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
