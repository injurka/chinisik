import type { Book } from '~/shared/types'

export const mockBooks: Book[] = [
  {
    id: 'le-petit-prince',
    title: '小王子 (Маленький принц)',
    author: 'Антуан де Сент-Экзюпери',
    coverUrl: '/images/books/le-petit-prince.png',
    genre: 'Философская сказка',
    difficulty: 'Начинающий',
    uniqueWords: 1800,
  },
]
