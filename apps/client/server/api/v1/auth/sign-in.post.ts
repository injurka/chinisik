import { generateRefreshToken, generateToken, MOCK_USER } from '../../../utils/mock-auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  await new Promise(resolve => setTimeout(resolve, 500))

  const { email, password } = body

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    const { password: _p, ...userWithoutPassword } = MOCK_USER

    return {
      token: generateToken(),
      refreshToken: generateRefreshToken(),
      user: userWithoutPassword,
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Unauthorized',
    message: 'Неверный email или пароль',
  })
})
