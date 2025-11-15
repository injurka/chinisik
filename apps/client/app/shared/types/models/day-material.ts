export interface DayMaterialVocabularyItem {
  glyph: string
  pinyin: string
  translation: string
  sound: string | null
}

export interface DayMaterialVocabulary {
  theme: string
  items: DayMaterialVocabularyItem[]
  description: string
}

export interface DayMaterialGrammarExample {
  glyph: string
  pinyin: string
  translation: string
  sound: string | null
}

export interface DayMaterialGrammar {
  title: string
  rule: string
  example: DayMaterialGrammarExample
  description: string
}

export interface DayMaterialProverb {
  title: string
  glyph: string
  pinyin: string
  translation: string
  description: string
  sound: string | null
}

export interface DayMaterialContent {
  vocabulary: DayMaterialVocabulary
  grammar: DayMaterialGrammar
  proverb: DayMaterialProverb
}
