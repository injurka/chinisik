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
          drawAllowed: false,
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
        },
        {
          id: 2,
          sysname: 'small-talk',
          name: 'Небольшой разговор',
          drawAllowed: false,
          glyph: '谈',
          description: 'Фразы для поддержания непринужденной беседы.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 3,
          sysname: 'greetings',
          name: 'Приветствия',
          drawAllowed: false,
          glyph: '问',
          description: 'Различные способы приветствовать людей.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 4,
          sysname: 'farewells',
          name: 'Прощания',
          drawAllowed: false,
          glyph: '别',
          description: 'Различные способы прощаться с людьми.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 5,
          sysname: 'introductions',
          name: 'Представления',
          glyph: '介',
          drawAllowed: false,
          description: 'Фразы для представления себя и других.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 6,
          sysname: 'asking-for-information',
          name: 'Запрос информации',
          drawAllowed: false,
          glyph: '询',
          description: 'Фразы для запроса информации.',
          content: {
            tag: 'div',
          },

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
          drawAllowed: false,
        },
        {
          id: 4,
          sysname: 'accommodation',
          name: 'Проживание',
          drawAllowed: false,
          glyph: '宿',
          description: 'Слова, связанные с местами проживания во время путешествий.',
          content: {
            tag: 'div',
          },
        },
      ],
    },
    {
      id: 3,
      sysname: 'food',
      description: 'Раздел, посвященный словам и фразам, связанным с едой и напитками.',
      name: 'Еда',
      glyph: '食',
      categories: [
        {
          id: 11,
          sysname: 'restaurants',
          name: 'Рестораны',
          drawAllowed: false,
          glyph: '餐',
          description: 'Фразы для использования в ресторанах.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 12,
          sysname: 'drinks',
          name: 'Напитки',
          drawAllowed: false,
          glyph: '饮',
          description: 'Слова, связанные с различными видами напитков.',
          content: {
            tag: 'div',
          },
        },
        {
          id: 13,
          sysname: 'dishes',
          name: 'Блюда',
          drawAllowed: false,
          glyph: '菜',
          description: 'Названия различных блюд.',
          content: {
            tag: 'div',
          },
        },
      ],
    },
    {
      id: 4,
      sysname: 'color',
      description: 'Раздел, посвященный названиям цветов.',
      name: 'Цвет',
      glyph: '色',
      categories: [
        {
          id: 17,
          sysname: 'basic-colors',
          name: 'Основные цвета',
          drawAllowed: true,
          glyph: '基',
          description: `Базовые цвета, часто связанные с культурой, философией (например, теорией Пяти Элементов) и историей. Красный (红色) ключевой цвет в китайской культуре, символ удачи и праздника. Белый (白色) традиционно связан с трауром, в отличие от западной традиции.`,
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '白',
                  pinyin: {
                    pinyin: 'bai',
                    tone: [{
                      index: 1,
                      type: 2,
                    }],
                  },
                  translate: 'Белый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '黑',
                  pinyin: {
                    pinyin: 'hei',
                    tone: [{
                      index: 1,
                      type: 1,
                    }],
                  },
                  translate: 'Черный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '红',
                  pinyin: {
                    pinyin: 'hong',
                    tone: [{
                      index: 1,
                      type: 2,
                    }],
                  },
                  translate: 'Красный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '绿',
                  pinyin: {
                    pinyin: 'lu',
                    tone: [{
                      index: 1,
                      type: 4,
                    }],
                  },
                  translate: 'Зеленый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '蓝',
                  pinyin: {
                    pinyin: 'lan',
                    tone: [{
                      index: 1,
                      type: 2,
                    }],
                  },
                  translate: 'Синий/Голубой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '黄',
                  pinyin: {
                    pinyin: 'huang',
                    tone: [{
                      index: 2,
                      type: 2,
                    }],
                  },
                  translate: 'Желтый',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 18,
          sysname: 'secondary-colors',
          name: 'Вторичные цвета',
          drawAllowed: true,
          glyph: '次',
          description: 'Смешанные или широко употребимые, но не базовые.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '橙',
                  pinyin: {
                    pinyin: 'cheng',
                    tone: [{
                      index: 2,
                      type: 2,
                    }],
                  },
                  translate: 'Оранжевый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '紫',
                  pinyin: {
                    pinyin: 'zi',
                    tone: [{
                      index: 1,
                      type: 3,
                    }],
                  },
                  translate: 'Фиолетовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '粉',
                  pinyin: {
                    pinyin: 'fen',
                    tone: [{
                      index: 1,
                      type: 3,
                    }],
                  },
                  translate: 'Розовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '灰',
                  pinyin: {
                    pinyin: 'hui',
                    tone: [{
                      index: 1,
                      type: 1,
                    }],
                  },
                  translate: 'Серый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '棕',
                  pinyin: {
                    pinyin: 'zong',
                    tone: [{
                      index: 1,
                      type: 1,
                    }],
                  },
                  translate: 'Коричневый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '青',
                  pinyin: {
                    pinyin: 'qing',
                    tone: [{
                      index: 1,
                      type: 1,
                    }],
                  },
                  translate: 'Цин (сине-зеленый)',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 19,
          sysname: 'other-colors',
          name: 'Другие цвета',
          drawAllowed: true,
          glyph: '他',
          description: `Специфичные, современные или заимствованные названия. Золотой и серебряный часто ассоциируются с богатством и праздниками. Цин (青色) — исторически сложный цвет, может обозначать сине-зеленые оттенки (бирюзовый, морской волны) или даже черный в классических текстах.`,
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '金',
                  pinyin: { pinyin: 'jin', tone: [{ index: 1, type: 1 }] },
                  translate: 'Золотой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '银',
                  pinyin: { pinyin: 'yin', tone: [{ index: 1, type: 2 }] },
                  translate: 'Серебряный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '咖',
                  pinyin: { pinyin: 'ka', tone: [{ index: 1, type: 1 }] },
                  translate: 'Кофейный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '珊',
                  pinyin: { pinyin: 'shan', tone: [{ index: 2, type: 1 }] },
                  translate: 'Коралловый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '米',
                  pinyin: { pinyin: 'mi', tone: [{ index: 1, type: 3 }] },
                  translate: 'Бежевый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '栗',
                  pinyin: { pinyin: 'li', tone: [{ index: 1, type: 4 }] },
                  translate: 'Каштановый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '藏',
                  pinyin: { pinyin: 'zang', tone: [{ index: 1, type: 4 }] },
                  translate: 'Темно-синий (индиго)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '翡',
                  pinyin: { pinyin: 'fei', tone: [{ index: 1, type: 3 }] },
                  translate: 'Нефритовый/Изумрудный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '桃',
                  pinyin: { pinyin: 'tao', tone: [{ index: 1, type: 2 }] },
                  translate: 'Персиковый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '墨',
                  pinyin: { pinyin: 'mo', tone: [{ index: 1, type: 4 }] },
                  translate: 'Цвет туши (глубокий черный)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '朱',
                  pinyin: { pinyin: 'zhu', tone: [{ index: 2, type: 1 }] },
                  translate: 'Киноварный (ярко-красный)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '橄',
                  pinyin: { pinyin: 'gan', tone: [{ index: 1, type: 3 }] },
                  translate: 'Оливковый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '酒',
                  pinyin: { pinyin: 'jiu', tone: [{ index: 1, type: 3 }] },
                  translate: 'Бордовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '天',
                  pinyin: { pinyin: 'tian', tone: [{ index: 1, type: 1 }] },
                  translate: 'Небесно-голубой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '玫',
                  pinyin: { pinyin: 'mei', tone: [{ index: 1, type: 2 }] },
                  translate: 'Малиновый/Рубиновый',
                  variant: 5,
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 5,
      sysname: 'numbers',
      description: 'Раздел, посвященный числам и счету.',
      name: 'Числа',
      glyph: '数',
      categories: [
        {
          id: 20,
          sysname: 'from-0-to-10',
          name: 'От 0 до 10',
          drawAllowed: true,
          glyph: '十',
          description: 'Базовые цифры, основа китайской системы счета. Иероглифы от одного до трех — пиктограммы, изображающие соответствующее количество горизонтальных линий.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '零',
                  pinyin: { pinyin: 'ling', tone: [{ index: 2, type: 2 }] },
                  translate: 'Ноль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '一',
                  pinyin: { pinyin: 'yi', tone: [{ index: 1, type: 1 }] },
                  translate: 'Один',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '二',
                  pinyin: { pinyin: 'er', tone: [{ index: 1, type: 4 }] },
                  translate: 'Два',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三',
                  pinyin: { pinyin: 'san', tone: [{ index: 2, type: 1 }] },
                  translate: 'Три',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四',
                  pinyin: { pinyin: 'si', tone: [{ index: 1, type: 4 }] },
                  translate: 'Четыре',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五',
                  pinyin: { pinyin: 'wu', tone: [{ index: 1, type: 3 }] },
                  translate: 'Пять',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六',
                  pinyin: { pinyin: 'liu', tone: [{ index: 2, type: 4 }] },
                  translate: 'Шесть',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七',
                  pinyin: { pinyin: 'qi', tone: [{ index: 1, type: 1 }] },
                  translate: 'Семь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八',
                  pinyin: { pinyin: 'ba', tone: [{ index: 1, type: 1 }] },
                  translate: 'Восемь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九',
                  pinyin: { pinyin: 'jiu', tone: [{ index: 1, type: 3 }] },
                  translate: 'Девять',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十',
                  pinyin: { pinyin: 'shi', tone: [{ index: 2, type: 2 }] },
                  translate: 'Десять',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 21,
          sysname: 'tens',
          name: 'Десятки',
          drawAllowed: true,
          glyph: '拾',
          description: 'Десятки образуются путем сочетания цифр от двух до девяти с иероглифом "десять" (十). Например, "двадцать" — это "два-десять" (二十).',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '二十',
                  pinyin: { pinyin: 'er shi', tone: [{ index: 1, type: 4 }, { index: 4, type: 2 }] },
                  translate: 'Двадцать',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三十',
                  pinyin: { pinyin: 'san shi', tone: [{ index: 2, type: 1 }, { index: 5, type: 2 }] },
                  translate: 'Тридцать',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四十',
                  pinyin: { pinyin: 'si shi', tone: [{ index: 1, type: 4 }, { index: 4, type: 2 }] },
                  translate: 'Сорок',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五十',
                  pinyin: { pinyin: 'wu shi', tone: [{ index: 1, type: 3 }, { index: 4, type: 2 }] },
                  translate: 'Пятьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六十',
                  pinyin: { pinyin: 'liu shi', tone: [{ index: 2, type: 4 }, { index: 5, type: 2 }] },
                  translate: 'Шестьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七十',
                  pinyin: { pinyin: 'qi shi', tone: [{ index: 1, type: 1 }, { index: 4, type: 2 }] },
                  translate: 'Семьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八十',
                  pinyin: { pinyin: 'ba shi', tone: [{ index: 1, type: 1 }, { index: 4, type: 2 }] },
                  translate: 'Восемьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九十',
                  pinyin: { pinyin: 'jiu shi', tone: [{ index: 1, type: 3 }, { index: 5, type: 2 }] },
                  translate: 'Девяносто',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 22,
          sysname: 'large-numbers',
          name: 'Сотни, тысячи и т.д.',
          drawAllowed: true,
          glyph: '万',
          description: 'Крупные разряды, такие как сто (百), тысяча (千) и десять тысяч (万). Китайский счет имеет разряд "десять тысяч" (wàn), что отличает его от западной системы, основанной на тысячах.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '百',
                  pinyin: { pinyin: 'bai', tone: [{ index: 1, type: 3 }] },
                  translate: 'Сто',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '千',
                  pinyin: { pinyin: 'qian', tone: [{ index: 2, type: 1 }] },
                  translate: 'Тысяча',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '万',
                  pinyin: { pinyin: 'wan', tone: [{ index: 2, type: 4 }] },
                  translate: 'Десять тысяч',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '亿',
                  pinyin: { pinyin: 'yi', tone: [{ index: 1, type: 4 }] },
                  translate: 'Сто миллионов',
                  variant: 5,
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 5,
      sysname: 'time',
      description: 'Раздел, посвященный времени, датам и связанным с ними понятиям.',
      name: 'Время',
      glyph: '时',
      categories: [
        {
          id: 23,
          sysname: 'days-of-the-week',
          name: 'Дни недели',
          drawAllowed: true,
          glyph: '周',
          description: 'Названия дней недели в китайском языке, которые образуются путем добавления номера дня к слову "неделя" (星期). Понедельник — первый день недели.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期一',
                  pinyin: { pinyin: 'xīng qī yī', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 8, type: 1 }] },
                  translate: 'Понедельник',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期二',
                  pinyin: { pinyin: 'xīng qī èr', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 8, type: 4 }] },
                  translate: 'Вторник',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期三',
                  pinyin: { pinyin: 'xīng qī sān', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 9, type: 1 }] },
                  translate: 'Среда',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期四',
                  pinyin: { pinyin: 'xīng qī sì', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 8, type: 4 }] },
                  translate: 'Четверг',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期五',
                  pinyin: { pinyin: 'xīng qī wǔ', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 8, type: 3 }] },
                  translate: 'Пятница',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期六',
                  pinyin: { pinyin: 'xīng qī liù', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 9, type: 4 }] },
                  translate: 'Суббота',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期日',
                  pinyin: { pinyin: 'xīng qī rì', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }, { index: 8, type: 4 }] },
                  translate: 'Воскресенье',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 24,
          sysname: 'months',
          name: 'Месяцы',
          drawAllowed: true,
          glyph: '月',
          description: 'Названия месяцев образуются по числовому принципу: номер месяца + слово "месяц" (月). Например, январь — это "первый месяц".',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '一月',
                  pinyin: { pinyin: 'yī yuè', tone: [{ index: 1, type: 1 }, { index: 4, type: 4 }] },
                  translate: 'Январь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '二月',
                  pinyin: { pinyin: 'èr yuè', tone: [{ index: 1, type: 4 }, { index: 4, type: 4 }] },
                  translate: 'Февраль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三月',
                  pinyin: { pinyin: 'sān yuè', tone: [{ index: 2, type: 1 }, { index: 5, type: 4 }] },
                  translate: 'Март',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四月',
                  pinyin: { pinyin: 'sì yuè', tone: [{ index: 1, type: 4 }, { index: 4, type: 4 }] },
                  translate: 'Апрель',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五月',
                  pinyin: { pinyin: 'wǔ yuè', tone: [{ index: 1, type: 3 }, { index: 4, type: 4 }] },
                  translate: 'Май',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六月',
                  pinyin: { pinyin: 'liù yuè', tone: [{ index: 2, type: 4 }, { index: 5, type: 4 }] },
                  translate: 'Июнь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七月',
                  pinyin: { pinyin: 'qī yuè', tone: [{ index: 1, type: 1 }, { index: 4, type: 4 }] },
                  translate: 'Июль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八月',
                  pinyin: { pinyin: 'bā yuè', tone: [{ index: 1, type: 1 }, { index: 4, type: 4 }] },
                  translate: 'Август',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九月',
                  pinyin: { pinyin: 'jiǔ yuè', tone: [{ index: 1, type: 3 }, { index: 5, type: 4 }] },
                  translate: 'Сентябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十月',
                  pinyin: { pinyin: 'shí yuè', tone: [{ index: 2, type: 2 }, { index: 5, type: 4 }] },
                  translate: 'Октябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十一月',
                  pinyin: { pinyin: 'shí yī yuè', tone: [{ index: 2, type: 2 }, { index: 5, type: 1 }, { index: 8, type: 4 }] },
                  translate: 'Ноябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十二月',
                  pinyin: { pinyin: 'shí èr yuè', tone: [{ index: 2, type: 2 }, { index: 5, type: 4 }, { index: 8, type: 4 }] },
                  translate: 'Декабрь',
                  variant: 5,
                },
              },
            ],
          },
        },
        {
          id: 25,
          sysname: 'time-of-day',
          name: 'Время суток',
          drawAllowed: false,
          glyph: '候',
          description: 'Слова для обозначения различных периодов дня и ночи, а также единиц времени.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '早上',
                  pinyin: { pinyin: 'zǎo shang', tone: [{ index: 1, type: 3 }, { index: 5, type: 5 }] },
                  translate: 'Утро (раннее)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '上午',
                  pinyin: { pinyin: 'shàng wǔ', tone: [{ index: 2, type: 4 }, { index: 6, type: 3 }] },
                  translate: 'Утро (до полудня)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '中午',
                  pinyin: { pinyin: 'zhōng wǔ', tone: [{ index: 2, type: 1 }, { index: 6, type: 3 }] },
                  translate: 'Полдень',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '下午',
                  pinyin: { pinyin: 'xià wǔ', tone: [{ index: 2, type: 4 }, { index: 5, type: 3 }] },
                  translate: 'После полудня',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '晚上',
                  pinyin: { pinyin: 'wǎn shang', tone: [{ index: 1, type: 3 }, { index: 5, type: 5 }] },
                  translate: 'Вечер',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '小时',
                  pinyin: { pinyin: 'xiǎo shí', tone: [{ index: 1, type: 3 }, { index: 5, type: 2 }] },
                  translate: 'Час',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '分钟',
                  pinyin: { pinyin: 'fēn zhōng', tone: [{ index: 1, type: 1 }, { index: 5, type: 1 }] },
                  translate: 'Минута',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '秒',
                  pinyin: { pinyin: 'miǎo', tone: [{ index: 1, type: 3 }] },
                  translate: 'Секунда',
                  variant: 5,
                },
              },
            ],
          },
        },
      ],
    },
    {
      id: 6,
      sysname: 'family',
      description: 'Раздел, посвященный членам семьи и родственным связям.',
      name: 'Семья',
      glyph: '家',
      categories: [
        {
          id: 26,
          sysname: 'immediate-family',
          name: 'Ближайшие родственники',
          drawAllowed: true,
          glyph: '亲',
          description: 'Слова для обозначения самых близких членов семьи, таких как родители, братья, сестры и дети.',
          content: {
            tag: 'div',
            class: 'list',
            children: [
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '爸爸',
                  pinyin: { pinyin: 'bà ba', tone: [{ index: 1, type: 4 }, { index: 4, type: 5 }] },
                  translate: 'Папа',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妈妈',
                  pinyin: { pinyin: 'mā ma', tone: [{ index: 1, type: 1 }, { index: 4, type: 5 }] },
                  translate: 'Мама',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哥哥',
                  pinyin: { pinyin: 'gē ge', tone: [{ index: 1, type: 1 }, { index: 4, type: 5 }] },
                  translate: 'Старший брат',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '弟弟',
                  pinyin: { pinyin: 'dì di', tone: [{ index: 1, type: 4 }, { index: 4, type: 5 }] },
                  translate: 'Младший брат',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '姐姐',
                  pinyin: { pinyin: 'jiě jie', tone: [{ index: 1, type: 3 }, { index: 5, type: 5 }] },
                  translate: 'Старшая сестра',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妹妹',
                  pinyin: { pinyin: 'mèi mei', tone: [{ index: 1, type: 4 }, { index: 5, type: 5 }] },
                  translate: 'Младшая сестра',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '儿子',
                  pinyin: { pinyin: 'ér zi', tone: [{ index: 1, type: 2 }, { index: 4, type: 5 }] },
                  translate: 'Сын',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '女儿',
                  pinyin: { pinyin: 'nǚ ér', tone: [{ index: 1, type: 3 }, { index: 4, type: 2 }] },
                  translate: 'Дочь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '丈夫',
                  pinyin: { pinyin: 'zhàng fu', tone: [{ index: 2, type: 4 }, { index: 6, type: 5 }] },
                  translate: 'Муж',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妻子',
                  pinyin: { pinyin: 'qī zi', tone: [{ index: 1, type: 1 }, { index: 4, type: 5 }] },
                  translate: 'Жена',
                  variant: 5,
                },
              },
            ],
          },
        },
      ],
    },
  ],
}
