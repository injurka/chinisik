const HSK_WORDS_CONTROL_KEY = 'hsk_words_control'

interface HskWordsControlValues {
  isFixedStyle: boolean
}

function useHskControls() {
  const controlValues = useCookie<HskWordsControlValues>(HSK_WORDS_CONTROL_KEY)
  const controlMenu = ref(false)
  const controls = ref<HskWordsControlValues>(controlValues.value ?? { isFixedStyle: true })

  const toggleControl = (key: keyof HskWordsControlValues) => {
    const rawValues = { ...controlValues.value }
    rawValues[key] = !rawValues[key]
    controlValues.value = rawValues
    controls.value = rawValues
  }

  return {
    controlMenu,
    controls,
    toggleControl,
  }
}

export type { HskWordsControlValues }
export { useHskControls }
