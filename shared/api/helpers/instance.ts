/* eslint-disable no-console */
import type { FetchOption, Instance } from '../types'

interface CreateInstanceParams {
  baseUrl: string
  interceptops?: FetchOption<unknown>[]
  verbose?: boolean
}

export function cleanDoubleSlashes(input = ''): string {
  return input
    .split('://')
    .map(string_ => string_.replace(/\/{2,}/g, '/'))
    .join('://')
}

function createInstance(params: CreateInstanceParams) {
  const {
    baseUrl,
    interceptops = [],
    verbose = false,
  } = params

  const apiMethod = <R>(
    url: string,
    options: FetchOption<R>,
  ): Promise<R> => {
    const _options = {
      retry: false,
      ...options,
      onRequest: (...params) => {
        const objects = [...interceptops, options]

        objects.forEach((obj) => {
          if (obj?.onRequest && typeof obj.onRequest === 'function') {
            obj.onRequest(...params)
          }
        })
      },
    } satisfies FetchOption<R>

    const _url = cleanDoubleSlashes(`${baseUrl}/${url}`)

    if (verbose)
      console.log(`⚡ %c[${options.method!.toUpperCase()}]`, 'color: #9400D3; font-weight: bold;', '-', _url)

    return $fetch(_url as any, _options as any)
  }

  return apiMethod as Instance
}

export { createInstance }
export type { CreateInstanceParams }
