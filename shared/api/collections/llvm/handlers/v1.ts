import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    splitGlyphs(payload: DTO.SplitGlyphsP) {
      return instance<DTO.SplitGlyphsR>(`/v1/llvm/split-glyphs`, {
        method: 'GET',
        query: payload,
      })
    },
  }
}

export default method
