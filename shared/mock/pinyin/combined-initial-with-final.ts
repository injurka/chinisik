import {
  mockFinals,
  mockFinalsTone,
  mockInitials,
  mockInitialsFinals,
} from '~/shared/mock/pinyin'

export function getCombinedInitialWithFinal(): Map<string, number[]> {
  const initialMap = new Map<number, Initial>()
  const finalMap = new Map<number, Final>()
  const finalToneMap = new Map<number, FinalsTone>()
  const result: Map<string, number[]> = new Map()

  // Заполняем карты для быстрого доступа
  mockInitials.forEach((initial) => {
    initialMap.set(initial.id, initial)
  })

  mockFinals.forEach((final) => {
    finalMap.set(final.id, final)
  })

  mockFinalsTone.forEach((finalTone) => {
    finalToneMap.set(finalTone.id, finalTone)
  })

  // Собираем данные
  mockInitialsFinals.forEach((initFinal) => {
    const initial = initFinal.initialId ? initialMap.get(initFinal.initialId) : null
    const finalTone = finalToneMap.get(initFinal.finalToneId)

    if (finalTone && initial) {
      const final = finalMap.get(finalTone.finalId)
      if (final) {
        const key = `${initial.name}+${final.name}`
        if (!result.has(key)) {
          result.set(key, [])
        }
        const tones = result.get(key)!
        if (!tones.includes(finalTone.toneType)) {
          tones.push(finalTone.toneType)
        }
      }
    }
  })

  return result
}
