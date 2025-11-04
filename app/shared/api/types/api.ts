import type { FetchOptions } from 'ofetch'
import type { ILinguisticAnalysisMethods } from '../collections/linguistic-analysis'

// @ts-expect-error нет смысла матчить тип с ResponseType
export type FetchOption<R> = FetchOptions<R>
export type Instance = <R>(url: string, options: FetchOption<R>) => Promise<R>
export type ServiceMethods
  = IKeysMethods
  | IPinyinMethods
  | ILlmMethods
  | ICmsMethods
  | IHskMethods
  | IAuthMethods
  | ILinguisticAnalysisMethods
  | IQuizMethods

export interface IApi {
  keys: IKeysMethods
  pinyin: IPinyinMethods
  llm: ILlmMethods
  cms: ICmsMethods
  hsk: IHskMethods
  auth: IAuthMethods
  linguisticAnalysis: ILinguisticAnalysisMethods
  quiz: IQuizMethods
}
export interface IService {
  createMethods: (instance: Instance) => ServiceMethods
  name: ApiNames
}
