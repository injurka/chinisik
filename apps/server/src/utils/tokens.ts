import { prisma } from '~/prisma'
import { jwtEncode } from '~/utils/jwt'

// Время жизни токенов
const ACCESS_TOKEN_EXPIRY = 60 * 60 * 24 // 24 часа в секундах
const REFRESH_TOKEN_EXPIRY = 30 * 24 * 60 * 60 // 30 дней в секундах

export async function generateTokens(userId: number) {
  const accessToken = await jwtEncode({ id: userId }, { exp: ACCESS_TOKEN_EXPIRY })
  const refreshToken = Bun.randomUUIDv7()

  // Сохраняем refresh token в базу данных
  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_EXPIRY * 1000),
    },
  })

  return {
    accessToken,
    refreshToken,
    accessTokenExpiry: ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: REFRESH_TOKEN_EXPIRY,
  }
}

export async function refreshTokens(refreshToken: string) {
  // Ищем refresh token в базе данных
  const storedToken = await prisma.refreshToken.findUnique({
    where: { token: refreshToken },
    include: { User: true },
  })

  // Проверяем, существует ли токен и не истек ли срок его действия
  if (!storedToken || storedToken.expiresAt < new Date()) {
    throw new Error('Invalid or expired refresh token')
  }

  // Удаляем использованный refresh token
  await prisma.refreshToken.delete({
    where: { id: storedToken.id },
  })

  // Генерируем новую пару токенов
  return generateTokens(storedToken.userId)
}

export async function invalidateTokens(userId: number) {
  // Удаляем все refresh токены пользователя
  await prisma.refreshToken.deleteMany({
    where: { userId },
  })
}
