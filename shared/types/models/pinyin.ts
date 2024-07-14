export interface Pinyin {
  id: number
  pinyin: string
  initialId: number
  finalId: number
  finalToneId: number
  tone: number
  initialPos: number
  finalPos: number
}

export interface Final {
  id: number
  name: string
  pos: number
}
export interface Initial {
  id: number
  name: string
  pos: number
}
export interface InitialsFinals {
  id: number
  initialId: number | null
  finalToneId: number
}
export interface FinalsTone {
  id: number
  name: string
  toneType: 0 | 1 | 2 | 3 | 4
  finalId: number
}
