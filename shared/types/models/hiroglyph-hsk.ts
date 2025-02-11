interface HieroglyphHsk {
  item: any
  id: number
  glyph: string
  traditionalGlyph: string
  translation: {
    en: string
    ru: string
  }
  pinyin: {
    syllable: string
    tone: 0 | 1 | 2 | 3 | 4
    position: number
  }[]
}

export type {
  HieroglyphHsk,
}
