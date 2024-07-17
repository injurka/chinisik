import type { IPinyinAllR } from './types'
import type { MethodPayload } from '~/shared/api/api-client'

export interface IPinyinMethods {
  v1: {
    all: MethodPayload<void, IPinyinAllR>
  }
}

const options = {
  all: {
    url: () => '/pinyin/',
    method: 'get',
  },
} as const

function pinyinMethods(baseUrl = ''): IPinyinMethods {
  const sharedOptV1 = { baseUrl, version: 'v1' as const }

  const v1: IPinyinMethods['v1'] = {
    all: createApiMethod({
      ...sharedOptV1,
      ...options.all,
    }),
  }

  return { v1 }
}

export { pinyinMethods }
