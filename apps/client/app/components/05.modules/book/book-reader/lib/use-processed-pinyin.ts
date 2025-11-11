import type { PinyinTextProps, PinyinTextTone } from '~/components/03.domain/pinyin-text'
import type { PinyinAnalysis } from '~/shared/lib/analyze-pinyin-tones'
import { analyzePinyin } from '~/shared/lib'

/**
 * Обрабатывает строку пиньиня и преобразует ее в пропсы для компонента PinyinText.
 * @param pinyinString - Строка с пиньинем, например "nǐ hǎo" или "ni3hao3".
 * @returns Объект с пропсами { pinyin, tone } для PinyinText или undefined.
 */
export function processPinyinForRender(pinyinString: string | undefined): PinyinTextProps | undefined {
  if (!pinyinString)
    return undefined

  // Анализируем строку пиньиня, чтобы получить массив слогов с информацией о тонах
  const analyses: PinyinAnalysis[] = analyzePinyin(pinyinString)

  // Собираем чистую строку пиньиня, разделенную пробелами
  const finalPinyinString = analyses.map(a => a.rawPinyin).join(' ')
  const tones: PinyinTextTone[] = []

  let offset = 0
  for (const analysis of analyses) {
    // Если в слоге был найден тон, добавляем его в массив
    if (analysis.position !== -1) {
      tones.push({
        index: offset + analysis.position,
        type: analysis.toneNumber as ToneType,
      })
    }
    // Увеличиваем смещение на длину слога + 1 (для пробела)
    offset += analysis.rawPinyin.length + 1
  }

  return {
    pinyin: finalPinyinString,
    tone: tones,
  }
}
