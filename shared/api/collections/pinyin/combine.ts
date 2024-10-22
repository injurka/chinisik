import { ApiNames, type Instance, type IService } from '~/shared/api'
import { v1 } from './handlers'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function createMethods(instance: Instance) {
  return {
    v1: v1(instance),
  } satisfies IMethods
}

const service: IService = { createMethods, name: ApiNames.Pinyin }

export type { IMethods as IPinyinMethods }
export { service as pinyinService }
