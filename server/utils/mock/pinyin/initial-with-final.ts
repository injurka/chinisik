import {
  mockFinals,
  mockFinalsTone,
  mockInitials,
  mockInitialsFinals,
} from '.'
import type { Final, FinalsTone, Initial, InitialWithFinal } from '~/shared/types'

const initialMap = new Map<number, Initial>()
const finalMap = new Map<number, Final>()
const finalToneMap = new Map<number, FinalsTone>()
const initialWithFinal: InitialWithFinal = {} as InitialWithFinal

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

      if (!initialWithFinal[key]) {
        initialWithFinal[key] = []
      }
      const tones = initialWithFinal[key]!
      if (!tones.includes(finalTone.toneType)) {
        tones.push(finalTone.toneType)
      }
    }
  }
})

export { initialWithFinal as mockInitialWithFinal }
