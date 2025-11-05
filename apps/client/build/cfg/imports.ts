import type { NuxtConfig } from 'nuxt/schema'

export const importsCfg: NuxtConfig['imports'] = {
  autoImport: true,
  dirs: [
    './shared/api',
    './shared/composables',
    './shared/constant',
    './shared/store',
    './shared/types',
    './shared/utils',
    './shared/mock',
  ],
}
