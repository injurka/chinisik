import type { IApiError as IApiErrorExternal } from '~/modules/1.api'

type IApiError = IApiErrorExternal

function isIApiError(error: unknown): error is IApiError {
  return (
    typeof error === 'object'
    && error !== null
    && 'message' in error
    && typeof (error as any).message === 'string'
  )
}

export type { IApiError }
export { isIApiError }
