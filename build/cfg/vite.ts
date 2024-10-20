import type { NuxtConfig } from 'nuxt/schema'

export const viteCfg: NuxtConfig['vite'] = {
  plugins: [
    //
  ],
  server: {
    //
  },
  optimizeDeps: {
    //
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/assets/scss/_setup.scss';
        `,
        api: 'modern-compiler',
      },
    },
  },
}
