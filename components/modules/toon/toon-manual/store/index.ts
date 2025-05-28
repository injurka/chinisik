import { defineStore } from 'pinia'

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
  //
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
      this.selectedArea = area
    },

    clearSelectedArea() {
      this.selectedArea = null
    },

    resetAbortController() {
      if (!this.processingAbortController.signal.reason) {
        this.processingAbortController.abort()
        this.processingAbortController = new AbortController()
      }
    },

    async translateSelectedArea(params?: { containerWidth?: number, containerHeight?: number }) {
      if (!this.uploadedImage || !this.selectedArea) {
        console.warn('translateSelectedArea: Нет изображения или выделенной области.')
        return
      }

      if (this.isProcessing) {
        this.resetAbortController()
      }
      this.translationResults = null

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        throw new Error('Не удалось создать контекст canvas')
      }

      const img = new Image()
      try {
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve()
          img.onerror = (errEvt) => {
            console.error('Ошибка загрузки изображения для обработки в canvas:', errEvt)
            reject(new Error('Не удалось загрузить изображение для обработки.'))
          }
          img.src = this.uploadedImage!
        })
      }
      catch (error) {
        console.error(error)
        return
      }

      const area = this.selectedArea // Координаты из store
      let sX = area.x
      let sY = area.y
      let sWidth = area.width
      let sHeight = area.height

      if (this.isContainerFitted) {
        if (!params || typeof params.containerWidth === 'undefined' || typeof params.containerHeight === 'undefined') {
          console.error('translateSelectedArea: Размеры контейнера обязательны, когда isContainerFitted=true.')
          return
        }
        const { containerWidth, containerHeight } = params
        const imgNaturalWidth = img.naturalWidth
        const imgNaturalHeight = img.naturalHeight

        if (imgNaturalWidth === 0 || imgNaturalHeight === 0) {
          console.error('translateSelectedArea: Натуральные размеры изображения равны нулю.')
          return
        }

        const imgAspectRatio = imgNaturalWidth / imgNaturalHeight
        const containerAspectRatio = containerWidth / containerHeight

        let visualImgRenderedWidth: number // Ширина изображения, как оно отрендерено для 'cover'
        let visualImgRenderedHeight: number // Высота изображения, как оно отрендерено для 'cover'
        let visualImgOffsetX = 0 // Смещение отрендеренного изображения относительно левого края контейнера
        let visualImgOffsetY = 0 // Смещение отрендеренного изображения относительно верхнего края контейнера

        if (imgAspectRatio > containerAspectRatio) {
          // Изображение шире контейнера по пропорциям. Масштабируем по высоте контейнера.
          visualImgRenderedHeight = containerHeight
          visualImgRenderedWidth = containerHeight * imgAspectRatio
          visualImgOffsetX = (containerWidth - visualImgRenderedWidth) / 2 // Будет <= 0
          visualImgOffsetY = 0
        }
        else {
          // Изображение выше контейнера по пропорциям (или такое же). Масштабируем по ширине контейнера.
          visualImgRenderedWidth = containerWidth
          visualImgRenderedHeight = containerWidth / imgAspectRatio
          visualImgOffsetY = (containerHeight - visualImgRenderedHeight) / 2 // Будет <= 0
          visualImgOffsetX = 0
        }

        // Масштабный коэффициент: пиксели оригинального изображения на 1 пиксель отрендеренного изображения
        let scaleToOriginal: number
        if (imgAspectRatio > containerAspectRatio) { // Масштабировали по высоте
          scaleToOriginal = imgNaturalHeight / visualImgRenderedHeight // visualImgRenderedHeight = containerHeight
        }
        else { // Масштабировали по ширине
          scaleToOriginal = imgNaturalWidth / visualImgRenderedWidth // visualImgRenderedWidth = containerWidth
        }

        // Координаты выделенной области `area` (из store) даны относительно контейнера.
        // Преобразуем их в координаты на *отрендеренном* изображении.
        const selectedX_onRenderedImg = area.x - visualImgOffsetX
        const selectedY_onRenderedImg = area.y - visualImgOffsetY

        // Теперь преобразуем эти координаты и размеры в пространство *оригинального* изображения.
        const rawSX = selectedX_onRenderedImg * scaleToOriginal
        const rawSY = selectedY_onRenderedImg * scaleToOriginal
        const rawSWidth = area.width * scaleToOriginal
        const rawSHeight = area.height * scaleToOriginal

        // --- УТОЧНЕННЫЙ БЛОК ОТСЕЧЕНИЯ (Clipping) ---
        // 1. Отсекаем начальные координаты по левому/верхнему краю оригинального изображения.
        sX = Math.max(0, rawSX)
        sY = Math.max(0, rawSY)

        // 2. Рассчитываем конечные точки на оригинальном изображении, куда бы вело выделение без отсечения
        const rawEndX = rawSX + rawSWidth
        const rawEndY = rawSY + rawSHeight

        // 3. Отсекаем ширину и высоту так, чтобы они не выходили за пределы оригинального изображения,
        //    учитывая уже отсеченные sX и sY.
        sWidth = Math.max(0, Math.min(rawEndX, imgNaturalWidth) - sX)
        sHeight = Math.max(0, Math.min(rawEndY, imgNaturalHeight) - sY)
        // --- КОНЕЦ УТОЧНЕННОГО БЛОКА ОТСЕЧЕНИЯ ---
      }

      const finalSX = Math.round(sX)
      const finalSY = Math.round(sY)
      const finalSWidth = Math.round(sWidth)
      const finalSHeight = Math.round(sHeight)

      if (finalSWidth <= 0 || finalSHeight <= 0) {
        console.error('translateSelectedArea: Рассчитанная область для вырезания имеет нулевой или отрицательный размер.', { finalSX, finalSY, finalSWidth, finalSHeight })
        return
      }

      canvas.width = finalSWidth
      canvas.height = finalSHeight

      ctx.drawImage(
        img,
        finalSX,
        finalSY,
        finalSWidth,
        finalSHeight,
        0,
        0,
        finalSWidth,
        finalSHeight,
      )

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((blobContent) => {
          if (blobContent) {
            resolve(blobContent)
          }
          else {
            reject(new Error('Не удалось создать blob из canvas'))
          }
        }, 'image/png')
      })

      const imageFile = new File([blob], 'selected-area.png', { type: 'image/png' })

      await useRequest({
        key: RequestKeys.ITT,
        fn: ({ api }) => api.llvm.v1.imageToTextTranslate({ image: imageFile }, this.processingAbortController),
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
    },

    resetToUpload() {
      this.uploadedImage = null
      this.selectedArea = null
      this.translationResults = null
    },

    reset() {
      this.$reset()
    },
  },
})
