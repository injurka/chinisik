export default defineNuxtPlugin(async () => {
  const apiInterceptops = [{
    onRequest: ({ options }) => {
      const store = useStore('auth')
      if (options.skipAuth) {
        return
      }

      if (store.token) {
        const accessToken = `Bearer ${store.token}`
        const headers = options.headers ||= {} as Headers

        if (Array.isArray(headers)) {
          headers.push(['Authorization', accessToken])
          headers.push(['x-authorizaition', accessToken])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', accessToken)
          headers.set('x-authorizaition', accessToken)
        }
        else {
          (headers as { Authorization: string }).Authorization = accessToken
        }
      }
    },

    onRequestError: () => { },

    onResponse: () => { },

    onResponseError: async ({ response, request, options }) => {
      // Если получили 401 Unauthorized
      if (response?.status === 401) {
        const store = useStore(['auth'])

        // Пропускаем обработку, если это уже запрос на обновление токена
        // или если опция skipAuthRefresh установлена
        if (request.toString().includes('/auth/refresh') || options.skipAuthRefresh) {
          return
        }

        try {
          // Пытаемся обновить токен
          await store.auth.refresh()

          // Если токен успешно обновлен, повторяем оригинальный запрос
          // Удаляем флаг skipAuthRefresh, чтобы избежать бесконечного цикла
          const newOptions = { ...options, skipAuthRefresh: true }

          // Обновляем заголовки с новым токеном
          const newToken = `Bearer ${store.auth.token}`
          const headers = newOptions.headers ||= {} as Headers

          if (Array.isArray(headers)) {
            // Находим и обновляем заголовок авторизации
            for (let i = 0; i < headers.length; i++) {
              if (headers[i][0] === 'Authorization' || headers[i][0] === 'x-authorizaition') {
                headers[i][1] = newToken
              }
            }
          }
          else if (headers instanceof Headers) {
            headers.set('Authorization', newToken)
            headers.set('x-authorizaition', newToken)
          }
          else {
            (headers as { Authorization: string }).Authorization = newToken
          }

          // Повторяем запрос с новым токеном
          return $fetch(request.toString(), newOptions as any)
        }
        catch {
          // Если не удалось обновить токен, очищаем авторизацию
          store.auth.clearAuth()

          // Перенаправляем на страницу входа, если мы на клиенте
          if (import.meta.client) {
            const route = useRoute()
            // Проверяем, является ли текущий маршрут публичным
            // Предполагается, что у маршрутов есть мета-свойство public
            if (route.meta.auth !== false) {
              navigateTo('/auth/sign-in')
            }
          }
        }
      }
    },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
