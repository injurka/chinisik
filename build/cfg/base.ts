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

  pwa: {
    base: '/',
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'Chinisik',
      short_name: 'Chinisik',
      description: 'Chinisik',
      theme_color: '#ffffff',
      lang: 'ru',
      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },

  css: [
    '/assets/scss/global.scss',
  ],
}
