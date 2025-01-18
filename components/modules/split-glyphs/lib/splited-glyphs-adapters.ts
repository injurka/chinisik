import type { IHieroglyphWordProps } from '~/components/domain/hieroglyph-word'
import type { Tone } from '~/components/domain/pinyin-text/types'

function calculatePrefixSum(pinyin: { value: string, toneIndex: number }[]): number[] {
  return pinyin.reduce((acc, curr, index) => {
    if (index) {
      const prevPinyin = pinyin[index - 1]
      const prevMissingLength = prevPinyin.value.length - (prevPinyin.toneIndex + 1)
      const prevLength = acc[index - 1] + prevMissingLength
      acc.push(curr.toneIndex + prevLength + 2)
    }
    else {
      acc.push(curr.toneIndex)
    }
    return acc
  }, [] as number[])
}

function adapterSentence(value: SplitGlyphsSentence): IHieroglyphWordProps {
  const prefixSum = calculatePrefixSum(value.pinyin)

  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin.map(m => m.value).join(' '),
      tone: value.pinyin.map((m, index) => ({
        index: prefixSum[index],
        type: m.toneType as unknown as Tone,
      })),
    } as unknown as IHieroglyphWordProps['pinyin'],
    translate: value.translate,
  }
}

function adapterWord(value: SplitGlyphsWord): IHieroglyphWordProps {
  const prefixSum = calculatePrefixSum(value.pinyin)

  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin.map(m => m.value).join(' '),
      tone: value.pinyin.map((m, index) => ({
        index: prefixSum[index],
        type: m.toneType as unknown as Tone,
      })),
    } as unknown as IHieroglyphWordProps['pinyin'],
    translate: value.translate,
  }
}

function adapterHieroglyph(value: SplitGlyphsHieroglyph): IHieroglyphWordProps {
  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin,
      tone: {
        index: value.toneIndex,
        type: value.toneType,
      },
    } as unknown as IHieroglyphWordProps['pinyin'],
    translate: value.translate[0].value,
  }
}

function adapterHieroglyphKey(value: SplitGlyphsHieroglyphKey): IHieroglyphWordProps {
  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin,
      tone: {
        index: value.toneIndex,
        type: value.toneType,
      },
    } as unknown as IHieroglyphWordProps['pinyin'],
    translate: value.translate,
  }
}

function adapter(value: BaseSplitGlyphs): IHieroglyphWordProps {
  switch (value.type) {
    case 'sentence':
      return adapterSentence(value as SplitGlyphsSentence)
    case 'word':
      return adapterWord(value as SplitGlyphsWord)
    case 'hieroglyph':
      return adapterHieroglyph(value as SplitGlyphsHieroglyph)
    case 'key':
      return adapterHieroglyphKey(value as SplitGlyphsHieroglyphKey)
    default:
      throw new Error(`Unknown glyph type`)
  }
}

export { adapter }
