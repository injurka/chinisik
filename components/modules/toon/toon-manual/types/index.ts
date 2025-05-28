export interface ImageUploadOptions {
  maxSize: number
  supportedTypes: string[]
  quality?: number
}

export interface SelectionArea {
  x: number
  y: number
  width: number
  height: number
}

export interface OCRResult {
  text: string
  confidence: number
  language: string
  boundingBoxes?: BoundingBox[]
}

export interface BoundingBox {
  x: number
  y: number
  width: number
  height: number
  text: string
}

export interface TranslationOptions {
  sourceLanguage?: string
  targetLanguage: string
  preserveFormatting?: boolean
}

export interface AIServiceConfig {
  provider: 'openai' | 'google' | 'azure'
  apiKey: string
  endpoint?: string
  model?: string
}
