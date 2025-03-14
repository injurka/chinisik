import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    signIn(payload: DTO.ISignInUserP) {
      return instance<DTO.IAuthUserR>(`/v1/auth/sign-in`, {
        method: 'POST',
        body: payload,
      })
    },

    me() {
      return instance<DTO.IAuthUserR['user']>(`/v1/auth/me`, {
        method: 'GET',
      })
    },

    refresh(payload: DTO.IRefreshAuthP) {
      return instance<DTO.IAuthTokenPair>(`/v1/auth/refresh`, {
        method: 'POST',
        body: payload,
        // Важно: не отправляем авто-заголовок Authorization
        skipAuth: true,
      })
    },

    // Добавляем метод для выхода
    signOut() {
      return instance(`/v1/auth/logout`, {
        method: 'POST',
      })
    },
  }
}

export default method
