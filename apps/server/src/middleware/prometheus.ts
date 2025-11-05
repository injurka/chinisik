import type { Context, Next } from 'hono'
import { PromCounterBrowser, PromCounterLocation, PromCounterRoute } from '~/utils/metrics'

/**
 * Middleware function for Prometheus metrics.
 * Increments counters for browser type, location, and route.
 *
 * @param ctx - The Hono context object.
 * @param next - The next middleware function.
 */
async function prometheusMiddleware(ctx: Context, next: Next) {
  const { req } = ctx
  const route = req.path

  const userAgent = req.header('user-agent')
  const acceptLanguage = req.header('accept-language')

  // Извлечение типа браузера
  const browserRegex = /Chrome|Firefox|Safari|Opera|IE|Edge|Yandex|UCBrowser/i
  const browserMatch = userAgent?.match(browserRegex)
  const browser = browserMatch?.[0] ?? 'Unknown'

  if (browser) {
    PromCounterBrowser.inc({ browser })
  }

  // Извлечение локации
  const locationRegex = /ru|en|fr|de|es/i
  const locationMatch = acceptLanguage?.match(locationRegex)
  const location = locationMatch?.[0] ?? 'Unknown'

  if (location) {
    PromCounterLocation.inc({ location })
  }

  if (route) {
    PromCounterRoute.inc({ route })
  }

  await next()
}

export { prometheusMiddleware }
