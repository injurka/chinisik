export interface DayMaterialVocabularyItem {
  glyph: string
  pinyin: string
  translation: string
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
}

export interface DayMaterialGrammar {
  title: string
  rule: string
  examples: DayMaterialGrammarExample[]
  description: string
}

export interface DayMaterialProverb {
  glyph: string
  pinyin: string
  translation: string
  description: string
}

export interface QuizStage1Question {
  question: string
  questionLang: 'ru' | 'cn'
  correctAnswer: string
}

export interface QuizStage1 {
  questions: QuizStage1Question[]
  options: string[]
}

export interface QuizStage2Item {
  sentenceRu: string
  correctOrder: string[]
  characters: string[]
}

export interface QuizStage3 {
  proverbRu: string
  correctOrder: string[]
  characters: string[]
}

export interface DayMaterialQuiz {
  stage1: QuizStage1
  stage2: QuizStage2Item[]
  stage3: QuizStage3
}

export interface DayMaterialContent {
  vocabulary: DayMaterialVocabulary
  grammar: DayMaterialGrammar
  proverb: DayMaterialProverb
  quiz: DayMaterialQuiz
}
