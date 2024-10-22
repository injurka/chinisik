import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IKeysAllR>(`/v1/keys/`, { method: 'GET' })
    },
    description() {
      return instance<DTO.IKeysDescriptionR>(`/v1/keys/description/`, { method: 'GET' })
    },
  }
}

export default method
