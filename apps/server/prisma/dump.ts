/* eslint-disable no-console */
import { PrismaClient, Prisma } from '@prisma/client'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const prisma = new PrismaClient()

// Обработчик для JSON.stringify, чтобы корректно сохранять сложные типы
function jsonReplacer(key: string, value: any) {
  // Prisma BigInt -> String
  if (typeof value === 'bigint') {
    return value.toString()
  }
  // Prisma Bytes (Buffer) -> Base64 String
  if (value?.type === 'Buffer' && Array.isArray(value?.data)) {
    return Buffer.from(value.data).toString('base64')
  }
  return value
}

async function createDump() {
  console.log('🎬 Начало создания полного дампа базы данных...')
  const startTime = performance.now()

  try {
    // Получаем список всех моделей из метаданных Prisma
    // @ts-ignore - dmmf является внутренним свойством, но оно необходимо для динамики
    const models = Prisma.dmmf.datamodel.models.map((model: any) => model.name)

    const dumpData: Record<string, any[]> = {}
    let totalRecords = 0

    // Используем транзакцию для согласованности данных (snapshot)
    await prisma.$transaction(async (tx: any) => {
      for (const modelName of models) {
        // camelCase имя модели для вызова (User -> user, DayMaterial -> dayMaterial)
        const modelKey = modelName.charAt(0).toLowerCase() + modelName.slice(1)

        if (!tx[modelKey]) {
          console.warn(`⚠️ Модель ${modelName} не доступна в клиенте Prisma`)
          continue
        }

        console.log(`📦 Выгрузка таблицы: ${modelName}...`)
        const records = await tx[modelKey].findMany()

        dumpData[modelName] = records
        totalRecords += records.length
      }
    }, {
      timeout: 20000 // Увеличенный таймаут для больших баз
    })

    // Подготовка файла
    const dumpDir = path.join(process.cwd(), 'dumps')
    await mkdir(dumpDir, { recursive: true })

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `dump-${timestamp}.json`
    const dumpFile = path.join(dumpDir, filename)

    const finalPayload = {
      meta: {
        createdAt: new Date().toISOString(),
        version: 1,
        totalRecords
      },
      data: dumpData
    }

    console.log(`💾 Запись ${totalRecords} записей в файл...`)
    await writeFile(dumpFile, JSON.stringify(finalPayload, jsonReplacer, 2), 'utf-8')

    const endTime = performance.now()
    const duration = ((endTime - startTime) / 1000).toFixed(2)

    console.log(`✅ Дамп успешно создан за ${duration}s!`)
    console.log(`📂 Путь: ${dumpFile}`)

  } catch (error) {
    console.error('❌ Ошибка при создании дампа:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

createDump()
