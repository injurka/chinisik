interface Hieroglyph {
  glyph: string
  pinyin: string
  toneType: number
  toneIndex: number
  translate: string
  transcription: string
}

interface PinyinHieroglyphsExample {
  tone: ToneType
  hieroglyphs: Hieroglyph[]
}

interface PinyinHieroglyphs {
  sourcePinyin: string
  tones: ToneType[]
  examples: PinyinHieroglyphsExample[]
  count?: number
}

export type { PinyinHieroglyphs }
