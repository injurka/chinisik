import { z } from '@hono/zod-openapi'

const HieroglyphKeySchema = z.object({
  index: z.number().int().optional(),
  alternative: z.union([z.string(), z.null()]).optional(),
  pinyin: z.string(),
  glyph: z.string(),
  translate: z.string(),
  transcription: z.string().optional(),
})

export { HieroglyphKeySchema }
