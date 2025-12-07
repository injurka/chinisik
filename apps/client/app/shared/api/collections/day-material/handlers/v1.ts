import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    getToday() {
      return instance<DTO.IGetTodayMaterialR>('/v1/day-material/today', { method: 'GET' })
    },
    getById(payload: DTO.IGetMaterialByIdP) {
      return instance<DTO.IGetTodayMaterialR>(`/v1/day-material/${payload.id}`, { method: 'GET' })
    },
    getList() {
      return instance<DTO.IGetMaterialListR>('/v1/day-material/list', { method: 'GET' })
    },
    getHistory() {
      return instance<DTO.IGetQuizHistoryR>('/v1/day-material/history', { method: 'GET' })
    },
    saveResult(payload: DTO.ISaveQuizResultP) {
      return instance<DTO.ISaveQuizResultR>('/v1/day-material/result', {
        method: 'POST',
        body: payload,
      })
    },
  }
}

export default method
