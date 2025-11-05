export interface AudioQuizSettings {
  topics: string[]
  hskLevel: number
  questionCount: number
  voice: 'male' | 'female'
}

export interface AudioQuizAnswer {
  id: number
  text: string
}

export interface AudioQuizQuestion {
  id: string
  audioUrl: string
  text: string
  pinyin: string
  translation: string
  answers: AudioQuizAnswer[]
  correctAnswerId: number
}

export interface AudioQuizResult {
  questionId: string
  userAnswerId: number
  isCorrect: boolean
}
