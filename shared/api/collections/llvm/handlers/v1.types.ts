import type { SplitedGlyphs, SplitGlyphsType, ToneType } from '~/shared/types/models'

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

// Response //

export type SplitGlyphsR = SplitedGlyphs
export type PinyinHieroglyphsR = PinyinHieroglyphs
