import type { UseFetchOptions } from 'nuxt/app'
import type { IApiError } from '../types'
import { type IAuthMethods, authMethods } from './services/auth/handler'

export type MethodPayload<P, R> = ReturnType<typeof createApiMethod<P, R & IApiError>>
export type FetchOption<R> = UseFetchOptions<R>
export type ServiceNames = keyof IApi
export type Services = Partial<Record<ServiceNames, string>>
export type ServiceMethods = IAuthMethods
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
  auth: IAuthMethods
}

const services: ServiceNames[] = [
  'auth',
]

const apiMethods = {
  auth: authMethods,
}

const interceptops = ref<Interceptops>({} as Interceptops)

// Функция для создания метода api
function createApiMethod<P, R>(
  methodOptions: ICreateApiMethodOptions,
  adapterPayload?: AdapterPayload<P, R>,
): ICreateApiMethod<P, R> {
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

  // Функция для добавления сервиса
  function addService(name: ServiceNames, service: ServiceMethods): void {
    (api as any)[name] = service
  }

  // Добавление сервисов и методов
  services.forEach(service => addService(service, apiMethods[service](`${baseUrl}`)))

  return api
}

export { createApiMethod, createApi }
