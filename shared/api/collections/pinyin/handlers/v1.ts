import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IPinyinAllR>(`/v1/pinyin`, { method: 'GET' })
    },
  }
}

export default method
