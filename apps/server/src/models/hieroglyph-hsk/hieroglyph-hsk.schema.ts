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
  pinyin: z.string().openapi({
    description: 'Pinyin readings',
  }),
}).openapi('HieroglyphHsk')

export {
  HieroglyphHskSchema,
}
