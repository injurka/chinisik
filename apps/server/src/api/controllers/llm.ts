import path from 'node:path'
import { createRoute, z } from '@hono/zod-openapi'
import { HTTPException } from 'hono/http-exception'
import AController from '~/api/interfaces/controller.abstract'
import { jwtGuard } from '~/middleware'
import { ImageTranslationResponseSchema, LlmLinguisticAnalysisSchema, ToneTypeSchema } from '~/models'
import { ChatCompletionContentPartSchema } from '~/models/llm/open-ai.schema'
import { PinyinHieroglyphsSchema } from '~/models/llm/pinyin-hieroglyphs.schema'
import { LlmService } from '~/services'
import { AI_MODELS, AI_TTS_MODELS } from '~/utils/ai/request'
import { DEFAULT_LLM_MODEL, validPinyinSyllables } from '~/utils/constant'

const TAG = 'llm'

const HandwritingPayloadSchema = z.object({
  imageDataUrl: z.string().startsWith('data:image/png;base64,'),
})

class LlmController extends AController {
  private service = new LlmService()

  constructor() {
    super('/llm')

    this.pinyinHieroglyphs()
    this.linguisticAnalysis()
    this.linguisticAnalysisFlat()
    this.textToSpeech()
    this.imageToTextTranslate()
    this.raw()
    this.handwritingRecognize()
  }

  private linguisticAnalysis = () => {
    const BodySchema = z.object({
      value: z.string().max(100).default('打电话'),
      model: z.enum(AI_MODELS).default(DEFAULT_LLM_MODEL),
    })

    const route = createRoute({
      method: 'post',
      path: `${this.path}/linguistic-analysis`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: BodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: LlmLinguisticAnalysisSchema,
            },
          },
          description: `
Анализатор китайского языка, преобразующий текст в подробную структуру данных.
          `,
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const user = c.get('user')

        const data = await this.service.linguisticAnalysis(body, user)

        return c.json(data, 200)
      },
    )
  }

  private linguisticAnalysisFlat = () => {
    const BodySchema = z.object({
      value: z.string().max(100).default('打电话'),
      model: z.enum(AI_MODELS).default(DEFAULT_LLM_MODEL),
    })

    const route = createRoute({
      method: 'post',
      path: `${this.path}/linguistic-analysis-flat`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: BodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.string(),
            },
          },
          description: `
Анализатор китайского языка, преобразующий текст в подробную структуру данных.
          `,
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const user = c.get('user')

        const data = await this.service.linguisticAnalysisFlat(body, user)

        return c.json(data, 200)
      },
    )
  }

  private pinyinHieroglyphs = () => {
    const BodySchema = z.object({
      tones: ToneTypeSchema.array()
        .optional()
        .default([1, 2, 3, 4]),
      pinyin: z.string()
        .default('ni')
        .refine(val => validPinyinSyllables.includes(val), { message: 'Invalid pinyin syllable' }),
      count: z.number()
        .optional()
        .default(2),
    })

    const route = createRoute({
      method: 'post',
      path: `${this.path}/pinyin-hieroglyphs`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: BodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: PinyinHieroglyphsSchema,
            },
          },
          description: 'Generate pinyin tone hieroglyphs',
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const data = await this.service.pinyinHieroglyphs(body)

        return c.json(PinyinHieroglyphsSchema.parse(data), 200)
      },
    )
  }

  private textToSpeech = () => {
    const TextToSpeechBodySchema = z.object({
      text: z.string().min(1).max(1000).openapi({
        description: 'The text to synthesize into speech. Max 1000 characters.',
        example: '你好世界',
      }),
      model: z.enum(AI_TTS_MODELS).default('gpt-4o-mini-tts').optional().openapi({
        description: 'The TTS model to use.',
        example: 'gpt-4o-mini-tts',
      }),
      voice: z.enum(['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']).default('alloy').optional().openapi({
        description: 'The voice to use for synthesis.',
        example: 'alloy',
      }),
      response_format: z.enum(['mp3', 'opus', 'aac', 'flac']).default('mp3').optional().openapi({
        description: 'The format of the audio output.',
        example: 'mp3',
      }),
      speed: z.number().min(0.25).max(4.0).default(1.0).optional().openapi({
        description: 'The speed of the speech. From 0.25 to 4.0.',
        example: 1.0,
      }),
    })

    const route = createRoute({
      method: 'post',
      path: `${this.path}/text-to-speech`,
      tags: [TAG],
      summary: 'Generate speech from text (e.g., Chinese hieroglyphs)',
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: TextToSpeechBodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Audio file of the synthesized speech.',
          content: {
            'audio/mpeg': { schema: { type: 'string', format: 'binary' } },
            'audio/opus': { schema: { type: 'string', format: 'binary' } },
            'audio/aac': { schema: { type: 'string', format: 'binary' } },
            'audio/flac': { schema: { type: 'string', format: 'binary' } },
          },
          headers: z.object({
            'Content-Disposition': z.string().openapi({ example: 'attachment; filename="generated_speech.mp3"' }),
            'Content-Type': z.string().openapi({ example: 'audio/mpeg' }),
          }),
        },
        400: { description: 'Bad Request (e.g., validation error, AI service error)' },
        500: { description: 'Internal Server Error' },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')

        try {
          const { filePath, audioBuffer } = await this.service.textToSpeech(body)

          const filename = path.basename(filePath)
          const responseFormat = body.response_format || 'mp3'
          let contentType = 'audio/mpeg'

          if (responseFormat === 'opus')
            contentType = 'audio/opus'
          else if (responseFormat === 'aac')
            contentType = 'audio/aac'
          else if (responseFormat === 'flac')
            contentType = 'audio/flac'

          c.header('Content-Type', contentType)
          c.header('Content-Disposition', `attachment; filename="${filename}"`)

          return c.body(audioBuffer)
        }
        catch (error: any) {
          if (error instanceof HTTPException) {
            throw error
          }
          console.error(`[LlmController] Error in textToSpeech:`, error)
          throw new HTTPException(500, { message: `Failed to generate speech: ${error.message || 'Unknown error'}` })
        }
      },
    )
  }

  private imageToTextTranslate = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/image-to-text-translate`,
      tags: [TAG],
      summary: 'Extract text from image, translate, and get Pinyin',
      description: 'Upload an image containing Chinese text. The service will extract the text, translate it to Russian, and provide Pinyin transcription.',
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'multipart/form-data': {
              schema: z.object({
                image: z.instanceof(File).openapi({ type: 'string', format: 'binary', description: 'Image file containing Chinese text.' }),
              }),
            },
          },
          required: true,
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: ImageTranslationResponseSchema,
            },
          },
          description: 'Successfully processed image and returned text, translation, and Pinyin.',
        },
        400: { description: 'Bad Request (e.g., no image provided, invalid image format)' },
        500: { description: 'Internal Server Error (e.g., AI service error)' },
      },
    })

    // TODO
    // this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const formData = await c.req.formData()
        const imageEntry = formData.get('image')

        if (!(imageEntry instanceof File)) {
          throw new HTTPException(400, { message: 'Image file is required in FormData under the key "image" and must be a file.' })
        }

        const imageFile = imageEntry as unknown as File

        if (!imageFile.type.startsWith('image/')) {
          throw new HTTPException(400, { message: 'Uploaded file is not a valid image type.' })
        }

        try {
          const result = await this.service.imageToTextTranslate({ image: imageFile })
          return c.json(result, 200)
        }
        catch (error: any) {
          if (error instanceof HTTPException) {
            throw error
          }
          throw new HTTPException(500, { message: `Failed to process image: ${error.message || 'Unknown error'}` })
        }
      },
    )
  }

  private raw = () => {
    const BodySchema = z.object({
      system: z
        .union([
          z.string(),
          ChatCompletionContentPartSchema,
        ])
        .optional(),
      user: z
        .union([
          z.string(),
          ChatCompletionContentPartSchema,
        ])
        .optional(),
      responseType: z.enum(['text', 'json_object']).optional().default('text'),
    })

    const route = createRoute({
      method: 'post',
      path: `${this.path}/raw`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      description: 'Generate AI request from custom user and system prompt.',
      summary: 'Generate AI request from custom user and system prompt.',
      request: {
        body: {
          content: {
            'application/json': {
              schema: BodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.any(),
            },
          },
          description: 'Raw response.',
        },
        400: {
          content: {
            'application/json': {
              schema: z.object({
                error: z.string(),
                issues: z.array(z.object({
                  code: z.string(),
                  path: z.array(z.string().or(z.number())),
                  message: z.string(),
                  unionErrors: z.array(z.any()).optional(),
                })).optional(),
                message: z.string().optional(),
                name: z.string().optional(),
              }),
            },
          },
          description: 'Validation Error',
        },
      },
    })

    // this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const data = await this.service.raw(body)

        return c.json(z.any().parse(data), 200)
      },
      (validationError: any, c: any) => {
        console.error('Zod Validation Error:', JSON.stringify(validationError, null, 2))

        const responseBody = {
          success: false,
          error: {
            name: validationError.name,
            message: 'Validation failed. Please check your input.',
            issues: validationError.issues.map((issue: any) => ({
              code: issue.code,
              path: issue.path,
              message: issue.message,
              ...(issue.unionErrors ? { unionErrors: issue.unionErrors.map((ue: any) => ue.issues) } : {}),
            })),
          },
        }

        return c.json(responseBody, 400)
      },
    )
  }

  private handwritingRecognize = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/handwriting-recognize`,
      tags: [TAG],
      summary: 'Recognize a handwritten character from an image data URL',
      description: 'Takes a base64 encoded PNG image and returns a list of possible characters.',
      security: [{ bearerAuth: [] }],
      request: {
        body: {
          content: {
            'application/json': {
              schema: HandwritingPayloadSchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: z.object({
                characters: z.array(z.string()),
              }),
            },
          },
          description: 'An array of recognized characters.',
        },
        400: { description: 'Bad Request (e.g., invalid image data)' },
        500: { description: 'Internal Server Error (e.g., recognition engine error)' },
      },
    })

    // this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')

        try {
          const result = await this.service.handwritingRecognize(body)
          return c.json({ characters: result }, 200)
        }
        catch (error: any) {
          console.error('[LlmController] Error in handwritingRecognize:', error)
          throw new HTTPException(500, { message: `Failed to recognize handwriting: ${error.message || 'Unknown error'}` })
        }
      },
    )
  }
}

export { LlmController }
