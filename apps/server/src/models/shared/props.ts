interface HieroglyphWordProps {
  glyph: string
  pinyin: {
    pinyin: string
    tone: {
      index: number
      type: number
    }[]
  }
  variant: number
  translate?: string
}

export type { HieroglyphWordProps }
