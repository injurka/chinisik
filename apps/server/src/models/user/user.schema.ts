import { z } from '@hono/zod-openapi'
import { Permission } from './user'

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

const PermissionSchema = z.array(z.nativeEnum(Permission)).optional()

export {
  PermissionSchema,
  UserSchema,
}
