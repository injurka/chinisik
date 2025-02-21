interface HieroglyphStructure {
  id: number
  glyph: string
  traditionalGlyph: string
  translation: string
  pinyin: {
    syllable: string
    tone: 0 | 1 | 2 | 3 | 4
    position: number
  }[]
}

export type {
  HieroglyphStructure,
}
