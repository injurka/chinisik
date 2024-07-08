import { useApi } from '~/shared/composables/api'
import type { Interceptops } from '~/shared/api/api-client'

export default defineNuxtPlugin((nuxtApp) => {
  const { api, init } = useApi()

  const interceptops: Interceptops = {
    onRequest: () => {
      // const headers = options.headers ||= {}

      // if (Array.isArray(headers)) {
      //   headers.push(['Authorization', `Bearer ${useGlobalStore().accessToken}`])
      // }
      // else if (headers instanceof Headers) {
      //   headers.set('Authorization', `Bearer ${useGlobalStore().accessToken}`)
      // }
      // else {
      //   headers.Authorization = `Bearer ${useGlobalStore().accessToken}`
      // }
    },
    onRequestError: () => { },
    onResponse: () => { },
    onResponseError: () => { },
  }

  init({ interceptops })

  nuxtApp.provide('api', api)
})
