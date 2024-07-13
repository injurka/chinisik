import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
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
    'nuxt-icon',
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
}
