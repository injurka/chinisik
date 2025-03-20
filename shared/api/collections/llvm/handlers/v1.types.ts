import type {
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

// Response //

export type SplitGlyphsR = SplitedGlyphs
export type PinyinHieroglyphsR = PinyinHieroglyphs
export type AnalyzeTextR = LlvmLinguisticAnalysis
