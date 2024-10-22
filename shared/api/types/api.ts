import type { FetchOptions } from 'ofetch'
import type {
  ApiNames,
  IKeysMethods,
  IPinyinMethods,
} from '~/shared/api'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods =
  IKeysMethods |
  IPinyinMethods

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
