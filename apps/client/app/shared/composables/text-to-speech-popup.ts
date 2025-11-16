import type { Ref } from 'vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import {
  cancelSpeech as cancelSpeechHelper,
  initSpeechSynthesis,
  voiceTheText as voiceTextHelper,
} from '~/shared/lib'

interface UseTextToSpeechPopupOptions {
  /**
   * CSS селектор для проверки, что выделение произошло внутри нужного дочернего элемента.
   */
  targetSelector?: string
  /**
   * Языковой код для синтеза речи (например, 'zh-CN', 'ru-RU').
   */
  lang?: string
  /**
   * Смещение pop-up относительно выделенного текста.
   */
  popupOffset?: {
    top?: number
    left?: number
  }
  /**
   * Класс для pop-up элемента, чтобы `handleClickOutside` его игнорировал.
   */
  popupClass?: string
}

export function useTextToSpeechPopup(
  containerRef: Ref<HTMLElement | null>,
  options: UseTextToSpeechPopupOptions = {},
) {
  const {
    targetSelector,
    lang,
    popupOffset = { top: 10, left: 0 },
    popupClass = 'speech-popup',
  } = options

  const isSpeaking = ref(false)
  const popup = reactive({
    show: false,
    top: 0,
    left: 0,
    text: '',
  })

  /**
   * Обрабатывает окончание выделения текста.
   */
  function handleSelectionEnd() {
    const selection = window.getSelection()
    const selectedText = selection?.toString().trim() ?? ''

    if (selectedText.length > 0 && containerRef.value && selection?.anchorNode) {
      const isInsideContainer = containerRef.value.contains(selection.anchorNode)
      let isTargetValid = true

      if (targetSelector) {
        isTargetValid = !!(selection.anchorNode.parentElement as HTMLElement)?.closest(targetSelector)
      }

      if (isInsideContainer && isTargetValid) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        const containerRect = containerRef.value.getBoundingClientRect()

        popup.top = rect.top - containerRect.top + rect.height + (popupOffset.top ?? 10)
        popup.left = rect.left - containerRect.left + rect.width / 2 + (popupOffset.left ?? 0)
        popup.text = selectedText
        popup.show = true
        return
      }
    }

    if (selectedText.length === 0) {
      popup.show = false
      if (isSpeaking.value) {
        cancelSpeechHelper(() => {
          isSpeaking.value = false
        })
      }
    }
  }

  /**
   * Скрывает всплывающее окно при клике вне его области.
   */
  function handleClickOutside(event: MouseEvent | TouchEvent) {
    const target = event.target as HTMLElement
    if (target.closest(`.${popupClass}`)) {
      return
    }
    popup.show = false
    if (isSpeaking.value) {
      cancelSpeechHelper(() => {
        isSpeaking.value = false
      })
    }
  }

  /**
   * Запускает или останавливает озвучивание текста.
   */
  function handleVoiceButtonClick() {
    if (isSpeaking.value) {
      cancelSpeechHelper(() => {
        isSpeaking.value = false
      })
    }
    else {
      voiceTextHelper(
        popup.text,
        () => { isSpeaking.value = true }, // onStart
        () => { // onEnd
          isSpeaking.value = false
          popup.show = false
        },
        lang,
      )
    }
  }

  onMounted(() => {
    initSpeechSynthesis()

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })
    document.addEventListener('mouseup', handleSelectionEnd)
    document.addEventListener('touchend', handleSelectionEnd, { passive: true })
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.removeEventListener('touchstart', handleClickOutside)
    document.removeEventListener('mouseup', handleSelectionEnd)
    document.removeEventListener('touchend', handleSelectionEnd)

    if (isSpeaking.value) {
      cancelSpeechHelper(() => {
        isSpeaking.value = false
      })
    }
  })

  return {
    popup,
    isSpeaking,
    handleVoiceButtonClick,
  }
}
