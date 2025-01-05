import type { SplitedGlyphs, SplitGlyphsType } from '~/shared/types/models'

// Response //

export interface SplitGlyphsP {
  type: SplitGlyphsType
  glyphs: string
}

// Request //

export type SplitGlyphsR = SplitedGlyphs
