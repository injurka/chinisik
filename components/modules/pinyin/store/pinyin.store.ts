import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

enum RequestKeys {
  ALL = 'pinyin_all',
  DESCRIPTION = 'pinyin_description',
}

//* --- State ----------------------------------------------- *//
interface PinyinState {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
  description: JsonToDomChildren
}

//* --- Store ----------------------------------------------- *//
export const usePinyinStore = defineStore('pinyin', {
  state: (): PinyinState => ({
    initials: [],
    finals: [],
    initialWithFinal: {} as InitialWithFinal,
    description: {} as JsonToDomChildren,
  }),

  getters: {
    isLoadingContent: () => useRequestStatus([RequestKeys.DESCRIPTION, RequestKeys.ALL]),
  },

  actions: {
    async getPinyin() {
      await useRequest({
        key: RequestKeys.ALL,
        fn: ({ api }) => api.pinyin.v1.all(),
        onSuccess: ({ data }) => {
          this.initials = data.initials
          this.finals = data.finals
          this.initialWithFinal = data.initialWithFinal
        },
      })
    },
    async getDescriptionKeys() {
      await useRequest({
        key: RequestKeys.DESCRIPTION,
        fn: ({ api }) => api.cms.v1.description({ sysname: 'pinyin' }),
        onSuccess: ({ data }) => this.description = data,
      })
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type PinyinStore = ReturnType<typeof usePinyinStore>
