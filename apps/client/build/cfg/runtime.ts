import type { NuxtConfig } from 'nuxt/schema'
import type { InputConfig } from './cfg.types'

export const runtimeCfg: Record<InputConfig, NuxtConfig['runtimeConfig']> = {
  development: {
    public: {
      stand: 'development',
      staticBaseUrl: 'http://localhost:5173/',
      apiBaseUrl: 'http://localhost:5173/api/',
      apiVerbose: true,
    },
  },
  production: {
    public: {
      stand: 'production',
      staticBaseUrl: 'https://api.kvakushnik.ru',
      apiBaseUrl: 'https://api.kvakushnik.ru/api/',
      apiVerbose: false,
    },
  },
}
