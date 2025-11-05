import { z } from '@hono/zod-openapi'

const HieroglyphHskSchema = z.object({
  id: z.number().openapi({
    description: 'Unique identifier for the hieroglyph',
  }),
  glyph: z.string().nullable().optional().openapi({
    description: 'Simplified glyph representation',
  }),
  traditionalGlyph: z.string().openapi({
    description: 'Traditional glyph with tone information',
  }),
  translation: z.object({
    en: z.string().openapi({ description: 'English translation' }),
    ru: z.string().openapi({ description: 'Russian translation' }),
  }).openapi({
    description: 'Translations of the hieroglyph',
  }),
  pinyin: z.array(
    z.object({
      syllable: z.string().openapi({ description: 'Pinyin syllable' }),
      tone: z.number().int().min(1).max(5).openapi({
        description: 'Tone number (1-5)',
        example: 3,
      }),
      position: z.number().int().openapi({
        description: 'Position in the word/phrase',
      }),
    }).openapi({ description: 'Pinyin information' }),
  ).openapi({
    description: 'Array of pinyin readings',
  }),
}).openapi('HieroglyphHsk')

export {
  HieroglyphHskSchema,
}
