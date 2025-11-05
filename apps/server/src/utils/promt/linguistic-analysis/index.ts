import { getPrompt as getLinguisticAnalysisMdPromt } from '~/utils/promt/linguistic-analysis/split-to-md'
import { getPrompt as getLinguisticAnalysisPromt } from '~/utils/promt/linguistic-analysis/split-to-structure'
import { getPromt as getLinguisticAnalysisTypePromt } from '~/utils/promt/linguistic-analysis/validate-payload'

export {
  getLinguisticAnalysisMdPromt,
  getLinguisticAnalysisPromt,
  getLinguisticAnalysisTypePromt,
}
