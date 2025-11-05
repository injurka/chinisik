import type { AnalysisData, AnalysisRecord, JsonAnalysisData, ListResult, MarkdownAnalysisData, User } from '~/models'
import { HTTPException } from 'hono/http-exception'
import { prisma } from '~/prisma'

class LinguisticAnalysisService {
  mapAnalysisRecordsWithData = async (records: any[]): Promise<AnalysisRecord[]> => {
    return records.map((record) => {
      let data
      if (record.dataType === 'Json' && record.jsonAnalysis) {
        data = record.jsonAnalysis.data
      }
      else if ((record.dataType === 'Markdown' || record.dataType === 'Template') && record.markdownAnalysis) {
        data = record.markdownAnalysis.data
      }
      else {
        data = null
      }
      return {
        id: record.id,
        type: record.type,
        userId: record.userId,
        model: record.model,
        sourceValue: record.sourceValue,
        glyph: record.glyph,
        totalTokens: record.totalTokens,
        generationDuration: record.generationDuration,
        dataType: record.dataType,
        data,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
      }
    })
  }

  getList = async (page: number, limit: number, user?: User): Promise<ListResult> => {
    try {
      const skip = (page - 1) * limit
      const [records, total] = await Promise.all([
        prisma.linguisticAnalysisBase.findMany({
          skip,
          take: limit,
          where: user ? { userId: user.id } : undefined,
          include: {
            jsonAnalysis: true,
            markdownAnalysis: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        }),
        prisma.linguisticAnalysisBase.count({
          where: user ? { userId: user.id } : undefined,
        }),
      ])
      const data = await this.mapAnalysisRecordsWithData(records)
      return { data, total }
    }
    catch (error) {
      console.error('Error in getList:', error)
      throw new HTTPException(400, { message: 'Failed to retrieve test list.' })
    }
  }

  createJsonAnalysisRecord = async (data: Omit<JsonAnalysisData, 'dataType'>) => {
    return await prisma.$transaction(async (tx) => {
      // 1. Создаем базовую запись
      const baseRecord = await tx.linguisticAnalysisBase.create({
        data: {
          type: data.type,
          userId: data.userId,
          model: data.model,
          sourceValue: data.sourceValue,
          glyph: data.glyph,
          totalTokens: data.totalTokens,
          generationDuration: data.generationDuration,
          dataType: 'Json',
        },
      })
      // 2. Создаем запись с JSON данными
      await tx.linguisticAnalysisJson.create({
        data: {
          id: baseRecord.id, // Используем тот же ID для связи
          data: data.jsonData,
        },
      })
      // 3. Возвращаем полный результат
      return {
        ...baseRecord,
        data: data.jsonData,
      }
    })
  }

  createMarkdownAnalysisRecord = async (
    data: Omit<MarkdownAnalysisData, 'dataType'>,
  ) => {
    return await prisma.$transaction(async (tx) => {
      // 1. Создаем базовую запись
      const baseRecord = await tx.linguisticAnalysisBase.create({
        data: {
          type: data.type,
          userId: data.userId,
          model: data.model,
          sourceValue: data.sourceValue,
          glyph: data.glyph,
          totalTokens: data.totalTokens,
          generationDuration: data.generationDuration,
          dataType: 'Markdown',
        },
      })
      // 2. Создаем запись с Markdown данными
      await tx.linguisticAnalysisMarkdown.create({
        data: {
          id: baseRecord.id, // Используем тот же ID для связи
          data: data.markdownData,
        },
      })
      // 3. Возвращаем полный результат
      return {
        ...baseRecord,
        data: data.markdownData,
      }
    })
  }

  createAnalysisRecord = async (data: AnalysisData) => {
    if (data.dataType === 'Json') {
      return this.createJsonAnalysisRecord(data)
    }
    else {
      return this.createMarkdownAnalysisRecord(data)
    }
  }
}

export { LinguisticAnalysisService }
