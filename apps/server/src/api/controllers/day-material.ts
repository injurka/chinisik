import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { jwtGuard } from '~/middleware'
import {
  DayMaterialContentSchema,
  DayMaterialQuizAttemptSchema,
  DayMaterialQuizResultPayloadSchema,
} from '~/models'
import { DayMaterialService } from '~/services/day-material'

const TAG = 'day-material'

class DayMaterialController extends AController {
  private service = new DayMaterialService()

  constructor() {
    super('/day-material')
    this.getToday()
    this.getHistory()
    this.saveResult()
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

  private getHistory = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/history`,
      tags: [TAG],
      summary: 'Get quiz history for today',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(DayMaterialQuizAttemptSchema),
            },
          },
          description: 'List of quiz attempts for the current day material',
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(route, async (c) => {
      const user = c.get('user')
      const data = await this.service.getQuizHistory(user.id)
      // Маппинг дат в строки для валидации
      const response = data.map(item => ({
        ...item,
        createdAt: item.createdAt.toISOString(),
      }))
      return c.json(response, 200)
    })
  }

  private saveResult = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/result`,
      tags: [TAG],
      summary: 'Save quiz result',
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: DayMaterialQuizResultPayloadSchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: DayMaterialQuizAttemptSchema,
            },
          },
          description: 'The saved quiz attempt',
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(route, async (c) => {
      const user = c.get('user')
      const body = c.req.valid('json')
      const data = await this.service.saveQuizResult(user.id, body)

      const response = {
        ...data,
        createdAt: data.createdAt.toISOString(),
      }

      return c.json(response, 200)
    })
  }
}

export { DayMaterialController }
