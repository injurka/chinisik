import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    historyList(params: DTO.ILinguisticAnalysisHistoryListP) {
      return instance<DTO.ILinguisticAnalysisHistoryListR>(`/v1/linguistic-analysis/all-list`, {
        params,
        method: 'GET',
      })
    },
  }
}

export default method
