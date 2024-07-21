enum RequestKeys {
  ALL = 'keys_all',
}

export interface ControlHieroglyphKey {
  isPinyin: boolean
  isPinyinColored: boolean
  isTranslate: boolean
  isTranscription: boolean
}

//* --- State ----------------------------------------------- *//

interface KeysState {
  hieroglyphKeys: HieroglyphKey[]
  control: ControlHieroglyphKey
}

//* --- Store ----------------------------------------------- *//
export const useKeysStore = defineStore('keys', {
  state: (): KeysState => ({
    hieroglyphKeys: [],

    control: {
      isPinyin: false,
      isPinyinColored: Boolean(useCookie(PINYIN_COLORED).value || 'false'),
      isTranslate: false,
      isTranscription: false,
    },
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.ALL]),
  },

  actions: {
    async getAllKeys() {
      await useRequest({
        key: RequestKeys.ALL,
        once: true,
        callback: ({ api }) => api.keys.v1.all(),
        onSuccess: ({ data }) => this.hieroglyphKeys = data,
      })
    },
    toggleControl(field: keyof ControlHieroglyphKey) {
      this.control[field] = !this.control[field]
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type KeysStore = ReturnType<typeof useKeysStore>
