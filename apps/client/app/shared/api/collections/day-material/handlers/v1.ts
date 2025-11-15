import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    getToday() {
      return instance<DTO.IGetTodayMaterialR>('/v1/day-material/today', { method: 'GET' })
    },
  }
}

export default method
