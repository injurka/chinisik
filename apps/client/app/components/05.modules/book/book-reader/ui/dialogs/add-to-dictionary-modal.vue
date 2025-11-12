<script lang="ts" setup>
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'

defineProps<{
  title: string
}>()

const isDialog = defineModel<boolean>({ required: true })
</script>

<template>
  <DialogWithClose v-model="isDialog" :max-width="400">
    <VCard :title="title" class="dialog-content">
      <VCardText>
        <p class="text-center text-grey">
          (функционал в разработке)
        </p>
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn text="Закрыть" @click="isDialog = false" />
      </VCardActions>
    </VCard>
  </DialogWithClose>
</template>

<style scoped lang="scss">
.dialog-content {
  background-color: var(--bg-secondary-color);
  color: var(--fg-primary-color);
  border-radius: 24px !important;
}
</style>
