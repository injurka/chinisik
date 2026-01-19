import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word'

export type BlockType = 'text' | 'hieroglyph' | 'pinyin' | 'divider' | 'warn' | 'example'

export interface EditorBlockData {
  id: string
  type: BlockType
  // Text content (for text, md)
  content?: string
  // Props for custom components
  glyph?: string
  pinyin?: string
  translate?: string
  settings?: Partial<HieroglyphSettings>
  // Style
  isBold?: boolean
  isItalic?: boolean
}

export interface EditorRow {
  id: string
  items: EditorBlockData[]
  customClass?: string
}

export interface EditorContent {
  rows: EditorRow[]
}
