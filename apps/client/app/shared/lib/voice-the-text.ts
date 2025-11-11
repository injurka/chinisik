/**
 * Проверяет, содержит ли строка китайские иероглифы.
 * @param text - Текст для проверки.
 * @returns True, если найдены китайские иероглифы.
 */
function containsChinese(text: string): boolean {
  const chineseRegex = /[\u4E00-\u9FA5]/
  return chineseRegex.test(text)
}

/**
 * Инициализирует синтез речи, чтобы голоса были доступны при первом вызове.
 * Следует вызывать в onMounted компонента.
 */
export function initSpeechSynthesis(): void {
  if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
  }
}

/**
 * Озвучивает переданный текст, автоматически определяя язык.
 * @param text - Текст для озвучивания.
 * @param onStart - Callback-функция, вызываемая при начале озвучивания.
 * @param onEnd - Callback-функция, вызываемая при завершении или ошибке озвучивания.
 */
export function voiceTheText(text: string, onStart: () => void, onEnd: () => void, _lang?: string): void {
  if (!text || !('speechSynthesis' in window)) {
    console.error('Web Speech API не поддерживается или текст пуст.')
    onEnd()
    return
  }

  try {
    const utterance = new SpeechSynthesisUtterance(text)

    if (containsChinese(text)) {
      const voices = window.speechSynthesis.getVoices()
      const chineseVoice = voices.find(voice => voice.lang === 'zh-CN')
      if (chineseVoice) {
        utterance.voice = chineseVoice
      }
      else {
        utterance.lang = 'zh-CN'
      }
    }
    else {
      utterance.lang = 'ru-RU'
    }

    utterance.onstart = onStart
    utterance.onend = onEnd
    utterance.onerror = (event) => {
      console.error('Ошибка синтеза речи: ', event.error)
      onEnd() // Убедимся, что состояние сбрасывается даже при ошибке
    }

    window.speechSynthesis.speak(utterance)
  }
  catch (err) {
    console.error('Не удалось озвучить текст: ', err)
    onEnd()
  }
}

/**
 * Немедленно останавливает любое текущее озвучивание.
 * @param onCancel - Callback-функция, вызываемая после отмены.
 */
export function cancelSpeech(onCancel: () => void): void {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    onCancel()
  }
}
