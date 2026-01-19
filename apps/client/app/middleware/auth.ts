import { useAuthStore } from '~/shared/store/auth.store'

interface RouteMetaAuth {
  requiredRoles?: string[]
  requiresAuth?: boolean
}

export default defineNuxtRouteMiddleware(async (to) => {
  const { requiresAuth = false } = to.meta as RouteMetaAuth

  if (!requiresAuth) {
    return
  }

  const store = useAuthStore()

  // Убеждаемся, что инициализация прошла
  if (!store.isInitialized) {
    await store.init()
  }

  if (!store.isAuthenticated) {
    return navigateTo({
      path: '/auth/sign-in', // Лучше использовать именованные роуты или константы путей
      query: { redirect: to.fullPath },
    })
  }
})
