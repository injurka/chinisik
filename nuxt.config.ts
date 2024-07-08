import {
  baseCfg,
  colorModeCfg,
  importsCfg,
  runtimeCfg,
  viteCfg,
} from './build'

export default defineNuxtConfig({
  ssr: true,

  $development: {
    colorMode: colorModeCfg.development,
    runtimeConfig: runtimeCfg.development,
  },

  $production: {
    colorMode: colorModeCfg.production,
    runtimeConfig: runtimeCfg.production,
  },

  imports: importsCfg,
  vite: viteCfg,
  ...baseCfg,

  compatibilityDate: '2024-07-08',
})
