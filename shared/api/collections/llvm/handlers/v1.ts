import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    splitGlyphs(payload: DTO.SplitGlyphsP) {
      return instance<DTO.SplitGlyphsR>(`/v1/llvm/split-glyphs`, {
        method: 'POST',
        body: payload,
      })
    },

    pinyinHieroglyphs(payload: DTO.PinyinHieroglyphsP, abortController?: AbortController) {
      return instance<DTO.PinyinHieroglyphsR>(`/v1/llvm/pinyin-hieroglyphs`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeText(payload: DTO.AnalyzeTextP, abortController?: AbortController) {
      return instance<DTO.AnalyzeTextR>(`/v1/llvm/linguistic-analysis`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeTextFlat(payload: DTO.AnalyzeTextFlatP, abortController?: AbortController) {
      return instance<string>(`/v1/llvm/linguistic-analysis-flat`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    checkHanziDrawing(payload: DTO.CheckHanziDrawingP, abortController?: AbortController) {
      return instance<DTO.CheckHanziDrawingR>(`/v1/llvm/hanzi-check`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

  }
}

export default method
