import { commonSystemPrompt } from './common'

export function getGrammarPrompt(theme: string) {
  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "GRAMMAR" SECTION.

    Your task is to:
    1.  Choose a grammar rule relevant to the theme "${theme}". It should be a common and useful construction.
    2.  Provide a clear and concise 'title' for the rule.
    3.  Formulate the 'rule' itself in Russian, making it easy to understand.
    4.  Create an array of 1 to 3 simple and clear 'example' sentences that demonstrate the rule. Each example must be related to the theme "${theme}". For each, provide 'glyph', 'pinyin' (with numbers for tones), and 'translation'.
    5.  Write a short 'description' that explains why this rule is useful and encourages the learner.

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
