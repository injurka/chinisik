import { z } from '@hono/zod-openapi'

const VocabularyItemSchema = z.object({
  glyph: z.string(),
  pinyin: z.string(),
  translation: z.string(),
  sound: z.string().nullable(),
})

const VocabularySchema = z.object({
  theme: z.string(),
  items: z.array(VocabularyItemSchema),
  description: z.string(),
})

const GrammarExampleSchema = z.array(
  z.object({
    glyph: z.string(),
    pinyin: z.string(),
    translation: z.string(),
    sound: z.string().nullable(),
  }),
)

const GrammarSchema = z.object({
  title: z.string(),
  rule: z.string(),
  examples: GrammarExampleSchema,
  description: z.string(),
})

const ProverbSchema = z.object({
  glyph: z.string(),
  pinyin: z.string(),
  translation: z.string(),
  description: z.string(),
  sound: z.string().nullable(),
})

// --- Quiz Schemas ---

const QuizStage1QuestionSchema = z.object({
  question: z.string(),
  questionLang: z.enum(['ru', 'cn']),
  correctAnswer: z.string(),
})

const QuizStage1Schema = z.object({
  questions: z.array(QuizStage1QuestionSchema),
  options: z.array(z.string()),
})

const QuizStage2ItemSchema = z.object({
  sentenceRu: z.string(),
  correctOrder: z.array(z.string()),
  characters: z.array(z.string()),
})

const QuizStage3Schema = z.object({
  proverbRu: z.string(),
  correctOrder: z.array(z.string()),
  characters: z.array(z.string()),
})

const QuizSchema = z.object({
  stage1: QuizStage1Schema,
  stage2: z.array(QuizStage2ItemSchema),
  stage3: QuizStage3Schema,
})

export const DayMaterialContentSchema = z.object({
  vocabulary: VocabularySchema,
  grammar: GrammarSchema,
  proverb: ProverbSchema,
  quiz: QuizSchema.optional().nullable(),
})

export const DayMaterialSchema = z.object({
  id: z.number(),
  date: z.string(),
  content: DayMaterialContentSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
})

// --- History / Results Schemas ---

export const DayMaterialQuizResultPayloadSchema = z.object({
  score: z.number().int().min(0),
  mistakes: z.number().int().min(0),
  totalQuestions: z.number().int().min(1),
})

export const DayMaterialQuizAttemptSchema = z.object({
  id: z.number().int(),
  score: z.number().int(),
  mistakes: z.number().int(),
  totalQuestions: z.number().int(),
  createdAt: z.string(),
})

// === NEW: Schema for the list of past materials ===
export const DayMaterialListItemSchema = z.object({
  id: z.number().int(),
  date: z.string(),
  theme: z.string(),
  grammarTitle: z.string(),
  isCompleted: z.boolean().default(false),
})
