interface Tone {
  index: number
  type: ToneType
}

interface Props {
  pinyin: string
  tone: Tone[] | Tone
  colored?: boolean | null
}

export type { Props, Tone }
