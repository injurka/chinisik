import type { User } from '~/models'
import { HTTPException } from 'hono/http-exception'
import { DayMaterialContentSchema } from '~/models'
import { prisma } from '~/prisma'
import { logger } from '~/server'
import { getGrammarPrompt } from '~/utils/promt/day-material/grammar'
import { getProverbPrompt } from '~/utils/promt/day-material/proverb'
import { getQuizPrompt } from '~/utils/promt/day-material/quiz'
import { getThemePrompt } from '~/utils/promt/day-material/theme'
import { getVocabularyPrompt } from '~/utils/promt/day-material/vocabulary'
import { LlmService } from './llm'

export class DayMaterialService {
  private llmService = new LlmService()

  private getStartOfToday(): Date {
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)
    return today
  }

  public async getTodayMaterial() {
    const today = this.getStartOfToday()

    const material = await prisma.dayMaterial.findUnique({
      where: { date: today },
    })

    if (!material) {
      logger.error('No material found for today. Generating fallback.')
      return this.generateAndSaveMaterialForDate(today)
    }

    return {
      ...material.content as any,
      id: material.id,
      date: material.date,
    }
  }

  public async getMaterialById(id: number) {
    const material = await prisma.dayMaterial.findUnique({
      where: { id },
    })

    if (!material) {
      throw new HTTPException(404, { message: 'Material not found' })
    }

    return {
      ...material.content as any,
      id: material.id,
      date: material.date,
    }
  }

  public async getMaterialList(user?: User) {
    const today = this.getStartOfToday()

    const materials = await prisma.dayMaterial.findMany({
      where: {
        date: {
          lt: today,
        },
      },
      orderBy: {
        date: 'desc',
      },
      take: 30,
      select: {
        id: true,
        date: true,
        content: true,
      },
    })

    let completedIds = new Set<number>()
    if (user) {
      const results = await prisma.dayMaterialResult.findMany({
        where: {
          userId: user.id,
          dayMaterialId: {
            in: materials.map(m => m.id),
          },
        },
        select: {
          dayMaterialId: true,
        },
        distinct: ['dayMaterialId'],
      })
      completedIds = new Set(results.map(r => r.dayMaterialId))
    }

    return materials.map((m) => {
      const content = m.content as any
      return {
        id: m.id,
        date: m.date.toISOString(),
        theme: content?.vocabulary?.theme || 'Без темы',
        grammarTitle: content?.grammar?.title || 'Грамматика',
        isCompleted: completedIds.has(m.id),
      }
    })
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
      take: 30,
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

    try {
      // 1. Generate Theme
      const themeResponse = await this.llmService.raw({
        ...getThemePrompt(usedThemes),
        responseType: 'json_object',
        model: 'gemini-2.5-flash',
      })
      const { theme } = JSON.parse(themeResponse) as { theme: string }
      logger.info(`Generated new theme: ${theme}`)

      // 2. Generate Core Content (Vocabulary, Grammar, Proverb) in parallel
      const [vocabularyRaw, grammarRaw, proverbRaw] = await Promise.all([
        this.llmService.raw({ ...getVocabularyPrompt(theme), model: 'gemini-2.5-flash', responseType: 'json_object' }),
        this.llmService.raw({ ...getGrammarPrompt(theme, usedGrammars), model: 'gemini-2.5-flash', responseType: 'json_object' }),
        this.llmService.raw({ ...getProverbPrompt(theme, usedProverbs), model: 'gemini-2.5-flash', responseType: 'json_object' }),
      ])

      const vocabulary = JSON.parse(vocabularyRaw)
      const grammar = JSON.parse(grammarRaw)
      const proverb = JSON.parse(proverbRaw)

      // 3. Generate Quiz based on the generated content
      logger.info('Generating quiz based on new material...')
      const quizRaw = await this.llmService.raw({
        ...getQuizPrompt(
          theme,
          vocabulary.items, // Pass the array of items
          grammar.rule, // Pass the rule string
          proverb.glyph, // Pass the proverb char
          proverb.translation, // Pass proverb translation
        ),
        responseType: 'json_object',
        model: 'gemini-2.5-flash',
      })
      const quiz = JSON.parse(quizRaw)

      const content = {
        vocabulary,
        grammar,
        proverb,
        quiz,
      }

      const validatedContent = DayMaterialContentSchema.parse(content)

      const material = await prisma.dayMaterial.create({
        data: {
          date,
          content: validatedContent,
        },
      })

      logger.success(`Successfully generated and saved material for ${date.toISOString().split('T')[0]}`)

      return {
        ...validatedContent,
        id: material.id,
        date: material.date,
      }
    }
    catch (error) {
      logger.error('Error generating or saving day material', error)
      throw new HTTPException(500, { message: 'Failed to generate daily material.' })
    }
  }

  // --- History Methods ---

  public async getQuizHistory(userId: number) {
    const today = this.getStartOfToday()
    const material = await prisma.dayMaterial.findUnique({ where: { date: today } })

    if (!material) {
      return []
    }

    const history = await prisma.dayMaterialResult.findMany({
      where: {
        userId,
        dayMaterialId: material.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return history
  }

  public async saveQuizResult(userId: number, payload: { score: number, mistakes: number, totalQuestions: number }) {
    const today = this.getStartOfToday()
    const material = await prisma.dayMaterial.findUnique({ where: { date: today } })

    if (!material) {
      throw new HTTPException(404, { message: 'Material for today not found' })
    }

    const result = await prisma.dayMaterialResult.create({
      data: {
        userId,
        dayMaterialId: material.id,
        score: payload.score,
        mistakes: payload.mistakes,
        totalQuestions: payload.totalQuestions,
      },
    })

    return result
  }
}
