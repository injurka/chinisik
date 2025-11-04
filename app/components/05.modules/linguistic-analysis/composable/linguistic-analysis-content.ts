enum RequestKeys {
  ANALYZE_TEXT = 'linguistic-analysis_analyze-text',
}

type LinguisticAnalysisDataType = 'json' | 'strictMarkdown' | 'markdown'

interface LinguisticAnalysisContentControl {
  value: string
  model: string
  dataType: LinguisticAnalysisDataType
}

function useLinguisticAnalysisContent() {
  const analyzedText = ref<LlmLinguisticAnalysis | null>(null)
  const analyzedTextMd = ref<string | null>(null)

  const control = ref<LinguisticAnalysisContentControl>({
    value: '',
    model: 'google/gemini-2.0-flash-001',
    dataType: 'json',
  })
  const abortController = ref<AbortController>(new AbortController())

  const resetAbortController = () => {
    if (!abortController.value.signal.reason) {
      abortController.value.abort()
      abortController.value = new AbortController()
    }
  }

  const analyze = async () => {
    resetAbortController()

    if (control.value.dataType === 'json') {
      analyzedText.value = null
      await useRequest({
        key: RequestKeys.ANALYZE_TEXT,
        fn: ({ api }) => api.llm.v1.analyzeText({
          value: control.value.value,
          model: control.value.model,
        }, abortController.value),
        onSuccess: ({ data }) => analyzedText.value = data,
      })
    }
    else {
      analyzedTextMd.value = null
      await useRequest({
        key: RequestKeys.ANALYZE_TEXT,
        fn: ({ api }) => api.llm.v1.analyzeTextFlat({
          value: control.value.value,
          model: control.value.model,
          isTemplate: control.value.dataType === 'strictMarkdown',
        }, abortController.value),
        onSuccess: ({ data }) => analyzedTextMd.value = data,
      })
    }
  }
  const isAnalyzedText = computed(() => (
    control.value.dataType === 'json' ? !!analyzedText.value : !!analyzedTextMd.value
  ))
  const isLoadingSubmit = computed(() => useRequestStatus([RequestKeys.ANALYZE_TEXT]))
  const errorSubmit = computed(() => useRequestError(RequestKeys.ANALYZE_TEXT))

  onUnmounted(() => resetAbortController())

  return {
    analyze,
    analyzedText,
    analyzedTextMd,
    control,
    isLoadingSubmit,
    isAnalyzedText,
    errorSubmit,
  }
}

export { useLinguisticAnalysisContent }
export type { LinguisticAnalysisContentControl, LinguisticAnalysisDataType }
