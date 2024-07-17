export interface HieroglyphKey {
  index?: number
  alternative?: string | null
  toneType: ToneType
  toneIndex: number
  pinyin: string
  glyph: string
  translate: string
  transcription?: string
}
