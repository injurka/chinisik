import type * as DTO from '~/shared/api/collections/auth/handlers/v1.types'
import { useCookie } from '#app'

enum RequestKeys {
  ME = 'auth_me',
  SIGN_IN = 'auth_sign-in',
  SIGN_OUT = 'auth_sign-out',
}

//* --- State ----------------------------------------------- *//

interface AuthState {
  user: User | null
}

//* --- Store ----------------------------------------------- *//
const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
  }),

  getters: {
    isLoading: () => useRequestStatus([
      RequestKeys.ME,
      RequestKeys.SIGN_IN,
      RequestKeys.SIGN_OUT,
    ]),
    isAuthenticated: state => !!state.user,
    token: () => useCookie<string>(TOKEN_KEY).value,
  },

  actions: {
    async me() {
      return await useRequest({
        key: RequestKeys.ME,
        fn: ({ api }) => api.auth.v1.me(),
        onSuccess: ({ data }) => {
          this.user = data.user
          this.saveToken(data.token)
        },
        onError: () => this.clearAuth(),
      })
    },

    async signIn(payload: DTO.ISignInUserP) {
      return await useRequest({
        key: RequestKeys.SIGN_IN,
        fn: ({ api }) => api.auth.v1.signIn(payload),
        onError: () => this.clearAuth(),
      })
    },

    async signOut() {
      await useRequest({
        key: RequestKeys.SIGN_OUT,
        fn: () => {
          // TODO
          // api.auth.v1.signOut()
        },
        onSuccess: () => this.clearAuth(),
      })
    },

    saveToken(token: string) {
      useCookie(TOKEN_KEY, {
        // secure: import.meta.env.NODE_ENV === 'production',
        // maxAge: 60 * 60 * 24, // 24 Часа
        // sameSite: 'lax',
      }).value = token
    },

    clearAuth() {
      this.user = null
      useCookie(TOKEN_KEY).value = null
    },
  },
})

//* --- Utils ----------------------------------------------- *//

export type AuthStore = ReturnType<typeof useAuthStore>
export { useAuthStore }
export { RequestKeys }
