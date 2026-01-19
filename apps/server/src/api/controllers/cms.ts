import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { jwtGuard } from '~/middleware'

import { CmsDescriptionSchema } from '~/models/cms/cms.schema'
import { CmsService } from '~/services'

const TAG = 'cms'

class CmsController extends AController {
  private service = new CmsService()

  constructor() {
    super('/cms')

    this.getContent()
    this.updateContent()
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

  private updateContent = () => {
    const route = createRoute({
      method: 'put',
      path: `${this.path}/description/{sysname}`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      request: {
        params: z.object({
          sysname: z.string(),
        }),
        body: {
          content: {
            'application/json': {
              schema: CmsDescriptionSchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: CmsDescriptionSchema,
            },
          },
          description: 'Content updated successfully',
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const { sysname } = c.req.valid('param')
        const body = c.req.valid('json')

        const data = await this.service.updateContent(sysname, body)
        return c.json(CmsDescriptionSchema.parse(data), 200)
      },
    )
  }
}

export { CmsController }
