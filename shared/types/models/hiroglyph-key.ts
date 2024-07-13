export interface HieroglyphKey {
  index: number
  alternative: string | null
  toneType: 1 | 2 | 3 | 4
  toneIndex: number
  pinyin: string
  glyph: string
  translate: string
  transcription?: string
}
