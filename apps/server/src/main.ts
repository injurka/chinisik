import { Scheduler } from '~/utils/scheduler'
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

  Scheduler.getInstance()

  logger.info(`Scheduler for daily material generation is ${import.meta.env.SCHEDULER_ENABLED === 'true' ? 'ENABLED' : 'DISABLED'}.`)

  return {
    port: import.meta.env.PORT || 8080,
    fetch: app.fetch,
    idleTimeout: 120,
  }
}

// eslint-disable-next-line antfu/no-top-level-await
export default await bootstrap()
