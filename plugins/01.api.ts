export default defineNuxtPlugin(async (_) => {
  const store = useStore(['auth'])
  const { tokenPair } = storeToRefs(store.auth)

  const apiInterceptops = [{
    onRequest: ({ options }) => {
      if (options.skipAuth) {
        return
      }

      if (tokenPair.value?.access) {
        const accessToken = `Bearer ${tokenPair.value?.access}`
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

    onResponseError: () => { },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
