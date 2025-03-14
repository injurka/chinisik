import type {
  ApiStatus,
  IApiError,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  ITryRequest,
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

    async request<T = boolean>(payload: IRequestWrapperPayload<T>): Promise<IRequestReturn<T>> {
      const {
        key,
        fn,
        onSuccess,
        onError,
      } = payload

      this._setLoading(key, 'PENDING')
      this._setError(key, null)

      const { result, error } = await this.tryRequest(fn)

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
        data: result,
        error,
        status: result ? 'FULFILLED' : 'REJECTED',
      }
    },
    async tryRequest<T>(fn: IRequestWrapperPayload<T>['fn'], skipRefresh = false): Promise<ITryRequest<T>> {
      const { api, refresh } = useApi()
      let error: IApiError | null = null

      try {
        const result = (await fn({ state: this.$state, api }) ?? null)
        return {
          result,
          error: null,
        }
      }
      catch (e: any) {
        if (e.status === 401 && !skipRefresh) {
          try {
            await refresh?.()
            return this.tryRequest(fn, true)
          }
          catch (refreshError) {
            error = this.adapterError(refreshError)
          }
        }
        else {
          error = this.adapterError(e)
        }
      }

      return {
        error,
        result: null,
      }
    },

    adapterError(e: any): IApiError | null {
      if (!e?.response) {
        return null
      }

      const status = e.response.status
      const data = e.response._data || e

      const error: IApiError = {
        status,
        message: (data?.message) || 'Произошла ошибка',
      }

      if (!(import.meta.server && import.meta.env.NODE_ENV === 'production')) {
        console.error('[REQUEST ERROR] - ', e)
      }

      return error
    },
    getStatus(key: string): ApiStatus {
      return this._status.get(key) || 'NONE'
    },
    checkStatus(keys: string[], status = 'PENDING'): boolean {
      return keys.some(s => this.getStatus(s) === status)
    },
    getError(key: string): IApiError | null {
      return this._error.get(key) || null
    },
    getAnyError(keys: string[]): IApiError | null {
      for (const key of keys) {
        const error = this._error.get(key)
        if (error)
          return error
      }
      return null
    },
    isAnyLoading(keys: string[]) {
      return computed(() => this.checkStatus(keys, 'PENDING'))
    },
  },
})

export { useRequestWrapperStore }
