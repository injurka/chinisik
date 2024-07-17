export type WordVariant = 0 | 1 | 2 | 3 | 4

//* --- Store ----------------------------------------------- *//
interface IWordState {
  variant: WordVariant
}

export const useWordStore = defineStore('word', {
  state: (): IWordState => ({
    variant: 0,
  }),
})

//* --- Utils ----------------------------------------------- *//
