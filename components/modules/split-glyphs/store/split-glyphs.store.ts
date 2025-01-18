enum RequestKeys {
  SPLIT_GLYPHS = 'split_split-glyphs',
}

//* --- State ----------------------------------------------- *//

interface ControlSplitGlyphs {
  value: string
  type: SplitGlyphsType
}

interface SplitGlyphsState {
  glyphs: SplitedGlyphs | null
  control: ControlSplitGlyphs
}

//* --- Store ----------------------------------------------- *//
export const useSplitGlyphsStore = defineStore('splitGlyphs', {
  state: (): SplitGlyphsState => ({
    glyphs: null,
    control: {
      value: '',
      type: 'sentence',
    },
  }),

  getters: {
    isLoadingSubmit: () => useRequestStatus([RequestKeys.SPLIT_GLYPHS]),
    apiError: () => useRequestError(RequestKeys.SPLIT_GLYPHS),
  },

  actions: {
    async postSplitKeys() {
      await useRequest({
        key: RequestKeys.SPLIT_GLYPHS,
        fn: ({ api }) => api.llvm.v1.splitGlyphs({
          glyphs: this.control.value,
          type: this.control.type,
        }),
        onSuccess: ({ data }) => this.glyphs = data,
      })
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type KeysStore = ReturnType<typeof useSplitGlyphsStore>
