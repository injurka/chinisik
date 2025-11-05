// --- Базовые типы ---

/**
 * Прямоугольная область с координатами и размерами.
 * Координаты (x, y) - верхний левый угол.
 * Все значения предполагаются в пикселях относительно оригинального размера изображения.
 */
export interface RectCoordinates {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Информация о создателе/редакторе.
 */
export interface AuditInfo {
  createdBy?: string // ID пользователя или имя
  createdAt: string // ISO 8601 timestamp
  updatedBy?: string // ID пользователя или имя
  updatedAt: string // ISO 8601 timestamp
}

// --- Модели для Туна ---

/**
 * Выделенная область на странице туна/манхвы.
 */
export interface HighlightArea extends AuditInfo {
  id: string // Уникальный идентификатор области (например, UUID)
  pageId: string // ID страницы, к которой принадлежит эта область
  rect: RectCoordinates // Геометрия области
  text?: string // Текст, ассоциированный с областью (полученный от AI или введенный вручную)
  aiProcessed?: boolean // Флаг, указывающий, был ли текст получен от AI
  tags?: string[] // Дополнительные теги или категории для области
  // color?: string;     // Опционально: цвет для выделения этой области в UI
}

/**
 * Страница туна/манхвы.
 */
export interface ToonPage extends AuditInfo {
  id: string // Уникальный идентификатор страницы (например, UUID)
  chapterId: string // ID главы, к которой принадлежит эта страница
  pageNumber: number // Порядковый номер страницы в главе (начиная с 1)
  imageUrl: string // URL или путь к изображению страницы
  imageWidth?: number // Оригинальная ширина изображения (опционально, может быть получена при загрузке)
  imageHeight?: number // Оригинальная высота изображения (опционально)
  highlightAreas?: HighlightArea[] // Массив выделенных областей на этой странице (загружаются по необходимости или вместе)
  description?: string // Краткое описание/заметки к странице
}

/**
 * Глава туна/манхвы.
 */
export interface ToonChapter extends AuditInfo {
  id: string // Уникальный идентификатор главы (например, UUID)
  workId: string // ID произведения, к которому принадлежит эта глава
  chapterNumber: number // Порядковый номер главы в произведении (начиная с 1)
  title: string // Название главы
  description?: string // Краткое описание главы
  coverImageUrl?: string // URL обложки главы (опционально)
  pages?: ToonPage[] // Массив страниц в главе (может загружаться лениво)
  pageCount?: number // Общее количество страниц в главе (для пагинации без загрузки всех страниц)
}

/**
 * Произведение туна/манхвы (корневая сущность).
 */
export interface ToonWork extends AuditInfo {
  id: string // Уникальный идентификатор произведения (например, UUID)
  title: string // Название произведения
  author?: string // Автор
  artist?: string // Художник
  description?: string // Описание произведения
  genres?: string[] // Жанры
  status?: 'ongoing' | 'completed' | 'paused' | 'cancelled' // Статус произведения
  coverImageUrl?: string // URL основной обложки произведения
  chapters?: ToonChapter[] // Массив глав (может загружаться лениво)
  chapterCount?: number // Общее количество глав
  // Дополнительные метаданные:
  language?: string // Язык оригинала
  publicationDate?: string // Дата публикации
  tags?: string[] // Теги
  rating?: number // Рейтинг
  isAdult?: boolean // 18+ контент
}

// --- Типы для пагинации и состояния UI ---

/**
 * Режимы работы ридера.
 */
export type ToonReaderMode = 'view' | 'edit'

/**
 * Состояние ридера, которое может передаваться между компонентами или храниться.
 */
export interface ToonReaderState {
  currentWorkId?: string | null
  currentChapterId?: string | null
  currentPageId?: string | null // Или currentPageIndex, если работаем с массивом страниц
  currentPageIndex: number // Индекс текущей страницы в текущей главе
  mode: ToonReaderMode
  // Другие параметры UI, например, уровень масштабирования, если он будет
  // zoomLevel?: number;
}

/**
 * Опции для запроса списка (например, списка глав или страниц).
 */
export interface ListRequestOptions {
  page?: number // Номер страницы для пагинации
  limit?: number // Количество элементов на странице
  sortBy?: string // Поле для сортировки
  sortOrder?: 'asc' | 'desc' // Порядок сортировки
  filter?: Record<string, any> // Фильтры
}

/**
 * Ответ со списком данных и информацией о пагинации.
 */
export interface PaginatedListResponse<T> {
  items: T[]
  totalItems: number
  totalPages: number
  currentPage: number
  itemsPerPage: number
}
