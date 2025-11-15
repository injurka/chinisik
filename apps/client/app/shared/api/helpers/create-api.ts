import type { FetchOption, IApi, IService } from '../types'
import { createInstance } from '.'
import {
  authService,
  booksService,
  cmsService,
  dayMaterialService,
  hskService,
  keysService,
  linguisticAnalysisService,
  llmService,
  pinyinService,
  quizService,
} from '../collections'

const services: IService[] = [
  authService,
  cmsService,
  hskService,
  keysService,
  linguisticAnalysisService,
  llmService,
  pinyinService,
  quizService,
  booksService,
  dayMaterialService,
]

interface CreateApiParams {
  interceptops: FetchOption<any>[]
  verbose: boolean
  baseUrl: string
  refresh: (() => Promise<void>) | null
}

function createApi(params: Partial<CreateApiParams>) {
  const {
    interceptops = [],
    verbose = true,
    baseUrl = '',
  } = params

  // eslint-disable-next-line no-console
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
