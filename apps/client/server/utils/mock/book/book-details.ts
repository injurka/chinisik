import type { BookDetails } from '~/shared/types'
import { mockBookContent } from './book-content'

export const mockBookDetails: BookDetails[] = [
  {
    id: 'le-petit-prince',
    title: '小王子 (Маленький принц)',
    author: 'Антуан де Сент-Экзюпери',
    originalTitle: 'Le Petit Prince',
    coverUrl: '/images/books/le-petit-prince.png',
    genre: 'Философская сказка',
    summary: 'Аллегорическая повесть-сказка, наиболее известное произведение Антуана де Сент-Экзюпери. История о маленьком мальчике, который путешествует с планеты на планету, встречая разных взрослых и познавая мир.',
    difficultyGeneral: 'Начинающий',
    difficultyFormal: 'HSK 2',
    pageCount: mockBookContent['le-petit-prince']?.length || 0,
    uniqueWords: 1800,
    chapters: [],
  },
]
