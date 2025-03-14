const HSK_LEVELS = Array.from({ length: 9 }, (_, i) => i + 1)
const ITEMS_PER_PAGE_DEFAULT = 30
const VISIBLE_PAGES = 7
const MOBILE_VISIBLE_PAGES = 3
const KEY = 'hieroglyph-hsk_words'
const SEARCH_DEBOUNCE = 300

async function useHskWords() {
  const page = ref<number>(1)
  const searchKeyword = ref<string>('')
  const selectedLevel = ref<number>(1)
  const itemsPerPage = ref<number>(ITEMS_PER_PAGE_DEFAULT)

  const { api } = useApi()
  const { isMobile } = useDevice()
  const { data, refresh, error } = await useAsyncData(
    'hieroglyph-hsk_words',
    () => api.hsk.v1.hieroglyphsByLevelList({
      level: selectedLevel.value,
      page: page.value,
      limit: itemsPerPage.value,
      keyword: searchKeyword.value,
    }),
  )

  const debouncedRefresh = useDebounceFn(() => refresh(), SEARCH_DEBOUNCE)
  const isLoading = computed(() => useRequestStatus([KEY]))

  const totalPages = computed(() => {
    const total = data.value?.pagination?.total
    return total ? Math.ceil(total / itemsPerPage.value) : 0
  })

  watch(searchKeyword, () => {
    page.value = 1
    debouncedRefresh()
  })

  watch([page, itemsPerPage, selectedLevel], () => {
    refresh()
  })

  return {
    HSK_LEVELS,
    VISIBLE_PAGES,
    MOBILE_VISIBLE_PAGES,
    page,
    searchKeyword,
    selectedLevel,
    itemsPerPage,
    isMobile,
    data,
    isLoading,
    totalPages,
    error,
  }
}

export { useHskWords }
