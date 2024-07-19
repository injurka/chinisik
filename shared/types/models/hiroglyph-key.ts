export interface HieroglyphKey {
  index?: number
  alternative?: string | null
  tone: {
    type: ToneType
    index: number
  }
  pinyin: string
  glyph: string
  translate: string
  transcription?: string
}
