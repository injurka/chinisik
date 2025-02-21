import type { ThematicDictionaryData } from '~/shared/types/models'

export const thematicDictionaryDataMock: ThematicDictionaryData = {
  catalog: [
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
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '你好',
                  pinyin: {
                    pinyin: 'ni hao',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 4,
                      type: 3,
                    }],
                  },
                  translate: 'Здравствуйте',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '谢谢',
                  pinyin: {
                    pinyin: 'xie xie',
                    tone: [{
                      index: 1,
                      type: 4,
                    }, {
                      index: 5,
                      type: 4,
                    }],
                  },
                  translate: 'Спасибо',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '不客气',
                  pinyin: {
                    pinyin: 'bu ke qi',
                    tone: [{
                      index: 1,
                      type: 2,
                    }, {
                      index: 4,
                      type: 4,
                    }, {
                      index: 7,
                      type: 4,
                    }],
                  },
                  translate: 'Пожалуйста (в ответ на "спасибо")',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请',
                  pinyin: {
                    pinyin: 'qing',
                    tone: [{
                      index: 1,
                      type: 3,
                    }],
                  },
                  translate: 'Пожалуйста (просьба)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '对不起',
                  pinyin: {
                    pinyin: 'dui bu qi',
                    tone: [{
                      index: 1,
                      type: 4,
                    }, {
                      index: 5,
                      type: 4,
                    }, {
                      index: 8,
                      type: 3,
                    }],
                  },
                  translate: 'Извините',
                  variant: 5,
                },
              },
            ],
          },
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
          content: {
            tag: 'div',
          },
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
          id: 3,
          sysname: 'transport',
          name: 'Транспорт',
          glyph: '运',
          description: 'Слова, связанные с различными видами транспорта.',
          content: {
            tag: 'div',
          },
          words: [
            { id: 'airport', term: 'Аэропорт', definition: 'Место отправления и прибытия самолетов' },
            { id: 'train', term: 'Поезд', definition: 'Железнодорожный транспорт' },
          ],
        },
        {
          id: 4,
          sysname: 'accommodation',
          name: 'Проживание',
          glyph: '宿',
          description: 'Слова, связанные с местами проживания во время путешествий.',
          content: {
            tag: 'div',
          },
          words: [
            { id: 'hotel', term: 'Отель', definition: 'Место для временного проживания' },
            { id: 'hostel', term: 'Хостел', definition: 'Бюджетный вариант проживания' },
          ],
        },
      ],
    },
  ],
}
