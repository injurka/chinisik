import type { User } from '~/shared/types/models'

// Request //

interface ISignInUserP {
  password: string
  email: string
}

interface IRefreshTokenP {
  refreshToken: string
}

// Response //

interface IAuthTokenPair {
  token: string
  refreshToken: string
}

interface IAuthUserR extends IAuthTokenPair {
  user: User
}

export type {
  IAuthTokenPair,
  IAuthUserR,
  IRefreshTokenP,
  ISignInUserP,
}
