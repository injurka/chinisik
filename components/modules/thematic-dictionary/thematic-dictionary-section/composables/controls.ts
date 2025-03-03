const THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY = 'thematic_dictionary_category_control'

interface ThematicDictionaryCategoryControlValues {
  isFixedStyle: boolean
}

function useThematicDictionaryCategoryControls() {
  const controlValues = useCookie<ThematicDictionaryCategoryControlValues>(THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY)
  const controlMenu = ref(false)
  const controls = ref<ThematicDictionaryCategoryControlValues>(controlValues.value ?? { isFixedStyle: true })

  const toggleControl = (key: keyof ThematicDictionaryCategoryControlValues) => {
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

export type { ThematicDictionaryCategoryControlValues }
export { useThematicDictionaryCategoryControls }
