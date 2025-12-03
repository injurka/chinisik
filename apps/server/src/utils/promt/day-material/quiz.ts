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

    Your task is to create a 3-stage quiz based on the provided vocabulary, grammar, and proverb.

    **Stage 1: Vocabulary Check**
    - Generate 5 questions based on the provided vocabulary items: ${vocabContext}.
    - For each question, randomly decide if the question is in Russian (answer in Chinese) or Chinese (answer in Russian).
    - **IMPORTANT:** The 'question' field must contain ONLY the target word or character itself.
    - **OPTIONS POOL:** Generate a single flat array 'options' containing approximately 12-15 strings.
      - Half of these strings must be **Russian words** (translations of vocabulary + related distractors).
      - Half of these strings must be **Chinese words** (glyphs from vocabulary + related distractors).
      - Ensure ALL correct answers for the 5 questions are definitively included in this 'options' pool.

    **Stage 2: Sentence Construction (Grammar)**
    - Create 5 sentences using the grammar rule: "${grammarRule}".
    - For each sentence, provide the Russian translation.
    - Provide the correct Chinese sentence split into single characters (correctOrder).
    - Provide a 'characters' array containing the correct characters PLUS 3-4 distractor characters (characters that are plausible but wrong). The 'characters' array must be shuffled.

    **Stage 3: Proverb Assembly**
    - Use the proverb: "${proverbGlyph}" (${proverbTranslation}).
    - Provide the Russian translation.
    - Provide the correct order of characters.
    - Provide a 'characters' array with the proverb's characters PLUS 4-5 distractor characters. Shuffle them.

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
        "options": ["string", "string", "string", "string", ...]
      },
      "stage2": [
        {
          "sentenceRu": "string",
          "correctOrder": ["char", "char", ...],
          "characters": ["char", "char", "distractor", ...]
        }
      ],
      "stage3": {
        "proverbRu": "string",
        "correctOrder": ["char", "char", ...],
        "characters": ["char", "char", "distractor", ...]
      }
    }
  `

  return { system, user: '' }
}
