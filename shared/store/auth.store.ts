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
  }),

  getters: {
    isLoading: () => useRequestStatus([
      RequestKeys.ME,
      RequestKeys.REFRESH,
      RequestKeys.SIGN_IN,
      RequestKeys.SIGN_OUT,
    ]),
    isAuthenticated: state => !!state.user,
    token: () => useCookie<string>(TOKEN_KEY).value,
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
          this.user = data.user
        },
        onError: () => this.clearAuth(),
      })
    },

    /**
     * Обновляет токен авторизации
     */
    async refresh() {
      const refreshToken = useCookie(REFRESH_TOKEN_KEY).value ?? ''

      return await useRequest({
        key: RequestKeys.REFRESH,
        fn: ({ api }) => api.auth.v1.refresh({ refreshToken }),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveTokens({
            access: data.token,
            refresh: data.refreshToken,
          })
        },
        onError: () => this.clearAuth(),
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
        onError: () => this.clearAuth(),
      })
    },

    /**
     * Выход пользователя из системы
     */
    async signOut() {
      await useRequest({
        key: RequestKeys.SIGN_OUT,
        fn: ({ api }) => api.auth.v1.signOut(),
        onSuccess: () => this.clearAuth(),
        onError: () => this.clearAuth(),
      })
    },

    /**
     * Сохраняет токены в куки
     */
    saveTokens(tokens: TokenPair) {
      const isProduction = import.meta.env.NODE_ENV === 'production'
      const cookieOptions = {
        secure: isProduction,
        maxAge: 60 * 60 * 24, // 24 часа
        sameSite: 'lax' as const,
      }

      useCookie(TOKEN_KEY, cookieOptions).value = tokens.access
      useCookie(REFRESH_TOKEN_KEY, cookieOptions).value = tokens.refresh
    },

    /**
     * Очищает данные авторизации
     */
    clearAuth() {
      this.user = null
      useCookie(TOKEN_KEY).value = null
      useCookie(REFRESH_TOKEN_KEY).value = null
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>
export { RequestKeys }
