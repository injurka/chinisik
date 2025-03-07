type SplitGlyphsType = 'sentence' | 'word' | 'hieroglyph' | 'key'

interface BaseSplitGlyphs {
  type: SplitGlyphsType
  glyph: string
  pinyin: string | Pinyin | Pinyin[]
  translate: string | Translate[]
  transcription: string
  components: string[]
}

interface SplitGlyphsSentence extends BaseSplitGlyphs {
  pinyin: Pinyin[]
  translate: string
}

interface SplitGlyphsWord extends BaseSplitGlyphs {
  pinyin: Pinyin[]
  translate: string
}

interface SplitGlyphsHieroglyph extends BaseSplitGlyphs {
  pinyin: string
  toneType: number
  toneIndex: number
  translate: Translate[]
}

interface SplitGlyphsHieroglyphKey extends BaseSplitGlyphs {
  pinyin: string
  toneType: number
  toneIndex: number
  translate: string
}

interface Pinyin {
  value: string
  toneType: number
  toneIndex: number
}

interface Translate {
  pos: string
  value: string
  freq: number
}

type SplitedGlyphs = (
  SplitGlyphsSentence |
  SplitGlyphsHieroglyph |
  SplitGlyphsWord
)[]

export type {
  BaseSplitGlyphs,
  SplitedGlyphs,
  SplitGlyphsHieroglyph,
  SplitGlyphsHieroglyphKey,
  SplitGlyphsSentence,
  SplitGlyphsType,
  SplitGlyphsWord,
  Translate,
}
