import type { SignInUserPayload, SignUpUserPayload } from '~/models/auth'
import type { User } from '~/models/user'
import { prisma } from '~/prisma'
import { sendVerificationCode } from '~/utils/email'
import { generateTokens, invalidateTokens, refreshTokens } from '~/utils/tokens'

class AuthService {
  signUp = async (payload: SignUpUserPayload) => {
    const storedCode = await prisma.emailVerificationCode.findFirst({
      where: { email: payload.email },
    })

    if (!storedCode || storedCode.code !== payload.email_verification_code) {
      throw new Error('Invalid verification code')
    }

    const hashedPassword = await Bun.password.hash(payload.password)

    const user = await prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
      },
    })

    const transformedUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    } as User

    const tokens = await generateTokens(user.id)

    return {
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: transformedUser,
    }
  }

  signIn = async (payload: SignInUserPayload) => {
    const user = await prisma.user.findFirstOrThrow({ where: { email: payload.email } })

    const isPasswordValid = await Bun.password.verify(payload.password, user.password!)
    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    const transformedUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    } as User

    const tokens = await generateTokens(user.id)

    return {
      token: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: transformedUser,
    }
  }

  refreshToken = async (refreshToken: string) => {
    return refreshTokens(refreshToken)
  }

  logout = async (userId: number) => {
    return invalidateTokens(userId)
  }

  createVerificationCode = async (email: string) => {
    const code = Math.random().toString(36).substring(2, 8)

    await prisma.emailVerificationCode.create({
      data: {
        email,
        code,
      },
    })

    await sendVerificationCode(email, code)
  }
}

export { AuthService }
