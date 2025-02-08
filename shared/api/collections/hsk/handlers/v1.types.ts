import type { DataListType, HieroglyphHsk, PageLimitType, PageType } from '~/shared/types'

// Response //

export type IHieroglyphsLevelR = HieroglyphHsk[]
export type IHieroglyphsLevelListR = DataListType<HieroglyphHsk>

// Request //

export interface IHieroglyphsLevelP {
  level: number
}

export interface IHieroglyphsLevelListP {
  level: number
  page: PageType
  limit: PageLimitType
}
