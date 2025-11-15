const hskLevelListMock = {
  data: [
    {
      id: 1,
      glyph: '爱',
      traditionalGlyph: '愛',
      translation: {
        en: 'love, like, be fond of, be keen on, cherish, be apt to',
        ru: 'любить, нравиться, увлекаться, дорожить, быть склонным к',
      },
      pinyin: 'ài',
    },
    {
      id: 2,
      glyph: '爱好',
      traditionalGlyph: '愛好',
      translation: {
        en: 'love, like, be fond of, be keen on',
        ru: 'любить, нравиться, увлекаться',
      },
      pinyin: 'àihào',
    },
    {
      id: 3,
      glyph: '爸爸',
      traditionalGlyph: '爸爸',
      translation: {
        en: 'old man, father, papa, pappa, daddy, pa, begetter, pop, dada, dad, male parent, pater, pappy, pops, poppa',
        ru: 'старик, отец, папа, папочка, папаша, родитель, папаня',
      },
      pinyin: 'bàba',
    },
    {
      id: 4,
      glyph: '白',
      traditionalGlyph: '白',
      translation: {
        en: 'white, clear, pure, plain, wrongly written/mispronounced,',
        ru: 'белый, ясный, чистый, простой, неправильно написанный/произнесенный',
      },
      pinyin: 'bái',
    },
    {
      id: 5,
      glyph: '八',
      traditionalGlyph: '八',
      translation: {
        en: 'det.: eight',
        ru: 'дет.: восемь',
      },
      pinyin: 'bā',
    },
    {
      id: 6,
      glyph: '白天',
      traditionalGlyph: '白天',
      translation: {
        en: 'daytime, during the day, day, CL:個|个[ge4]',
        ru: 'дневное время, в течение дня, день, сч. сл.: 個|个[ge4]',
      },
      pinyin: 'báitian',
    },
    {
      id: 7,
      glyph: '班',
      traditionalGlyph: '班',
      translation: {
        en: 'm.[event]',
        ru: 'м.[событие]',
      },
      pinyin: 'bān',
    },
    {
      id: 8,
      glyph: '百',
      traditionalGlyph: '百',
      translation: {
        en: 'cent, centum, century, hundred, det.: hundred',
        ru: 'цент, сотня, век, сто, дет.: сто',
      },
      pinyin: 'bǎi',
    },
    {
      id: 9,
      glyph: '吧',
      traditionalGlyph: '吧',
      translation: {
        en: 'particle: used to show mild imperative or uncertainty',
        ru: 'частица: используется для выражения мягкого повеления или неуверенности',
      },
      pinyin: 'ba',
    },
    {
      id: 10,
      glyph: '半',
      traditionalGlyph: '半',
      translation: {
        en: 'det.: half',
        ru: 'дет.: половина',
      },
      pinyin: 'bàn',
    },
    {
      id: 11,
      glyph: '半年',
      traditionalGlyph: '半年',
      translation: {
        en: 'half a year',
        ru: 'полгода',
      },
      pinyin: 'bànnián',
    },
    {
      id: 12,
      glyph: '半天',
      traditionalGlyph: '半天',
      translation: {
        en: 'half of the day, a long time, quite a while, midair, CL:個|个[ge4]',
        ru: 'полдня, долгое время, довольно долго, в воздухе, сч. сл.: 個|个[ge4]',
      },
      pinyin: 'bàntiān',
    },
    {
      id: 13,
      glyph: '帮',
      traditionalGlyph: '幫',
      translation: {
        en: 'help',
        ru: 'помогать',
      },
      pinyin: 'bāng',
    },
    {
      id: 14,
      glyph: '帮忙',
      traditionalGlyph: '幫忙',
      translation: {
        en: 'assist, aid, smile, lend a hand, do a favour, help, oblige, give a hand, do favor, do a good turn',
        ru: 'помогать, оказывать содействие, улыбаться, протянуть руку помощи, оказать услугу, помогать, обязывать, подать руку, оказать любезность, сделать доброе дело',
      },
      pinyin: 'bāng máng',
    },
    {
      id: 15,
      glyph: '包',
      traditionalGlyph: '包',
      translation: {
        en: 'wrap, surround, encircle, envelop, include, contain, undertake the whole thing, assure, guarantee',
        ru: 'заворачивать, окружать, опоясывать, окутывать, включать, содержать, браться за все дело, уверять, гарантировать',
      },
      pinyin: 'bāo',
    },
    {
      id: 16,
      glyph: '包子',
      traditionalGlyph: '包子',
      translation: {
        en: 'steamed stuffed bun, CL:個|个[ge4]',
        ru: 'паровая булочка с начинкой, сч. сл.: 個|个[ge4]',
      },
      pinyin: 'bāozi',
    },
    {
      id: 17,
      glyph: '杯',
      traditionalGlyph: '杯',
      translation: {
        en: 'm.[container]',
        ru: 'м.[контейнер]',
      },
      pinyin: 'bēi',
    },
    {
      id: 18,
      glyph: '杯子',
      traditionalGlyph: '杯子',
      translation: {
        en: 'tumbler, drinking glass, cup, glass',
        ru: 'стакан, бокал, чашка, стекло',
      },
      pinyin: 'bēizi',
    },
    {
      id: 19,
      glyph: '北边',
      traditionalGlyph: '北邊',
      translation: {
        en: 'north, north side, northern part, to the north of',
        ru: 'север, северная сторона, северная часть, к северу от',
      },
      pinyin: 'běibian',
    },
    {
      id: 20,
      glyph: '本',
      traditionalGlyph: '本',
      translation: {
        en: 'det.: this',
        ru: 'дет.: этот',
      },
      pinyin: 'běn',
    },
    {
      id: 21,
      glyph: '北京',
      traditionalGlyph: '北京',
      translation: {
        en: 'capital of Red China, Beijing, Peking, Beijing (Peking), Peiping',
        ru: 'столица Красного Китая, Пекин, Пекин (Пекин), Бэйпин',
      },
      pinyin: 'Běijīng',
    },
    {
      id: 22,
      glyph: '北',
      traditionalGlyph: '北',
      translation: {
        en: 'atomic number 97, northward, north, berkelium, Bk, northern',
        ru: 'атомный номер 97, на север, север, берклий, Bk, северный',
      },
      pinyin: 'běi',
    },
    {
      id: 23,
      glyph: '本子',
      traditionalGlyph: '本子',
      translation: {
        en: 'book, notebook, edition, CL:本[ben3]',
        ru: 'книга, тетрадь, издание, сч. сл.: 本[ben3]',
      },
      pinyin: 'běnzi',
    },
    {
      id: 24,
      glyph: '别',
      traditionalGlyph: '別',
      translation: {
        en: 'don\'t',
        ru: 'не надо',
      },
      pinyin: 'bié',
    },
    {
      id: 25,
      glyph: '别的',
      traditionalGlyph: '別的',
      translation: {
        en: 'else, other',
        ru: 'еще, другой',
      },
      pinyin: 'biéde',
    },
    {
      id: 26,
      glyph: '别人',
      traditionalGlyph: '別人',
      translation: {
        en: 'others, other people, another person',
        ru: 'другие, другие люди, другой человек',
      },
      pinyin: 'biéren',
    },
    {
      id: 27,
      glyph: '病',
      traditionalGlyph: '病',
      translation: {
        en: 'disease',
        ru: 'болезнь',
      },
      pinyin: 'bìng',
    },
    {
      id: 28,
      glyph: '病人',
      traditionalGlyph: '病人',
      translation: {
        en: 'shut-in, patient, subject, sufferer, case, valetudinarian, invalid',
        ru: 'затворник, пациент, субъект, страдалец, случай, ипохондрик, инвалид',
      },
      pinyin: 'bìngrén',
    },
    {
      id: 29,
      glyph: '比',
      traditionalGlyph: '比',
      translation: {
        en: 'compared with',
        ru: 'по сравнению с',
      },
      pinyin: 'bǐ',
    },
    {
      id: 30,
      glyph: '不大',
      traditionalGlyph: '不大',
      translation: {
        en: 'not very/too, not often',
        ru: 'не очень/слишком, не часто',
      },
      pinyin: 'bùdà',
    },
  ],
  pagination: {
    page: 1,
    limit: 30,
    total: 497,
  },
}

export { hskLevelListMock }
