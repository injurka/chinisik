import {
  getCombinedInitialWithFinal,
  mockFinals,
  mockFinalsTone,
  mockInitials,
  mockInitialsFinals,
} from '~/shared/mock/pinyin'

//* --- State ----------------------------------------------- *//
interface PinyinState {
  initials: Final[]
  finals: Initial[]
  initialAndFinals: InitialsFinals[]
  finalsTone: FinalsTone[]
  initialWithFinal: Map<string, number[]>
}

//* --- Store ----------------------------------------------- *//
export const usePinyinStore = defineStore('pinyin', {
  state: (): PinyinState => ({
    initials: mockInitials,
    finals: mockFinals,
    initialAndFinals: mockInitialsFinals,
    finalsTone: mockFinalsTone,
    initialWithFinal: getCombinedInitialWithFinal(),
  }),

  actions: {

  },
})

//* --- Utils ----------------------------------------------- *//

export type PinyinStore = ReturnType<typeof usePinyinStore>
