import { commonSystemPrompt } from './common'

export function getVocabularyPrompt(theme: string) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "VOCABULARY" SECTION.

    Your task is to:
    1.  Set the 'theme' field to "${theme}".
    2.  Provide an array of 4 to 10 'items' (words or short phrases) related to this theme. The number of items should be random within this range.
    3.  For each item, provide the 'glyph' (characters), 'pinyin' (with numbers for tones), and 'translation' into Russian.
    4.  Write a short, encouraging 'description' explaining the utility of these words.

    RESPONSE JSON SCHEMA:
    {
      "theme": "${theme}",
      "items": [
        { "glyph": "string", "pinyin": "string", "translation": "string", "sound": null },
        { "glyph": "string", "pinyin": "string", "translation": "string", "sound": null },
        { "glyph": "string", "pinyin": "string", "translation": "string", "sound": null },
        { "glyph": "string", "pinyin": "string", "translation": "string", "sound": null }
        // ... and so on, up to 10 items in total
      ],
      "description": "string"
    }
    `

  return { system, user: '' }
}
