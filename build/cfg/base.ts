import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
  devServer: {
    port: 5173,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  css: [
    '/assets/scss/global.scss',
  ],
}
