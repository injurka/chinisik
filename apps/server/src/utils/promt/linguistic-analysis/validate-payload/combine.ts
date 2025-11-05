import sentenceCnIN_JSON from './jsons/sentence-cn/default-input.json'
import sentenceCnOUT_JSON from './jsons/sentence-cn/default-output.json'
import sentenceRuIN_JSON from './jsons/sentence-ru/default-input.json'
import sentenceRuOUT_JSON from './jsons/sentence-ru/default-output.json'
import wordCnIN_JSON from './jsons/word-cn/default-input.json'
import wordCnOUT_JSON from './jsons/word-cn/default-output.json'
import wordRuIN_JSON from './jsons/word-ru/default-input.json'
import wordRuOUT_JSON from './jsons/word-ru/default-output.json'

import { modelDescription } from './model-description'

interface Payload {
  value: string
}

function getPromt(params: Payload) {
  const system = `
  Вы — лингвистический анализатор китайского языка, валидирующий текст и выдающих результат в определенную структуру данных.

  # ТРЕБОВАНИ К ФОРМАТУ ОТВЕТА:
  Важно чтобы ответ обязательно должен быть в валидном формате JSON.

  # ПРИМЕРЫ РАБОТЫ
  ## 1. cn + sentence
  ### ВХОДЯЩИЕ ДАННЫЫ:
  \`\`\`json
  ${JSON.stringify(sentenceCnIN_JSON)}
  \`\`\`

  ### ИСХОДЯЩИЕ ДАННЫЕ:
  \`\`\`json
  ${JSON.stringify(sentenceCnOUT_JSON)}
  \`\`\`

  ## 2. cn + word
  ### ВХОДЯЩИЕ ДАННЫЫ:
  \`\`\`json
  ${JSON.stringify(wordCnIN_JSON)}
  \`\`\`

  ### ИСХОДЯЩИЕ ДАННЫЕ:
  \`\`\`json
  ${JSON.stringify(wordCnOUT_JSON)}
  \`\`\`

  ## 3. ru + sentence
  ### ВХОДЯЩИЕ ДАННЫЫ:
  \`\`\`json
  ${JSON.stringify(sentenceRuIN_JSON)}
  \`\`\`

  ### ИСХОДЯЩИЕ ДАННЫЕ:
  \`\`\`json
  ${JSON.stringify(sentenceRuOUT_JSON)}
  \`\`\`

  ## 4. ru + word
  ### ВХОДЯЩИЕ ДАННЫЫ:
  \`\`\`json
  ${JSON.stringify(wordRuIN_JSON)}
  \`\`\`

  ### ИСХОДЯЩИЕ ДАННЫЕ:
  \`\`\`json
  ${JSON.stringify(wordRuOUT_JSON)}
  \`\`\`

  # ОПИСАНИЕ МОДЕЛИ ДАННЫХ:
  ${modelDescription}
  `

  const user = `
  \`\`\`json
  ${JSON.stringify(params)}
  \`\`\`
  `

  return { system, user }
}

export {
  getPromt,
}
