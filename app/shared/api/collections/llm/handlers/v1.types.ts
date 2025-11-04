import type {
  ImageToTextTranslate,
  LlmLinguisticAnalysis,
  ToneType,
} from '~/shared/types/models'

// Request //
export interface PinyinHieroglyphsP {
  tones: ToneType[]
  pinyin: string
  count: number
}

export interface AnalyzeTextP {
  value: string
  model: string
}

export interface AnalyzeTextFlatP {
  value: string
  model: string
  isTemplate: boolean
}

export interface CheckHanziDrawingP {
  userImage: string
  targetImage: string
  targetWord: string
}

export interface ImageToTextTranslateP {
  image: File
}

// Response //

export type ImageToTextTranslateR = ImageToTextTranslate
export type PinyinHieroglyphsR = PinyinHieroglyphs
export type AnalyzeTextR = LlmLinguisticAnalysis
export interface CheckHanziDrawingR {
  similarity: number
  feedback: string
}
