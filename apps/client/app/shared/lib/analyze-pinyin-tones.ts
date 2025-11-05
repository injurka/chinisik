export interface ToneInfo {
  toneMark: string
  toneNumber: number
  position: number
  vowel: string
}

const toneMap = {
  '\u0304': 1, // Макрон (первый тон)
  '\u0301': 2, // Акут (второй тон)
  '\u030C': 3, // Гачек (третий тон)
  '\u0300': 4, // Гравис (четвертый тон)
} as const

// Создаем тип, который представляет собой только валидные ключи toneMap
type ToneCharacter = keyof typeof toneMap

// Функция-предохранитель типа. Она проверяет, является ли символ знаком тона.
// Если да, TypeScript будет считать `char` типом `ToneCharacter` внутри блоков if.
function isToneCharacter(char: string): char is ToneCharacter {
  return char in toneMap
}

function analyzePinyinTones(pinyin: string): ToneInfo[] {
  const normalizedPinyin = pinyin.normalize('NFD')
  const results: ToneInfo[] = []

  for (let i = 0; i < normalizedPinyin.length; i++) {
    const char = normalizedPinyin[i] as string

    if (isToneCharacter(char)) {
      const position = i - 1
      const vowel = normalizedPinyin[position]

      if (vowel) {
        results.push({
          toneMark: char,
          toneNumber: toneMap[char],
          position,
          vowel,
        })
      }
    }
  }

  return results
}

export { analyzePinyinTones }
