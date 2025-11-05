import { prisma } from '~/prisma'

class HieroglyphKeyService {
  //* Read
  getKeys = async () => {
    return prisma.hieroglyphKey.findMany()
  }
}

export { HieroglyphKeyService }
