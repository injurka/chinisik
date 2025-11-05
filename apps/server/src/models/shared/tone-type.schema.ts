import { z } from '@hono/zod-openapi'

const ToneTypeSchema = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])

export { ToneTypeSchema }
