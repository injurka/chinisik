import type { NuxtApp } from '#app'

interface InitializeResult {
  user: User | null
}

/**
 * Инициализирует приложение, восстанавливая состояние пользователя
 * @param _ Экземпляр NuxtApp (не используется)
 * @returns Объект с данными пользователя
 */
export async function initializeApp(_?: NuxtApp): Promise<InitializeResult> {
  const store = useStore(['auth'])

  const { userAgent } = useDevice()

  if (userAgent === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36')
    return { user: null }

  try {
    const { data } = await store.auth.me()
    return { user: data }
  }
  catch {
    return { user: null }
  }
}
