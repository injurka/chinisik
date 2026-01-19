import type {
  ApiStatus,
  IApiError,
  IRequestReturn,
  IRequestWrapperPayload,
  IRequestWrapperState,
  ITryRequest,
} from '../../types'
import { computed, useApi, useNuxtApp } from '#imports'
import { useAuthStore } from '~/shared/store'

// Глобальный промис для очереди рефреша
let refreshPromise: Promise<any> | null = null

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
        skipAuthRefresh = false,
      } = payload

      const nuxtApp = useNuxtApp()

      this._setLoading(key, 'PENDING')
      this._setError(key, null)

      const { result, error } = await this.tryRequest(fn, { skipAuthRefresh })

      try {
        if (result && !error) {
          if (onSuccess) {
            await nuxtApp.runWithContext(() => onSuccess({
              data: result as Awaited<T>,
              state: this.$state,
            }))
          }
        }
        else {
          if (onError) {
            await nuxtApp.runWithContext(() => onError({
              error: error as IApiError,
              state: this.$state,
            }))
          }
        }
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

    async tryRequest<T>(
      fn: IRequestWrapperPayload<T>['fn'],
      options: { isRetry?: boolean, skipAuthRefresh?: boolean } = {},
    ): Promise<ITryRequest<T>> {
      const { isRetry = false, skipAuthRefresh = false } = options

      const { api } = useApi()
      const authStore = useAuthStore()
      const nuxtApp = useNuxtApp()

      try {
        const result = (await fn({ state: this.$state, api }) ?? null)
        return {
          result,
          error: null,
        }
      }
      catch (e: any) {
        const status = e?.response?.status || e?.statusCode || 500
        const errorSkip = e?.request?.skipAuthRefresh || e?.response?._data?.skipAuthRefresh

        // Пытаемся сделать рефреш только если:
        // 1. Ошибка 401
        // 2. Это не повторный запрос (isRetry)
        // 3. Рефреш явно не запрещен (skipAuthRefresh)
        if (status === 401 && !isRetry && !skipAuthRefresh && !errorSkip) {
          try {
            if (!refreshPromise) {
              // Запускаем рефреш в контексте Nuxt
              refreshPromise = nuxtApp.runWithContext(() => authStore.refresh())
            }
            await refreshPromise
          }
          catch (refreshError) {
            // Если рефреш не прошел - возвращаем ошибку рефреша
            return {
              error: this.adapterError(refreshError),
              result: null,
            }
          }
          finally {
            if (refreshPromise) {
              refreshPromise.finally(() => {
                refreshPromise = null
              })
            }
          }

          // Повторяем исходный запрос
          return nuxtApp.runWithContext(() => this.tryRequest(fn, { isRetry: true, skipAuthRefresh }))
        }

        return {
          error: this.adapterError(e),
          result: null,
        }
      }
    },

    adapterError(e: any): IApiError | null {
      if (!e)
        return null

      const status = e.response?.status || e.statusCode || 500
      const data = e.response?._data || e
      const message = (data?.message) || e.message || 'Произошла ошибка'

      const error: IApiError = {
        status,
        message,
      }

      const isExpectedAuthError = status === 401 || status === 403

      if (!isExpectedAuthError && !(import.meta.server && import.meta.env.NODE_ENV === 'production')) {
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
