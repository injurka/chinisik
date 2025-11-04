import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    hieroglyphsByLevel(payload: DTO.IHieroglyphsLevelP) {
      return instance<DTO.IHieroglyphsLevelR>(`/v1/hsk/hieroglyphs/${payload.level}`, {
        method: 'GET',
      })
    },
    hieroglyphsByLevelList({ level, ...paginationParams }: DTO.IHieroglyphsLevelListP) {
      return instance<DTO.IHieroglyphsLevelListR>(`/v1/hsk/hieroglyphs/${level}/list`, {
        params: paginationParams,
        method: 'GET',
      })
    },
  }
}

export default method
