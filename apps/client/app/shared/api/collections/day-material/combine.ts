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

const service: IService = { createMethods, name: ApiNames.DayMaterial }

export type { IMethods as IDayMaterialMethods }
export { service as dayMaterialService }
