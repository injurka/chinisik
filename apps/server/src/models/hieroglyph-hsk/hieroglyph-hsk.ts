import type { ToneType } from '../shared'

interface HieroglyphHsk {
  id: number
  glyph: string
  traditionalGlyph: ToneType
  translation: {
    en: string
    ru: string
  }
  pinyin: string
}

export type {
  HieroglyphHsk,
}
