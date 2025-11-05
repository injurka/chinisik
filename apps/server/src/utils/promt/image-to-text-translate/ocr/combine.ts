import type OpenAI from 'openai'

interface Payload {
  user: {
    imageB64: string
  }
  system?: string
}

export function getOcrPrompt(params: Payload) {
  const system = `
You are an Optical Character Recognition (OCR) expert specializing in extracting Chinese text from images.
Your task is to analyze the provided image and extract *only* the Chinese characters present.
Output *only* the extracted Chinese text. Do not include any other explanations, greetings, or markdown.
If no Chinese text is found, output an empty string.
${params.system ?? ''}
  `
  const user = [
    {
      type: 'text',
      text: 'Extract all Chinese text from this image.',
    },
    {
      type: 'image_url',
      image_url: {
        url: params.user.imageB64,
        detail: 'high',
      },
    },
  ] satisfies OpenAI.Chat.Completions.ChatCompletionContentPart[]

  return { system, user }
}
