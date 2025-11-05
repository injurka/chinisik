import { createRoute, z } from '@hono/zod-openapi'
import AController from '~/api/interfaces/controller.abstract'
import {
  PermissionSchema,
  UserSchema,
} from '~/models/user'
import { UserService } from '~/services'

const TAG = 'user'

class UserController extends AController {
  private service = new UserService()

  constructor() {
    super('/user')

    this.getById()
    this.getPermissionsByUserId()
  }

  private getById = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/{id}`,
      tags: [TAG],
      request: {
        params: z.object({
          id: z
            .string()
            .openapi({
              param: {
                name: 'id',
                in: 'path',
              },
            }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: UserSchema,
            },
          },
          description: 'Retrieve the user by id',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { id } = c.req.valid('param')
        const data = await this.service.getByWhere({ where: { id: +id } })

        return c.json(UserSchema.parse(data), 200)
      },
    )
  }

  private getPermissionsByUserId = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/{id}/permisson`,
      tags: [TAG],
      request: {
        params: z.object({
          id: z
            .string()
            .openapi({
              param: {
                name: 'id',
                in: 'path',
              },
            }),
        }),
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: PermissionSchema,
            },
          },
          description: 'Retrieve permission for the user by id',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { id } = c.req.valid('param')
        const data = await this.service.getPermissionsByUserId(+id)

        return c.json(PermissionSchema.parse(data), 200)
      },
    )
  }
}

export { UserController }
