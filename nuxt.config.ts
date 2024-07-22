import {
  baseCfg,
  colorModeCfg,
  importsCfg,
  pwaCfg,
  runtimeCfg,
  viteCfg,
} from './build'

export default defineNuxtConfig({
  ssr: true,

  ...baseCfg,

  $development: {
    pwa: pwaCfg.development,
    colorMode: colorModeCfg.development,
    runtimeConfig: runtimeCfg.development,
  },

  $production: {
    pwa: pwaCfg.production,
    colorMode: colorModeCfg.production,
    runtimeConfig: runtimeCfg.production,
  },

  imports: importsCfg,
  vite: viteCfg,
})
