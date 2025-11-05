import { createRoute } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'

import { PinyinResponseSchema } from '~/models/pinyin/pinyin.schema'
import { PinyinService } from '~/services'

const TAG = 'pinyin'

class PinyinController extends AController {
  private service = new PinyinService()

  constructor() {
    super('/pinyin')

    this.getPinyin()
  }

  private getPinyin = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}`,
      tags: [TAG],
      request: {

      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: PinyinResponseSchema,
            },
          },
          description: 'Retrieve the desription for keys',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const data = await this.service.getPinyin()
        const validatedData = PinyinResponseSchema.parse(data)

        return c.json(validatedData, 200)
      },
    )
  }
}

export { PinyinController }
