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
      return instance<DTO.IAuthUserR>(`/v1/auth/me`, {
        method: 'GET',
      })
    },
  }
}

export default method
