import { z } from '@hono/zod-openapi'
import { ToneTypeSchema } from '../shared'

const HieroglyphSchema = z.object({
  glyph: z.string(),
  pinyin: z.string(),
  toneType: z.number().int(),
  toneIndex: z.number().int(),
  translate: z.string(),
  transcription: z.string(),
})

const PinyinHieroglyphsSchema = z.object({
  sourcePinyin: z.string(),
  tones: ToneTypeSchema.array(),
  examples: z.object({
    tone: ToneTypeSchema,
    hieroglyphs: HieroglyphSchema.array(),
  }).array(),
  count: z.number().optional(),
})

export {
  PinyinHieroglyphsSchema,
}
