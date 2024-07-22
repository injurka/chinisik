export default defineNuxtPlugin({
  name: 'initialize',
  enforce: 'pre',
  async setup() {
    // eslint-disable-next-line no-console
    console.log('initialized')
  },
})
