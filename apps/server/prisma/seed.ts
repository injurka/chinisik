import type { Log } from '~/utils/logger'
import { PrismaClient } from '@prisma/client'
import { Logger, LogType } from '~/utils/logger'

import { mockBook } from './mock/book'
import { mockCms } from './mock/cms'
import { mockDayMaterial } from './mock/day-material'
import { mockHieroglyphKeys } from './mock/hieroglyph-key'
import { mockHsk } from './mock/hsk'
import { mockFinals, mockFinalsTone, mockInitials, mockInitialsFinals } from './mock/pinyin'
import { mockUser } from './mock/user'
import { mockUserPermission } from './mock/user-permission'
import { mockBookContent } from './mock/book/book-content'
import { mockBookChapter } from './mock/book/book-chapter'

const seeds = [
  // Keys
  { name: 'hieroglyphKey', data: [mockHieroglyphKeys] },
  // Content
  { name: 'cms', data: [mockCms] },
  // Day Material
  { name: 'dayMaterial', data: [mockDayMaterial] },
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
  // Book
  { name: 'book', data: [mockBook] },
  { name: 'bookContent', data: [mockBookContent] },
  { name: 'bookChapter', data: [mockBookChapter] },
]

const prisma = new PrismaClient()

const logger = new Logger()

async function run() {
  const seedsStatus: Log[] = []

  logger.info('✨ Run seeds')

  for (const seed of seeds) {
    let count = 0
    logger.info(`- Seeding ${seed.name}...`)
    try {
      for (const rawData of seed.data) {
        const transformedData = [...await rawData()]
        for (const data of transformedData) {
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-ignore
          await prisma[seed.name].create({
            data,
          })
          count++
        }
      }
      seedsStatus.push({ type: LogType.Success, message: `Successfully seeded ${seed.name} (${count} records)` })
    }
    catch (e) {
      seedsStatus.push({ type: LogType.Error, message: `Error seeding ${seed.name} | ${e} ` })
    }
  }

  logger.info('✨ All seeds finished')
  logger.info('📊 Seeding Summary:')

  seedsStatus.forEach(({ type, message }) => logger[type](message))

  await prisma.$disconnect()
}

run().catch((e) => {
  logger.error('❌ Seed failed with an unexpected error', e)
  process.exit(1)
})
