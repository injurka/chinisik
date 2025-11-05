export interface SelectedArea {
  x: number
  y: number
  width: number
  height: number
}

export interface TranslationResult {
  source: string
  translate: string
  transcription: string
  detectedLanguage?: string
  targetLanguage?: string
}

export interface ToonManuallyState {
  uploadedImage: string | null
  selectedArea: SelectedArea | null
  translationResults: TranslationResult | null
  isContainerFitted: boolean
  isSelecting: boolean
  isLoading: boolean
  processingAbortController: AbortController
}

enum RequestKeys {
  ITT = 'toon-manually_itt',
}

export const useToonManuallyStore = defineStore('toon-manually', {
  state: (): ToonManuallyState => ({
    uploadedImage: null,
    selectedArea: null,
    translationResults: null,
    isContainerFitted: true,
    isSelecting: false,
    isLoading: false,
    processingAbortController: new AbortController(),
  }),

  getters: {
    isProcessing: () => useRequestStatus([RequestKeys.ITT]),
    errorProcessing: () => useRequestError(RequestKeys.ITT),
  },

  actions: {
    async uploadImage(file: File) {
      this.isLoading = true
      try {
        const reader = new FileReader()
        const result = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(file)
        })
        this.uploadedImage = result
        this.selectedArea = null
        this.isSelecting = false
        this.translationResults = null
      }
      catch (error) {
        console.error('Ошибка при загрузке изображения:', error)
        throw error
      }
      finally {
        this.isLoading = false
      }
    },

    setSelectedArea(area: SelectedArea) {
      this.selectedArea = {
        x: Math.round(area.x),
        y: Math.round(area.y),
        width: Math.round(area.width),
        height: Math.round(area.height),
      }
    },

    clearSelectedArea() {
      this.selectedArea = null
    },

    resetAbortController() {
      if (this.processingAbortController.signal.aborted === false) {
        this.processingAbortController.abort()
      }
      this.processingAbortController = new AbortController()
    },

    // Функция для получения выделенной области как File
    async getSelectedAreaAsFile(): Promise<File | null> {
      if (!this.uploadedImage || !this.selectedArea) {
        console.warn('getSelectedAreaAsFile: Нет изображения или выделенной области.')
        return null
      }

      try {
        // Создаем изображение из uploadedImage
        const img = await new Promise<HTMLImageElement>((resolve, reject) => {
          const imageElement = new Image()
          imageElement.crossOrigin = 'anonymous'
          imageElement.onload = () => resolve(imageElement)
          imageElement.onerror = reject
          imageElement.src = this.uploadedImage!
        })

        // Создаем canvas для извлечения выделенной области
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx)
          return null

        const { x, y, width, height } = this.selectedArea
        canvas.width = width
        canvas.height = height

        // Рисуем выделенную область
        ctx.drawImage(img, x, y, width, height, 0, 0, width, height)

        // Конвертируем в Blob, затем в File
        return new Promise<File>((resolve) => {
          canvas.toBlob((blob) => {
            if (blob) {
              const file = new File([blob], 'selected-area.png', { type: 'image/png' })
              resolve(file)
            }
          }, 'image/png', 0.95)
        })
      }
      catch (error) {
        console.error('Ошибка при создании файла выделенной области:', error)
        return null
      }
    },

    async translateSelectedArea() {
      if (!this.uploadedImage || !this.selectedArea) {
        console.warn('translateSelectedArea: Нет изображения или выделенной области.')
        return
      }

      if (this.isProcessing)
        this.resetAbortController()

      this.translationResults = null

      try {
        // Получаем файл выделенной области
        const imageFile = await this.getSelectedAreaAsFile()
        if (!imageFile) {
          console.error('Не удалось создать файл выделенной области')
          return
        }

        await useRequest({
          key: RequestKeys.ITT,
          fn: ({ api }) => api.llm.v1.imageToTextTranslate({ image: imageFile }, this.processingAbortController),
          onSuccess: ({ data }) => {
            this.translationResults = {
              source: data.source,
              translate: data.translate,
              transcription: data.transcription,
              detectedLanguage: 'Китайский',
              targetLanguage: 'Русский',
            }
          },
        })
      }
      catch (error) {
        console.error('Ошибка при переводе:', error)
      }
    },

    resetToUpload() {
      this.uploadedImage = null
      this.selectedArea = null
      this.translationResults = null
      this.isSelecting = false
    },

    reset() {
      this.$reset()
      this.processingAbortController = new AbortController()
    },
  },
})
