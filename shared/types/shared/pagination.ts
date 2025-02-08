type PageType = number
type PageLimitType = number

interface PaginationType {
  page: number
  limit: number
  total: number
}

interface DataListType<T> {
  data: T[]
  pagination: PaginationType
}

export type {
  DataListType,
  PageLimitType,
  PageType,
  PaginationType,
}
