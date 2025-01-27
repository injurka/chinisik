import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

enum RequestKeys {
  ALL = 'keys_all',
  DESCRIPTION = 'keys_description',
}

export interface ControlHieroglyphKey {
  isPinyin: boolean
  isTranslate: boolean
  isTranscription: boolean
}

//* --- State ----------------------------------------------- *//

interface KeysState {
  hieroglyphKeys: HieroglyphKey[]
  description: JsonToDomChildren

  control: ControlHieroglyphKey
}

//* --- Store ----------------------------------------------- *//
export const useKeysStore = defineStore('keys', {
  state: (): KeysState => ({
    hieroglyphKeys: [],
    description: {} as JsonToDomChildren,

    control: {
      isPinyin: false,
      isTranslate: false,
      isTranscription: false,
    },
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.ALL, RequestKeys.DESCRIPTION]),
  },

  actions: {
    async getAllKeys() {
      await useRequest({
        key: RequestKeys.ALL,
        fn: ({ api }) => api.keys.v1.all(),
        onSuccess: ({ data }) => this.hieroglyphKeys = data,
      })
    },
    async getDescriptionKeys() {
      await useRequest({
        key: RequestKeys.DESCRIPTION,
        fn: ({ api }) => api.cms.v1.description({ sysname: 'keys' }),
        onSuccess: ({ data }) => this.description = data,
      })
    },
    toggleControl(field: keyof ControlHieroglyphKey) {
      this.control[field] = !this.control[field]
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type KeysStore = ReturnType<typeof useKeysStore>
