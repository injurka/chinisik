/* eslint-disable no-console */
import Tesseract, { createScheduler, PSM } from 'tesseract.js'

class TesseractService {
  private static instance: TesseractService
  private scheduler: Tesseract.Scheduler | null = null
  private isInitialized = false

  private constructor() { }

  public static getInstance(): TesseractService {
    if (!TesseractService.instance) {
      TesseractService.instance = new TesseractService()
    }
    return TesseractService.instance
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      console.log('TesseractService is already initialized.')
      return
    }

    console.log('Initializing Tesseract Scheduler...')
    this.scheduler = createScheduler()

    const workerPromises = Array.from({ length: 2 }).fill(0).map(async () => {
      const worker = await Tesseract.createWorker(
        'chi_sim',
        Tesseract.OEM.LSTM_ONLY,
      )
      await worker.setParameters({
        tessedit_pageseg_mode: PSM.SINGLE_CHAR,
      })
      this.scheduler!.addWorker(worker)
    })

    await Promise.all(workerPromises)
    this.isInitialized = true
    console.log('Tesseract Scheduler initialized successfully with 2 workers.')
  }

  // eslint-disable-next-line node/prefer-global/buffer
  public async recognize(imageBuffer: Buffer): Promise<string[]> {
    if (!this.isInitialized || !this.scheduler) {
      throw new Error('TesseractService is not initialized. Call initialize() first.')
    }

    const { data: { text } } = await this.scheduler.addJob('recognize', imageBuffer)

    // Убираем все пробелы и символы новой строки, затем разделяем на массив символов
    const cleanedText = text.replace(/\s/g, '')
    return cleanedText.split('')
  }
}

export const tesseractService = TesseractService.getInstance()
