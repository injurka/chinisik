<script lang="ts" setup>
import LabQuiz from './hsk-lab.vue'

const KEY = 'hieroglyph-hsk_lab'

const isFullscreen = ref<boolean>(false)

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
    v-model:fullscreen="isFullscreen"
    :words="data.data"
  />
</template>

<style lang="scss" scoped>
.hsk-lab {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
