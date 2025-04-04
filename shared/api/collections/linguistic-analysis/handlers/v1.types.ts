import type { DataListType, PageLimitType, PageType } from '~/shared/types'

// Response //

interface LinguisticAnalysisAll extends Omit<LinguisticAnalysis, 'data'> {
  dataType: 'Markdown' | 'Json'
  data: string | LlvmLinguisticAnalysis
}

export type ILinguisticAnalysisHistoryListR = DataListType<LinguisticAnalysisAll>

// Request //

export interface ILinguisticAnalysisHistoryListP {
  keyword?: string
  page: PageType
  limit: PageLimitType
}
