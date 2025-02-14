import { linguisticAnalysisMock } from '~/server/utils/mock/linguistic-analysis'

enum RequestKeys {
  ANALYZE_TEXT = 'linguistic-analysis_analyze-text',
}

interface Params {
  isExampleEnable: Ref<boolean>
}

interface LinguisticAnalysisContentControl {
  value: string
  model: string
}

function useLinguisticAnalysisContent(params: Params) {
  const analyzedText = ref<unknown | null>(null)
  const control = ref<LinguisticAnalysisContentControl>({
    value: '',
    model: 'google/gemini-flash-1.5',
  })
  const abortController = ref<AbortController>(new AbortController())

  const content = computed<unknown>(() => {
    if (analyzedText.value)
      return analyzedText.value

    if (params.isExampleEnable.value && !analyzedText.value)
      return linguisticAnalysisMock

    return null
  })

  const resetAbortController = () => {
    if (!abortController.value.signal.reason) {
      abortController.value.abort()
      abortController.value = new AbortController()
    }
  }

  const analyze = async () => {
    analyzedText.value = null
    resetAbortController()

    await useRequest({
      key: RequestKeys.ANALYZE_TEXT,
      fn: ({ api }) => api.llvm.v1.analyzeText(control.value, abortController.value),
      onSuccess: ({ data }) => analyzedText.value = data,
      onError: ({ error }) => {
        console.log('error', error)
      },
    })
  }
  const isLoadingSubmit = computed(() => useRequestStatus([RequestKeys.ANALYZE_TEXT]))
  const errorSubmit = computed(() => useRequestError(RequestKeys.ANALYZE_TEXT))

  onUnmounted(() => resetAbortController())

  return {
    analyze,
    content,
    control,
    isLoadingSubmit,
    isAnalyzedText: !!analyzedText.value,
    errorSubmit,
  }
}

export { useLinguisticAnalysisContent }
export type { LinguisticAnalysisContentControl }
