import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { useApi } from './composables/use-api'

export default defineNuxtPlugin({
  name: 'api-client',
  enforce: 'post',
  async setup(nuxtApp) {
    const { api, init } = useApi()
    const store = useStore(['auth'])

    const config = useRuntimeConfig().public
    const interceptops = (nuxtApp?.$apiInterceptops ?? []) as FetchOption<unknown>[]

    init({
      baseUrl: config.apiBaseUrl,
      verbose: config.apiVerbose,
      interceptops,
      refresh: async () => {
        if (!store.auth.tokenPair?.refresh)
          return

        try {
          const data = await api.auth.v1.refresh({ refreshToken: store.auth.tokenPair?.refresh })

          nuxtApp.runWithContext(() => {
            store.auth.saveTokens({ access: data.token, refresh: data.refreshToken }, true)
          })
        }
        catch {
          nuxtApp.runWithContext(() => {
            store.auth.clearAuth(true)
          })
        }
      },
    })

    nuxtApp.vueApp.config.globalProperties.$api = api
    nuxtApp.provide('api', api)
  },
})
