const modelDescription = ` 
# Китайский лингвистический анализ (JSON структура)

# Иерархия элементов:
1. Sentence → Word/Hieroglyph (В предложении могут как просто слова, так и простые иероглифы которые нельзя отнести к слову)
2. Word → Hieroglyph (Слово всегда разделяется на иероглифы, предложение должно разбиваться на компоненты так, чтобы слова могли быть разбиты на иероглифы)
3. Hieroglyph → Key (У всех иероглифов есть ключи из которых они состоят)

# Поля:

// Используется в различных моделях
- GrammarRules: {
  type: string,
  description: string,
  example?: string
}
- Pinyin: string // Строка, содержащая пиньинь **ТОЛЬКО** с указанием тонов цифрами. Пример: "da3 dia4n hua4". Строка состоит из слогов, разделенных пробелами. Тон каждого слога обозначается цифрой после слога (1, 2, 3, 4, 5, где 5 означает нейтральный тон). **Недопустимо использование диакритических знаков (тонов над гласными).**
- PartOfSpeech: string // Часть речи на русском языке

- Sentence: {
  type: 'sentence',
  structure: {type: string, description: string},
  glyph: string,
  pinyin: string,
  translate: string, // Перевод на литературный русский язык
  transcription: string, // Практическая запись произношения слова (не научная транскрипция), пример: "да диан хуа"
  grammarRules: Array<GrammarRules>,
  description: string,
  components: Array<Word|Hieroglyph>
}

- Word: {
  type: 'word',
  glyph: string,
  pinyin: string,
  partOfSpeech: PartOfSpeech,
  translate: string, // Перевод на литературный русский язык
  transcription: string, // Практическая запись произношения слова (не научная транскрипция), пример: "да диан хуа"
  grammarRules: Array<GrammarRules>,
  hints: string[], // Полезные советы или дополнительная информация, связанная с текущим словом.
  hieroglyphs: Array<Hieroglyph|Word>
}

- Hieroglyph: {
  type: 'hieroglyph',
  glyph: string,
  pinyin: string,
  partOfSpeech: PartOfSpeech,
  translate: string, // Перевод на литературный русский язык
  transcription: string, // Практическая запись произношения слова (не научная транскрипция), пример: "да диан хуа"
  strokeCount: number,
  etymology: string,
  mnemonic: string,
  keys: Array<Key>,
  grammarRules: Array<GrammarRules>,
  hints: string[] // Полезные советы или дополнительная информация, связанная с текущим иероглифом.
}

- KeyPosition: 'left'|'right'|'top'|'bottom'|'full-surround'|'top-surround'|'bottom-surround'|'left-surround'|'overlaid'|'center'|'inside'|'diagonal'|'top-left'|'top-right'|'bottom-left'|'bottom-right'|'cross'|'floating'
- KeyRole: 'semantic'|'phonetic'|'empty-sign'|'differentiator'|'structural'|'pictographic'|'compound-semantic'|'loan-component'|'semantic-phonetic'|'radical-variant'|'orthographic-marker'|'semantic-corrupt'|'component-fusion'|'pseudo-component'|'ornamental'

- Key: {
  glyph: string,
  position: KeyPosition,
  role: KeyRole,
  translate: string,
  hints: string[]
  keyInfo: { //Содержит информацию, если ключ входит в набор из 214 ключей Канси
    number: number, // Индекс иероглифа из набора 214 ключей словаря Канси.
    name: string,
    variants: string[],
    frequencyRank: number
  } | null,
  pinyin: string,
}

# Правила:
- Только допустимые значения для enum-полей
- Любые знаки должны быть исключены из поля "components" и не учитываются при разборе на состовляющие
- keyInfo = null если компонент не из 214 ключей Канси. **Ключи Канси** - это набор из 214 иероглифов, используемых в китайских словарях в качестве основы для классификации иероглифов.
- Танскрипция и перевод должны быть только на русском языке. Примеры транскрипции: "да диан хуа"
- Строгий JSON-синтаксис:
  * Все массивы должны быть правильно закрыты квадратными скобками []
  * Все объекты должны быть правильно закрыты фигурными скобками {}
  * После каждого элемента массива/объекта (кроме последнего) должна стоять запятая
  * Последний элемент массива/объекта НЕ должен иметь запятую
  * Все строковые значения должны быть в двойных кавычках с правильным экранированием
  * Вложенные структуры должны соблюдать правильную вложенность и закрытие скобок
- Правила для тонов:
  * Правила размещения тона в слоге:
   - Если в слоге одна гласная - тон ставится над ней
   - Если в слоге несколько гласных: Для a, e, o - тон ставится над первой из них, для других комбинаций - тон ставится над последней гласной
   - В дифтонгах ui и iu тон ставится над u
  * **ВНИМАНИЕ! В поле *Pinyin* тона обозначаются только цифрами после слога, никаких диакритических знаков над гласными!**
`

export { modelDescription }
