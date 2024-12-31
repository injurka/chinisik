export default defineNuxtPlugin(async () => {
  const apiInterceptops = [{
    onRequest: ({ options }) => {
      const token = useCookie(TOKEN_KEY)
      const accessToken = `Bearer ${token.value}`
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
    },
    onRequestError: () => { },
    onResponse: () => { },
    onResponseError: () => { },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
