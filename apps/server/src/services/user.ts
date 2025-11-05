import type { $Enums, Prisma } from '@prisma/client'
import type { User } from '~/models/user'
import type { IUpdatePayload, IWherePayload } from '~/types/prisma-helpers'
import { prisma } from '~/prisma'

class UserService {
  //* Create

  //* Read
  getAll = async () => {
    return prisma.user.findMany()
  }

  getAllByWhere = async <T>(payload: IWherePayload<T, Prisma.UserWhereInput>) => {
    return prisma.user.findMany({ ...payload.query, where: payload.where })
  }

  getByWhere = async <T>(payload: IWherePayload<T, Prisma.UserWhereInput>) => {
    return prisma.user.findFirstOrThrow({ ...payload.query, where: payload.where })
  }

  getUserByUserId = async (userId: number) => {
    const data = await prisma.user.findFirstOrThrow({ where: { id: userId } })
    const user = {
      id: data.id,
      email: data.email,
      name: data.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    } as User

    return user
  }

  getPermissionsByUserId = async (userId: number): Promise<$Enums.Permission[]> => {
    const permissions = await prisma.userPermission.findMany({
      where: {
        userId,
      },
      select: {
        permission: true,
      },
    })

    return permissions.map(permission => permission.permission)
  }

  //* Update
  update = async <T>(
    payload: IUpdatePayload<T, Prisma.UserWhereUniqueInput, Prisma.UserUpdateInput>,
  ) => {
    return prisma.user.update({
      ...payload.query,
      where: payload.where,
      data: payload.data,
    })
  }
  //* Delete
}

export { UserService }
