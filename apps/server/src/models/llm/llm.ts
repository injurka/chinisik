import type OpenAI from 'openai'
import type { ToneType } from '../shared'
import type { AiModel, AiTtsModel } from '~/utils/ai/request'

interface LinguisticAnalysisPayload {
  value: string
  model: AiModel
}

interface LinguisticAnalysisFlatPayload {
  value: string
  model: AiModel
}

interface PinyinHieroglyphsPayload {
  tones: ToneType[]
  pinyin: string
  count?: number
}

interface TextToSpeechPayload {
  text: string
  model?: AiTtsModel
  voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac'
  speed?: number
}

interface RawPayload {
  user?: string | OpenAI.Chat.Completions.ChatCompletionContentPart[]
  system?: string | OpenAI.Chat.Completions.ChatCompletionContentPartText[]
  responseType: 'text' | 'json_object'
  model?: AiModel
}

interface ImageToTextTranslatePayload {
  image: File
}

export type {
  ImageToTextTranslatePayload,
  LinguisticAnalysisFlatPayload,
  LinguisticAnalysisPayload,
  PinyinHieroglyphsPayload,
  RawPayload,
  TextToSpeechPayload,
}
