import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { HieroglyphHskSchema } from '~/models/hieroglyph-hsk'
import { DataListSchema, PageLimitSchema, PageSchema } from '~/models/shared/pagination.schema'
import { HieroglyphHskService } from '~/services'

const TAG = 'hsk'

class HieroglyphHskController extends AController {
  private service = new HieroglyphHskService()

  constructor() {
    super('/hsk')

    this.getHieroglyphsByHsk()
    this.getHieroglyphsByHskList()
  }

  private getHieroglyphsByHsk = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/hieroglyphs/{level}`,
      tags: [TAG],
      request: {
        params: z.object({
          level: z
            .string()
            .transform(val => Number.parseInt(val, 10))
            .refine(val => !Number.isNaN(val) && val > 0, { message: 'Invalid value hsk level' })
            .openapi({
              param: {
                name: 'level',
                in: 'path',
              },
            }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(HieroglyphHskSchema),
            },
          },
          description: 'Retrieve the hsk',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { level } = c.req.valid('param')

        const data = await this.service.getHieroglyphsByHsk(level)
        const validatedData = z.array(HieroglyphHskSchema).parse(data)

        return c.json(validatedData, 200)
      },
    )
  }

  private getHieroglyphsByHskList = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/hieroglyphs/{level}/list`,
      tags: [TAG],
      request: {
        params: z.object({
          level: z
            .string()
            .transform(val => Number.parseInt(val, 10))
            .refine(val => !Number.isNaN(val) && val > 0, { message: 'Invalid value hsk level' })
            .openapi({
              param: {
                name: 'level',
                in: 'path',
              },
            }),
        }),
        query: z.object({
          page: PageSchema,
          limit: PageLimitSchema,
          keyword: z.string().optional(),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: DataListSchema(HieroglyphHskSchema),
            },
          },
          description: 'Retrieve the hsk',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { level } = c.req.valid('param')
        const { page, limit, keyword } = c.req.valid('query')

        const { data, total } = await this.service.getHieroglyphsByHskList(level, page, limit, keyword?.toLowerCase())

        return c.json(
          {
            data: z.array(HieroglyphHskSchema).parse(data),
            pagination: {
              page,
              limit,
              total,
            },
          },
          200,
        )
      },
    )
  }
}

export { HieroglyphHskController }
