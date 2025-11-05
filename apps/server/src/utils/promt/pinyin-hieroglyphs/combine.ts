import type { PinyinHieroglyphsPayload } from '~/models/llm'

import exampleInputJSON from './jsons/default-input.json'
import exampleOutputJSON from './jsons/default-output.json'
import { modelDescription } from './model-description'

function getPrompt(params: PinyinHieroglyphsPayload) {
  const system = `
  Вы — помощник, который предоставляет примеры иероглифов для каждого из четырех тонов пиньина.
  Пользователь предоставляет пиньин, и вы должны вернуть примеры иероглифов для каждого тона в формате JSON.

  EXAMPLE INPUT:
  \`\`\`json
  ${JSON.stringify(exampleInputJSON)}
  \`\`\`

  EXAMPLE JSON OUTPUT:
  \`\`\`json
  ${JSON.stringify(exampleOutputJSON)}
  \`\`\`

  DATA MODEL DESCRIPTION:
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
  getPrompt,
}
