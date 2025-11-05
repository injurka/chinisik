import { defineConfig } from 'tsup'
import pkg from '../package.json'
import { toAbsolute } from './utils'

export default defineConfig({
  name: pkg.name,
  entry: [toAbsolute('../src/main.ts')],
  outDir: toAbsolute('../dist'),
  splitting: false,
  sourcemap: false,
  shims: true,
  clean: true,
  format: 'esm',
})
