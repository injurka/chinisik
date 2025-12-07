import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import { jwtGuard } from '~/middleware'
import {
  DayMaterialContentSchema,
  DayMaterialListItemSchema,
  DayMaterialQuizAttemptSchema,
  DayMaterialQuizResultPayloadSchema,
} from '~/models'
import { DayMaterialService } from '~/services/day-material'
import { jwtDecode } from '~/utils/jwt'

const TAG = 'day-material'

class DayMaterialController extends AController {
  private service = new DayMaterialService()

  constructor() {
    super('/day-material')

    this.getToday()
    this.getList()
    this.getHistory()
    this.saveResult()
    this.getById()
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
              schema: DayMaterialContentSchema.extend({
                id: z.number(),
                date: z.string().optional(),
              }),
            },
          },
          description: 'Retrieve the material for the current day',
        },
      },
    })

    this.router.openapi(route, async (c) => {
      const data = await this.service.getTodayMaterial()

      c.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      c.header('Pragma', 'no-cache')
      c.header('Expires', '0')

      return c.json(data as any, 200)
    })
  }

  private getList = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/list`,
      tags: [TAG],
      summary: 'Get list of past materials',
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.array(DayMaterialListItemSchema),
            },
          },
          description: 'List of past materials',
        },
      },
    })

    this.router.openapi(route, async (c) => {
      let user = null
      const authHeader = c.req.header('Authorization')
      if (authHeader) {
        try {
          const token = authHeader.split(' ')[1]
          if (token) {
            const decoded = await jwtDecode(token)
            user = { id: decoded.userId } as any
          }
        }
        catch (e) {
          // ignore invalid token
        }
      }

      const data = await this.service.getMaterialList(user)

      c.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')

      return c.json(data, 200)
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

  private getById = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/{id}`,
      tags: [TAG],
      summary: 'Get material by ID',
      request: {
        params: z.object({
          // Добавляем regex, чтобы убедиться, что id состоит только из цифр
          id: z.string().regex(/^\d+$/).transform(v => Number.parseInt(v, 10)),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: DayMaterialContentSchema.extend({
                id: z.number(),
                date: z.string().optional(),
              }),
            },
          },
          description: 'Retrieve specific material',
        },
        404: { description: 'Material not found' },
      },
    })

    this.router.openapi(route, async (c) => {
      const { id } = c.req.valid('param')
      const data = await this.service.getMaterialById(id)

      c.header('Cache-Control', 'public, max-age=3600')

      return c.json(data as any, 200)
    })
  }
}

export { DayMaterialController }
