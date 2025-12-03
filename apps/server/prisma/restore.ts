/* eslint-disable no-console */
import { PrismaClient, Prisma } from '@prisma/client'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import prompts from 'prompts'

const prisma = new PrismaClient()

// Метаданные полей для правильного парсинга типов при восстановлении
// @ts-ignore
const modelFields = Prisma.dmmf.datamodel.models.reduce((acc: any, model: any) => {
  acc[model.name] = model.fields.reduce((fieldsAcc: any, field: any) => {
    fieldsAcc[field.name] = field.type
    return fieldsAcc
  }, {})
  return acc
}, {})

async function selectDumpFile(dumpDir: string): Promise<string | null> {
  try {
    const files = await readdir(dumpDir)
    const jsonFiles = files.filter(f => f.endsWith('.json')).sort().reverse()

    if (jsonFiles.length === 0) return null

    const response = await prompts({
      type: 'select',
      name: 'filename',
      message: 'Выберите файл дампа для восстановления:',
      choices: jsonFiles.map(file => ({ title: file, value: file })),
    })

    return response.filename ? path.join(dumpDir, response.filename) : null
  } catch (e) {
    return null
  }
}

// Функция для преобразования сырых данных из JSON обратно в типы Prisma
function processRecord(modelName: string, record: any) {
  const fields = modelFields[modelName] || {}
  const processed = { ...record }

  for (const [key, value] of Object.entries(record)) {
    const fieldType = fields[key]

    if (value === null) continue

    // Восстановление DateTime
    if (fieldType === 'DateTime' && typeof value === 'string') {
      processed[key] = new Date(value)
    }
    // Восстановление BigInt
    else if (fieldType === 'BigInt' && typeof value === 'string') {
      processed[key] = BigInt(value)
    }
    // Восстановление Bytes (из base64)
    else if (fieldType === 'Bytes' && typeof value === 'string') {
      processed[key] = Buffer.from(value, 'base64')
    }
    // Восстановление Decimal (Prisma использует Decimal.js или string)
    else if (fieldType === 'Decimal' && typeof value === 'string') {
      processed[key] = new Prisma.Decimal(value)
    }
  }
  return processed
}

async function restoreDump() {
  console.log('♻️  Запуск мастера восстановления базы данных...')

  const dumpDir = path.join(process.cwd(), 'dumps')
  const filePath = await selectDumpFile(dumpDir)

  if (!filePath) {
    console.error('❌ Файл не выбран или папка dumps пуста.')
    process.exit(1)
  }

  console.log(`📖 Чтение файла: ${path.basename(filePath)}...`)
  const fileContent = await readFile(filePath, 'utf-8')
  const { data: dumpData, meta } = JSON.parse(fileContent)

  console.log(`📊 Дамп от ${meta.createdAt}, записей: ${meta.totalRecords}`)

  const confirm = await prompts({
    type: 'confirm',
    name: 'value',
    message: '⚠️  ВНИМАНИЕ! Текущая база будет полностью очищена. Продолжить?',
    initial: false
  })

  if (!confirm.value) {
    console.log('🚫 Отмена операции.')
    process.exit(0)
  }

  const startTime = performance.now()

  try {
    await prisma.$transaction(async (tx) => {
      // 1. Отключаем проверки внешних ключей (PostgreSQL specific)
      // Это позволяет удалять и вставлять таблицы в любом порядке
      await tx.$executeRawUnsafe(`SET session_replication_role = 'replica';`)

      console.log('🧹 Очистка таблиц...')
      const models = Object.keys(dumpData)

      // Сначала очищаем все таблицы
      for (const modelName of models) {
        const modelKey = modelName.charAt(0).toLowerCase() + modelName.slice(1)
        // @ts-ignore
        if (tx[modelKey]) {
          // @ts-ignore
          await tx[modelKey].deleteMany()
        }
      }

      console.log('📥 Импорт данных...')
      // Затем вставляем данные
      for (const modelName of models) {
        const modelKey = modelName.charAt(0).toLowerCase() + modelName.slice(1)
        const records = dumpData[modelName]

        if (!records || records.length === 0) continue

        // @ts-ignore
        if (tx[modelKey]) {
          const processedRecords = records.map((r: any) => processRecord(modelName, r))

          // createMany намного быстрее, чем create в цикле
          // @ts-ignore
          await tx[modelKey].createMany({
            data: processedRecords,
            skipDuplicates: true
          })
          console.log(`   - ${modelName}: восстановлено ${records.length} записей`)
        }
      }

      // 2. Включаем проверки обратно
      await tx.$executeRawUnsafe(`SET session_replication_role = 'origin';`)

      // 3. Обновляем последовательности (Sequences) для ID
      // Если у вас используются autoincrement ID, их счетчик нужно сбросить до максимума
      // Это критично для Postgres, иначе при создании новых записей будет ошибка "duplicate key value"
      console.log('🔧 Синхронизация последовательностей ID...')
      for (const modelName of models) {
        // Простая эвристика: если есть поле id типа Int
        const fields = modelFields[modelName]
        if (fields?.id === 'Int') {
          const tableName = Prisma.dmmf.datamodel.models.find((m: any) => m.name === modelName)?.dbName || modelName
          // Кавычки нужны для сохранения регистра, если он есть
          try {
            await tx.$executeRawUnsafe(`SELECT setval(pg_get_serial_sequence('"${tableName}"', 'id'), coalesce(max(id)+1, 1), false) FROM "${tableName}";`)
          } catch (e) {
            // Игнорируем ошибки, если последовательности нет (например, uuid)
          }
        }
      }
    }, {
      maxWait: 10000,
      timeout: 60000 // Таймаут для больших импортов
    })

    const endTime = performance.now()
    const duration = ((endTime - startTime) / 1000).toFixed(2)
    console.log(`✅ База данных успешно восстановлена за ${duration}s!`)

  } catch (error) {
    console.error('❌ Ошибка при восстановлении:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

restoreDump()
