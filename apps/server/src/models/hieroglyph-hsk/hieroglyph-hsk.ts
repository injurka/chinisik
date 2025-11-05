import type { ToneType } from '../shared'

interface HieroglyphHsk {
  id: number
  glyph: string
  traditionalGlyph: ToneType
  translation: {
    en: string
    ru: string
  }
  pinyin: {
    syllable: string
    tone: number
    position: number
  }[]
}

export type {
  HieroglyphHsk,
}
