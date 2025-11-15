import { HTTPException } from 'hono/http-exception'
import { DayMaterialContentSchema } from '~/models'
import { prisma } from '~/prisma'
import { logger } from '~/server'
import { getGrammarPrompt } from '~/utils/promt/day-material/grammar'
import { getProverbPrompt } from '~/utils/promt/day-material/proverb'
import { getVocabularyPrompt } from '~/utils/promt/day-material/vocabulary'
import { LlmService } from './llm'

// Список всех возможных тем
const ALL_MATERIAL_THEMES = ['Путешествия', 'Еда', 'Работа', 'Семья', 'Хобби', 'Покупки', 'Здоровье', 'Погода', 'Природа', 'Технологии', 'Искусство']

export class DayMaterialService {
  private llmService = new LlmService()

  public async getTodayMaterial() {
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)

    const material = await prisma.dayMaterial.findUnique({
      where: { date: today },
    })

    if (!material) {
      logger.error('No material found for today. Generating fallback.')
      return this.generateAndSaveMaterialForDate(today)
    }

    return material.content
  }

  public async getLatestMaterialDate(): Promise<Date | null> {
    const latestMaterial = await prisma.dayMaterial.findFirst({
      orderBy: {
        date: 'desc',
      },
      select: {
        date: true,
      },
    })
    return latestMaterial?.date ?? null
  }

  public async generateAndSaveNextDayMaterial() {
    const tomorrow = new Date()
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
    tomorrow.setUTCHours(0, 0, 0, 0)

    const existing = await prisma.dayMaterial.findUnique({
      where: { date: tomorrow },
    })

    if (existing) {
      logger.info(`Material for ${tomorrow.toISOString().split('T')[0]} already exists. Skipping generation.`)
      return existing.content
    }

    return this.generateAndSaveMaterialForDate(tomorrow)
  }

  private async generateAndSaveMaterialForDate(date: Date) {
    logger.info(`Generating material for date: ${date.toISOString().split('T')[0]}`)

    const recentMaterials = await prisma.dayMaterial.findMany({
      take: ALL_MATERIAL_THEMES.length - 1,
      orderBy: {
        date: 'desc',
      },
      select: {
        content: true,
      },
    })

    const recentThemes = new Set(
      recentMaterials.map(material => (material.content as any)?.vocabulary?.theme).filter(Boolean),
    )

    let availableThemes = ALL_MATERIAL_THEMES.filter(theme => !recentThemes.has(theme))

    if (availableThemes.length === 0) {
      logger.info('All themes have been used. Resetting the cycle.')
      availableThemes = ALL_MATERIAL_THEMES
    }

    const theme = availableThemes[Math.floor(Math.random() * availableThemes.length)]!
    logger.info(`Available themes: [${availableThemes.join(', ')}]. Selected theme: ${theme}`)

    try {
      const [vocabulary, grammar, proverb] = await Promise.all([
        this.llmService.raw({ ...getVocabularyPrompt(theme), responseType: 'json_object' }),
        this.llmService.raw({ ...getGrammarPrompt(theme), responseType: 'json_object' }),
        this.llmService.raw({ ...getProverbPrompt(theme), responseType: 'json_object' }),
      ])

      const content = {
        vocabulary: JSON.parse(vocabulary),
        grammar: JSON.parse(grammar),
        proverb: JSON.parse(proverb),
      }

      const validatedContent = DayMaterialContentSchema.parse(content)

      await prisma.dayMaterial.create({
        data: {
          date,
          content: validatedContent,
        },
      })

      logger.success(`Successfully generated and saved material for ${date.toISOString().split('T')[0]}`)
      return validatedContent
    }
    catch (error) {
      logger.error('Error generating or saving day material', error)
      throw new HTTPException(500, { message: 'Failed to generate daily material.' })
    }
  }
}
