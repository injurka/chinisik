enum RequestKeys {
  ALL = 'pinyin_all',
}

//* --- State ----------------------------------------------- *//
interface PinyinState {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
}

//* --- Store ----------------------------------------------- *//
export const usePinyinStore = defineStore('pinyin', {
  state: (): PinyinState => ({
    initials: [],
    finals: [],
    initialWithFinal: {} as InitialWithFinal,
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.ALL]),
  },

  actions: {
    async getPinyin() {
      await useRequest({
        key: RequestKeys.ALL,
        once: true,
        callback: ({ api }) => api.pinyin.v1.all(),
        onSuccess: ({ data }) => {
          this.initials = data.initials
          this.finals = data.finals
          this.initialWithFinal = data.initialWithFinal
        },
      })
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type PinyinStore = ReturnType<typeof usePinyinStore>
