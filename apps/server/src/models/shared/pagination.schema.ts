import { z } from '@hono/zod-openapi'

const PageSchema = z
  .string()
  .default('1')
  .transform(val => Number.parseInt(val, 10))
  .refine(val => !Number.isNaN(val) && val > 0, { message: 'Invalid value for page' })
  .openapi({
    param: {
      name: 'page',
      in: 'query',
    },
  })

const PageLimitSchema = z
  .string()
  .default('10')
  .transform(val => Number.parseInt(val, 10))
  .refine(val => !Number.isNaN(val) && val > 0, { message: 'Invalid value for limit' })
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
    },
  })

function DataListSchema<T extends z.ZodObject<any>>(data: T) {
  return z.object({
    data: z.array(data),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
    }),
  })
}

export { DataListSchema, PageLimitSchema, PageSchema }
