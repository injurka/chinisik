import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

export const runtimeCfg: Record<InputConfig, NuxtConfig['runtimeConfig']> = {
  development: {
    public: {
      stand: 'development',
      apiBaseUrl: 'http://localhost:8080/api/',
      apiVerbose: true,
    },
  },
  production: {
    public: {
      stand: 'production',
      apiBaseUrl: 'https://api.kvakushnik.ru/api/',
      apiVerbose: false,
    },
  },
}
