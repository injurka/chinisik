const dayMaterialMock = {
  vocabulary: {
    theme: 'Путешествия',
    items: [
      {
        glyph: '护照',
        pinyin: 'hùzhào',
        translation: 'Паспорт',
        sound: null,
      },
      {
        glyph: '机场',
        pinyin: 'jīchǎng',
        translation: 'Аэропорт',
        sound: null,
      },
      {
        glyph: '飞机票',
        pinyin: 'fēijīpiào',
        translation: 'Авиабилет',
        sound: null,
      },
      {
        glyph: '酒店',
        pinyin: 'jiǔdiàn',
        translation: 'Гостиница, отель',
        sound: null,
      },
    ],
    description: 'Расширьте свой словарный запас словами, которые понадобятся в любом путешествии по Китаю.',
  },
  grammar: {
    title: 'Конструкция \'от... до...\' (从...到...)',
    rule: 'Конструкция 从 (cóng) ... 到 (dào) ... используется для указания начальной и конечной точки маршрута, времени или процесса. Это один из самых базовых способов описать движение или диапазон.',
    example: {
      glyph: '我想从北京到上海',
      pinyin: 'wǒ xiǎng cóng Běijīng dào Shànghǎi',
      translation: 'Я хочу поехать из Пекина в Шанхай',
      sound: null,
    },
    description: 'Это правило поможет вам легко строить маршруты и говорить о своих планах в путешествии.',
  },
  proverb: {
    title: 'Поговорка дня',
    glyph: '千里之行，始于足下',
    pinyin: 'qiān lǐ zhī xíng, shǐ yú zú xià',
    translation: 'Путешествие в тысячу ли начинается с первого шага',
    description: 'Эта знаменитая поговорка из \'Дао Дэ Цзин\' напоминает, что даже самые большие и амбициозные цели (как путешествие или изучение языка) достигаются через последовательность маленьких, но уверенных шагов.',
    sound: null,
  },
  quiz: {
    stage1: {
      questions: [
        {
          question: '护照',
          questionLang: 'cn',
          correctAnswer: 'Паспорт',
        },
        {
          question: 'Аэропорт',
          questionLang: 'ru',
          correctAnswer: '机场',
        },
        {
          question: '酒店',
          questionLang: 'cn',
          correctAnswer: 'Отель',
        },
        {
          question: '飞机票',
          questionLang: 'cn',
          correctAnswer: 'Авиабилет',
        },
        {
          question: 'Путешествие',
          questionLang: 'ru',
          correctAnswer: '旅游',
        },
      ],
      options: [
        // Русские (для вопросов на китайском)
        'Паспорт',
        'Виза',
        'Билет',
        'Отель',
        'Ресторан',
        'Бар',
        'Авиабилет',
        'Багаж',
        'Чемодан',
        'Карта',
        // Китайские (для вопросов на русском)
        '机场',
        '酒店',
        '车站',
        '旅游',
        '游泳',
        '游戏',
        '地图',
        '出租车',
      ],
    },
    stage2: [
      {
        sentenceRu: 'Я хочу поехать из Пекина в Шанхай',
        correctOrder: ['我', '想', '从', '北', '京', '到', '上', '海'],
        characters: ['我', '想', '从', '北', '京', '到', '上', '海', '去', '来', '回'],
      },
      {
        sentenceRu: 'От дома до школы',
        correctOrder: ['从', '家', '到', '学', '校'],
        characters: ['从', '家', '到', '学', '校', '去', '在', '里'],
      },
    ],
    stage3: {
      proverbRu: 'Путешествие в тысячу ли начинается с первого шага',
      correctOrder: ['千', '里', '之', '行', '，', '始', '于', '足', '下'],
      characters: ['千', '里', '之', '行', '，', '始', '于', '足', '下', '一', '步', '走'],
    },
  },
}

export { dayMaterialMock }
