import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { LinguisticAnalysisAllSchema } from '~/models'

import { DataListSchema, PageLimitSchema, PageSchema } from '~/models/shared/pagination.schema'
import { LinguisticAnalysisService } from '~/services'

const TAG = 'linguistic-analysis'

class LinguisticAnalysisController extends AController {
  private service = new LinguisticAnalysisService()

  constructor() {
    super('/linguistic-analysis')

    this.getAllList()
  }

  private getAllList = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/all-list`,
      tags: [TAG],
      request: {
        query: z.object({
          page: PageSchema,
          limit: PageLimitSchema,
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: DataListSchema(LinguisticAnalysisAllSchema),
            },
          },
          description: 'Retrieve list of tests with pagination',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { page, limit } = c.req.valid('query')
        const { data, total } = await this.service.getList(page, limit)

        return c.json(
          {
            data: z.array(LinguisticAnalysisAllSchema).parse(data),
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

export { LinguisticAnalysisController }
