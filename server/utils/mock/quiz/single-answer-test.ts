const mockTestQuestion = {
  type: 'single',
  question: 'Какой из иероглифов означает "Январь"?',
  answers: [{
    key: 1,
    type: 'glyph',
    value: '行进',
  }, {
    key: 2,
    type: 'glyph',
    value: '四月',
  }, {
    key: 3,
    type: 'glyph',
    value: '一月',
  }, {
    key: 4,
    type: 'glyph',
    value: '二月',
  }] as const,
  correct: [{
    key: 1,
    meta: {
      hieroglyph: {
        glyph: '行进',
        pinyin: {
          pinyin: 'xing jin',
          tone: [{
            index: 1,
            type: 2,
          }, {
            index: 6,
            type: 4,
          }],
        },
        translate: 'Движение вперед, продвижение',
      },
      description: `Иероглиф '一月' означает 'Январь' — первый месяц года в григорианском календаре. В китайском языке названия месяцев формируются по принципу 'число + месяц', где '一' (yī) означает 'один', а '月' (yuè) — 'месяц'. Таким образом, '一月' дословно переводится как 'первый месяц'.`,
    },
  }],
} as const

export {
  mockTestQuestion,
}
