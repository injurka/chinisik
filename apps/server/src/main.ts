import { tesseractService } from '~/utils/tesseract'
import Server, { logger } from './server'

async function bootstrap() {
  try {
    await tesseractService.initialize()
  }
  catch (err) {
    logger.error('CRITICAL: Tesseract service failed to initialize.', err)
    process.exit(1)
  }

  const app = Server.getServer()

  return {
    port: process.env.PORT || 8080,
    fetch: app.fetch,
    idleTimeout: 120,
  }
}

// eslint-disable-next-line antfu/no-top-level-await
export default await bootstrap()
