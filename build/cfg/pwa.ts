import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

const sharedConf: NuxtConfig['pwa'] = {
  strategies: 'injectManifest',
  srcDir: 'service-worker',
  filename: 'sw.ts',
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
    screenshots: [{
      src: 'maskable-icon-512x512.png',
      sizes: '512X512',
      type: 'image/png',
      form_factor: 'wide',
      label: 'Application',
    }, {
      src: 'maskable-icon-512x512.png',
      sizes: '512X512',
      type: 'image/png',
      form_factor: 'narrow',
      label: 'Application',
    }],
  },
  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  injectManifest: {
    globPatterns: ['**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}'],
    globIgnores: ['emojis/**', 'manifest**.webmanifest'],
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // Set to 20 MiB
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 20,
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
