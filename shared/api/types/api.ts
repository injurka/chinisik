import type { FetchOptions } from 'ofetch'
import type {
  ApiNames,
  ILlvmMethods,
  IPinyinMethods,
} from '~/shared/api'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods =
  IKeysMethods |
  IPinyinMethods |
  ILlvmMethods

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
  llvm: ILlvmMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
