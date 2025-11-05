import { z } from '@hono/zod-openapi'

export const ImageTranslationResponseSchema = z.object({
  source: z.string().openapi({
    description: 'Original text extracted from the image.',
    example: '你好世界',
  }),
  translate: z.string().openapi({
    description: 'Translation of the source text.',
    example: 'Привет мир',
  }),
  transcription: z.string().openapi({
    description: 'Transcription of the source text.',
    example: 'nǐ hǎo shìjiè',
  }),
}).openapi('ImageTranslationResponse')

export type ImageTranslationResponse = z.infer<typeof ImageTranslationResponseSchema>
