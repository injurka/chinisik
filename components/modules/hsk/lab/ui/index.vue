<script lang="ts" setup>
// import { HaoticLines } from '~/components/domain/haotic-lines'
import LabQuiz from './hsk-lab.vue'

const KEY = 'hieroglyph-hsk_lab'

// const isFullscreen = ref<boolean>(false)
// const contentEl = ref<HTMLElement>()

const { data } = await useAsyncData(
  KEY,
  () => useRequest({
    key: KEY,
    fn: ({ api }) => api.hsk.v1.hieroglyphsByLevel({ level: 1 }),
  }),
  { dedupe: 'defer' },
)
</script>

<template>
  <LabQuiz
    v-if="data?.data"
    :words="data.data"
  />

  <!-- <ClientOnly>
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
  </ClientOnly> -->
</template>

<style lang="scss" scoped>
.hsk-lab {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
