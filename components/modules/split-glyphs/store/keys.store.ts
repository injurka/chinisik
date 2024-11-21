// eslint-disable-next-line unused-imports/no-unused-vars
enum RequestKeys {

}

//* --- State ----------------------------------------------- *//

interface SplitGlyphsState {

}

//* --- Store ----------------------------------------------- *//
export const useSplitGlyphsStore = defineStore('splitGlyphs', {
  state: (): SplitGlyphsState => ({

  }),

  getters: {

  },

  actions: {

  },
})

//* --- Utils ----------------------------------------------- *//

export type KeysStore = ReturnType<typeof useSplitGlyphsStore>
