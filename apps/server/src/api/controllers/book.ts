import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { BookDetailsSchema, BookPageSchema, BookSchema } from '~/models/book'
import { BookService } from '~/services/book'

const TAG = 'books'

class BookController extends AController {
  private service = new BookService()

  constructor() {
    super('/books')

    this.getAll()
    this.getDetails()
    this.getContent()
  }

  private getAll = () => {
    const route = createRoute({
      method: 'get',
      path: this.path,
      tags: [TAG],
      summary: 'Get all books',
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(BookSchema),
            },
          },
          description: 'A list of all available books.',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const data = await this.service.getAllBooks()
        return c.json(data, 200)
      },
    )
  }

  private getDetails = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/{id}`,
      tags: [TAG],
      summary: 'Get book details by ID',
      request: {
        params: z.object({
          id: z.string().openapi({
            param: {
              name: 'id',
              in: 'path',
            },
            example: 'le-petit-prince',
          }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: BookDetailsSchema,
            },
          },
          description: 'Detailed information about a specific book.',
        },
        404: {
          description: 'Book not found',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { id } = c.req.valid('param')
        const data = await this.service.getBookDetailsById(id)
        return c.json(data, 200)
      },
    )
  }

  private getContent = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/{id}/content`,
      tags: [TAG],
      summary: 'Get book content by page',
      request: {
        params: z.object({
          id: z.string().openapi({
            param: {
              name: 'id',
              in: 'path',
            },
            example: 'le-petit-prince',
          }),
        }),
        query: z.object({
          page: z.string().transform(val => Number.parseInt(val, 10)).openapi({
            param: {
              name: 'page',
              in: 'query',
            },
            example: '7',
          }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: BookPageSchema,
            },
          },
          description: 'The content of a specific page of a book.',
        },
        404: {
          description: 'Book or page not found',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { id } = c.req.valid('param')
        const { page } = c.req.valid('query')
        const data = await this.service.getBookContentPage(id, page)
        return c.json(data, 200)
      },
    )
  }
}

export { BookController }
