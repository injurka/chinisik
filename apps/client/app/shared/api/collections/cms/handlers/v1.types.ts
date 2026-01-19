import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

// Response //

export interface IDescirptionP {
  sysname: string
}

export interface IUpdateDescriptionP {
  sysname: string
  data: JsonToDomChildren
}

// Request //

export type IDescriptionR = JsonToDomChildren
