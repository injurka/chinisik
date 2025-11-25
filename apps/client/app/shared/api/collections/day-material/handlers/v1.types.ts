import type { DayMaterialContent } from '~/shared/types'

// Response
export type IGetTodayMaterialR = DayMaterialContent

export interface IDayMaterialQuizAttempt {
  id: number
  score: number
  mistakes: number
  totalQuestions: number
  createdAt: string
}

export type IGetQuizHistoryR = IDayMaterialQuizAttempt[]
export type ISaveQuizResultR = IDayMaterialQuizAttempt

// Request
export interface ISaveQuizResultP {
  score: number
  mistakes: number
  totalQuestions: number
}
