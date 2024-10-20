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
  _cached: Map<string, any>
}

//* --- Store ----------------------------------------------- *//
export const useRequestStore = defineStore('request', {
  state: (): IRequestState => ({
    _status: new Map(),
    _error: new Map(),
    _cached: new Map(),
  }),

  actions: {
    _setCached<T>(key: string, value: T) {
      this._cached.set(key, value)
    },
    _setLoading(key: string, value: EApiStatus) {
      this._status.set(key, value)
    },
    _setError(key: string, value: ErrorResult | null) {
      value ? this._error.set(key, value) : this._error.delete(key)
    },

    async requestWrapper<T = unknown>(payload: IRequestWrapperPayload<T>): Promise<RequestReturn<T>> {
      const { apiVerbose } = useRuntimeConfig().public
      const { api } = useApi()

      const {
        key,
        once,
        callback,
        onSuccess,
        onError,
      } = payload

      if (once && this._status.get(key) === EApiStatus.FULFILLED) {
        if (apiVerbose) {
          // eslint-disable-next-line no-console
          console.log(`💫 Request: [CACHED] ${key}`)
        }

        return this._cached.get(key)
      }

      this._setLoading(key, EApiStatus.PENDING)
      this._setError(key, null)

      try {
        const data = ((await callback({ api, state: this.$state })) ?? null) as Awaited<T>

        onSuccess?.({ data, state: this.$state })
        this._setLoading(key, EApiStatus.FULFILLED)
        this._setCached(key, data)

        return { data, status: EApiStatus.FULFILLED }
      }
      catch (error) {
        onError?.({ error: error as ErrorResult, state: this.$state })
        this._setError(key, error)
        this._setLoading(key, EApiStatus.REJECTED)
        this._setCached(key, null)
      }

      return { error: null, status: EApiStatus.REJECTED }
    },

    getCached<T>(key: string): T {
      return this._cached.get(key)!
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
  once?: boolean
  callback: (payload: Callback) => T extends unknown ? void : Promise<T>
  onSuccess?: (payload: onSuccess<T>) => Promise<void> | void | unknown
  onError?: (payload: onError) => Promise<void> | void | unknown
}

export type RequestStore = ReturnType<typeof useRequestStore>
