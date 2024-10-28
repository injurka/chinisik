export default defineNuxtPlugin(async () => {
  const apiInterceptops = [{
    onRequest: ({ options }) => {
      const accessToken = `Bearer ${''}`

      const headers = options.headers ||= {}

      if (Array.isArray(headers)) {
        headers.push(['Authorization', accessToken])
      }
      else if (headers instanceof Headers) {
        headers.set('Authorization', accessToken)
      }
      else {
        headers.Authorization = accessToken
      }
    },
    onRequestError: () => { },
    onResponse: () => { },
    onResponseError: () => { },
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
