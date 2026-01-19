import type { HieroglyphSettings } from '../types/props'

export const useHieroglyphWordStore = defineStore('hieroglyphWord', {
  state: () => {
    const defaultSettings: HieroglyphSettings = {
      layout: 'card',
      showPinyin: true,
      showTranslation: true,
    }

    const cookieValue = useCookie<HieroglyphSettings>(HIEROGLYPH_WORD_VARIANT).value

    return {
      settings: { ...defaultSettings, ...cookieValue },
    }
  },

  actions: {
    updateSettings(partialSettings: Partial<HieroglyphSettings>) {
      this.settings = { ...this.settings, ...partialSettings }

      // Сохраняем в куки
      useCookie(HIEROGLYPH_WORD_VARIANT, { sameSite: true }).value = JSON.stringify(this.settings)
    },
  },
})
