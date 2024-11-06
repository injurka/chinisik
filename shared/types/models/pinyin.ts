export type ToneType = 0 | 1 | 2 | 3 | 4

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
  toneType: ToneType
  finalId: number
}

export type InitialWithFinal = Record<string, number[]>
