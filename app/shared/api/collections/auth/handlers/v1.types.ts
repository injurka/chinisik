import type { User } from '~/shared/types/models'

// Request //

interface ISignInUserP {
  password: string
  email: string
}

// Response //

interface IAuthTokenPair {
  token: string
  refreshToken: string
}

interface IAuthUserR extends IAuthTokenPair {
  user: User
}

interface IRefreshAuthP {
  refreshToken: string
}

export type {
  IAuthTokenPair,
  IAuthUserR,
  IRefreshAuthP,
  ISignInUserP,
}
