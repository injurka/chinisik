import type { PinyinTextProps } from '~/components/domain/pinyin-text'

type HieroglyphWordVariant = 0 | 1 | 2 | 3 | 4

interface IHieroglyphWordState {
  variant: HieroglyphWordVariant
}
interface IHieroglyphWordVariousProps {
  variant?: HieroglyphWordVariant
  pinyin?: PinyinTextProps | string
  translate?: string
  glyph: string
}

export type {
  HieroglyphWordVariant,
  IHieroglyphWordState,
  IHieroglyphWordVariousProps,
}
