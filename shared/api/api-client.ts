import type { FetchOptions } from 'ofetch'
import keys from './handlers/keys/handler'
import pinyin from './handlers/pinyin/handler'
import type { CreateApiMethod } from './api-client.types'

const interceptops = ref<Interceptops>({} as Interceptops)

// Функция для создания метода api
function createApiMethod<P, R>(
  methodOptions: ICreateApiMethodOptions,
  adapterPayload?: AdapterPayload<P, R>,
): CreateApiMethod<P, R> {
  const { apiVerbose } = useRuntimeConfig().public
  const { baseUrl, url, method, version } = methodOptions

  const apiMethod = async (
    payload?: P,
    additionalOptions?: FetchOption<R>,
  ): Promise<R> => {
    const { path, options } = adapterPayload
      ?.(payload ?? {} as P, url)
      ?? { path: url(), options: {} }

    let _url = ''

    // if (mode === 'proxy' && proxyBaseUrl)
    //   _url = proxyBaseUrl

    _url += `${baseUrl}/${version}/${path}`.replace(/\/+/g, '/').toLowerCase()

    const _options = {
      method,
      ...options,
      ...additionalOptions,
      onRequest: (...params) => {
        const objects = [interceptops.value, options, additionalOptions]

        objects.forEach((obj) => {
          if (obj?.onRequest && typeof obj.onRequest === 'function') {
            obj.onRequest(...params)
          }
        })
      },
    } as FetchOptions

    if (apiVerbose) {
      // eslint-disable-next-line no-console
      console.log(`💫 %c[${method.toUpperCase()}]`, 'color: #9400D3; font-weight: bold;', '-', _url)
    }

    // @ts-expect-error cant infered dts
    return $fetch(_url, _options)
  }

  return apiMethod
}

// Функция для создания объекта API
function createApi(
  baseUrl = '',
  _interceptops: Interceptops,
): IApi {
  interceptops.value = _interceptops

  const apiMethods: IApi = {
    keys: keys(baseUrl, createApiMethod),
    pinyin: pinyin(baseUrl, createApiMethod),
  }
  const api = {} as IApi

  Object.entries(apiMethods).forEach(([key, value]) => {
    (api as any)[key] = value
  })

  return api
}

export { createApiMethod, createApi }
