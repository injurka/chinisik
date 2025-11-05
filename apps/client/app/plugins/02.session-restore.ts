import { useAuthStore } from '~/shared/store'

/**
 * Плагин восстановления сессии.
 * Выполняется один раз при загрузке приложения.
 */
export default defineNuxtPlugin({
  name: 'session-restore',
  dependsOn: ['api-client'],
  async setup() {
    const authStore = useAuthStore()

    if (authStore.isInitialized) {
      return
    }

    try {
      // Если есть access-токен, пытаемся получить пользователя
      if (authStore.tokenPair?.access) {
        await authStore.me()
      }
      // Если access-токена нет, но есть refresh-токен, сразу обновляем
      else if (authStore.tokenPair?.refresh) {
        await authStore.refresh()
        await authStore.me()
      }
    }
    catch {
      // Если первая попытка не удалась (например, access-токен истек)
      // и у нас все еще есть refresh-токен (т.к. me() его больше не удаляет).
      if (authStore.tokenPair?.refresh) {
        try {
          console.warn('Первоначальная попытка восстановления сессии не удалась, пробую обновить токен.')
          await authStore.refresh()
          await authStore.me()
        }
        catch (refreshError) {
          // Если и обновление не помогло, то все очищаем
          console.error('Не удалось восстановить сессию даже после обновления токена:', refreshError)
          authStore.clearAuth()
        }
      }
      else {
        // Если refresh-токена нет, то просто очищаем
        authStore.clearAuth()
      }
    }
    finally {
      authStore.isInitialized = true
    }
  },
})
