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

  routeRules: {
    '/keys': { isr: 3600 },
    '/pinyin': { isr: 3600 },
  },

  devServer: {
    port: 5173,
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
    baseUrl: 'http://localhost:5173/api',
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
    '/assets/scss/fonts.scss',
    '/assets/scss/global.scss',
    '/assets/scss/normalize.scss',
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
}
