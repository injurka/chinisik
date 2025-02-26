<script lang="ts" setup>
import LabQuiz from './hsk-lab.vue'

const { api } = useApi()

const isFullscreen = ref<boolean>(false)

const { data } = await useAsyncData(
  'hieroglyph-hsk_lab',
  () => api.hsk.v1.hieroglyphsByLevel({ level: 1 }),
)
</script>

<template>
  <LabQuiz
    v-if="data"
    v-model:fullscreen="isFullscreen"
    :words="data"
  />
</template>

<style lang="scss" scoped>
.hsk-lab {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
