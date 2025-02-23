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
          description: `Вежливость в китайском языке и культуре — это не просто набор фраз, а сложная система взаимодействия, отражающая глубинные ценности общества: уважение к иерархии, стремление к гармонии и сохранение «лица» (面子, miànzi) как своего, так и собеседника. Её пронизывает конфуцианская идея «礼» (lǐ) — ритуала или правил поведения, которые определяют, как следует проявлять учтивость в разных ситуациях. Чтобы интегрироваться в это культурное пространство, важно понимать контекст, в котором используются те или иные выражения, и осознавать, что прямолинейность здесь часто уступает место косвенности и тонким нюансам.

Основу вежливости составляют обращения. В китайском языке редко используют просто «ты» (你, nǐ) в разговоре с людьми старше по возрасту, статусу или незнакомцами. Вместо этого предпочтительнее вежливая форма «您» (nín), особенно в официальных ситуациях или при общении с клиентами. Обращения по родству (например, 叔叔, shūshu — дядя; 阿姨, āyí — тётя) или должности (经理, jīnglǐ — менеджер; 老师, lǎoshī — учитель) даже к малознакомым людям подчеркивают уважение и соблюдение социальной дистанции. Это создаёт атмосферу взаимного признания ролей, что крайне важно в коллективистском обществе.

Скромность — ещё один краеугольный камень вежливого общения. Даже если вы достигли успеха, принято принижать свои заслуги, используя фразы вроде «哪里哪里» (nǎli nǎli — «куда уж мне!») в ответ на комплименты, или описывать подарок как «一点小意思» (yīdiǎn xiǎo yìsi — «пустяк, безделица»), даже если он дорогой. Напротив, преувеличение заслуг или щедрости собеседника — знак уважения: например, выражение «破费了» (pòfèi le — «вы потратились») при получении подарка. Такая игра в самоуничижение и возвышение другого помогает избежать конфронтации и сохранить гармонию.

Благодарность и извинения в китайском контексте часто выходят за рамки западных представлений. Спасибо — «谢谢» (xièxie) — может казаться избыточным в близких отношениях, где помощь воспринимается как естественная часть взаимности. Однако в формальных ситуациях или при обращении к старшим уместны усиленные формы: «非常感谢» (fēicháng gǎnxiè — «огромное спасибо») или «麻烦您了» (máfan nín le — «потревожил вас», с оттенком извинения за беспокойство). Извинения же, даже за мелкие неудобства, — способ показать, что вы ставите комфорт другого выше своего. Фраза «不好意思» (bù hǎo yìsi — «мне неловко») используется чаще, чем прямое «对不起» (duìbuqǐ — «простите»), так как звучит менее тяжеловесно и подходит для повседневных ситуаций, например, если вы случайно задели кого-то в толпе.

Приглашения, просьбы и отказы требуют особой деликатности. Прямой отказ считается грубым, поэтому китайцы часто прибегают к уклончивым формулировкам: «可能不太方便» (kěnéng bù tài fāngbiàn — «возможно, это неудобно») или «我考虑一下» (wǒ kǎolǜ yīxià — «я подумаю»). Даже согласие может быть выражено неявно, через вопросы или смягчающие частицы вроде «吧» (ba) в конце предложения: «好吧» (hǎo ba — «ладно»). Приглашая кого-то, важно подчеркнуть, что гость делает вам честь своим присутствием: «请您一定要来» (qǐng nín yīdìng yào lái — «пожалуйста, обязательно приходите»), даже если вы уверены, что человек согласится.

Особое внимание уделяется ритуалам приветствия и прощания. Стандартное «你好» (nǐ hǎo) уместно в нейтральных ситуациях, но в официальной обстановке или при обращении к группе лучше использовать «您好» (nín hǎo) или «大家好» (dàjiā hǎo — «всем привет»). При расставании вместо простого «再见» (zàijiàn) часто добавляют пожелания: «慢走» (màn zǒu — «идите осторожно», говоря гостю) или «请注意安全» (qǐng zhùyì ānquán — «пожалуйста, берегите себя»). В деловой переписке обязательны формулы вежливости в начале и конце сообщения, например: «尊敬的…» (zūnjìng de… — «уважаемый…») и «祝好» (zhù hǎo — «с наилучшими пожеланиями»).

Важно помнить о культурных табу. Критика или исправление кого-то в присутствии других может заставить человека «потерять лицо», поэтому замечания стоит делать наедине и в мягкой форме. Вопросы о личном (возраст, зарплата, семейное положение) допустимы только в близком кругу, а в официальной обстановке их лучше избегать. Также не стоит торопиться переходить на неформальное общение — это право старшего или вышестоящего человека.

Изучая вежливые выражения, обращайте внимание на интонацию и контекст. Многие фразы, например «不用谢» (búyòng xiè — «не за что»), могут звучать холодно, если произнесены без улыбки или в неподходящей ситуации. Практикуйтесь в использовании вежливых частиц вроде «请» (qǐng — «пожалуйста»), «劳驾» (láojià — «потрудитесь») или «麻烦» (máfan — «потревожу»), которые делают просьбы менее категоричными. Со временем вы научитесь чувствовать, когда уместна краткость, а когда требуется развернутая церемонная речь, и как балансировать между искренностью и соблюдением правил «лица».
`,
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
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '没关系',
                  pinyin: {
                    pinyin: 'mei guan xi',
                    tone: [{
                      index: 1,
                      type: 2,
                    }, {
                      index: 5,
                      type: 1,
                    }, {
                      index: 8,
                      type: 1,
                    }],
                  },
                  translate: 'Ничего страшного',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您好',
                  pinyin: {
                    pinyin: 'nin hao',
                    tone: [{
                      index: 1,
                      type: 2,
                    }, {
                      index: 4,
                      type: 3,
                    }],
                  },
                  translate: 'Здравствуйте (вежливая форма)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请问',
                  pinyin: {
                    pinyin: 'qing wen',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 5,
                      type: 4,
                    }],
                  },
                  translate: 'Разрешите спросить',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '劳驾',
                  pinyin: {
                    pinyin: 'lao jia',
                    tone: [{
                      index: 1,
                      type: 2,
                    }, {
                      index: 4,
                      type: 4,
                    }],
                  },
                  translate: 'Будьте добры',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '慢走',
                  pinyin: {
                    pinyin: 'man zou',
                    tone: [{
                      index: 1,
                      type: 4,
                    }, {
                      index: 4,
                      type: 3,
                    }],
                  },
                  translate: 'Идите осторожно (прощаясь с гостем)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哪里哪里',
                  pinyin: {
                    pinyin: 'na li na li',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 4,
                      type: 3,
                    }, {
                      index: 7,
                      type: 3,
                    }],
                  },
                  translate: 'Да что вы, что вы (в ответ на комплимент, скромный ответ)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请问',
                  pinyin: {
                    pinyin: 'qing wen',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 5,
                      type: 4,
                    }],
                  },
                  translate: 'Позвольте спросить',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '劳驾',
                  pinyin: {
                    pinyin: 'lao jia',
                    tone: [{
                      index: 1,
                      type: 2,
                    }, {
                      index: 4,
                      type: 4,
                    }],
                  },
                  translate: 'Потрудитесь/Пожалуйста (при просьбе)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '慢走',
                  pinyin: {
                    pinyin: 'man zou',
                    tone: [{
                      index: 1,
                      type: 4,
                    }, {
                      index: 4,
                      type: 3,
                    }],
                  },
                  translate: 'Идите осторожно (при прощании)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '不好意思',
                  pinyin: {
                    pinyin: 'bu hao yi si',
                    tone: [{
                      index: 1,
                      type: 4,
                    }, {
                      index: 4,
                      type: 3,
                    }, {
                      index: 7,
                      type: 4,
                    }, {
                      index: 10,
                      type: 5,
                    }],
                  },
                  translate: 'Прошу прощения (неформальное)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您',
                  pinyin: {
                    pinyin: 'nin',
                    tone: [{
                      index: 1,
                      type: 2,
                    }],
                  },
                  translate: 'Вы (вежливая форма)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '辛苦了',
                  pinyin: {
                    pinyin: 'xin ku le',
                    tone: [{
                      index: 1,
                      type: 1,
                    }, {
                      index: 4,
                      type: 3,
                    }, {
                      index: 7,
                      type: 5,
                    }],
                  },
                  translate: 'Спасибо за труды',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '欢迎光临',
                  pinyin: {
                    pinyin: 'huan ying guang lin',
                    tone: [{
                      index: 1,
                      type: 1,
                    }, {
                      index: 5,
                      type: 2,
                    }, {
                      index: 9,
                      type: 1,
                    }, {
                      index: 13,
                      type: 2,
                    }],
                  },
                  translate: 'Добро пожаловать (в магазин/ресторан)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请稍等',
                  pinyin: {
                    pinyin: 'qing shao deng',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 5,
                      type: 1,
                    }, {
                      index: 9,
                      type: 3,
                    }],
                  },
                  translate: 'Пожалуйста, подождите',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '打扰一下',
                  pinyin: {
                    pinyin: 'da rao yi xia',
                    tone: [{
                      index: 1,
                      type: 3,
                    }, {
                      index: 4,
                      type: 3,
                    }, {
                      index: 6,
                      type: 1,
                    }, {
                      index: 8,
                      type: 4,
                    }],
                  },
                  translate: 'Простите за беспокойство (чтобы привлечь внимание)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '久仰大名',
                  pinyin: {
                    pinyin: 'jiu yang da ming',
                    tone: [
                      { index: 1, type: 3 }, // jiǔ
                      { index: 5, type: 3 }, // yǎng
                      { index: 8, type: 4 }, // dà
                      { index: 11, type: 2 }, // míng
                    ],
                  },
                  translate: 'Давно слышал о вашей славе (при первом знакомстве)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多指教',
                  pinyin: {
                    pinyin: 'qing duo duo zhi jiao',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 1 }, // duō
                      { index: 8, type: 1 }, // duō
                      { index: 12, type: 3 }, // zhǐ
                      { index: 15, type: 4 }, // jiào
                    ],
                  },
                  translate: 'Прошу вашего наставничества (скромная просьба)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您先请',
                  pinyin: {
                    pinyin: 'nin xian qing',
                    tone: [
                      { index: 1, type: 2 }, // nín
                      { index: 5, type: 1 }, // xiān
                      { index: 9, type: 3 }, // qǐng
                    ],
                  },
                  translate: 'Прошу вас первым (ритуал уступания дороги)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '承让了',
                  pinyin: {
                    pinyin: 'cheng rang le',
                    tone: [
                      { index: 1, type: 2 }, // chéng
                      { index: 6, type: 4 }, // ràng
                      { index: 10, type: 5 }, // le
                    ],
                  },
                  translate: 'Спасибо за уступку (после победы в соревновании)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哪里哪里',
                  pinyin: {
                    pinyin: 'na li na li',
                    tone: [
                      { index: 1, type: 3 }, // nǎ
                      { index: 4, type: 5 }, // li
                      { index: 7, type: 3 }, // nǎ
                      { index: 10, type: 5 }, // li
                    ],
                  },
                  translate: 'Куда мне! (ответ на комплимент)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请用茶',
                  pinyin: {
                    pinyin: 'qing yong cha',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 4 }, // yòng
                      { index: 9, type: 2 }, // chá
                    ],
                  },
                  translate: 'Прошу отведать чая (гостеприимство)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '幸会',
                  pinyin: {
                    pinyin: 'xing hui',
                    tone: [
                      { index: 1, type: 4 }, // xìng
                      { index: 6, type: 4 }, // huì
                    ],
                  },
                  translate: 'Честь познакомиться',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多包涵',
                  pinyin: {
                    pinyin: 'qing duo duo bao han',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 1 }, // duō
                      { index: 8, type: 1 }, // duō
                      { index: 12, type: 3 }, // bāo
                      { index: 16, type: 2 }, // hán
                    ],
                  },
                  translate: 'Прошу снисхождения (при возможных ошибках)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '过奖了',
                  pinyin: {
                    pinyin: 'guo jiang le',
                    tone: [
                      { index: 1, type: 4 }, // guò
                      { index: 5, type: 3 }, // jiǎng
                      { index: 9, type: 5 }, // le
                    ],
                  },
                  translate: 'Вы меня перехваливаете (скромный ответ)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '敬请谅解',
                  pinyin: {
                    pinyin: 'jing qing liang jie',
                    tone: [
                      { index: 1, type: 4 }, // jìng
                      { index: 5, type: 3 }, // qǐng
                      { index: 9, type: 2 }, // liàng
                      { index: 13, type: 3 }, // jiě
                    ],
                  },
                  translate: 'Прошу понять и простить (официальные извинения)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请留步',
                  pinyin: {
                    pinyin: 'qing liu bu',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 2 }, // liú
                      { index: 9, type: 4 }, // bù
                    ],
                  },
                  translate: 'Не провожайте меня (при уходе гостя)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '恭候光临',
                  pinyin: {
                    pinyin: 'gong hou guang lin',
                    tone: [
                      { index: 1, type: 1 }, // gōng
                      { index: 6, type: 4 }, // hòu
                      { index: 10, type: 1 }, // guāng
                      { index: 15, type: 2 }, // lín
                    ],
                  },
                  translate: 'С нетерпением ждём вашего визита (официальное приглашение)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请笑纳',
                  pinyin: {
                    pinyin: 'qing xiao na',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 4 }, // xiào
                      { index: 9, type: 4 }, // nà
                    ],
                  },
                  translate: 'Примите с улыбкой (при вручении подарка)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '贵姓',
                  pinyin: {
                    pinyin: 'gui xing',
                    tone: [
                      { index: 1, type: 4 }, // guì
                      { index: 5, type: 4 }, // xìng
                    ],
                  },
                  translate: 'Ваша фамилия? (вежливый вопрос)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '失陪一下',
                  pinyin: {
                    pinyin: 'shi pei yi xia',
                    tone: [
                      { index: 1, type: 1 }, // shī
                      { index: 5, type: 2 }, // péi
                      { index: 9, type: 2 }, // yī
                      { index: 12, type: 4 }, // xià
                    ],
                  },
                  translate: 'Извините, я ненадолго отлучусь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请节哀',
                  pinyin: {
                    pinyin: 'qing jie ai',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 2 }, // jié
                      { index: 9, type: 1 }, // āi
                    ],
                  },
                  translate: 'Примите мои соболезнования',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请赐教',
                  pinyin: {
                    pinyin: 'qing ci jiao',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 4 }, // cì
                      { index: 9, type: 4 }, // jiào
                    ],
                  },
                  translate: 'Прошу ваших наставлений (к старшему)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '一路平安',
                  pinyin: {
                    pinyin: 'yi lu ping an',
                    tone: [
                      { index: 1, type: 2 }, // yī
                      { index: 4, type: 4 }, // lù
                      { index: 7, type: 2 }, // píng
                      { index: 11, type: 1 }, // ān
                    ],
                  },
                  translate: 'Счастливого пути (пожелание при проводах)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多关照',
                  pinyin: {
                    pinyin: 'qing duo duo guan zhao',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 1 }, // duō
                      { index: 8, type: 1 }, // duō
                      { index: 12, type: 1 }, // guān
                      { index: 16, type: 4 }, // zhào
                    ],
                  },
                  translate: 'Прошу вашего покровительства (при устройстве на работу)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请自便',
                  pinyin: {
                    pinyin: 'qing zi bian',
                    tone: [
                      { index: 1, type: 3 }, // qǐng
                      { index: 5, type: 4 }, // zì
                      { index: 9, type: 4 }, // biàn
                    ],
                  },
                  translate: 'Не стесняйтесь (предложение чувствовать себя как дома)',
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
