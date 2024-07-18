export type HieroglyphWordVariant = 0 | 1 | 2 | 3 | 4

//* --- Store ----------------------------------------------- *//
interface IHieroglyphWordState {
  variant: HieroglyphWordVariant
}

export const useHieroglyphWordStore = defineStore('hieroglyphWord', {
  state: (): IHieroglyphWordState => ({
    variant: 0,
  }),
})

//* --- Utils ----------------------------------------------- *//
