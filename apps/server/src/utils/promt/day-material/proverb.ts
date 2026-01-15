import { commonSystemPrompt } from './common'

export function getProverbPrompt(theme: string, usedProverbs: string[]) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "PROVERB" SECTION.

    Your task is to:
    1. Select a Chinese proverb (chengyu) related to "${theme}".
    2. 'pinyin': Must use TONE MARKS.

    IMPORTANT: Do not use these proverbs: [${usedProverbs.join(', ')}].

    EXAMPLE OUTPUT FORMAT:
    {
      "glyph": "画蛇添足",
      "pinyin": "huà shé tiān zú",
      "translation": "Нарисовать змее ноги (сделать лишнее)",
      "description": "This idiom means ruining something by doing unnecessary extra work.",
      "sound": null
    }

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
