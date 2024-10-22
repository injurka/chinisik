import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IPinyinAllR>(`/v1/pinyin/`, { method: 'GET' })
    },
    description() {
      return instance<DTO.IPinyinDescriptionR>(`/v1/pinyin/description/`, { method: 'GET' })
    },
  }
}

export default method
