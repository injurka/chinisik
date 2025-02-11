import type { PinyinTextProps, PinyinTextTone } from '~/components/domain/pinyin-text'

function usePinyinFormatter() {
  const formatPinyinData = (pinyinArray: HieroglyphHsk['pinyin']): PinyinTextProps => {
    return {
      pinyin: pinyinArray.map(p => p.syllable).join(' '),
      tone: pinyinArray.map((p, index, array) => {
        const offset = array
          .slice(0, index)
          .reduce((sum, curr) => sum + curr.syllable.length + 1, 0)

        return {
          index: offset + p.position,
          type: p.tone,
        }
      }) as unknown as PinyinTextTone,
    }
  }

  return { formatPinyinData }
}

export { usePinyinFormatter }
