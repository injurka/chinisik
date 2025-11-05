import type { z } from '@hono/zod-openapi'
import type { LinguisticAnalysisDataType } from '@prisma/client'
import type { LinguisticAnalysisSchema } from './linguistic-analysis.schema'

type LinguisticAnalysis = z.infer<typeof LinguisticAnalysisSchema>

interface AnalysisRecord {
  id: number
  type: string
  userId: number
  model: string
  sourceValue: string
  glyph: string
  totalTokens: number
  generationDuration: number
  dataType: LinguisticAnalysisDataType
  data: any // Тип для данных (JSON или string)
  createdAt: Date
  updatedAt: Date
}

interface ListResult {
  data: AnalysisRecord[]
  total: number
}

interface BaseAnalysisData {
  type: string
  userId: number
  model: string
  sourceValue: string
  glyph: string
  totalTokens: number
  generationDuration: number
}
interface JsonAnalysisData extends BaseAnalysisData {
  dataType: 'Json'
  jsonData: any // Тип для JSON данных (например, object или any)
}
interface MarkdownAnalysisData extends BaseAnalysisData {
  dataType: 'Markdown' | 'Template'
  markdownData: string
}
type AnalysisData = JsonAnalysisData | MarkdownAnalysisData

export type {
  AnalysisData,
  AnalysisRecord,
  JsonAnalysisData,
  LinguisticAnalysis,
  ListResult,
  MarkdownAnalysisData,
}
