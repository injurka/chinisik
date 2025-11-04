import type { Instance, IService } from '~/shared/api'
import { ApiNames } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Quiz }

export type { IMethods as IQuizMethods }
export { service as quizService }
