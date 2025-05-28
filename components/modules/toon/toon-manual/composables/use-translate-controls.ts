import type { HieroglyphWordVariant } from '~/components/domain/hieroglyph-word'

const TOON_TRANSLATE_CONTROL_KEY = 'toon_translate_control'

interface ToonTranslateControlValues {
  displayStyle: HieroglyphWordVariant | null
  grammarBlock: boolean
  selectionBlock: boolean
}

function useToonTranslateControls() {
  const controlValues = useCookie<ToonTranslateControlValues>(TOON_TRANSLATE_CONTROL_KEY, {
    default: () => ({
      displayStyle: 5,
      grammarBlock: true,
      selectionBlock: true,
    }),
  })

  const controlMenu = ref(false)
  const controls = ref<ToonTranslateControlValues>(controlValues.value || { displayStyle: null })

  watch(controls, (newValues) => {
    if (newValues) {
      controlValues.value = newValues
    }
  }, { deep: true })

  return {
    controlMenu,
    controls,
  }
}

export type { ToonTranslateControlValues }
export { useToonTranslateControls }
