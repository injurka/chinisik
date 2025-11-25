import { sleepRequest } from '../../../../utils/sleep'

export default defineEventHandler(async () => {
  // Имитация задержки сети
  await sleepRequest(300)

  // Возвращаем статические моковые данные
  return [
    {
      id: 101,
      score: 10,
      mistakes: 0,
      totalQuestions: 15,
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 минут назад
    },
    {
      id: 100,
      score: 12,
      mistakes: 3,
      totalQuestions: 15,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 день назад
    },
  ]
})
