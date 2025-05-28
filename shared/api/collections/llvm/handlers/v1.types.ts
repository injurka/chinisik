import type {
  ImageToTextTranslate,
  LlvmLinguisticAnalysis,
  SplitedGlyphs,
  SplitGlyphsType,
  ToneType,
} from '~/shared/types/models'

// Request //
export interface SplitGlyphsP {
  type: SplitGlyphsType
  glyphs: string
}

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
export type SplitGlyphsR = SplitedGlyphs
export type PinyinHieroglyphsR = PinyinHieroglyphs
export type AnalyzeTextR = LlvmLinguisticAnalysis
export interface CheckHanziDrawingR {
  similarity: number
  feedback: string
}
