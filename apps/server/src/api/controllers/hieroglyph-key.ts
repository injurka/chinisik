import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { HieroglyphKeySchema } from '~/models/hieroglyph-key/hieroglyph-key.schema'
import { HieroglyphKeyService } from '~/services'

const TAG = 'keys'

class HieroglyphKeyController extends AController {
  private service = new HieroglyphKeyService()

  constructor() {
    super('/keys')

    this.getKeys()
  }

  private getKeys = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}`,
      tags: [TAG],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(HieroglyphKeySchema),
            },
          },
          description: 'Retrieve the keys',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const data = await this.service.getKeys()
        const validatedData = z.array(HieroglyphKeySchema).parse(data)

        return c.json(validatedData, 200)
      },
    )
  }
}

export { HieroglyphKeyController }
