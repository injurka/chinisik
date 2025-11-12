import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

interface ThematicDictionaryCategory {
  id: number
  sysname: string
  name: string
  description?: string
  glyph: string
  drawAllowed: boolean
  content: JsonToDomChildren
}

interface ThematicDictionarySection {
  id: number
  sysname: string
  description: string
  name: string
  glyph: string
  image?: string
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
