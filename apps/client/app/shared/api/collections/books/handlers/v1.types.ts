import type { Book, BookDetails, BookPage } from '~/shared/types'

// Response
export type IGetBooksR = Book[]
export type IGetBookDetailsR = BookDetails
export type IGetBookContentR = BookPage[]

// Request
export interface IGetBookDetailsP {
  id: string
}
export interface IGetBookContentP {
  id: string
}
