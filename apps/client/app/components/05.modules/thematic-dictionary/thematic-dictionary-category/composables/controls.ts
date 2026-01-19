import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word'

const THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY = 'thematic_dictionary_category_control'

type ThematicDictionaryCategoryControlValues = Partial<HieroglyphSettings> | 'global'

function useThematicDictionaryCategoryControls() {
  const controlValues = useCookie<ThematicDictionaryCategoryControlValues>(THEMATIC_DICTIONARY_CATEGORY_CONTROL_KEY, {
    default: () => 'global',
  })

  const controlMenu = ref(false)
  const controls = ref<ThematicDictionaryCategoryControlValues>(controlValues.value)

  watch(controls, (newValue) => {
    controlValues.value = newValue
  }, { deep: true })

  return {
    controlMenu,
    controls,
  }
}

export type { ThematicDictionaryCategoryControlValues }
export { useThematicDictionaryCategoryControls }
