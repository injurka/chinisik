import { linguisticAnalysisMock } from '../../../utils/mock/linguistic-analysis'
import { sleepRequest } from '../../../utils/sleep'

export default defineEventHandler(async () => {
  await sleepRequest(1500) // Имитация задержки сети
  return linguisticAnalysisMock
})
