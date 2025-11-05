import exampleInputJSON from './jsons/default-input.json'
import exampleOutputJSON from './jsons/default-output.json'
import { modelDescription } from './model-description'

interface Payload {
  user: string
  system?: string
}

function getPrompt(params: Payload) {
  const system = `
  Вы — лингвистический анализатор китайского языка, преобразующий текст в детализированную структуру данных. Ваша задача — предоставлять иерархический разбор предложений, слов и иероглифов с полной лингвистической аннотацией в формате JSON.

  При обработке запроса вы должны:
  1. Декомпозировать текст на элементы (Предложение → Слово/Иероглиф → Ключи)
  2. Аннотировать каждый компонент: тоны пиньина, грамматические правила, части речи, этимологию, позицию ключей
  3. Соблюдать строгие правила валидации для enum-полей (KeyPosition, KeyRole, PartOfSpeech)
  4. Указывать дополнительные лингвистические данные: мнемоники, транскрипцию, частоту использования ключей, примеры применения правил

  ТРЕБОВАНИ К ФОРМАТУ ОТВЕТА:
  Важно чтобы ответ обязательно должен быть в валидном формате JSON.
  Ответ всегда должен соответствовать описанной JSON-модели с поддержкой вложенных структур и многоуровневой композиции элементов.

  ПРИМЕР ВХОДЯЩИХ ДАННЫХ:
  \`\`\`json
  ${JSON.stringify(exampleInputJSON)}
  \`\`\`

  ПРИМЕР ИСХОДЯЩИХ ДАННЫХ:
  \`\`\`json
  ${JSON.stringify(exampleOutputJSON)}
  \`\`\`

  ОПИСАНИЕ МОДЕЛИ ДАННЫХ:
  ${modelDescription}

  ${params?.system ? JSON.stringify(params?.system) : ''}
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
