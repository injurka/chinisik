import type { z } from '@hono/zod-openapi'
import type { LlmLinguisticAnalysisSchema } from './linguistic-analysis.schema'

interface LlmLinguisticAnalysisSourceType {
  type: 'sentence' | 'word'
  cn: string
}

type LlmLinguisticAnalysis = z.infer<typeof LlmLinguisticAnalysisSchema>

export type {
  LlmLinguisticAnalysis,
  LlmLinguisticAnalysisSourceType,
}
