import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
  typescript: {
    tsConfig: {
      exclude: ['../service-worker'],
      vueCompilerOptions: {
        target: 3.5,
      },
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  routeRules: {
    '/about': { prerender: true },
    '/manifest.webmanifest': {
      headers: {
        'Content-Type': 'application/manifest+json',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    },
  },

  components: {
    //
  },

  devServer: {
    port: 5173,
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
  ],

  features: {
    inlineStyles: false,
  },

  icon: {
    clientBundle: {
      icons: [
        'material-symbols:slab-serif-outline',
        'mdi:fullscreen',
        'mdi:trophy-broken',
        'material-symbols:settings-suggest-outline',
        'mdi:tune',
        'mdi:key',
        'mdi:translate',
        'mdi:text-box-search',
        'mdi:wallet-travel',
        'mdi:tea',
        'mdi:layers-search',
        'mdi:book-open-variant',
        'mdi:book-open-page-variant',
        'mdi:test-tube',
        'mdi:book-alphabet',
        'material-symbols:settings-outline',
        'mdi:book',
        'material-symbols:frame-person-rounded',
        'material-symbols:manage-search',
        'mdi:account-box',
        'mdi:refresh',
        'material-symbols:stacks-outline',
        'mdi:close',
        'mdi:tune',
        'mdi:logout',
        'mdi:wikipedia',
        'line-md:loading-loop',
        'mdi:alert-circle-outline',
        'game-icons:sea-dragon',
        'line-md:clipboard',
        'mdi:draw',
        'line-md:paint-drop',
        'line-md:paint-drop-twotone',
        'material-symbols:slab-serif-outline',
        'material-symbols:stack-hexagon-outline',
        'material-symbols:lab-research-outline',
        'mdi:face-man-profile',
        'mdi:arrow-right',
        'mdi:arrow-left',
        'mdi:menu',
        'line-md:sunny-outline-twotone',
        'line-md:moon-alt-loop',
        'line-md:cloud-twotone',
        'mdi:github',
        'mdi:folder-outline',
      ],
    },
    serverBundle: {
      collections: ['mdi', 'material-symbols', 'line-md', 'game-icons'],
    },
    customCollections: [{
      prefix: 're',
      dir: './assets/svg',
    }],
  },

  vuetify: {
    moduleOptions: {
      /* other module options */
      // styles: { configFile: '/settings.scss' },
    },
    vuetifyOptions: {
      /* vuetify options */
      icons: {
        defaultSet: 'mdi',
      },
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
    '/assets/scss/atomic.scss',
    '/assets/scss/normalize.scss',
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
}
