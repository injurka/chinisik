import { addImportsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

export * from './types'

export default defineNuxtModule({
  meta: {
    name: 'api',
    configKey: 'api',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const moduleOptions = defu(
      nuxt.options.runtimeConfig.public.api,
      options,
    )
    nuxt.options.runtimeConfig.public.api = moduleOptions
    nuxt.options.build.transpile.push(resolve('runtime'))

    // Plugins
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'all',
    })

    // Composables
    addImportsDir(resolve('./runtime/composables'))
    addImportsDir(resolve('./runtime/store'))
  },
})
