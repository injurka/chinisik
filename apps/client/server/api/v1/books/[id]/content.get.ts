import { mockBookContent } from '../../../../utils/mock/book/book-content'

export default defineEventHandler((event) => {
  const bookId = getRouterParam(event, 'id')

  if (typeof bookId !== 'string' || !mockBookContent[bookId]) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Book content not found',
    })
  }

  return mockBookContent[bookId]
})
