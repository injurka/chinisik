import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

interface ThematicDictionaryCategory {
  id: number
  sysname: string
  name: string
  description?: string
  glyph: string
  words: any // TODO
  content: JsonToDomChildren
}

interface ThematicDictionarySection {
  id: number
  sysname: string
  description: string
  name: string
  glyph: string
  categories: ThematicDictionaryCategory[]
}

interface ThematicDictionaryData {
  catalog: ThematicDictionarySection[]
}

export type {
  ThematicDictionaryCategory,
  ThematicDictionaryData,
  ThematicDictionarySection,
}
