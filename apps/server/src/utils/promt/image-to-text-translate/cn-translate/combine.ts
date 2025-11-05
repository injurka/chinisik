interface Payload {
  user: {
    value: string
  }
  system?: string
}

export function getTranslatePrompt(params: Payload) {
  const system = `
You are an expert Chinese-to-Russian translator and Pinyin transcriptionist.
Given a Chinese text, provide its Russian translation and its Pinyin transcription.
Return the result ONLY in a valid JSON object with the following exact structure:
{
  "translate": "...", // Russian translation
  "transcription": "..." // Pinyin transcription (e.g., "nǐ hǎo shìjiè")
}
Do not include any other explanations, greetings, or markdown. Just the JSON object.
${params.system ?? ''}
  `

  const user = `
Translate the following Chinese text to Russian and provide its Pinyin transcription:
Chinese Text: "${params.user.value}"
  `
  return { system, user }
}
