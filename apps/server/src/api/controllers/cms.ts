import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'

import { CmsDescriptionSchema } from '~/models/cms/cms.schema'
import { CmsService } from '~/services'

const TAG = 'cms'

class CmsController extends AController {
  private service = new CmsService()

  constructor() {
    super('/cms')

    this.getContent()
  }

  private getContent = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/description/{sysname}`,
      tags: [TAG],
      request: {
        params: z.object({
          sysname: z
            .string()
            .openapi({
              param: {
                name: 'sysname',
                in: 'path',
              },
            }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: CmsDescriptionSchema,
            },
          },
          description: 'Retrieve the desription for keys',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { sysname } = c.req.valid('param')

        const data = await this.service.getContent(sysname)
        const validatedData = CmsDescriptionSchema.parse(data)

        return c.json(validatedData, 200)
      },
    )
  }
}

export { CmsController }
