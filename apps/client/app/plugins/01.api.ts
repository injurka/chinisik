import { useAuthStore } from '~/shared/store'

export default defineNuxtPlugin(async (_) => {
  const authStore = useAuthStore()

  const apiInterceptops = [{
    onRequest: ({ options }: any) => {
      // 1. Проверяем skipAuth (передаем это в запросах, где токен не нужен)
      if (options.skipAuth) {
        return
      }

      // 2. Берем токен из реактивного геттера стора
      const token = authStore.token

      if (token) {
        const bearer = `Bearer ${token}`
        const headers = options.headers ||= {} as Headers

        if (Array.isArray(headers)) {
          headers.push(['Authorization', bearer])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', bearer)
        }
        else {
          (headers as { Authorization: string }).Authorization = bearer
        }
      }
    },

    // Остальные хуки можно оставить пустыми или использовать для глобальной обработки
    onRequestError: () => { },
    onResponse: () => { },
    onResponseError: () => { },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
