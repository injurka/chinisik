import config from '@antfu/eslint-config'

export default config({
  formatters: true,
  rules: {
    'unicorn/prefer-node-protocol': 'off',
    'node/prefer-global/process': 'off',
  },
  ignores: ['static', 'prisma', 'data'],
})
