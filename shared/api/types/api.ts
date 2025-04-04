import type { FetchOptions } from 'ofetch'
import type { ILinguisticAnalysisMethods } from '../collections/linguistic-analysis'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods =
  IKeysMethods |
  IPinyinMethods |
  ILlvmMethods |
  ICmsMethods |
  IHskMethods |
  IAuthMethods |
  ILinguisticAnalysisMethods

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
  llvm: ILlvmMethods
  cms: ICmsMethods
  hsk: IHskMethods
  auth: IAuthMethods
  linguisticAnalysis: ILinguisticAnalysisMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
