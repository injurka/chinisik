export type HieroglyphWordVariant = 0 | 1 | 2 | 3 | 4

//* --- Store ----------------------------------------------- *//
interface IHieroglyphWordState {
  variant: HieroglyphWordVariant
}

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
