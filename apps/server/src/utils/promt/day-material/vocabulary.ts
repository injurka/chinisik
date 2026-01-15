import { commonSystemPrompt } from './common'

export function getVocabularyPrompt(theme: string) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "VOCABULARY" SECTION.

    Your task is to:
    1. Set the 'theme' field to "${theme}".
    2. Provide an array of 4 to 10 'items' (words or short phrases) related to this theme.
    3. For each item, provide:
       - 'glyph': The Chinese characters.
       - 'pinyin': Pinyin with TONE MARKS (e.g., ā, á, ǎ, à).
       - 'translation': Natural Russian translation.

    EXAMPLE OUTPUT FORMAT:
    {
      "theme": "Travel",
      "items": [
        { "glyph": "护照", "pinyin": "hùzhào", "translation": "паспорт", "sound": null },
        { "glyph": "预订", "pinyin": "yùdìng", "translation": "бронировать", "sound": null }
      ],
      "description": "These words are essential for..."
    }

    RESPONSE JSON SCHEMA:
    {
      "theme": "${theme}",
      "items": [
        { "glyph": "string", "pinyin": "string", "translation": "string", "sound": null }
      ],
      "description": "string"
    }
    `

  return { system, user: '' }
}
