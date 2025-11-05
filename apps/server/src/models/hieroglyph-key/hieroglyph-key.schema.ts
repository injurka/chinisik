import { z } from '@hono/zod-openapi'
import { ToneTypeSchema } from '../shared'

const HieroglyphKeySchema = z.object({
  index: z.number().int().optional(),
  alternative: z.union([z.string(), z.null()]).optional(),
  toneType: ToneTypeSchema,
  toneIndex: z.number().int().nonnegative(),
  pinyin: z.string(),
  glyph: z.string(),
  translate: z.string(),
  transcription: z.string().optional(),
})

export {
  HieroglyphKeySchema,
}
