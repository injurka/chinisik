type SplitGlyphsType = 'sentence' | 'word' | 'hieroglyph'

interface BaseSplitGlyphs {
  glyph: string
  pinyin: string | Pinyin | Pinyin[]
  translate: string | Translate[]
  transcription: string
  components: string[]
}

interface SplitGlyphsSentence extends BaseSplitGlyphs {
  type: 'sentence'
  pinyin: Pinyin[]
  translate: string
}

interface SplitGlyphsHieroglyph extends BaseSplitGlyphs {
  type: 'hieroglyph'
  pinyin: string
  toneType: number
  toneIndex: number
  translate: Translate[]
}

interface SplitGlyphsWord extends BaseSplitGlyphs {
  type: 'word'
  pinyin: Pinyin[]
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
  SplitedGlyphs,
  SplitGlyphsHieroglyph,
  SplitGlyphsSentence,
  SplitGlyphsType,
  SplitGlyphsWord,
}
