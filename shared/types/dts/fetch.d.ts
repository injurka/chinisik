import type { FetchOptions } from 'ofetch'

declare module 'ofetch' {
  interface FetchOptions {
    // Опция для пропуска добавления заголовка авторизации
    skipAuth?: boolean
    // Опция для предотвращения автоматического обновления токена при 401
    skipAuthRefresh?: boolean
  }
}
