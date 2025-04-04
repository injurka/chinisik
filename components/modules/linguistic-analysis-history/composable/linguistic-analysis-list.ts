import { computed, ref, watch } from 'vue'

const ITEMS_PER_PAGE_DEFAULT = 20 // Значение по умолчанию для количества элементов на странице
const VISIBLE_PAGES = 7 // Количество видимых страниц в пагинации для десктопа
const MOBILE_VISIBLE_PAGES = 3 // Количество видимых страниц для мобильных
const KEY = `linguisticAnalysisHistory`

export async function useLinguisticAnalysisList() {
  const page = ref<number>(1)
  const limit = ref<number>(ITEMS_PER_PAGE_DEFAULT)

  const { api } = useApi()
  const { isMobile } = useDevice()

  const { data, error, status, refresh } = await useAsyncData(
    KEY,
    () => api.linguisticAnalysis.v1.historyList({
      page: page.value,
      limit: limit.value,
    }),
  )

  const isLoading = computed(() => status.value === 'pending')

  const totalPages = computed(() => {
    const total = data.value?.pagination?.total ?? 0
    const currentLimit = limit.value
    return total > 0 && currentLimit > 0 ? Math.ceil(total / currentLimit) : 0
  })

  watch([page, limit], () => {
    refresh()
  }, { immediate: false })

  return {
    VISIBLE_PAGES,
    MOBILE_VISIBLE_PAGES,
    isLoading,
    page,
    limit,
    isMobile,
    data,
    totalPages,
    error,
    refresh,
  }
}
