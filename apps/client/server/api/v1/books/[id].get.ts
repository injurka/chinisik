import { mockBookDetails } from '../../../utils/mock/book/book-details'

export default defineEventHandler((event) => {
  const bookId = getRouterParam(event, 'id')
  const book = mockBookDetails.find(b => b.id === bookId)

  if (!book) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Book not found',
    })
  }

  return book
})
