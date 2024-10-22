import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
  components: {
    global: true,
    dirs: [{
      path: '~/components/shared/header/ui/',
      prefix: '',
      extensions: ['.vue'],
    }],
  },

  devServer: {
    port: 5174,
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
  ],

  api: {
    baseUrl: 'http://localhost:5174/api',
    verbose: true,
  },

  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
    customCollections: [{
      prefix: 're',
      dir: './assets/svg',
    }],
  },

  vuetify: {
    moduleOptions: {
      //
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: [
    '/assets/scss/global.scss',
  ],

  // app: {
  //   pageTransition: {
  //     name: 'page',
  //     mode: 'out-in',
  //   },
  // },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
}
