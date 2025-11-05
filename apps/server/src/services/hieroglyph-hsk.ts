import type { Prisma } from '@prisma/client'
import { HTTPException } from 'hono/http-exception'
import { prisma } from '~/prisma'

class HieroglyphHskService {
  //* Read
  getHieroglyphsByHsk = async (level: number) => {
    return prisma.hieroglyphHsk.findMany({ where: { level } })
  }

  getHieroglyphsByHskList = async (
    level: number,
    page: number,
    limit: number,
    keyword?: string,
  ) => {
    try {
      const skip = (page - 1) * limit

      const whereClause: Prisma.HieroglyphHskWhereInput = { level }

      if (keyword) {
        whereClause.OR = [
          { glyph: { contains: keyword } },
          {
            translation: {
              path: ['ru'],
              string_contains: keyword,
            } as Prisma.JsonFilter<'HieroglyphHsk'>,
          },
          {
            translation: {
              path: ['en'],
              string_contains: keyword,
            } as Prisma.JsonFilter<'HieroglyphHsk'>,
          },
        ]
      }

      const [data, total] = await Promise.all([
        prisma.hieroglyphHsk.findMany({
          skip,
          take: limit,
          where: whereClause,
        }),
        prisma.hieroglyphHsk.count({ where: whereClause }),
      ])

      return { data, total }
    }
    catch {
      throw new HTTPException(400, { message: 'Failed to retrieve hsk list.' })
    }
  }
}

export { HieroglyphHskService }
