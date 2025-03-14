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

  // Пробуем получить текущего пользователя
  const { data } = await store.auth.me()

  return { user: data ?? null }
}
