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

interface HanziCheckPayload {
  userImage: string

  // image or word
  targetWord?: string
  targetImage?: string
}

interface TextToSpeechPayload {
  text: string
  model?: AiTtsModel
  voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'
  response_format?: 'mp3' | 'opus' | 'aac' | 'flac'
  speed?: number
}

interface RawPayload {
  user?: any
  system?: any
  responseType: 'text' | 'json_object'
}

interface ImageToTextTranslatePayload {
  image: File
}

export type {
  HanziCheckPayload,
  ImageToTextTranslatePayload,
  LinguisticAnalysisFlatPayload,
  LinguisticAnalysisPayload,
  PinyinHieroglyphsPayload,
  RawPayload,
  TextToSpeechPayload,
}
