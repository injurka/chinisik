/* eslint-disable no-console */

import type { FetchOption, IApi, IService } from '../types'
import { createInstance } from '.'
import { keysService, pinyinService } from '../collections'

const services: IService[] = [
  keysService,
  pinyinService,
]

interface CreateApiParams {
  interceptops: FetchOption<unknown>[]
  verbose: boolean
  baseUrl: string
}

function createApi(params: Partial<CreateApiParams>) {
  const {
    interceptops = [],
    verbose = true,
    baseUrl = '',
  } = params

  console.log(`💫 %c[API]`, 'color: #9400D3; font-weight: bold;', 'baseUrl:', baseUrl)

  const api = {} as IApi

  services.forEach((service) => {
    const serviceInstance = createInstance({
      baseUrl,
      interceptops,
      verbose,
    })
    const serviceMethods = service.createMethods(serviceInstance)

    // @ts-expect-error no check
    api[service.name] = serviceMethods
  })

  return api
}

export { createApi }
export type { CreateApiParams }
