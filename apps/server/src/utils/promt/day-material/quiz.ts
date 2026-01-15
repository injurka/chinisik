import { commonSystemPrompt } from './common'

export function getQuizPrompt(
  theme: string,
  vocabularyItems: any[],
  grammarRule: string,
  proverbGlyph: string,
  proverbTranslation: string,
) {
  const vocabContext = JSON.stringify(vocabularyItems)

  const system = `${commonSystemPrompt.replace('{THEME}', theme)}
    GENERATE CONTENT FOR THE "QUIZ" SECTION.

    Your task is to create a 3-stage quiz based on the provided inputs.

    INPUT DATA:
    - Vocabulary: ${vocabContext}
    - Grammar: "${grammarRule}"
    - Proverb: "${proverbGlyph}" (${proverbTranslation})

    INSTRUCTIONS:
    **Stage 1: Vocabulary**
    - 5 questions. Randomly mix 'questionLang' ("ru" or "cn").
    - 'options': A single array of ~12 strings containing ALL correct answers + distractors (mix of Russian and Chinese words).

    **Stage 2: Grammar (Sentence Building)**
    - 2 sentences demonstrating the grammar rule.
    - 'correctOrder': The Chinese sentence split into INDIVIDUAL CHARACTERS.
    - 'characters': The 'correctOrder' characters PLUS 3-4 plausible distractor characters, shuffled.

    **Stage 3: Proverb**
    - 'correctOrder': The proverb split into INDIVIDUAL CHARACTERS.
    - 'characters': The proverb characters PLUS 4 distractor characters, shuffled.

    EXAMPLE OUTPUT FORMAT:
    {
      "stage1": {
        "questions": [
          { "question": "Book", "questionLang": "ru", "correctAnswer": "书" },
          { "question": "你好", "questionLang": "cn", "correctAnswer": "Привет" }
        ],
        "options": ["书", "Pen", "你好", "Привет", "Car", "车"]
      },
      "stage2": [
        {
          "sentenceRu": "Я люблю чай.",
          "correctOrder": ["我", "爱", "喝", "茶"],
          "characters": ["茶", "不", "我", "爱", "喝", "水", "你"]
        }
      ],
      "stage3": {
        "proverbRu": "Рисовать змее ноги",
        "correctOrder": ["画", "蛇", "添", "足"],
        "characters": ["蛇", "画", "足", "龙", "添", "手"]
      }
    }

    RESPONSE JSON SCHEMA:
    {
      "stage1": {
        "questions": [
          {
            "question": "string",
            "questionLang": "ru" | "cn",
            "correctAnswer": "string"
          }
        ],
        "options": ["string"]
      },
      "stage2": [
        {
          "sentenceRu": "string",
          "correctOrder": ["char"],
          "characters": ["char"]
        }
      ],
      "stage3": {
        "proverbRu": "string",
        "correctOrder": ["char"],
        "characters": ["char"]
      }
    }
  `

  return { system, user: '' }
}
