import OpenAI from 'openai'
import { DEFAULT_LLM_MODEL } from '../constant'

// Chat Models
const AI_HUBMIX_MODELS_CHAT = [
  'gemini-3-pro-preview',
  'gemini-2.5-flash-lite',
  'gemini-2.5-flash',
  'gpt-5-mini',
] as const

// TTS Models (OpenAI compatible)
export const AI_TTS_MODELS = [
  'tts-1-hd',
  'gemini-2.5-pro-exp-03-25',
  'gpt-4o-mini-tts',
] as const
export type AiTtsModel = typeof AI_TTS_MODELS[number]

// Combined list of all models for general validation or use
export const AI_MODELS = [
  ...AI_HUBMIX_MODELS_CHAT,
  ...AI_TTS_MODELS,
] as const
export type AiModel = typeof AI_MODELS[number] // General model type covering both chat and TTS

// Specific Chat Model Type
const AI_CHAT_MODELS = [...AI_HUBMIX_MODELS_CHAT] as const
export type AiChatModel = typeof AI_CHAT_MODELS[number]

export interface AiRequestOptions {
  model?: AiModel
  temperature?: number
  response_format?: { type: 'text' | 'json_object' }
}

export interface AiRequestPrompts {
  system: string | OpenAI.Chat.Completions.ChatCompletionContentPartText[]
  user: string | OpenAI.Chat.Completions.ChatCompletionContentPart[]
}

export interface AiSpeechRequestPayload {
  input: string
  model: AiTtsModel
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac'
  speed?: number // Speed from 0.25 to 4.0
}

interface ProviderConfig {
  apiKey: string | undefined
  baseURL: string | undefined
}

function getProviderConfig(modelName: AiModel): ProviderConfig {
  // Determine if the model is primarily from HubMix list or OpenRouter list
  // This logic might need adjustment if model names are not unique across providers
  // or if TTS models require a specific provider distinct from chat models.
  // For now, assuming TTS models like 'tts-1' are routed via the same providers
  // as your chat models, and we can infer the provider from the list it belongs to.

  const isHubMixModel = (AI_HUBMIX_MODELS_CHAT as readonly string[]).includes(modelName)
    || (AI_TTS_MODELS as readonly string[]).includes(modelName) // Assuming HubMix handles OpenAI TTS models

  if (isHubMixModel) { // Prioritize HubMix if a model name could be in both (unlikely but for safety)
    return {
      apiKey: import.meta.env.AI_HUBMIX_KEY,
      baseURL: import.meta.env.AI_HUBMIX_API_URL,
    }
  }

  // Fallback or default if model source is unclear, adjust as needed
  // This indicates a potential issue if a model isn't covered by the above.
  // For OpenAI TTS models specifically, they usually use the OpenAI API structure,
  // so whichever provider (HubMix/OpenRouter) proxies to OpenAI speech endpoint.
  console.warn(`Provider config not clearly defined for model: ${modelName}. Falling back to HubMix.`)
  return {
    apiKey: import.meta.env.AI_HUBMIX_KEY,
    baseURL: import.meta.env.AI_HUBMIX_API_URL,
  }
}

function validateChatModel(model: string): model is AiChatModel {
  return AI_CHAT_MODELS.includes(model as AiChatModel)
}

function validateTtsModel(model: string): model is AiTtsModel {
  return AI_TTS_MODELS.includes(model as AiTtsModel)
}

export async function createAiChatRequest(
  prompt: AiRequestPrompts,
  options?: AiRequestOptions,
) {
  const mergedOptions = {
    model: DEFAULT_LLM_MODEL satisfies AiChatModel,
    response_format: { type: 'json_object' as 'json_object' | 'text' },
    temperature: 0.4,
    ...options,
  }

  if (!validateChatModel(mergedOptions.model)) {
    throw new Error(`Invalid chat model: ${mergedOptions.model}. Available chat models: ${AI_CHAT_MODELS.join(', ')}`)
  }

  const { apiKey, baseURL } = getProviderConfig(mergedOptions.model)

  const openai = new OpenAI({
    apiKey,
    baseURL,
  })

  return openai.chat.completions.create({
    messages: [
      { role: 'system', content: prompt.system },
      { role: 'user', content: prompt.user },
    ],
    model: mergedOptions.model,
    response_format: mergedOptions.response_format,
    temperature: mergedOptions.temperature,
    stream: false,
    web_search_options: mergedOptions.model.includes('search')
      ? {
          user_location: {
            approximate: {
              city: '北京',
              country: '中国',
              region: '北京',
              timezone: 'Asia/Shanghai',
            },
            type: 'approximate',
          },
        }
      : undefined,
  })
}

export async function createAiSpeechRequest(
  payload: AiSpeechRequestPayload,
) {
  if (!validateTtsModel(payload.model)) {
    throw new Error(`Invalid TTS model: ${payload.model}. Available TTS models: ${AI_TTS_MODELS.join(', ')}`)
  }

  const { apiKey, baseURL } = getProviderConfig(payload.model)

  const openai = new OpenAI({
    apiKey,
    baseURL,
  })

  try {
    const speechResponse = await openai.audio.speech.create({
      model: payload.model,
      input: payload.input,
      voice: payload.voice,
      response_format: payload.response_format ?? 'mp3',
      speed: payload.speed ?? 1.0,
    })

    return speechResponse
  }
  catch (error) {
    console.error('Error creating speech:', error)

    throw error
  }
}
