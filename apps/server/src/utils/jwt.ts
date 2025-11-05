import type { User } from '~/models/user'
import { sign, verify } from 'hono/jwt'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
type JwtPayload = WithRequired<Partial<User>, 'id'>

async function jwtDecode(token: string) {
  const secret = process.env.JWT_SECRET!
  const decoded = await verify(token, secret) as { userId: number }

  return decoded
}

async function jwtEncode(user: JwtPayload, options?: { exp: number }) {
  const secret = process.env.JWT_SECRET!
  const jwtPayload = {
    userId: user.id,
    exp: Math.floor(Date.now() / 1000) + (options?.exp ?? (60 * 60 * 24)),
  }
  const token = await sign(jwtPayload, secret)

  return token
}

export {
  jwtDecode,
  jwtEncode,
}
