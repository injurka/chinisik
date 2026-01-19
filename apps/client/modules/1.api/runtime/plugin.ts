import { defineNuxtPlugin, useRequestHeaders, useRuntimeConfig } from '#app'
// Важно: прямой импорт для типизации, но использование через useStore/контекст
import { useApi } from './composables/use-api'

export default defineNuxtPlugin({
  name: 'api-client',
  enforce: 'post', // Запускаем после основных плагинов
  async setup(nuxtApp) {
    const { api, init } = useApi()
    const config = useRuntimeConfig().public
    const interceptops = (nuxtApp?.$apiInterceptops ?? []) as FetchOption<unknown>[]

    // SSR Cookie Forwarding
    // Пробрасываем все куки (включая httpOnly refresh_token) с запроса браузера в запросы к API
    if (import.meta.server) {
      const headers = useRequestHeaders(['cookie'])
      interceptops.push({
        onRequest({ options }: any) {
          if (headers.cookie) {
            options.headers = options.headers || {}
            if (options.headers instanceof Headers) {
              options.headers.set('cookie', headers.cookie)
            }
            else {
              options.headers.cookie = headers.cookie
            }
          }
        },
      })
    }

    await init({
      baseUrl: config.apiBaseUrl,
      verbose: config.apiVerbose,
      interceptops,
    })

    nuxtApp.vueApp.config.globalProperties.$api = api
    nuxtApp.provide('api', api)
  },
})
