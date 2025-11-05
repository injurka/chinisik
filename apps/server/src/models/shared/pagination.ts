import type { z } from '@hono/zod-openapi'
import type { PageLimitSchema, PageSchema } from './pagination.schema'

type Page = z.infer<typeof PageSchema>
type PageLimit = z.infer<typeof PageLimitSchema>

export type {
  Page,
  PageLimit,
}
