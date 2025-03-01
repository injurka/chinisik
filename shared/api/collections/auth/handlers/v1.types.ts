import type { User } from '~/shared/types/models'

// Request //

interface ISignInUserP {
  password: string
  email: string
}

// Response //

interface IAuthUserR {
  token: string
  user: User
  refreshToken: string
}

interface IRefreshAuthP {
  refreshToken: string
}

export type {
  IAuthUserR,
  IRefreshAuthP,
  ISignInUserP,
}
