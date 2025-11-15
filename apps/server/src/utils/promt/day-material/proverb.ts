import { commonSystemPrompt } from './common'

export function getProverbPrompt(theme: string) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "PROVERB" SECTION.

    Your task is to:
    1.  Select a Chinese proverb (成语, chéngyǔ) that is thematically related to "${theme}" or offers a relevant life lesson.
    2.  Provide the 'glyph' (the proverb in characters).
    3.  Provide the 'pinyin' (with numbers for tones).
    4.  Provide a literal 'translation' into Russian.
    5.  Write an engaging 'description' that explains the meaning, cultural context, and how it can be applied in life or language learning.

    RESPONSE JSON SCHEMA:
    {
      "glyph": "string",
      "pinyin": "string",
      "translation": "string",
      "description": "string",
      "sound": null
    }
    `
  return { system, user: '' }
}
