export default defineNuxtPlugin(async () => {
  const apiInterceptops = [{
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
  } satisfies FetchOption<unknown>]

  return { provide: { apiInterceptops } }
})
