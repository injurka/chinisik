import type { PinyinTextProps } from '~/components/domain/pinyin-text'

type HieroglyphWordVariant = 0 | 1 | 2 | 3 | 4 | 5

interface IHieroglyphWordVariousProps {
  variant?: HieroglyphWordVariant
  pinyin?: PinyinTextProps
  translate?: string
  glyph: string
}

export type {
  HieroglyphWordVariant,
  IHieroglyphWordVariousProps,
}
