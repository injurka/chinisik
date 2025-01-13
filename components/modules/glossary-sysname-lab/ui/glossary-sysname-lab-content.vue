<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import { mockTestQuestion } from '~/server/utils/mock/quiz'
import LabSettings from './sections/lab-settings.vue'
import LabTest from './sections/lab-test.vue'

const isTestActive = ref<boolean>(false)
const isFullscreen = ref<boolean>(false)
const contentEl = ref<HTMLElement>()

function handleStartTest() {
  isTestActive.value = true
}

onMounted(() => {
  // console.log('>', contentEl.value?.offsetWidth)
})
</script>

<template>
  <LabSettings
    v-if="isTestActive"
    @start-test="handleStartTest"
  />
  <LabTest
    v-else-if="!isFullscreen"
    v-model:fullscreen="isFullscreen"
    :test="mockTestQuestion"
  />

  <ClientOnly>
    <v-dialog
      v-model="isFullscreen"
      class="dialog"
      persistent
    >
      <div
        ref="contentEl"
        class="dialog-content"
      >
        <LabTest
          v-model:fullscreen="isFullscreen"
          class="fullscreen"
          :test="mockTestQuestion"
        />
        <HaoticLines
          v-if="isFullscreen"
          :speed="2"
          :weight-stroke="50"
          :points-counts="10"
          :cap="false"
          :viewport-el="contentEl"
          color="--bg-overlay-secondary-color"
        />
      </div>
    </v-dialog>
  </ClientOnly>
</template>

<style scoped lang="scss">
:deep(.haotic-line) {
  filter: blur(100px);
  z-index: 1;
}

:deep() {
  .word {
    &.variant-4 {
      padding-left: 0px !important;
      border: none;
      border-left: 3px dashed var(--border-accent-color);
      border-right: 3px dashed var(--border-accent-color);
      border-radius: 0;
      width: 100%;
    }
  }
}

.lab {
  width: 100%;
  margin-top: 32px;
}

.dialog {
  max-width: 1000px;
  max-height: 1000px;

  :deep() {
    .v-overlay__scrim {
      background-color: var(--bg-inverted-color);
      opacity: 0.5 !important;
    }
    .v-overlay__content {
      max-height: 800px;
      height: 100%;
    }
  }

  &-wrapper {
    width: 100%;
    height: 100%;
  }
  &-content {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);
    border-radius: 24px !important;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
}
</style>
