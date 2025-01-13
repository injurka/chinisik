import type { NuxtConfig } from 'nuxt/schema'

export const baseCfg: NuxtConfig = {
  components: {
    //
  },

  routeRules: {
    '/keys': { swr: true },
    '/pinyin': { swr: true },
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

  fonts: {
    priority: ['google', 'local'],
    providers: {
      fontshare: false,
      adobe: false,
      bunny: false,
      fontsource: false,
      googleicons: false,
    },
    devtools: true,
    families: [
      {
        name: 'MapleMono-CN',
        provider: 'local',
        src: '/fonts/MapleMono-CN/MapleMono-CN-Regular.ttf',
        weight: 400,
        style: 'normal',
        global: true,
      },
      {
        name: 'MapleMono-CN',
        provider: 'local',
        src: '/fonts/MapleMono-CN/MapleMono-CN-Medium.ttf',
        weight: 500,
        style: 'normal',
        global: true,
      },
      {
        name: 'MapleMono-CN',
        provider: 'local',
        src: '/fonts/MapleMono-CN/MapleMono-CN-SemiBold.ttf',
        weight: 600,
        style: 'normal',
        global: true,
      },
    ],
  },

  icon: {
    clientBundle: {
      icons: [
        'material-symbols:slab-serif-outline',
        'mdi:fullscreen',
        'mdi:settings-box',
        'material-symbols:stacks-outline',
        'mdi:close',
        'mdi:wikipedia',
        'line-md:loading-loop',
        'mdi:alert-circle-outline',
        'game-icons:sea-dragon',
        'line-md:cog-loop',
        'line-md:clipboard',
        'mdi:draw',
        'line-md:paint-drop',
        'line-md:paint-drop-twotone',
        'material-symbols:slab-serif-outline',
        'material-symbols:stack-hexagon-outline',
        'material-symbols:lab-research-outline',
      ],
    },
    serverBundle: {
      collections: ['mdi', 'material-symbols', 'line-md', 'game-icons'],
      externalizeIconsJson: true,
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
    '/assets/scss/normalize.scss',
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
}
