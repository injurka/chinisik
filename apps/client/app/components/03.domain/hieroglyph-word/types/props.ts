import type { PinyinTextProps } from '~/components/03.domain/pinyin-text'

export type HieroglyphLayout = 'inline' | 'vertical' | 'card'

export interface HieroglyphSettings {
  layout: HieroglyphLayout
  showPinyin: boolean
  showTranslation: boolean
}

export interface IHieroglyphWordVariousProps {
  settings?: Partial<HieroglyphSettings>

  // Данные
  pinyin?: PinyinTextProps | string
  translate?: string
  glyph: string
}
