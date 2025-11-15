import { createRoute } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { DayMaterialContentSchema } from '~/models'
import { DayMaterialService } from '~/services/day-material'

const TAG = 'day-material'

class DayMaterialController extends AController {
  private service = new DayMaterialService()

  constructor() {
    super('/day-material')
    this.getToday()
  }

  private getToday = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/today`,
      tags: [TAG],
      summary: 'Get the material of the day',
      responses: {
        200: {
          content: {
            'application/json': {
              schema: DayMaterialContentSchema,
            },
          },
          description: 'Retrieve the material for the current day',
        },
      },
    })

    this.router.openapi(route, async (c) => {
      const data = await this.service.getTodayMaterial()
      const validatedData = DayMaterialContentSchema.parse(data)
      return c.json(validatedData, 200)
    })
  }
}

export { DayMaterialController }
