interface HieroglyphWordProps {
  glyph: string
  pinyin: {
    pinyin: string
    tone: {
      index: number
      type: number
    }[]
  }
  settings: {
    layout: string
    showPinyin: boolean
    showTranslation: boolean
  }
  translate?: string
}

export type { HieroglyphWordProps }
