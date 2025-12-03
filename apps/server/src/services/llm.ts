import type { InputJsonValue } from '@prisma/client/runtime/library'
import type { ZodSchema } from 'zod'
import type { User } from '~/models'
import type {
  ImageToTextTranslatePayload,
  LinguisticAnalysisFlatPayload,
  LinguisticAnalysisPayload,
  LlmLinguisticAnalysisSourceType,
  PinyinHieroglyphsPayload,
  RawPayload,
  TextToSpeechPayload,
} from '~/models/llm'
import type { AiChatModel } from '~/utils/ai/request'
import fs from 'node:fs/promises'
import path from 'node:path'
import { HTTPException } from 'hono/http-exception'
import { z } from 'zod'
import {
  ImageTranslationResponseSchema,
  LlmLinguisticAnalysisSchema,
  LlmLinguisticAnalysisSourceTypeSchema,
  PinyinHieroglyphsSchema,
} from '~/models/llm'
import { prisma } from '~/prisma'
import { logger } from '~/server'
import { createAiEmbeddingsRequest, loadOrCreateEmbeddings } from '~/utils/ai/embeddings'
import { createAiChatRequest, createAiSpeechRequest } from '~/utils/ai/request'
import { DEFAULT_LLM_MODEL } from '~/utils/constant'
import { generateDeterministicFilename } from '~/utils/hash'
import { getOcrPrompt, getTranslatePrompt } from '~/utils/promt/image-to-text-translate'
import {
  getLinguisticAnalysisMdPromt,
  getLinguisticAnalysisPromt,
  getLinguisticAnalysisTypePromt,
} from '~/utils/promt/linguistic-analysis'
import { getPrompt as getPinyinHieroglyphsPromt } from '~/utils/promt/pinyin-hieroglyphs'
import { tesseractService } from '~/utils/tesseract'
import { LinguisticAnalysisService } from './linguistic-analysis'

const STATIC_TTS_PATH = path.join(process.cwd(), 'static', 'audio/cn')

interface HandwritingPayload {
  imageDataUrl: string
}

interface Item {
  glyph: string
  embedding: {
    data: Array<{
      embedding: number[]
    }>
  }
  translation?: {
    ru: string
  }
  translate?: string
  traditionalGlyph?: string
  pinyin: PinyinItem[] | string
  toneIndex?: number
  toneType?: number
}
interface PinyinItem {
  syllable: string
  position: number
  tone: number
}
interface SimilarityResult {
  glyph: string
  ru: string
  cn: string
  type: 'hsk' | 'key'
  pinyin: string | string[]
  similarity: number
}

class LlmService {
  private processAiResponse = async <T>(
    rawData: string | undefined | null,
    schema: ZodSchema<T>,
    isTextResponse: boolean = false,
  ): Promise<T> => {
    if (!rawData) {
      if (isTextResponse && rawData === '') {
        return '' as T
      }
      throw new Error('Failed to generate content: AI response was empty.')
    }

    if (isTextResponse) {
      try {
        return schema.parse(rawData.trim())
      }
      catch (error) {
        const errorMessage = `Failed to validate text response. ${error}`
        logger.error(errorMessage, { rawData })
        throw new HTTPException(400, { message: errorMessage })
      }
    }

    try {
      const parsedData = JSON.parse(rawData)
      return schema.parse(parsedData)
    }
    catch (error) {
      const errorMessage = `Failed to format generated content. ${error}`
      logger.error(errorMessage, { rawData })
      throw new HTTPException(400, { message: errorMessage })
    }
  }

  async linguisticAnalysis(params: LinguisticAnalysisPayload, user: User) {
    try {
      let totalTokens = 0
      const startTime = performance.now()

      const sourceTypeResponse = await createAiChatRequest(
        getLinguisticAnalysisTypePromt(params),
        { model: params.model },
      )
      const sourceTypeContent = sourceTypeResponse.choices[0].message.content
      totalTokens += sourceTypeResponse?.usage?.total_tokens ?? 0

      const sourceType = await this.processAiResponse<LlmLinguisticAnalysisSourceType>(
        sourceTypeContent,
        LlmLinguisticAnalysisSourceTypeSchema,
      )
      const glyphs = sourceType.cn.trim()

      const embeddings = await loadOrCreateEmbeddings()

      const inputEmbedding = await createAiEmbeddingsRequest(glyphs)

      function cosineSimilarity(vecA: number[], vecB: number[]) {
        const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0)
        const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0))
        const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0))

        return dotProduct / (normA * normB)
      }

      const formatPinyin = (syllable: string, position: number, tone: number): string => {
        const pos = position + 1
        const initial = syllable.slice(0, pos)
        const final = syllable.slice(pos)

        return `${initial}${tone}${final}`
      }

      const calculateSimilarities = (
        allItems: Item[],
        inputEmbedding: { data: Array<{ embedding: number[] }> },
      ): SimilarityResult[] => {
        return allItems.map((item) => {
          const itemEmbedding = item.embedding.data[0].embedding
          const similarity = cosineSimilarity(inputEmbedding.data[0].embedding, itemEmbedding)

          const type = item.traditionalGlyph !== undefined ? 'hsk' : 'key'
          const ru = item.translation?.ru || item.translate || ''
          let pinyin: string | string[]

          if (Array.isArray(item.pinyin)) {
            pinyin = item.pinyin.map((p: PinyinItem) =>
              formatPinyin(p.syllable, p.position, p.tone),
            )
          }
          else {
            pinyin = formatPinyin(
              item.pinyin as string,
              item.toneIndex || 0,
              item.toneType || 5,
            )
          }
          return {
            glyph: item.glyph,
            ru,
            cn: item.glyph,
            type,
            pinyin,
            similarity,
          }
        })
      }

      const allItems = [...embeddings.hsk, ...embeddings.keys] as unknown as Item[]

      const similarities = calculateSimilarities(allItems, inputEmbedding)

      const topSimilar = similarities
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 5)

      const context = topSimilar.map(item => `
        Русский: "${item.ru}", 
        Китайский: "${item.cn}", 
        Тип: ${item.type}, 
        Пиньинь: ${JSON.stringify(item.pinyin)}`,
      ).join('\n')

      const systemPrompt = `
      ПРИМЕРЫ ПОХОЖИХ ИЕРОГЛИФОВ (СЛОВ) ДЛЯ ТЕКУЩЕГО ЗАПРОСA:
      ${context}
      `

      const analysisResponse = await createAiChatRequest(
        getLinguisticAnalysisPromt({ user: sourceType.cn, system: systemPrompt }),
        { model: params.model },
      )
      const analysisContent = analysisResponse.choices[0].message.content
      totalTokens += analysisResponse?.usage?.total_tokens ?? 0

      const response = await this.processAiResponse(
        analysisContent,
        LlmLinguisticAnalysisSchema,
      )

      const endTime = performance.now()
      const generationDuration = Math.round((endTime - startTime) / 1000)

      new LinguisticAnalysisService().createJsonAnalysisRecord({
        userId: user.id,
        model: params.model,
        totalTokens,
        sourceValue: params.value,
        type: sourceType.type,
        glyph: sourceType.cn,
        jsonData: response as InputJsonValue,
        generationDuration,
      })

      return LlmLinguisticAnalysisSchema.parse(response)
    }
    catch (error) {
      await prisma.linguisticAnalysisError.create({
        data: {
          userId: user.id,
          model: params.model,
          sourceValue: params.value,
          error: JSON.stringify((error as any).message ?? error),
        },
      })

      throw error
    }
  }

  async linguisticAnalysisFlat(params: LinguisticAnalysisFlatPayload, user: User) {
    try {
      let totalTokens = 0
      const startTime = performance.now()

      const sourceTypeResponse = await createAiChatRequest(
        getLinguisticAnalysisTypePromt(params),
        { model: params.model },
      )
      let sourceTypeContent = sourceTypeResponse.choices[0].message.content
      sourceTypeContent = z.string().parse(sourceTypeContent).replaceAll('```json', '').replaceAll('```', '')
      totalTokens += sourceTypeResponse?.usage?.total_tokens ?? 0

      const sourceType = await this.processAiResponse<LlmLinguisticAnalysisSourceType>(
        sourceTypeContent,
        LlmLinguisticAnalysisSourceTypeSchema,
      )
      const glyphs = sourceType.cn.trim()

      const analysisResponse = await createAiChatRequest(
        getLinguisticAnalysisMdPromt({ user: glyphs }),
        { model: params.model, response_format: { type: 'text' } },
      )
      const analysisContent = analysisResponse.choices[0].message.content
      totalTokens += analysisResponse?.usage?.total_tokens ?? 0

      const response = z.string().parse(analysisContent).replaceAll('```markdown', '').replaceAll('```', '')

      const endTime = performance.now()
      const generationDuration = Math.round((endTime - startTime) / 1000)

      new LinguisticAnalysisService().createMarkdownAnalysisRecord({
        userId: user.id,
        model: params.model,
        totalTokens,
        sourceValue: params.value,
        type: sourceType.type,
        glyph: sourceType.cn,
        markdownData: response,
        generationDuration,
      })

      return z.string().parse(response)
    }
    catch (error) {
      await prisma.linguisticAnalysisError.create({
        data: {
          userId: user.id,
          model: params.model,
          sourceValue: params.value,
          error: JSON.stringify((error as any).message ?? error),
        },
      })

      throw error
    }
  }

  async pinyinHieroglyphs(params: PinyinHieroglyphsPayload) {
    const prompt = getPinyinHieroglyphsPromt(params)
    const response = await createAiChatRequest(prompt)
    const content = response.choices[0].message.content?.trim()

    return this.processAiResponse(
      content,
      PinyinHieroglyphsSchema,
    )
  }

  async textToSpeech(params: TextToSpeechPayload) {
    const filename = await generateDeterministicFilename(params)
    const filePath = path.join(STATIC_TTS_PATH, filename)
    let wasGenerated = false

    try {
      await fs.access(filePath)
      logger.info(`TTS file found in cache: ${filePath}`)
      const fileBuffer = await fs.readFile(filePath)
      const audioBuffer = fileBuffer.buffer as ArrayBuffer

      return { filePath, audioBuffer, wasGenerated }
    }
    catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        logger.info(`TTS file not found, generating new: ${params.text}`)
        wasGenerated = true
        try {
          const speechResponse = await createAiSpeechRequest({
            input: params.text,
            model: params.model || 'gpt-4o-mini-tts',
            voice: params.voice || 'alloy',
            response_format: params.response_format || 'mp3',
            speed: params.speed || 1.0,
          })

          if (!speechResponse.ok) {
            const errorBody = await speechResponse.text()
            logger.error('AI TTS API Error:', { status: speechResponse.status, body: errorBody })
            throw new HTTPException(speechResponse.status as any, { message: `AI TTS service failed: ${errorBody}` })
          }

          const audioBuffer = await speechResponse.arrayBuffer()

          await fs.mkdir(STATIC_TTS_PATH, { recursive: true })
          // eslint-disable-next-line node/prefer-global/buffer
          await fs.writeFile(filePath, Buffer.from(audioBuffer))
          logger.info(`TTS file saved: ${filePath}`)

          return { filePath, audioBuffer, wasGenerated }
        }
        catch (generationError: any) {
          logger.error('Error during TTS generation or saving:', generationError)
          if (generationError instanceof HTTPException) {
            throw generationError
          }
          throw new HTTPException(500, { message: `Failed to generate or save speech: ${generationError.message || 'Unknown error'}` })
        }
      }
      else {
        logger.error('Error accessing TTS file (not ENOENT):', error)
        throw new HTTPException(500, { message: `Failed to access speech file: ${(error as Error).message || 'Unknown error'}` })
      }
    }
  }

  async imageToTextTranslate(params: ImageToTextTranslatePayload) {
    async function fileToDataUrl(file: File): Promise<string> {
      const arrayBuffer = await file.arrayBuffer()
      // eslint-disable-next-line node/prefer-global/buffer
      const buffer = Buffer.from(arrayBuffer)
      return `data:${file.type};base64,${buffer.toString('base64')}`
    }

    const { image } = params

    if (!image) {
      throw new HTTPException(400, { message: 'No image file provided.' })
    }

    const imageB64 = await fileToDataUrl(image)

    const visionModel: AiChatModel = DEFAULT_LLM_MODEL

    // Step 1: OCR - Extract Chinese text from image
    const ocrPrompt = getOcrPrompt({ user: { imageB64 } })
    let sourceText: string
    try {
      const ocrResponse = await createAiChatRequest(ocrPrompt, {
        model: visionModel,
        response_format: { type: 'text' },
      })
      const ocrContent = ocrResponse.choices[0].message.content?.trim()
      sourceText = await this.processAiResponse(ocrContent, z.string(), true)

      if (!sourceText) {
        return ImageTranslationResponseSchema.parse({
          source: '',
          translate: '',
          transcription: '',
        })
      }
    }
    catch (error: any) {
      logger.error('OCR processing failed:', error)
      throw new HTTPException(500, { message: `OCR processing failed: ${error.message}` })
    }

    const translatePinyinPrompt = getTranslatePrompt({ user: { value: sourceText } })
    const translationModel: AiChatModel = DEFAULT_LLM_MODEL
    try {
      const translatePinyinResponse = await createAiChatRequest(translatePinyinPrompt, {
        model: translationModel,
        response_format: { type: 'json_object' },
      })
      const translatePinyinContent = translatePinyinResponse.choices[0].message.content

      const translationData = await this.processAiResponse(
        translatePinyinContent,
        z.object({ translate: z.string(), transcription: z.string() }),
      )

      return ImageTranslationResponseSchema.parse({
        source: sourceText,
        translate: translationData.translate,
        transcription: translationData.transcription,
      })
    }
    catch (error: any) {
      logger.error('Translation and Pinyin processing failed:', error)
      throw new HTTPException(500, { message: `Translation and Pinyin processing failed: ${error.message}` })
    }
  }

  async raw(params: RawPayload) {
    const { system = '', user = '', model = 'gemini-2.5-flash-lite' } = params
    const response = await createAiChatRequest(
      { system, user },
      { model, response_format: { type: params.responseType } },
    )
    const rawData = response.choices[0].message.content?.trim()

    if (!rawData)
      throw new Error('_', { cause: 'Failed to generate content.' })

    return rawData
  }

  async handwritingRecognize(payload: HandwritingPayload) {
    const { imageDataUrl } = payload

    // eslint-disable-next-line node/prefer-global/buffer
    const imageBuffer = Buffer.from(imageDataUrl.split(',')[1], 'base64')

    try {
      const characters = await tesseractService.recognize(imageBuffer)
      return characters
    }
    catch (error: any) {
      console.error('Recognition service error:', error)
      const errorMessage = error?.message || 'Unknown recognition error'
      throw new Error(`Recognition engine failed: ${errorMessage}`)
    }
  }
}

export { LlmService }
