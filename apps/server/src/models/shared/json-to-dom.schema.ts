import { z } from '@hono/zod-openapi'

const JsonToDomElementSchema = z.object({
  tag: z.string(),
  class: z.string().optional(),
  children: z.any().optional(),
  props: z.record(z.unknown()).optional(),
})

export {
  JsonToDomElementSchema,
}
