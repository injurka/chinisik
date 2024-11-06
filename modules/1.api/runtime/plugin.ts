import { defineNuxtPlugin, useNuxtApp, useRuntimeConfig } from '#app'
import { useApi } from './composables/use-api'

export default defineNuxtPlugin({
  name: 'api-client',
  enforce: 'post',
  async setup(nuxtApp) {
    const { api, init } = useApi()

    const config = useRuntimeConfig().public
    const interceptops = (useNuxtApp()?.$apiInterceptops ?? []) as FetchOption<unknown>[]

    init({
      baseUrl: config.apiBaseUrl,
      verbose: config.apiVerbose,
      interceptops,
    })

    nuxtApp.vueApp.config.globalProperties.$api = api
    nuxtApp.provide('api', api)
  },
})
