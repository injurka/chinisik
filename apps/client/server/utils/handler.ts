import type { EventHandler, EventHandlerRequest } from 'h3'

export function defineDevEventHandler<T extends EventHandlerRequest, D>(handler: EventHandler<T, D>): EventHandler<T, D> {
  return defineEventHandler<T>(async (event) => {
    try {
      if (!import.meta.dev) {
        throw createError({ statusCode: 404, message: 'Not found' })
      }

      await sleepRequest()
      const response = await handler(event)
      return response
    }
    catch (err) {
      return { err }
    }
  })
}
