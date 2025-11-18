<script lang="ts" setup>
import type { LlmLinguisticAnalysis } from '~/shared/types'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { PageLoader } from '~/components/02.shared/page-loader'

// Неправильно, но что уж поделать
import AnalysisViewerMd from '~/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer-md.vue'
import AnalysisViewer from '~/components/05.modules/linguistic-analysis/ui/sections/analysis-viewer.vue'

interface Props {
  textToAnalyze: string
}

const props = defineProps<Props>()

const isDialog = defineModel<boolean>({ required: true })
const selectedModel = ref('gemini-2.5-flash-lite')
// 'template' = JSON, 'canvas' = Markdown
const analysisMode = ref<'template' | 'canvas'>('template')

const llmModels = ['gemini-2.5-flash-lite', 'gemini-2.5-flash']
const { api } = useApi()

const isLoading = ref(false)
const analysisResult = ref<LlmLinguisticAnalysis | string | null>(null)
const error = ref<string | null>(null)
const analysisCompleted = ref(false)
const abortController = ref(new AbortController())

async function startAnalysis() {
  isLoading.value = true
  analysisResult.value = null
  error.value = null
  analysisCompleted.value = false
  abortController.value = new AbortController()

  try {
    if (analysisMode.value === 'template') {
      const result = await api.llm.v1.analyzeText({
        value: props.textToAnalyze,
        model: selectedModel.value,
      }, abortController.value)
      analysisResult.value = result
    }
    else {
      const result = await api.llm.v1.analyzeTextFlat({
        value: props.textToAnalyze,
        model: selectedModel.value,
      }, abortController.value)
      analysisResult.value = result
    }
    analysisCompleted.value = true
  }
  catch (e: any) {
    if (e.name !== 'AbortError')
      error.value = e.data?.message || e.message || 'Произошла неизвестная ошибка.'
  }
  finally {
    if (isDialog.value)
      isLoading.value = false
  }
}

function resetAnalysis() {
  analysisResult.value = null
  error.value = null
  analysisCompleted.value = false
  isLoading.value = false
}

watch(isDialog, (newVal) => {
  if (!newVal) {
    abortController.value.abort()
    setTimeout(resetAnalysis, 300)
  }
})
</script>

<template>
  <DialogWithClose v-model="isDialog" :max-width="900">
    <VCard class="dialog-content">
      <VCardTitle>
        <VBtn
          v-if="analysisCompleted || error"
          icon
          variant="text"
          class="back-btn"
          @click="resetAnalysis"
        >
          <Icon name="mdi:arrow-left" />
        </VBtn>
        {{ analysisCompleted ? 'Результат анализа' : 'Лексический анализ' }}
      </VCardTitle>

      <VCardText v-if="isLoading" class="content-centered">
        <PageLoader />
        <p>Анализируем текст...</p>
      </VCardText>

      <VCardText v-else-if="error" class="content-centered">
        <p class="text-error">
          {{ error }}
        </p>
        <VBtn
          variant="tonal"
          class="mt-4"
          @click="startAnalysis"
        >
          Попробовать снова
        </VBtn>
      </VCardText>

      <VCardText v-else-if="analysisCompleted && analysisResult" class="result-body">
        <AnalysisViewer v-if="analysisMode === 'template'" :content="analysisResult as LlmLinguisticAnalysis" />
        <AnalysisViewerMd v-else :content="analysisResult as string" />
      </VCardText>

      <VCardText v-else class="content-body">
        <div class="analysis-text">
          {{ textToAnalyze }}
        </div>

        <div class="divider-text">
          <span>Параметры анализа</span>
        </div>

        <div class="controls-row">
          <VSelect
            v-model="selectedModel"
            :items="llmModels"
            label="Модель LLM"
            variant="outlined"
            density="compact"
            hide-details
            class="model-select"
          />
          <VBtnToggle
            v-model="analysisMode"
            mandatory
            density="comfortable"
            variant="outlined"
          >
            <VBtn value="template">
              <VTooltip activator="parent" location="top">
                Шаблон (JSON)
              </VTooltip>
              <Icon name="mdi:file-tree" />
            </VBtn>
            <VBtn value="canvas">
              <VTooltip activator="parent" location="top">
                Полотно (Markdown)
              </VTooltip>
              <Icon name="mdi:view-dashboard-outline" />
            </VBtn>
          </VBtnToggle>
        </div>

        <VBtn
          block
          rounded
          variant="tonal"
          class="start-button"
          @click="startAnalysis"
        >
          Начать анализ
        </VBtn>
      </VCardText>
    </VCard>
  </DialogWithClose>
</template>

<style scoped lang="scss">
.dialog-content {
  background-color: var(--bg-secondary-color);
  color: var(--fg-primary-color);
  border-radius: 24px !important;
  border: 1px solid var(--border-primary-color);
  padding-bottom: 16px;

  :deep(.sentence) {
    border-radius: 8px;
    border: 2px solid var(--border-secondary-color);
  }
}

.v-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-secondary-color);
  margin: 0 16px 16px;
  width: auto;
  position: relative;
}

.back-btn {
  position: absolute;
  left: 0;
}

.content-body,
.content-centered {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px !important;
}

.content-centered {
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  color: var(--fg-secondary-color);
}

.result-body {
  max-height: 70vh;
  overflow-y: auto;
  padding: 0 8px !important;

  @include mobile() {
    padding: 0 0 0 3px !important;
  }
}

.analysis-text {
  font-family: var(--font-family-cn);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  padding: 8px 16px;
  background-color: var(--bg-tertiary-color);
  border-radius: 8px;
  border-left: 4px solid var(--border-accent-color);
  border-right: 4px solid var(--border-accent-color);
  color: var(--fg-action-color);
  word-break: break-word;
}

.controls-row {
  display: flex;
  align-items: center;
  gap: 16px;

  @include mobile() {
    flex-direction: column;
  }

  .model-select {
    flex-grow: 1;
  }

  :deep(.v-btn-toggle) {
    border-color: var(--border-primary-color);
    height: 41px;

    .v-btn {
      color: var(--fg-secondary-color);

      &:hover {
        background-color: var(--bg-hover-color);
      }
    }
  }
}

.start-button {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-action-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;

  .hw-word {
    margin-left: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}

.text-error {
  color: var(--fg-error-color);
}
</style>
