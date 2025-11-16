import type { z } from '@hono/zod-openapi'
import type { BookDetailsSchema, BookPageSchema, BookSchema } from './book.schema'

export type Book = z.infer<typeof BookSchema>
export type BookDetails = z.infer<typeof BookDetailsSchema>
export type BookPage = z.infer<typeof BookPageSchema>
