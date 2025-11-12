import { getQuery } from 'h3'
import { mockBookContent } from '../../../../utils/mock/book/book-content'

export default defineEventHandler((event) => {
  const bookId = getRouterParam(event, 'id') as string
  const query = getQuery(event)
  const page = Number.parseInt(query.page as string, 10)

  if (Number.isNaN(page) || page < 1) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid page number provided.',
    })
  }

  const bookPages = mockBookContent[bookId]

  if (!bookPages) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Book content not found',
    })
  }

  // page is 1-based, array is 0-based
  const pageContent = bookPages[page - 1]

  if (!pageContent) {
    throw createError({
      statusCode: 404,
      statusMessage: `Page ${page} not found for this book.`,
    })
  }

  return pageContent
})
