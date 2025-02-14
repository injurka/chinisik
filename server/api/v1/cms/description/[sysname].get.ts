import { mockCms } from '~/server/utils/mock/cms'

export default defineEventHandler((event) => {
  const sysname = getRouterParam(event, 'sysname') as keyof typeof mockCms

  return mockCms[sysname]
})
