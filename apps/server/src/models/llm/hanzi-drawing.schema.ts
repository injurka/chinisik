import { z } from '@hono/zod-openapi'

const HanziDrawingSchema = z.object({
  similarity: z.number().min(0).max(100).openapi({
    description: 'Similarity score between 0 and 100',
    example: 85.5,
  }),
  feedback: z.string().openapi({
    description: 'AI-generated feedback on the drawing',
    example: 'The overall structure is good, but the final stroke (捺) is a bit too short.',
  }),
})

export { HanziDrawingSchema }
