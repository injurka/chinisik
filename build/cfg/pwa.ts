import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

const sharedConf: NuxtConfig['pwa'] = {
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
}

export const pwaCfg: Record<InputConfig, NuxtConfig['pwa']> = {
  development: {
    ...sharedConf,
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  production: {
    ...sharedConf,
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },
}
