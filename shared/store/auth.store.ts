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
}

interface TokenPair {
  access: string
  refresh: string
}

/**
 * Хранилище для управления аутентификацией
 */
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,

    tokenPair: {
      access: useCookie<string>(TOKEN_KEY).value,
      refresh: useCookie<string>(REFRESH_TOKEN_KEY).value,
    },
  }),

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
    async me(withCookie = false) {
      return await useRequest({
        key: RequestKeys.ME,
        fn: ({ api }) => api.auth.v1.me(),
        onSuccess: ({ data }) => {
          this.user = data
        },
        onError: ({ error }) => {
          this.clearAuth(withCookie)
          throw error
        },
      })
    },

    /**
     * Обновляет токен авторизации
     */
    async refresh(refreshToken: string, withCookie = false) {
      return await useRequest({
        key: RequestKeys.REFRESH,
        fn: ({ api }) => api.auth.v1.refresh({ refreshToken }),
        onSuccess: ({ data }) => {
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          }, withCookie)
        },
        onError: ({ error }) => {
          this.clearAuth(withCookie)
          throw error
        },
      })
    },

    /**
     * Авторизует пользователя
     */
    async signIn(payload: DTO.ISignInUserP, withCookie = false) {
      return await useRequest({
        key: RequestKeys.SIGN_IN,
        fn: ({ api }) => api.auth.v1.signIn(payload),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          }, withCookie)
        },
        onError: ({ error }) => {
          this.clearAuth(withCookie)
          throw error
        },
      })
    },

    /**
     * Выход пользователя из системы
     */
    async signOut(withCookie = true) {
      await useRequest({
        key: RequestKeys.SIGN_OUT,
        fn: ({ api }) => api.auth.v1.signOut(),
        onSuccess: () => {
          this.clearAuth(withCookie)
        },
        onError: ({ error }) => {
          this.clearAuth(withCookie)
          throw error
        },
      })
    },

    /**
     * Сохраняет токены в куки
     */
    saveTokens(tokens: TokenPair, withCookie = false) {
      this.tokenPair = tokens

      if (withCookie) {
        const cookieOptions = {
          secure: import.meta.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24, // 24 часа (in seconds)
          sameSite: 'lax' as const,
        }
        useCookie(TOKEN_KEY, cookieOptions).value = tokens.access
        useCookie(REFRESH_TOKEN_KEY, cookieOptions).value = tokens.refresh
      }
    },

    /**
     * Очищает токены из кук
     */
    clearTokens(withCookie = false) {
      this.tokenPair = null

      if (withCookie) {
        useCookie(TOKEN_KEY).value = null
        useCookie(REFRESH_TOKEN_KEY).value = null
      }
    },

    /**
     * Очищает данные авторизации
     */
    clearAuth(withCookie = false) {
      this.user = null
      this.clearTokens(withCookie)
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>
export { RequestKeys }
