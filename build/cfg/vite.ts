import type { NuxtConfig } from 'nuxt/schema'

export const viteCfg: NuxtConfig['vite'] = {
  plugins: [
    //
  ],
  server: {
    proxy: {
      '^/api/': {
        target: 'https://api.kvakushnik.ru/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  optimizeDeps: {
    include: [
      'workbox-precaching',
      'workbox-routing',
      'workbox-cacheable-response',
      'workbox-strategies',
      'workbox-expiration',
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '~/assets/scss/_setup.scss' as *;`,
      },
    },
  },
}
