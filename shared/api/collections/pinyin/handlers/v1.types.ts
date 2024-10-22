import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

// Response //

export interface IPinyinAllR {
  initials: Final[]
  finals: Initial[]
  initialWithFinal: InitialWithFinal
}

export type IPinyinDescriptionR = JsonToDomChildren

// Request //
