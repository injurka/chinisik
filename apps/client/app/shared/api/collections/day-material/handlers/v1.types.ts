import type { DayMaterialContent } from '~/shared/types'

// Response
export type IGetTodayMaterialR = DayMaterialContent & { id: number, date: string }

export interface IDayMaterialQuizAttempt {
  id: number
  score: number
  mistakes: number
  totalQuestions: number
  createdAt: string
}

export type IGetQuizHistoryR = IDayMaterialQuizAttempt[]
export type ISaveQuizResultR = IDayMaterialQuizAttempt

export interface IDayMaterialListItem {
  id: number
  date: string
  theme: string
  grammarTitle: string
  isCompleted: boolean
}
export type IGetMaterialListR = IDayMaterialListItem[]

// Request
export interface ISaveQuizResultP {
  score: number
  mistakes: number
  totalQuestions: number
}

export interface IGetMaterialByIdP {
  id: number
}
