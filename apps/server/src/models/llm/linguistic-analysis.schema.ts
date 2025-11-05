import { z } from '@hono/zod-openapi'

const GrammarRulesSchema = z.object({
  type: z.string(),
  description: z.string(),
  example: z.string().optional(),
})
const PartOfSpeechSchema = z.string()

// Схемы для ключей
const KeyPositionSchema = z.enum([
  'left',
  'right',
  'top',
  'bottom',
  'full-surround',
  'top-surround',
  'bottom-surround',
  'left-surround',
  'overlaid',
  'center',
  'inside',
  'diagonal',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'cross',
  'floating',
])
const KeyRoleSchema = z.enum([
  'semantic',
  'phonetic',
  'empty-sign',
  'differentiator',
  'structural',
  'pictographic',
  'compound-semantic',
  'loan-component',
  'semantic-phonetic',
  'radical-variant',
  'orthographic-marker',
  'semantic-corrupt',
  'component-fusion',
  'pseudo-component',
  'ornamental',
])

const KeySchema = z.object({
  glyph: z.string(),
  position: KeyPositionSchema,
  role: KeyRoleSchema,
  translate: z.string().optional(),
  pinyin: z.string(),
  description: z.string().optional(),
  keyInfo: z.object({
    number: z.number(),
    name: z.string(),
    variants: z.array(z.string()),
    frequencyRank: z.number(),
  }).nullable().optional().nullable(),
}).passthrough()

const HieroglyphSchema = z.object({
  type: z.literal('hieroglyph'),
  glyph: z.string(),
  pinyin: z.string(),
  partOfSpeech: PartOfSpeechSchema,
  translate: z.string(),
  transcription: z.string(),
  strokeCount: z.number().default(0),
  etymology: z.string().default(''),
  mnemonic: z.string().default(''),
  keys: z.array(KeySchema).optional(),
  grammarRules: z.array(GrammarRulesSchema).optional(),
  hints: z.array(z.string()).optional(),
}).passthrough()

const WordSchema = z.object({
  type: z.literal('word'),
  glyph: z.string(),
  pinyin: z.string(),
  partOfSpeech: PartOfSpeechSchema,
  translate: z.string(),
  transcription: z.string(),
  grammarRules: z.array(GrammarRulesSchema).optional(),
  hints: z.array(z.string()).optional(),
  hieroglyphs: z.array(HieroglyphSchema).optional(),
}).passthrough()

const SentenceSchema = z.object({
  type: z.literal('sentence'),
  structure: z.object({
    type: z.string(),
    description: z.string(),
  }),
  glyph: z.string(),
  pinyin: z.string(),
  translate: z.string(),
  transcription: z.string(),
  grammarRules: z.array(GrammarRulesSchema).optional(),
  hints: z.array(z.string()).optional(),
  components: z.array(z.union([HieroglyphSchema, WordSchema])).optional(),
}).passthrough()

const LlmLinguisticAnalysisSchema = z.object({
  sentences: z.array(SentenceSchema),
})

const LlmLinguisticAnalysisSourceTypeSchema = z.object({
  type: z.enum(['sentence', 'word']),
  cn: z.string(),
})

export {
  LlmLinguisticAnalysisSchema,
  LlmLinguisticAnalysisSourceTypeSchema,
}
