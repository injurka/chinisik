import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    description(payload: DTO.IDescirptionP) {
      return instance<DTO.IDescriptionR>(`/v1/cms/description/${payload.sysname}`, {
        method: 'GET',
      })
    },
  }
}

export default method
