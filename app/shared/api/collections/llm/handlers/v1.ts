import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    pinyinHieroglyphs(payload: DTO.PinyinHieroglyphsP, abortController?: AbortController) {
      return instance<DTO.PinyinHieroglyphsR>(`/v1/llm/pinyin-hieroglyphs`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeText(payload: DTO.AnalyzeTextP, abortController?: AbortController) {
      return instance<DTO.AnalyzeTextR>(`/v1/llm/linguistic-analysis`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    analyzeTextFlat(payload: DTO.AnalyzeTextFlatP, abortController?: AbortController) {
      return instance<string>(`/v1/llm/linguistic-analysis-flat`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    checkHanziDrawing(payload: DTO.CheckHanziDrawingP, abortController?: AbortController) {
      return instance<DTO.CheckHanziDrawingR>(`/v1/llm/hanzi-check`, {
        method: 'POST',
        body: payload,
        signal: abortController?.signal,
      })
    },

    imageToTextTranslate(payload: DTO.ImageToTextTranslateP, abortController?: AbortController) {
      const formData = new FormData()
      formData.append('image', payload.image, 'area-selected')

      return instance<DTO.ImageToTextTranslateR>(`/v1/llm/image-to-text-translate`, {
        method: 'POST',
        body: formData,
        signal: abortController?.signal,
      })
    },
  }
}

export default method
