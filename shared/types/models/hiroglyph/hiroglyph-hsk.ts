import type { HieroglyphStructure } from './hiroglyph'

type HieroglyphHsk = Omit<HieroglyphStructure, 'translation'> & {
  item: any
  translation: {
    en: string
    ru: string
  }
}

export type {
  HieroglyphHsk,
}
