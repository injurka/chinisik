export type ApiStatus =
  'NONE' |
  'PENDING' |
  'FULFILLED' |
  'REJECTED'

interface IRequestWrapperState {
  _status: Map<string, ApiStatus>
  _error: Map<string, IError | null>
}

interface IRequestReturn<T> { data?: T, error?: IError | null, status: ApiStatus }
interface IRequestWrapperPayload<T> {
  key: string
  attemptCounts?: number
  fn: (payload: ICallback) => T extends boolean ? void : T
  onSuccess?: (payload: SuccessCallback<T>) => Promise<void> | void | unknown
  onError?: (payload: ErrorCallback) => Promise<void> | void | unknown
}

interface IError {
  status: number
  message: string
}
interface ICallback {
  state: IRequestWrapperState
  api: IApi
}
type SuccessCallback<T> = Omit<ICallback, 'api'> & { data: Awaited<T> }
type ErrorCallback = Omit<ICallback, 'api'> & { error: IError }

interface IRetryResult<T> {
  result?: Awaited<T> | null
  error: IError | null
}

export type {
  ICallback,
  IError,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  IRetryResult,
}
