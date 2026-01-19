import { useAuthStore } from '~/shared/store'

/**
 * Плагин восстановления сессии.
 * Выполняется один раз при загрузке приложения (SSR или первый лоад SPA).
 */
export default defineNuxtPlugin({
  name: 'session-restore',
  dependsOn: ['api-client'],
  async setup() {
    const authStore = useAuthStore()
    await authStore.init()
  },
})
