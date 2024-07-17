import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

export const runtimeCfg: Record<InputConfig, NuxtConfig['runtimeConfig']> = {
  development: {
    public: {
      stand: 'local',
      apiUrl: '/api',
      apiVerbose: true,
    },
  },
  production: {
    public: {
      stand: 'production',
      apiUrl: '/api',
      apiVerbose: false,
    },
  },
}
