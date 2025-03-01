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
  let user: User | null = null

  try {
    // Пробуем получить текущего пользователя
    const { data } = await store.auth.me()
    user = data?.user ?? null
  }
  catch {
    try {
      // Если не удалось, пробуем обновить токен
      const { data } = await store.auth.refresh()
      user = data?.user ?? null
    }
    catch {
      // Если обе попытки не удались, пользователь не аутентифицирован
    }
  }

  return { user }
}
