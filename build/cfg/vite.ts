import type { NuxtConfig } from 'nuxt/schema'
import process from 'node:process'

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
        logger: {
          warn(message: any, options: any) {
            const { stderr } = process
            const span = options.span ?? undefined
            const stack = (options.stack === 'null' ? undefined : options.stack) ?? undefined

            const isExludedError = JSON.stringify(span.text).includes('assets/scss/_setup.scss')
            if (isExludedError)
              return

            if (options.deprecation) {
              if (message.startsWith('Using / for division outside of calc() is deprecated')) {
                // silences above deprecation warning
                return
              }
              stderr.write('DEPRECATION ')
            }
            stderr.write(`WARNING: ${message}\n`)

            if (span !== undefined) {
              // output the snippet that is causing this warning
              stderr.write(`\n"${span.text}"\n`)
            }

            if (stack !== undefined) {
              // indent each line of the stack
              stderr.write(`    ${stack.toString().trimEnd().replace(/\n/g, '\n    ')}\n`)
            }

            stderr.write('\n')
          },
        },
        api: 'modern-compiler',
      },
    },
  },
}
