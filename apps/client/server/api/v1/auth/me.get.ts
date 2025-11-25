import { MOCK_USER } from '../../../utils/mock-auth'

export default defineEventHandler((event) => {
  const authHeader = getHeader(event, 'Authorization')

  // Проверяем наличие Bearer токена
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Токен отсутствует или неверен',
    })
  }

  // В моковом режиме мы просто верим любому токену, если он есть.
  // В реальности тут была бы валидация JWT.
  const { password: _p, ...userWithoutPassword } = MOCK_USER

  return userWithoutPassword
})
