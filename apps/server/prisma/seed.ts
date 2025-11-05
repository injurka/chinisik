import type { Log } from '~/utils/logger'
import { PrismaClient } from '@prisma/client'
import { Logger, LogType } from '~/utils/logger'

import { mockCms } from './data/cms'
import { mockHieroglyphKeys } from './data/hieroglyph-key'
import { mockHsk } from './data/hsk'
import { mockFinals, mockFinalsTone, mockInitials, mockInitialsFinals } from './data/pinyin'
import { mockUser } from './data/user'
import { mockUserPermission } from './data/user-permission'

const seeds = [
  // Keys
  { name: 'hieroglyphKey', data: [mockHieroglyphKeys] },
  // Content
  { name: 'cms', data: [mockCms] },
  // User
  { name: 'user', data: [mockUser] },
  { name: 'userPermission', data: [mockUserPermission] },
  // Pinyin
  { name: 'pinyinFinal', data: [mockFinals] },
  { name: 'pinyinInitial', data: [mockInitials] },
  { name: 'pinyinFinalsTone', data: [mockFinalsTone] },
  { name: 'pinyinInitialsFinals', data: [mockInitialsFinals] },
  // Hsk
  { name: 'hieroglyphHsk', data: [mockHsk] },
]

const prisma = new PrismaClient()

const logger = new Logger()

async function run() {
  const seedsStatus: Log[] = []

  logger.info('✨ Run seeds')

  for (const seed of seeds) {
    try {
      for (const rawData of seed.data) {
        const transformedData = [...await rawData()]
        for (const data of transformedData) {
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-ignore
          await prisma[seed.name].create({
            data,
          })
        }
      }
      seedsStatus.push({ type: LogType.Success, message: seed.name })
    }
    catch (e) {
      seedsStatus.push({ type: LogType.Error, message: `${seed.name} | ${e}` })
    }
  }

  logger.info('✨ All seeds finished')

  seedsStatus.forEach(({ type, message }) => logger[type](message))

  await prisma.$disconnect()
}

run().catch((e) => {
  logger.error('❌ Seed', e)
  process.exit(1)
})
