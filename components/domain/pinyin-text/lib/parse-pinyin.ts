interface PinyinSyllable {
  syllable: string
  tone: number
  position: number
}

/**
 * Преобразует строку пиньиня с цифровыми тонами в массив объектов
 * @param pinyinString - строка пиньиня в формате "da3 dia4n hua4"
 * @returns массив объектов, представляющих слоги с тоном и позицией
 */
function parseStringPinyin(pinyinString: string): PinyinSyllable[] {
  const result: PinyinSyllable[] = []

  const words = pinyinString.trim().split(' ')

  for (const word of words) {
    const toneMatch = word.match(/([1-5])/)

    if (toneMatch) {
      const tone = Number.parseInt(toneMatch[0], 10)
      const position = word.indexOf(toneMatch[0]) - 1
      const syllable = word.replace(/[1-5]/, '')

      result.push({
        syllable,
        tone,
        position,
      })
    }
    else {
      result.push({
        syllable: word,
        tone: 5,
        position: 0,
      })
    }
  }

  return result
}

export { parseStringPinyin }
