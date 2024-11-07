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
}

export type {
  IAuthUserR,
  ISignInUserP,
}
