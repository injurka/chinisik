import { generateRefreshToken, generateToken } from '../../../utils/mock-auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { refreshToken } = body

  if (!refreshToken || !refreshToken.includes('mock_refresh_token')) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
      message: 'Невалидный refresh token',
    })
  }

  return {
    token: generateToken(),
    refreshToken: generateRefreshToken(),
  }
})
