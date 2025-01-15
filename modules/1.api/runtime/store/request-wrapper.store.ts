import type {
  ApiStatus,
  IApiError,
  ICallback,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  IRetryResult,
} from '../../types'
import { computed, useApi } from '#imports'

const useRequestWrapperStore = defineStore('request', {
  state: (): IRequestWrapperState => ({
    _status: new Map(),
    _error: new Map(),
  }),

  actions: {
    _setLoading(key: string, value: ApiStatus) {
      this._status.set(key, value)
    },
    _setError(key: string, value: IApiError | null) {
      if (value)
        this._error.set(key, value)
      else
        this._error.delete(key)
    },

    async requestWrapper<T = boolean>(payload: IRequestWrapperPayload<T>): Promise<IRequestReturn<Awaited<T>>> {
      const {
        key,
        fn,
        onSuccess,
        onError,
        attemptCounts,
      } = payload

      this._setLoading(key, 'PENDING')
      this._setError(key, null)

      const { result, error } = await this.retryAsync(fn, attemptCounts ?? 2)

      try {
        await (result && !error
          ? onSuccess?.({
            data: result as Awaited<T>,
            state: this.$state,
          })
          : onError?.({
            error: error as IApiError,
            state: this.$state,
          }))
      }
      finally {
        this._setLoading(key, result ? 'FULFILLED' : 'REJECTED')
        this._setError(key, error)
      }

      return {
        data: result as Awaited<T>,
        error,
        status: result ? 'FULFILLED' : 'REJECTED',
      }
    },
    async retryAsync<T>(
      fn: (payload: ICallback) => T,
      attemptCounts: number,
    ): Promise<IRetryResult<T>> {
      const { api } = useApi()
      let error: IApiError = {} as IApiError

      for (let i = 0; i < attemptCounts; i++) {
        try {
          const result = ((await fn({ state: this.$state, api })) ?? true) as Awaited<T>

          return { result, error: null }
        }
        catch (e: any) {
          error = {
            status: e.status,
            ...e.response._data ?? e,
          }

          console.error('[REQUEST ERROR] - ', e)
        }
      }

      return { error }
    },

    getStatus(key: string): ApiStatus {
      return this._status.get(key)!
    },
    checkStatus(keys: string[], status = 'PENDING'): boolean {
      return keys.some(s => this.getStatus(s) === status)
    },
    getError(key: string): IApiError | null {
      return this._error.get(key)!
    },
    getAnyError(keys: string[]): IApiError | null {
      const key = keys.find(key => !!this._error.get(key))
      return key ? this._error.get(key)! : null
    },
    isAnyLoading(keys: string[]) {
      return computed(() => this.checkStatus(keys, 'PENDING'))
    },
  },
})

export { useRequestWrapperStore }
