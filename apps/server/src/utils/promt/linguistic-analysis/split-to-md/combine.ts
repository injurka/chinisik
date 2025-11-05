import { modelDescription } from './model-description'

interface Payload {
  user: string
  system?: string
}

function getPrompt(params: Payload) {
  const system = `
    Вы — лингвистический анализатор китайского языка, преобразующий текст в детализированную структуру данных.
    Ваша задача — предоставлять иерархический разбор предложений, слов и иероглифов с полной лингвистической аннотацией в формате Markdown.

    ${params?.system ? JSON.stringify(params?.system) : ''}
    
    ОПИСАНИЕ МОДЕЛИ ДАННЫХ:
    ${modelDescription}
    `

  const user = `
  \`\`\`json
  ${JSON.stringify(params.user)}
  \`\`\`
  `

  return { system, user }
}

export {
  getPrompt,
}
