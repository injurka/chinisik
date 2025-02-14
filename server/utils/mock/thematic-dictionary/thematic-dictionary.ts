export interface Word {
  id: string
  term: string
  definition?: string
  example?: string
}

export interface Category {
  id: number
  sysname: string
  name: string
  description?: string
  glyph: string
  words: Word[]
}

export interface Section {
  id: number
  sysname: string
  description: string
  name: string
  glyph: string
  categories: Category[]
}

export interface ThematicDictionaryData {
  sections: Section[]
}

export const thematicDictionaryDataMock: ThematicDictionaryData = {
  sections: [
    {
      id: 1,
      sysname: 'conversation',
      description: 'Раздел, посвященный различным аспектам общения.',
      name: 'Беседа',
      glyph: '语',
      categories: [
        {
          id: 1,
          sysname: 'politeness',
          name: 'Вежливость',
          glyph: '礼',
          description: 'Фразы и слова, выражающие вежливость.',
          words: [
            { id: 'hello', term: 'Здравствуйте', definition: 'Приветствие' },
            { id: 'please', term: 'Пожалуйста', definition: 'Просьба' },
          ],
        },
        {
          id: 2,
          sysname: 'small-talk',
          name: 'Небольшой разговор',
          glyph: '谈',
          description: 'Фразы для поддержания непринужденной беседы.',
          words: [
            { id: 'weather', term: 'Погода', definition: 'Обсуждение погоды' },
            { id: 'hobbies', term: 'Хобби', definition: 'Обсуждение увлечений' },
          ],
        },
      ],
    },
    {
      id: 2,
      sysname: 'travel',
      description: 'Раздел, посвященный словам и фразам, связанным с путешествиями.',
      name: 'Путешествия',
      glyph: '旅',
      categories: [
        {
          id: 1,
          sysname: 'transport',
          name: 'Транспорт',
          glyph: '运',
          description: 'Слова, связанные с различными видами транспорта.',
          words: [
            { id: 'airport', term: 'Аэропорт', definition: 'Место отправления и прибытия самолетов' },
            { id: 'train', term: 'Поезд', definition: 'Железнодорожный транспорт' },
          ],
        },
        {
          id: 2,
          sysname: 'accommodation',
          name: 'Проживание',
          glyph: '宿',
          description: 'Слова, связанные с местами проживания во время путешествий.',
          words: [
            { id: 'hotel', term: 'Отель', definition: 'Место для временного проживания' },
            { id: 'hostel', term: 'Хостел', definition: 'Бюджетный вариант проживания' },
          ],
        },
      ],
    },
  ],
}
