<script setup lang="ts">
import { computed, ref } from 'vue'
import { linguisticAnalysisMdMock, linguisticAnalysisMock } from '~/../server/utils/mock/linguistic-analysis'
import { PageLoader } from '~/components/02.shared/page-loader'
import { useLinguisticAnalysisContent } from '../composable'

import AnalysisViewerMd from './sections/analysis-viewer-md.vue'
import AnalysisViewer from './sections/analysis-viewer.vue'
import Control from './sections/control.vue'
import ExampleBtn from './sections/example-btn.vue'

const isExample = ref(false)

const {
  analyzedText,
  analyzedTextMd,
  analyze,
  control,
  isLoadingSubmit,
  isAnalyzedText,
  errorSubmit,
} = useLinguisticAnalysisContent()

// Computed properties для условий отображения
const showAnalysisViewer = computed(() => (!!analyzedText.value || isExample.value) && control.value.dataType === 'json')
const showAnalysisViewerMd = computed(() => !!analyzedTextMd.value || isExample.value)

// Mock контент для примера
const analysisViewerContent = computed(() => ((isExample.value && !analyzedText.value) ? linguisticAnalysisMock : analyzedText.value) as LlmLinguisticAnalysis)
const analysisViewerMdContent = computed(() => ((isExample.value && !analyzedTextMd.value) ? linguisticAnalysisMdMock : analyzedTextMd.value) as string)
</script>

<template>
  <div class="content">
    <Control
      v-model="control"
      :disabled="isLoadingSubmit"
      @submit="analyze"
    />
    <ExampleBtn
      v-model="isExample"
      :is-hidden="isAnalyzedText || isLoadingSubmit"
    />

    <PageLoader v-if="isLoadingSubmit" />

    <AnalysisViewer
      v-else-if="showAnalysisViewer"
      :content="analysisViewerContent "
    />
    <AnalysisViewerMd
      v-else-if="showAnalysisViewerMd"
      :content="analysisViewerMdContent "
    />

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
