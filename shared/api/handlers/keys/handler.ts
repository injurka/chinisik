import v1 from './v1'

interface IMethods {
  v1: ReturnType<typeof v1>
}

function methods(baseUrl: string, create: CreateApiMethodType): IMethods {
  return {
    v1: v1(baseUrl, create),
  }
}

export default methods
export type { IMethods as IKeysMethods }
