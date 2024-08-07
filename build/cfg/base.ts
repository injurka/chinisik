import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
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
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
  ],

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
