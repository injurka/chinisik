import { HTTPException } from 'hono/http-exception'
import { prisma } from '~/prisma'

class BookService {
  getAllBooks = async () => {
    const books = await prisma.book.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        coverUrl: true,
        genre: true,
        difficultyGeneral: true,
      },
    })

    return books.map(({ difficultyGeneral, ...rest }) => ({
      ...rest,
      difficulty: difficultyGeneral,
    }))
  }

  getBookDetailsById = async (id: string) => {
    const details = await prisma.book.findUnique({
      where: { id },
    })

    if (!details) {
      throw new HTTPException(404, { message: `Book with id ${id} not found` })
    }

    return details
  }

  getBookContentPage = async (id: string, page: number) => {
    const contentPage = await prisma.bookContent.findFirst({
      where: {
        bookId: id,
        pageNumber: page,
      },
      select: {
        pageNumber: true,
        content: true,
      },
    })

    if (!contentPage)
      throw new HTTPException(404, { message: `Page ${page} for book with id ${id} not found` })

    return contentPage
  }
}

export { BookService }
