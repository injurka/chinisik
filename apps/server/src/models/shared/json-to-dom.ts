import type { HieroglyphWordProps } from './props'

type AllJsonToDomElementProps = HieroglyphWordProps & Record<string, unknown>

interface JsonToDomElement<T = AllJsonToDomElementProps> {
  tag: string
  class?: string
  children?: JsonToDomChildren<T>
  props?: T
}

type JsonToDomChildren<T = AllJsonToDomElementProps> =
  string
  | JsonToDomElement<T>
  | JsonToDomElement<T>[]

export type {
  AllJsonToDomElementProps,
  JsonToDomChildren,
  JsonToDomElement,
}
