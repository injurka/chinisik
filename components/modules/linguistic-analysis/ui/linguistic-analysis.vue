<script setup lang="ts">
import { PageLoader } from '~/components/shared/page-loader'
import { useLinguisticAnalysisContent } from '../composable'

import AnalysisViewer from './sections/analysis-viewer.vue'
import Control from './sections/control.vue'
import ExampleBtn from './sections/example-btn.vue'

const isExample = ref<boolean>(false)

const {
  content,
  analyze,
  control,
  isLoadingSubmit,
  isAnalyzedText,
  errorSubmit,

} = useLinguisticAnalysisContent({ isExampleEnable: isExample })
</script>

<template>
  <div class="content">
    <Control
      v-model="control.value"
      :disabled="isLoadingSubmit"
      @submit="analyze"
    />
    <ExampleBtn
      v-model="isExample"
      :is-hidden="isAnalyzedText || isLoadingSubmit"
    />

    <PageLoader v-if="isLoadingSubmit" />
    <AnalysisViewer v-else-if="!!content" :content="content" />

    <VSnackbar
      :model-value="!!errorSubmit"
      :timeout="2000"
      color="red"
    >
      <div>
        {{ errorSubmit?.message }}
      </div>
    </VSnackbar>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
