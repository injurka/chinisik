import type { CreateApiMethodType, MethodOption } from './api-client.types'

export function createMethodWrapper(
  version: `v${string}`,
  baseUrl: string,
  create: CreateApiMethodType,
) {
  const baseOptions = { baseUrl, version }

  return <T, R>(option: MethodOption<T, R>) => {
    const { adapter, method, url } = option

    return create({ ...baseOptions, method, url }, adapter)
  }
}
