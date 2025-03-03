/* eslint-disable no-console */
import type { FetchOption, Instance } from '../types'

interface CreateInstanceParams {
  baseUrl: string
  verbose?: boolean
  interceptops?: FetchOption<any>[]
}

function cleanDoubleSlashes(input = ''): string {
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

  const applyInterceptors = <R>(
    interceptors: FetchOption<R>[],
    options: FetchOption<R>,
    hookName: keyof FetchOption<R>,
    ...params: any[]
  ) => {
    [...interceptors, options].forEach((obj) => {
      const hook = obj?.[hookName]

      if (typeof hook === 'function')
        hook.apply(obj, params)
    })
  }

  const apiMethod = <R>(
    url: string,
    options: FetchOption<R>,
  ): Promise<R> => {
    const _options = {
      // retryStatusCodes: [401],
      // retryDelay: 100,
      retry: 0,
      ...options,
      onRequest: (...params) => applyInterceptors(interceptops, options, 'onRequest', ...params),
      onRequestError: (...params) => applyInterceptors(interceptops, options, 'onRequestError', ...params),
      onResponse: (...params) => applyInterceptors(interceptops, options, 'onResponse', ...params),
      onResponseError: (...params) => applyInterceptors(interceptops, options, 'onResponseError', ...params),
    } satisfies FetchOption<R>

    const _url = cleanDoubleSlashes(`${baseUrl}/${url}`)

    if (verbose)
      console.log(`⚡ %c[${options.method!.toUpperCase()}]`, 'color: #9400D3; font-weight: bold;', '-', _url)

    return $fetch(_url as any, _options as any)
  }

  return apiMethod as Instance
}

export { cleanDoubleSlashes, createInstance }
export type { CreateInstanceParams }
