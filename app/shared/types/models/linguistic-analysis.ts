interface GrammarRules {
  type: string
  description: string
  example?: string
}

type PartOfSpeech = string

type KeyPosition
  = | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'full-surround'
    | 'top-surround'
    | 'bottom-surround'
    | 'left-surround'
    | 'overlaid'
    | 'center'
    | 'inside'
    | 'diagonal'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'cross'
    | 'floating'

type KeyRole
  = | 'semantic'
    | 'phonetic'
    | 'empty-sign'
    | 'differentiator'
    | 'structural'
    | 'pictographic'
    | 'compound-semantic'
    | 'loan-component'
    | 'semantic-phonetic'
    | 'radical-variant'
    | 'orthographic-marker'
    | 'semantic-corrupt'
    | 'component-fusion'
    | 'pseudo-component'
    | 'ornamental'

interface Key {
  glyph: string
  position: KeyPosition
  role: KeyRole
  translate?: string
  pinyin: string
  description?: string
  keyInfo?: {
    number: number
    name: string
    variants: string[]
    frequencyRank: number
  } | null | null
}

interface BaseEntry {
  glyph: string
  pinyin: string
  partOfSpeech: PartOfSpeech
  translate: string
  transcription: string
  grammarRules?: GrammarRules[]
  hints?: string[]
}

interface Hieroglyph extends BaseEntry {
  type: 'hieroglyph'
  strokeCount?: number
  etymology?: string
  mnemonic?: string
  keys?: Key[]
}

interface Word extends BaseEntry {
  type: 'word'
  hieroglyphs?: Hieroglyph[]
}

interface Sentence {
  type: 'sentence'
  structure: {
    type: string
    description: string
  }
  glyph: string
  pinyin: string
  translate: string
  transcription: string
  grammarRules?: GrammarRules[]
  hints?: string[]
  components?: (Hieroglyph | Word)[]
}

interface LlmLinguisticAnalysis {
  sentences: Sentence[]
}

interface LinguisticAnalysis {
  id: number
  type: string
  userId: number
  model: string
  sourceValue: string
  glyph: string
  totalTokens: number
  generationDuration: number
  createdAt: Date
  updatedAt: Date
  data: LlmLinguisticAnalysis
}

export type { LinguisticAnalysis, LlmLinguisticAnalysis }
