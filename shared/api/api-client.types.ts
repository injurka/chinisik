import type { UseFetchOptions } from 'nuxt/app'
import type { IKeysMethods } from './handlers/keys/handler'
import type { IPinyinMethods } from './handlers/pinyin/handler'

export type MethodPayload<P, R> = ReturnType<typeof createApiMethod<P, R>>
export type FetchOption<R> = UseFetchOptions<R>
export type Interceptops = Pick<
  UseFetchOptions<unknown>,
  'onRequest' |
  'onRequestError' |
  'onResponse' |
  'onResponseError'
>

export type AdapterPayload<P, R> = (payload: P, url: (...params: any) => string) => {
  path: string
  options: FetchOption<R>
}

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
}

export type CreateApiMethod<P, R> = (payload: P, additonalOptions?: FetchOption<R>) => Promise<R>
export interface ICreateApiMethodOptions {
  url: ((...params: any) => string)
  baseUrl: string
  method: 'post' | 'put' | 'delete' | 'get' | 'patch'
  version: `v${string}`
}

export type CreateApiMethodType = <P, R>(
  methodOptions: ICreateApiMethodOptions,
  adapterPayload?: AdapterPayload<P, R>
) => CreateApiMethod<P, R>

export type MethodOption<P, R> = Omit<ICreateApiMethodOptions, 'version' | 'baseUrl'> & { adapter: AdapterPayload<P, R> }
