import { logger } from '~/server'
import { DayMaterialService } from '~/services'

export class Scheduler {
  private static instance: Scheduler
  private dayMaterialService = new DayMaterialService()
  private isJobRunning = false

  private constructor() {
    this.start()
  }

  public static getInstance(): Scheduler {
    if (!Scheduler.instance) {
      Scheduler.instance = new Scheduler()
    }
    return Scheduler.instance
  }

  private start() {
    logger.info('Scheduler started. Checking every hour.')
    // Проверяем раз в час, чтобы не нагружать БД, но быть уверенными в запуске
    setInterval(this.checkAndRunJobs.bind(this), 60 * 60 * 1000)
    this.checkAndRunJobs() // Первоначальная проверка при запуске сервера
  }

  /**
   * Возвращает дату начала завтрашнего дня по московскому времени в формате UTC.
   * Это необходимо для корректного сравнения с датами в базе данных.
   */
  private getTomorrowMoscowUTC(): Date {
    const now = new Date()
    // Получаем текущую дату и время в виде строки для таймзоны Москвы
    const moscowDateString = now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
    const moscowDate = new Date(moscowDateString)

    // Устанавливаем дату на завтра
    moscowDate.setDate(moscowDate.getDate() + 1)

    // Создаем новый объект Date в UTC с компонентами даты из московского времени
    return new Date(Date.UTC(moscowDate.getFullYear(), moscowDate.getMonth(), moscowDate.getDate()))
  }

  private async checkAndRunJobs() {
    if (this.isJobRunning) {
      logger.info('A job is already running. Skipping this check.')
      return
    }

    try {
      const targetDate = this.getTomorrowMoscowUTC()
      const latestEntryDate = await this.dayMaterialService.getLatestMaterialDate()

      // Случай 1: Записей в базе данных еще нет
      if (!latestEntryDate) {
        logger.info('No day material found. Triggering generation for the next day.')
        await this.runGenerationJob()
        return
      }

      // Приводим дату из БД к началу дня в UTC для корректного сравнения
      const latestDateStartOfDay = new Date(latestEntryDate)
      latestDateStartOfDay.setUTCHours(0, 0, 0, 0)

      // Случай 2: Последняя запись сделана для даты, которая раньше чем "завтра"
      // Это покрывает случаи, когда последняя запись для "сегодня", "вчера" и т.д.
      if (latestDateStartOfDay.getTime() < targetDate.getTime()) {
        logger.info(`Latest material is for ${latestDateStartOfDay.toISOString().split('T')[0]}. Need to generate for ${targetDate.toISOString().split('T')[0]}.`)
        await this.runGenerationJob()
      }
      else {
        // Случай 3: Запись на завтра уже существует
        logger.info(`Material for ${targetDate.toISOString().split('T')[0]} already exists. Skipping job.`)
      }
    }
    catch (error) {
      logger.error('Scheduler check failed.', error)
    }
  }

  private async runGenerationJob() {
    this.isJobRunning = true
    logger.info('Starting daily material generation job...')

    try {
      await this.dayMaterialService.generateAndSaveNextDayMaterial()
    }
    catch (error) {
      logger.error('Failed to run daily material generation job', error)
    }
    finally {
      this.isJobRunning = false
      logger.info('Daily material generation job finished.')
    }
  }
}
