import { sleepRequest } from '../../../../utils/sleep'

export default defineEventHandler(async (event) => {
  await sleepRequest(500)
  const body = await readBody(event)

  // Возвращаем "сохраненный" результат с сгенерированным ID и датой
  return {
    id: Math.floor(Math.random() * 10000),
    score: body.score,
    mistakes: body.mistakes,
    totalQuestions: body.totalQuestions,
    createdAt: new Date().toISOString(),
  }
})
