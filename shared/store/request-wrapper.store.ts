export enum EApiStatus {
  NONE = 'NONE',
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

//* --- State ----------------------------------------------- *//
interface IRequestState {
  _status: Map<string, EApiStatus>
  _error: Map<string, ErrorResult | null>
}

//* --- Store ----------------------------------------------- *//
export const useRequestStore = defineStore('request', {
  state: (): IRequestState => ({
    _status: new Map(),
    _error: new Map(),
  }),

  actions: {
    _setLoading(key: string, value: EApiStatus) {
      this._status.set(key, value)
    },
    _setError(key: string, value: ErrorResult | null) {
      value ? this._error.set(key, value) : this._error.delete(key)
    },

    async requestWrapper<T = unknown>(payload: IRequestWrapperPayload<T>): Promise<RequestReturn<T>> {
      const { api } = useApi()

      const {
        key,
        callback,
        onSuccess,
        onError,
      } = payload

      this._setLoading(key, EApiStatus.PENDING)
      this._setError(key, null)

      try {
        const data = ((await callback({ api, state: this.$state })) ?? null) as Awaited<T>

        onSuccess?.({ data, state: this.$state })
        this._setLoading(key, EApiStatus.FULFILLED)

        return { data, status: EApiStatus.FULFILLED }
      }
      catch (error) {
        onError?.({ error: error as ErrorResult, state: this.$state })
        this._setError(key, error)
        this._setLoading(key, EApiStatus.REJECTED)
      }

      return { error: null, status: EApiStatus.REJECTED }
    },

    getStatus(key: string): EApiStatus {
      return this._status.get(key)!
    },
    checkStatus(keys: string[], status = EApiStatus.PENDING): boolean {
      return keys.some(s => this.getStatus(s) === status)
    },
    isAnyLoading(keys: string[]) {
      return computed(() => this.checkStatus(keys, EApiStatus.PENDING))
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export interface RequestReturn<T> { data?: T, error?: any, status: EApiStatus }
type ErrorResult = any
interface BaseCallback { state: IRequestState }
type Callback = BaseCallback & { api: IApi }
type onSuccess<T> = BaseCallback & { data: Awaited<T> }
type onError = BaseCallback & { error: ErrorResult }

export interface IRequestWrapperPayload<T> {
  key: string
  callback: (payload: Callback) => T extends unknown ? void : Promise<T>
  onSuccess?: (payload: onSuccess<T>) => Promise<void> | void | unknown
  onError?: (payload: onError) => Promise<void> | void | unknown
}

export type RequestStore = ReturnType<typeof useRequestStore>
