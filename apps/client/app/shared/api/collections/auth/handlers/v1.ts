import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    signIn(payload: DTO.ISignInUserP) {
      return instance<DTO.IAuthUserR>(`/v1/auth/sign-in`, {
        method: 'POST',
        body: payload,
        skipAuth: true,
        skipAuthRefresh: true,
      })
    },

    me() {
      return instance<DTO.IAuthUserR['user']>(`/v1/auth/me`, {
        method: 'GET',
      })
    },

    refresh(payload: DTO.IRefreshTokenP) {
      return instance<DTO.IAuthTokenPair>(`/v1/auth/refresh`, {
        method: 'POST',
        body: payload,
        skipAuth: true,
        skipAuthRefresh: true,
      })
    },

    signOut() {
      return instance(`/v1/auth/logout`, {
        method: 'POST',
        skipAuthRefresh: true,
      })
    },
  }
}

export default method
