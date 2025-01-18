import type {
  HieroglyphWordVariant,
  IHieroglyphWordState,
} from '~/components/domain/hieroglyph-word/types'

export const useHieroglyphWordStore = defineStore('hieroglyphWord', {
  state: (): IHieroglyphWordState => ({
    variant: Number(useCookie(HIEROGLYPH_WORD_VARIANT).value || '0') as HieroglyphWordVariant,
  }),

  actions: {
    setVariant(value: HieroglyphWordVariant) {
      useCookie(HIEROGLYPH_WORD_VARIANT, { sameSite: true }).value = `${value}`
      this.variant = value
    },
  },
})

//* --- Utils ----------------------------------------------- *//
