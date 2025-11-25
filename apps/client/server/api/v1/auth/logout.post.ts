export default defineEventHandler(() => {
  // В моковом режиме просто возвращаем успех
  // В реальности - инвалидация токена в БД/Redis или удаление httpOnly куки
  return {
    success: true,
  }
})
