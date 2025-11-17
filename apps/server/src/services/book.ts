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
        uniqueWords: true,
      },
    })

    return books.map(({ difficultyGeneral, ...rest }) => ({
      ...rest,
      difficulty: difficultyGeneral,
    }))
  }

  getBookDetailsById = async (id: string) => {
    const book = await prisma.book.findUnique({
      where: { id },
      include: {
        chapters: {
          orderBy: {
            startPage: 'asc',
          },
        },
      },
    })

    if (!book) {
      throw new HTTPException(404, { message: `Book with id ${id} not found` })
    }

    const pageCount = await prisma.bookContent.count({
      where: { bookId: id },
    })

    return { ...book, pageCount }
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

    const chapter = await prisma.bookChapter.findFirst({
      where: {
        bookId: id,
        startPage: {
          lte: page,
        },
      },
      orderBy: {
        startPage: 'desc',
      },
    })

    return {
      ...contentPage,
      chapterTitle: chapter?.title ?? '',
    }
  }
}

export { BookService }
