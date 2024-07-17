import type { IKeysAllR } from './types'
import type { MethodPayload } from '~/shared/api/api-client'

export interface IKeysMethods {
  v1: {
    all: MethodPayload<void, IKeysAllR>
  }
}

const options = {
  all: {
    url: () => '/keys/',
    method: 'get',
  },
} as const

function keysMethods(baseUrl = ''): IKeysMethods {
  const sharedOptV1 = { baseUrl, version: 'v1' as const }

  const v1: IKeysMethods['v1'] = {
    all: createApiMethod({
      ...sharedOptV1,
      ...options.all,
    }),
  }

  return { v1 }
}

export { keysMethods }
