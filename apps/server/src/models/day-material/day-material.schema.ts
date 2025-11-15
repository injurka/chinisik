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

const GrammarExampleSchema = z.object({
  glyph: z.string(),
  pinyin: z.string(),
  translation: z.string(),
  sound: z.string().nullable(),
})

const GrammarSchema = z.object({
  title: z.string(),
  rule: z.string(),
  example: GrammarExampleSchema,
  description: z.string(),
})

const ProverbSchema = z.object({
  glyph: z.string(),
  pinyin: z.string(),
  translation: z.string(),
  description: z.string(),
  sound: z.string().nullable(),
})

export const DayMaterialContentSchema = z.object({
  vocabulary: VocabularySchema,
  grammar: GrammarSchema,
  proverb: ProverbSchema,
})

export const DayMaterialSchema = z.object({
  id: z.number(),
  date: z.string(),
  content: DayMaterialContentSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
})
