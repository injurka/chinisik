type NativeTags = 'div' | 'h2' | 'p' | 'ul' | 'li' | 'em' | 'span'
type CustomTags = 'HieroglyphWord' | 'PinyinText'

export type JsonToDomTags = NativeTags | CustomTags

export interface JsonToDomChildren {
  tag: any
  children?: string | JsonToDomChildren | JsonToDomChildren[]
  class?: string
  props?: Record<string, unknown>
}
