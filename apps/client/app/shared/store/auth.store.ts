import type * as DTO from '~/shared/api/collections/auth/handlers/v1.types'
import { useCookie } from '#app'

// Константы для ключей запросов
enum RequestKeys {
  ME = 'auth_me',
  REFRESH = 'auth_refresh',
  SIGN_IN = 'auth_sign-in',
  SIGN_OUT = 'auth_sign-out',
}

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isInitialized: boolean
}

/**
 * Хранилище для управления аутентификацией
 */
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    const access = useCookie<string | null>(ACCESS_TOKEN_KEY)
    const refresh = useCookie<string | null>(REFRESH_TOKEN_KEY)

    return {
      user: null,
      isInitialized: false,
      accessToken: access.value || null,
      refreshToken: refresh.value || null,
    }
  },

  getters: {
    isLoading: () => useRequestStatus([
      RequestKeys.ME,
      RequestKeys.REFRESH,
      RequestKeys.SIGN_IN,
      RequestKeys.SIGN_OUT,
    ]),
    isAuthenticated: state => !!state.user && !!state.accessToken,
    token: state => state.accessToken,
  },

  actions: {
    /**
     * Инициализация сессии (вызывается из плагина при старте)
     */
    async init() {
      if (this.isInitialized)
        return

      try {
        // Синхронизируем стейт с куками (на случай если что-то поменялось)
        const accessCookie = useCookie(ACCESS_TOKEN_KEY)
        const refreshCookie = useCookie(REFRESH_TOKEN_KEY)

        this.accessToken = accessCookie.value || null
        this.refreshToken = refreshCookie.value || null

        // Если нет ни одного токена — мы гость
        if (!this.accessToken && !this.refreshToken) {
          this.clearAuth()
          this.isInitialized = true
          return
        }

        // Если есть access token — проверяем его
        if (this.accessToken) {
          // allowRefresh=false в me(), потому что если access протух,
          // request-wrapper сам вызовет refresh(), но нам важно понимать,
          // что если и это не помогло - чистим сессию.
          await this.me()
        }
        // Если access нет, но есть refresh — пробуем обновиться
        else if (this.refreshToken) {
          await this.refresh()
          await this.me()
        }
      }
      catch {
        // Любая фатальная ошибка инициализации — сброс
        this.clearAuth()
      }
      finally {
        this.isInitialized = true
      }
    },

    /**
     * Получение профиля
     */
    async me() {
      return await useRequest({
        key: RequestKeys.ME,
        fn: ({ api }) => api.auth.v1.me(),
        onSuccess: ({ data }) => {
          this.user = data
        },
        onError: ({ error }) => {
          if (error.status === 401) {
            this.clearAuth()
          }
          throw error
        },
      })
    },

    /**
     * Обновление токенов
     */
    async refresh() {
      // Если рефреш токена нет в стейте, нет смысла делать запрос
      if (!this.refreshToken) {
        throw new Error('No refresh token available')
      }

      return await useRequest({
        key: RequestKeys.REFRESH,
        skipAuthRefresh: true,
        fn: ({ api }) => api.auth.v1.refresh({ refreshToken: this.refreshToken! }),
        onSuccess: ({ data }) => {
          this.saveTokens(data.token, data.refreshToken)
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    async signIn(payload: DTO.ISignInUserP) {
      return await useRequest({
        key: RequestKeys.SIGN_IN,
        skipAuthRefresh: true,
        fn: ({ api }) => api.auth.v1.signIn(payload),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveTokens(data.token, data.refreshToken)
        },
        onError: ({ error }) => {
          this.clearAuth()
          throw error
        },
      })
    },

    async signOut() {
      try {
        await useRequest({
          key: RequestKeys.SIGN_OUT,
          skipAuthRefresh: true,
          fn: ({ api }) => api.auth.v1.signOut(),
        })
      }
      finally {
        this.clearAuth()
        await navigateTo(RoutePaths.Auth.SignIn())
      }
    },

    /**
     * Сохранение токенов в куки и стейт
     */
    saveTokens(accessToken: string, refreshToken: string) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken

      const accessCookie = useCookie(ACCESS_TOKEN_KEY, {
        maxAge: 60 * 60 * 24 * 30, // 30 дней
        sameSite: 'lax',
        secure: import.meta.env.PROD,
      })

      const refreshCookie = useCookie(REFRESH_TOKEN_KEY, {
        maxAge: 60 * 60 * 24 * 30, // 30 дней
        sameSite: 'lax',
        secure: import.meta.env.PROD,
      })

      accessCookie.value = accessToken
      refreshCookie.value = refreshToken
    },

    clearAuth() {
      this.user = null
      this.accessToken = null
      this.refreshToken = null

      useCookie(ACCESS_TOKEN_KEY).value = null
      useCookie(REFRESH_TOKEN_KEY).value = null
    },
  },
})

export type AuthStore = ReturnType<typeof useAuthStore>
export { RequestKeys }
