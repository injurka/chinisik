<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import LabQuiz from './hsk-lab.vue'

const isFullscreen = ref<boolean>(false)

const mockTestQuestion: any[] = []
const contentEl = ref<HTMLElement>()
</script>

<template>
  <LabQuiz
    v-if="!isFullscreen"
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
        <LabQuiz
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

<style lang="scss" scoped>
.hsk-lab {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
