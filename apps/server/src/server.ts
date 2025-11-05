import type { Context } from 'hono'
import { OpenAPIHono as Hono } from '@hono/zod-openapi'
import { serveStatic } from 'hono/bun'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { register } from 'prom-client'
import { setupRoutes } from '~/api/mod'
import { prometheusMiddleware } from '~/middleware/prometheus'
import setupSwagger from '~/swagger'
import { Logger } from '~/utils/logger'

const logger = new Logger()

class Server {
  private server: Hono

  constructor() {
    this.server = new Hono()

    this.initializeMiddlewares()
    this.initializeRestControllers()
    this.initializeStaticFileRoutes()
  }

  public getServer() {
    return this.server
  }

  private initializeMiddlewares() {
    try {
      this.server.openAPIRegistry.registerComponent(
        'securitySchemes',
        'bearerAuth',
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Authorization header using the Bearer scheme.',
        },
      )
      this.server.use(prettyJSON())
      this.server.use(cors())
      this.server.use(prometheusMiddleware)
      this.server.onError((err, c) => c.json({ message: err.message }, 500))

      logger.log('Middlewares')
    }
    catch (e) {
      logger.error('Middlewares', e)
    }
  }

  private initializeRestControllers() {
    try {
      this.server.get('/healthz', (c: Context): Response => c.text('healthy', 200))
      this.server.get('/logs', (c: Context): Response => c.json(logger.logs, 200))
      this.server.get('/metrics', async (c: Context): Promise<Response> => {
        c.set('Content-Type', 'text/plain; version=0.0.4')
        return c.text(await register.metrics(), 200)
      })

      setupSwagger(this.server)
      setupRoutes(this.server)

      logger.log('Controllers')
    }
    catch (e) {
      logger.error('Controllers', e)
    }
  }

  private initializeStaticFileRoutes() {
    try {
      this.server.use(
        '/static/*',
        serveStatic({
          root: '.',
          precompressed: true,
          onFound: (_path, c) => {
            c.header('Cache-Control', `public, immutable, max-age=31536000`)
          },
          onNotFound: (path, c) => {
            logger.log(`${path} is not found, you access ${c.req.path}`)
          },
        }),
      )

      logger.log('StaticFileRoutes')
    }
    catch (e) {
      logger.error('StaticFileRoutes', e)
    }
  }
}

const server = new Server()

export { logger }
export default server
