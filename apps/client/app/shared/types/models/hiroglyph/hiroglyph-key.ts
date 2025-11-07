interface HieroglyphKey {
  index?: number
  alternative?: string | null
  pinyin: string
  glyph: string
  translate: string
  transcription: string
}

export type { HieroglyphKey }
