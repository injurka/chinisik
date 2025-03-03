export type ApiStatus =
  'NONE' |
  'PENDING' |
  'FULFILLED' |
  'REJECTED'

interface IRequestWrapperState {
  _status: Map<string, ApiStatus>
  _error: Map<string, IApiError | null>
}

interface IRequestReturn<T> { data: T | null, error?: IApiError | null, status: ApiStatus }
interface IRequestWrapperPayload<T> {
  key: string
  fn: (payload: ICallback) => Promise<T>
  onSuccess?: (payload: SuccessCallback<T>) => Promise<void> | void | unknown
  onError?: (payload: ErrorCallback) => Promise<void> | void | unknown
}

interface IApiError {
  status: number
  message: string
}
interface ICallback {
  state: IRequestWrapperState
  api: IApi
}
type SuccessCallback<T> = Omit<ICallback, 'api'> & { data: T }
type ErrorCallback = Omit<ICallback, 'api'> & { error: IApiError }

interface ITryRequest<T> {
  result: T | null
  error: IApiError | null
}

export type {
  IApiError,
  ICallback,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  ITryRequest,
}
