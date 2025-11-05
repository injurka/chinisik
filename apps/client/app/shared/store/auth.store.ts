import type * as DTO from '~/shared/api/collections/auth/handlers/v1.types'
import { useCookie } from '#app'

// Константы для ключей запросов
enum RequestKeys {
  ME = 'auth_me',
  REFRESH = 'auth_refresh',
  SIGN_IN = 'auth_sign-in',
  SIGN_OUT = 'auth_sign-out',
}

interface AuthState {
  user: User | null
  tokenPair: TokenPair | null
  isInitialized: boolean
}

interface TokenPair {
  access: string
  refresh: string
}

/**
 * Хранилище для управления аутентификацией
 */
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const access = useCookie<string | null>(TOKEN_KEY).value
    const refresh = useCookie<string | null>(REFRESH_TOKEN_KEY).value

    return {
      user: null,
      isInitialized: false,
      tokenPair: access && refresh ? { access, refresh } : null,
    }
  },

  getters: {
    isLoading: () => useRequestStatus([
      RequestKeys.ME,
      RequestKeys.REFRESH,
      RequestKeys.SIGN_IN,
      RequestKeys.SIGN_OUT,
    ]),
    isAuthenticated: state => !!state.user,
  },

  actions: {
    /**
     * Получает информацию о текущем пользователе
     */
    async me() {
      return await useRequest({
        key: RequestKeys.ME,
        fn: ({ api }) => api.auth.v1.me(),
        onSuccess: ({ data }) => {
          this.user = data
        },
        onError: ({ error }) => {
          this.user = null
          throw error
        },
      })
    },

    /**
     * Обновляет токен авторизации
     */
    async refresh() {
      const refreshToken = this.tokenPair?.refresh
      if (!refreshToken) {
        return Promise.reject(new Error('Refresh token is not available.'))
      }
      return await useRequest({
        key: RequestKeys.REFRESH,
        fn: ({ api }) => api.auth.v1.refresh({ refreshToken }),
        onSuccess: ({ data }) => {
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          })
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Авторизует пользователя
     */
    async signIn(payload: DTO.ISignInUserP) {
      return await useRequest({
        key: RequestKeys.SIGN_IN,
        fn: ({ api }) => api.auth.v1.signIn(payload),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          })
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Выход пользователя из системы
     */
    async signOut() {
      await useRequest({
        key: RequestKeys.SIGN_OUT,
        fn: ({ api }) => api.auth.v1.signOut(),
        onSuccess: () => {
          this.clearAuth()
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    /**
     * Сохраняет токены в куки
     */
    saveTokens(tokens: TokenPair) {
      this.tokenPair = tokens

      const cookieOptions = {
        secure: import.meta.env.PROD,
        maxAge: 60 * 60 * 24 * 30, // 30 дней
        sameSite: 'lax' as const,
      }
      useCookie(TOKEN_KEY, cookieOptions).value = tokens.access
      useCookie(REFRESH_TOKEN_KEY, cookieOptions).value = tokens.refresh
    },

    /**
     * Очищает токены из кук
     */
    clearTokens() {
      this.tokenPair = null
      useCookie(TOKEN_KEY).value = null
      useCookie(REFRESH_TOKEN_KEY).value = null
    },

    /**
     * Очищает данные авторизации
     */
    clearAuth() {
      this.user = null
      this.clearTokens()
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>
export { RequestKeys }
