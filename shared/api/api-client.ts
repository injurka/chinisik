import type { UseFetchOptions } from 'nuxt/app'
import { type IKeysMethods, keysMethods } from './handlers/keys/handler'
import { type IPinyinMethods, pinyinMethods } from './handlers/pinyin/handler'

export type MethodPayload<P, R> = ReturnType<typeof createApiMethod<P, R>>
export type FetchOption<R> = UseFetchOptions<R>
export type HandlersNames = keyof IApi
export type Services = Partial<Record<HandlersNames, string>>
export type HandlersMethods = IKeysMethods
export type Interceptops = Pick<
  UseFetchOptions<unknown>,
  'onRequest' | 'onRequestError' | 'onResponse' | 'onResponseError'
>

export type AdapterPayload<P, R> = (payload: P, url: (...params: any) => string) => {
  path: string
  options: FetchOption<R>
}
export interface ICreateApiMethodOptions {
  url: ((...params: any) => string)
  baseUrl: string
  method: 'post' | 'get' | 'patch'
  version: `v${string}`
}
export type ICreateApiMethod<P, R> = (payload?: P, additonalOptions?: FetchOption<R>) => Promise<R>

// Определение типа для API
export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
}

const handlers: HandlersNames[] = [
  'keys',
  'pinyin',
]

const apiMethods = {
  keys: keysMethods,
  pinyin: pinyinMethods,
}

const interceptops = ref<Interceptops>({} as Interceptops)

// Функция для создания метода api
function createApiMethod<P, R>(
  methodOptions: ICreateApiMethodOptions,
  adapterPayload?: AdapterPayload<P, R>,
): ICreateApiMethod<P, R> {
  const { apiVerbose } = useRuntimeConfig().public
  const { baseUrl, url, method, version } = methodOptions

  const apiMethod = async (
    payload?: P,
    additionalOptions?: FetchOption<R>,
  ): Promise<R> => {
    const { path, options } = adapterPayload
      ?.(payload ?? {} as P, url)
      ?? { path: url(), options: {} }

    const _url = `${baseUrl}/${version}${path}`

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
    } as FetchOption<R>

    if (apiVerbose) {
      // eslint-disable-next-line no-console
      console.log(`💫 Request: [${_options.method}] ${_url}`)
    }

    return $fetch(_url, _options as any)
  }

  return apiMethod
}

// Функция для создания объекта API
function createApi(
  baseUrl = '',
  _interceptops: Interceptops,
): IApi {
  interceptops.value = _interceptops

  const api = {} as IApi

  // Функция для добавления обработчика
  function addHandler(name: HandlersNames, handler: HandlersMethods): void {
    (api as any)[name] = handler
  }

  // Добавление сервисов и методов
  handlers.forEach(handler => addHandler(handler, (apiMethods as any)[handler](`${baseUrl}`)))

  return api
}

export { createApiMethod, createApi }
