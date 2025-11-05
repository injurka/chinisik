import type { HieroglyphHsk, HieroglyphKey } from '~/models'
import type { EmbeddingsCn } from '~/models/embeddings'
import fs from 'fs/promises'
import path from 'path'
import OpenAI from 'openai'
import { logger } from '~/server'

const EMBEDDINGS_FILE = path.join(process.cwd(), 'data', 'embeddings/cn-embeddings.json')
const EMBEDDINGS_MODEL = 'text-embedding-3-small'

// Задержка между запросами, чтобы избежать ошибки 429
const DELAY_BETWEEN_REQUESTS = 500

/**
 * Функция для создания паузы между запросами
 */
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Создает вектор эмбеддинга для входного текста
 */
async function createAiEmbeddingsRequest(input: string) {
  if (!input || input.trim() === '') {
    throw new Error('Empty input for embeddings')
  }

  const openai = new OpenAI({
    apiKey: process.env.AI_HUBMIX_KEY,
    baseURL: process.env.AI_HUBMIX_API_URL,
  })

  try {
    return await openai.embeddings.create({
      model: EMBEDDINGS_MODEL,
      input,
    })
  }
  catch (error) {
    logger.error('Failed to create embeddings:', error)
    throw new Error(`Embedding creation failed: ${(error as Error).message}`)
  }
}

/**
 * Создает эмбеддинги для элемента
 */
async function createEmbeddingForItem<T extends { glyph: string }>(item: T): Promise<T & { embedding: any }> {
  try {
    const embedding = await createAiEmbeddingsRequest(item.glyph)
    return { ...item, embedding }
  }
  catch (error) {
    logger.error(`Failed to process embedding for '${item.glyph}':`, error)
    throw error
  }
}

/**
 * Создает новую базу эмбеддингов
 */
async function createNewEmbeddings(): Promise<EmbeddingsCn> {
  logger.info('Creating new embeddings database...')

  try {
    // Загрузка данных из файлов
    const hskLevel1 = path.join(process.cwd(), 'data', 'hsk/level-1.json')
    const hieroglyphKey = path.join(process.cwd(), 'data', 'hieroglyph-key/hieroglyph-keys.json')

    const [rawDataHskLevel1, rawDataHieroglyphKey] = await Promise.all([
      fs.readFile(hskLevel1, 'utf8'),
      fs.readFile(hieroglyphKey, 'utf8'),
    ])

    const hieroglyphsHskLevel1 = JSON.parse(rawDataHskLevel1) as HieroglyphHsk[]
    const hieroglyphsKey = JSON.parse(rawDataHieroglyphKey) as HieroglyphKey[]

    // Последовательная обработка эмбеддингов для HSK
    const hskEmbeddings: (HieroglyphHsk & { embedding: any })[] = []
    for (const item of hieroglyphsHskLevel1) {
      try {
        const itemWithEmbedding = await createEmbeddingForItem(item)
        hskEmbeddings.push(itemWithEmbedding)
        logger.info(`Created embedding for HSK: ${item.glyph}`)

        // Добавляем задержку между запросами
        await delay(DELAY_BETWEEN_REQUESTS)
      }
      catch (error) {
        logger.error(`Failed to create embedding for HSK: ${item.glyph}`, error)
      }
    }

    logger.info(`Completed HSK embeddings (${hskEmbeddings.length}/${hieroglyphsHskLevel1.length})`)

    // Последовательная обработка эмбеддингов для keys
    const keysEmbeddings: (HieroglyphKey & { embedding: any })[] = []
    for (const item of hieroglyphsKey) {
      try {
        const itemWithEmbedding = await createEmbeddingForItem(item)
        keysEmbeddings.push(itemWithEmbedding)
        logger.info(`Created embedding for key: ${item.glyph}`)

        // Добавляем задержку между запросами
        await delay(DELAY_BETWEEN_REQUESTS)
      }
      catch (error) {
        logger.error(`Failed to create embedding for key: ${item.glyph}`, error)
      }
    }

    logger.info(`Completed key embeddings (${keysEmbeddings.length}/${hieroglyphsKey.length})`)

    // Сохранение результатов
    const embeddings: EmbeddingsCn = {
      hsk: hskEmbeddings,
      keys: keysEmbeddings,
    }

    await fs.mkdir(path.dirname(EMBEDDINGS_FILE), { recursive: true })
    await fs.writeFile(EMBEDDINGS_FILE, JSON.stringify(embeddings))

    logger.info(`Embeddings created and saved: ${embeddings.hsk.length} HSK items and ${embeddings.keys.length} key items`)
    return embeddings
  }
  catch (error) {
    logger.error('Failed to create embeddings database:', error)
    throw new Error('Failed to create embeddings database')
  }
}

/**
 * Загружает существующие или создает новые эмбеддинги
 */
async function loadOrCreateEmbeddings(): Promise<EmbeddingsCn> {
  try {
    // Проверяем существование файла и загружаем его, если он есть
    await fs.access(EMBEDDINGS_FILE)
    const data = await fs.readFile(EMBEDDINGS_FILE, 'utf8')
    return JSON.parse(data) as EmbeddingsCn
  }
  catch (error) {
    // Если файл не найден, создаем новые эмбеддинги
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return await createNewEmbeddings()
    }

    // Другие ошибки при доступе к файлу
    logger.error('Error accessing embeddings file:', error)
    throw new Error('Failed to access embeddings data')
  }
}

export {
  createAiEmbeddingsRequest,
  EMBEDDINGS_MODEL,
  loadOrCreateEmbeddings,
}
