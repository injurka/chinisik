import { HTTPException } from 'hono/http-exception'
import { DayMaterialContentSchema } from '~/models'
import { prisma } from '~/prisma'
import { logger } from '~/server'
import { getGrammarPrompt } from '~/utils/promt/day-material/grammar'
import { getProverbPrompt } from '~/utils/promt/day-material/proverb'
import { getThemePrompt } from '~/utils/promt/day-material/theme'
import { getVocabularyPrompt } from '~/utils/promt/day-material/vocabulary'
import { LlmService } from './llm'

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
      take: 30, // Получаем историю за последние 30 дней для контекста
      orderBy: {
        date: 'desc',
      },
      select: {
        content: true,
      },
    })

    const usedThemes = recentMaterials.map(m => (m.content as any)?.vocabulary?.theme).filter(Boolean)
    const usedGrammars = recentMaterials.map(m => (m.content as any)?.grammar?.title).filter(Boolean)
    const usedProverbs = recentMaterials.map(m => (m.content as any)?.proverb?.glyph).filter(Boolean)

    logger.info(`Used themes context: [${usedThemes.join(', ')}]`)
    logger.info(`Used grammar context: [${usedGrammars.join(', ')}]`)
    logger.info(`Used proverb context: [${usedProverbs.join(', ')}]`)

    try {
      // 1. Генерируем новую тему с учетом контекста
      const themeResponse = await this.llmService.raw({ ...getThemePrompt(usedThemes), responseType: 'json_object' })
      const { theme } = JSON.parse(themeResponse) as { theme: string }
      logger.info(`Generated new theme: ${theme}`)

      // 2. Параллельно генерируем остальной контент, передавая новую тему и контекст
      const [vocabulary, grammar, proverb] = await Promise.all([
        this.llmService.raw({ ...getVocabularyPrompt(theme), responseType: 'json_object' }),
        this.llmService.raw({ ...getGrammarPrompt(theme, usedGrammars), responseType: 'json_object' }),
        this.llmService.raw({ ...getProverbPrompt(theme, usedProverbs), responseType: 'json_object' }),
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
