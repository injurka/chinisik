import { commonSystemPrompt } from './common'

export function getGrammarPrompt(theme: string, usedGrammars: string[]) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "GRAMMAR" SECTION.

    Your task is to:
    1. Choose a grammar rule relevant to "${theme}". It should be useful for HSK 3-4.
    2. 'rule': Explain the grammar in Russian simply and clearly.
    3. 'examples': Provide 2-3 sentences.
       - 'pinyin': Must use TONE MARKS (diacritics).

    IMPORTANT: Do not use these recently used titles: [${usedGrammars.join(', ')}].

    EXAMPLE OUTPUT FORMAT:
    {
      "title": "Konstrukciya 把 (bǎ)",
      "rule": "Subject + 把 + Object + Verb + Result. Used to indicate how an action affects an object.",
      "examples": [
        {
          "glyph": "我把书放在桌子上。",
          "pinyin": "wǒ bǎ shū fàng zài zhuōzi shàng.",
          "translation": "Я положил книгу на стол.",
          "sound": null
        }
      ],
      "description": "Use this to describe moving objects."
    }

    RESPONSE JSON SCHEMA:
    {
      "title": "string",
      "rule": "string",
      "examples": [
        {
          "glyph": "string",
          "pinyin": "string",
          "translation": "string",
          "sound": null
        }
      ],
      "description": "string"
    }
    `

  return { system, user: '' }
}
