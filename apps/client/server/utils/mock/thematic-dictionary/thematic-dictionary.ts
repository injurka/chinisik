import type { ThematicDictionaryData } from '~/shared/types/models'

export const thematicDictionaryDataMock: ThematicDictionaryData = {
  catalog: [
    {
      id: 1,
      sysname: 'conversation',
      description: 'Раздел, посвященный различным аспектам общения.',
      image: '/images/thematic-dictionary/conversation.png',
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
                  pinyin: 'Nǐ hǎo',
                  translate: 'Здравствуйте',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '谢谢',
                  pinyin: 'Xiè xiè',
                  translate: 'Спасибо',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '不客气',
                  pinyin: 'Bú kè qì',
                  translate: 'Пожалуйста (в ответ на "спасибо")',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请',
                  pinyin: 'Qǐng',
                  translate: 'Пожалуйста (просьба)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '对不起',
                  pinyin: 'Duì bù qǐ',
                  translate: 'Извините',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '没关系',
                  pinyin: 'Méi guān xi',
                  translate: 'Ничего страшного',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您好',
                  pinyin: 'Nín hǎo',
                  translate: 'Здравствуйте (вежливая форма)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请问',
                  pinyin: 'Qǐng wèn',
                  translate: 'Разрешите спросить',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '劳驾',
                  pinyin: 'Láo jià',
                  translate: 'Будьте добры',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '慢走',
                  pinyin: 'Màn zǒu',
                  translate: 'Идите осторожно (прощаясь с гостем)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哪里哪里',
                  pinyin: 'Nǎ li nǎ li',
                  translate: 'Да что вы, что вы (в ответ на комплимент, скромный ответ)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请问',
                  pinyin: 'Qǐng wèn',
                  translate: 'Позвольте спросить',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '劳驾',
                  pinyin: 'Láo jià',
                  translate: 'Потрудитесь/Пожалуйста (при просьбе)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '慢走',
                  pinyin: 'Màn zǒu',
                  translate: 'Идите осторожно (при прощании)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '不好意思',
                  pinyin: 'Bù hǎo yì si',
                  translate: 'Прошу прощения (неформальное)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您',
                  pinyin: 'Nín',
                  translate: 'Вы (вежливая форма)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '辛苦了',
                  pinyin: 'Xīn kǔ le',
                  translate: 'Спасибо за труды',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '欢迎光临',
                  pinyin: 'Huān yíng guāng lín',
                  translate: 'Добро пожаловать (в магазин/ресторан)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请稍等',
                  pinyin: 'Qǐng shāo děng',
                  translate: 'Пожалуйста, подождите',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '打扰一下',
                  pinyin: 'Dǎ rǎo yī xià',
                  translate: 'Простите за беспокойство (чтобы привлечь внимание)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '久仰大名',
                  pinyin: 'Jiǔ yǎng dà míng',
                  translate: 'Давно слышал о вашей славе (при первом знакомстве)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多指教',
                  pinyin: 'Qǐng duō duō zhǐ jiào',
                  translate: 'Прошу вашего наставничества (скромная просьба)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '您先请',
                  pinyin: 'Nín xiān qǐng',
                  translate: 'Прошу вас первым (ритуал уступания дороги)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '承让了',
                  pinyin: 'Chéng ràng le',
                  translate: 'Спасибо за уступку (после победы в соревновании)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哪里哪里',
                  pinyin: 'Nǎ li nǎ li',
                  translate: 'Куда мне! (ответ на комплимент)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请用茶',
                  pinyin: 'Qǐng yòng chá',
                  translate: 'Прошу отведать чая (гостеприимство)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '幸会',
                  pinyin: 'Xìng huì',
                  translate: 'Честь познакомиться',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多包涵',
                  pinyin: 'Qǐng duō duō bāo hán',
                  translate: 'Прошу снисхождения (при возможных ошибках)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '过奖了',
                  pinyin: 'Guò jiǎng le',
                  translate: 'Вы меня перехваливаете (скромный ответ)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '敬请谅解',
                  pinyin: 'Jìng qǐng liàng jiě',
                  translate: 'Прошу понять и простить (официальные извинения)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请留步',
                  pinyin: 'Qǐng liú bù',
                  translate: 'Не провожайте меня (при уходе гостя)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '恭候光临',
                  pinyin: 'Gōng hòu guāng lín',
                  translate: 'С нетерпением ждём вашего визита (официальное приглашение)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请笑纳',
                  pinyin: 'Qǐng xiào nà',
                  translate: 'Примите с улыбкой (при вручении подарка)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '贵姓',
                  pinyin: 'Guì xìng',
                  translate: 'Ваша фамилия? (вежливый вопрос)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '失陪一下',
                  pinyin: 'Shī péi yī xià',
                  translate: 'Извините, я ненадолго отлучусь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请节哀',
                  pinyin: 'Qǐng jié āi',
                  translate: 'Примите мои соболезнования',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请赐教',
                  pinyin: 'Qǐng cì jiào',
                  translate: 'Прошу ваших наставлений (к старшему)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '一路平安',
                  pinyin: 'Yí lù píng ān',
                  translate: 'Счастливого пути (пожелание при проводах)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请多多关照',
                  pinyin: 'Qǐng duō duō guān zhào',
                  translate: 'Прошу вашего покровительства (при устройстве на работу)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '请自便',
                  pinyin: 'Qǐng zì biàn',
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
      image: '/images/thematic-dictionary/travel.png',
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
      image: '/images/thematic-dictionary/food.png',
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
      image: '/images/thematic-dictionary/color.png',
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
                  pinyin: 'Bái',
                  translate: 'Белый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '黑',
                  pinyin: 'Hēi',
                  translate: 'Черный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '红',
                  pinyin: 'Hóng',
                  translate: 'Красный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '绿',
                  pinyin: 'Lǜ',
                  translate: 'Зеленый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '蓝',
                  pinyin: 'Lán',
                  translate: 'Синий/Голубой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '黄',
                  pinyin: 'Huáng',
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
                  pinyin: 'Chéng',
                  translate: 'Оранжевый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '紫',
                  pinyin: 'Zǐ',
                  translate: 'Фиолетовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '粉',
                  pinyin: 'Fěn',
                  translate: 'Розовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '灰',
                  pinyin: 'Huī',
                  translate: 'Серый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '棕',
                  pinyin: 'Zōng',
                  translate: 'Коричневый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '青',
                  pinyin: 'Qīng',
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
                  pinyin: 'Jīn',
                  translate: 'Золотой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '银',
                  pinyin: 'Yín',
                  translate: 'Серебряный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '咖',
                  pinyin: 'Kā',
                  translate: 'Кофейный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '珊',
                  pinyin: 'Shān',
                  translate: 'Коралловый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '米',
                  pinyin: 'Mǐ',
                  translate: 'Бежевый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '栗',
                  pinyin: 'Lì',
                  translate: 'Каштановый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '藏',
                  pinyin: 'Zàng',
                  translate: 'Темно-синий (индиго)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '翡',
                  pinyin: 'Fěi',
                  translate: 'Нефритовый/Изумрудный',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '桃',
                  pinyin: 'Táo',
                  translate: 'Персиковый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '墨',
                  pinyin: 'Mò',
                  translate: 'Цвет туши (глубокий черный)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '朱',
                  pinyin: 'Zhū',
                  translate: 'Киноварный (ярко-красный)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '橄',
                  pinyin: 'Gǎn',
                  translate: 'Оливковый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '酒',
                  pinyin: 'Jiǔ',
                  translate: 'Бордовый',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '天',
                  pinyin: 'Tiān',
                  translate: 'Небесно-голубой',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '玫',
                  pinyin: 'Méi',
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
      image: '/images/thematic-dictionary/numbers.png',
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
                  pinyin: 'Líng',
                  translate: 'Ноль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '一',
                  pinyin: 'Yī',
                  translate: 'Один',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '二',
                  pinyin: 'Èr',
                  translate: 'Два',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三',
                  pinyin: 'Sān',
                  translate: 'Три',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四',
                  pinyin: 'Sì',
                  translate: 'Четыре',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五',
                  pinyin: 'Wǔ',
                  translate: 'Пять',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六',
                  pinyin: 'Liù',
                  translate: 'Шесть',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七',
                  pinyin: 'Qī',
                  translate: 'Семь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八',
                  pinyin: 'Bā',
                  translate: 'Восемь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九',
                  pinyin: 'Jiǔ',
                  translate: 'Девять',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十',
                  pinyin: 'Shí',
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
                  pinyin: 'Èr shí',
                  translate: 'Двадцать',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三十',
                  pinyin: 'Sān shí',
                  translate: 'Тридцать',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四十',
                  pinyin: 'Sì shí',
                  translate: 'Сорок',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五十',
                  pinyin: 'Wǔ shí',
                  translate: 'Пятьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六十',
                  pinyin: 'Liù shí',
                  translate: 'Шестьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七十',
                  pinyin: 'Qī shí',
                  translate: 'Семьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八十',
                  pinyin: 'Bā shí',
                  translate: 'Восемьдесят',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九十',
                  pinyin: 'Jiǔ shí',
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
                  pinyin: 'Bǎi',
                  translate: 'Сто',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '千',
                  pinyin: 'Qiān',
                  translate: 'Тысяча',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '万',
                  pinyin: 'Wàn',
                  translate: 'Десять тысяч',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '亿',
                  pinyin: 'Yì',
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
      image: '/images/thematic-dictionary/time.png',
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
                  pinyin: 'Xīng qī yī',
                  translate: 'Понедельник',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期二',
                  pinyin: 'Xīng qī èr',
                  translate: 'Вторник',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期三',
                  pinyin: 'Xīng qī sān',
                  translate: 'Среда',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期四',
                  pinyin: 'Xīng qī sì',
                  translate: 'Четверг',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期五',
                  pinyin: 'Xīng qī wǔ',
                  translate: 'Пятница',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期六',
                  pinyin: 'Xīng qī liù',
                  translate: 'Суббота',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '星期日',
                  pinyin: 'Xīng qī rì',
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
                  pinyin: 'Yī yuè',
                  translate: 'Январь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '二月',
                  pinyin: 'Èr yuè',
                  translate: 'Февраль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '三月',
                  pinyin: 'Sān yuè',
                  translate: 'Март',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '四月',
                  pinyin: 'Sì yuè',
                  translate: 'Апрель',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '五月',
                  pinyin: 'Wǔ yuè',
                  translate: 'Май',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '六月',
                  pinyin: 'Liù yuè',
                  translate: 'Июнь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '七月',
                  pinyin: 'Qī yuè',
                  translate: 'Июль',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '八月',
                  pinyin: 'Bā yuè',
                  translate: 'Август',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '九月',
                  pinyin: 'Jiǔ yuè',
                  translate: 'Сентябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十月',
                  pinyin: 'Shí yuè',
                  translate: 'Октябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十一月',
                  pinyin: 'Shí yī yuè',
                  translate: 'Ноябрь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '十二月',
                  pinyin: 'Shí èr yuè',
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
                  pinyin: 'Zǎo shang',
                  translate: 'Утро (раннее)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '上午',
                  pinyin: 'Shàng wǔ',
                  translate: 'Утро (до полудня)',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '中午',
                  pinyin: 'Zhōng wǔ',
                  translate: 'Полдень',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '下午',
                  pinyin: 'Xià wǔ',
                  translate: 'После полудня',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '晚上',
                  pinyin: 'Wǎn shang',
                  translate: 'Вечер',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '小时',
                  pinyin: 'Xiǎo shí',
                  translate: 'Час',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '分钟',
                  pinyin: 'Fēn zhōng',
                  translate: 'Минута',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '秒',
                  pinyin: 'Miǎo',
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
      image: '/images/thematic-dictionary/family.png',
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
                  pinyin: 'Bà ba',
                  translate: 'Папа',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妈妈',
                  pinyin: 'Mā ma',
                  translate: 'Мама',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '哥哥',
                  pinyin: 'Gē ge',
                  translate: 'Старший брат',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '弟弟',
                  pinyin: 'Dì di',
                  translate: 'Младший брат',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '姐姐',
                  pinyin: 'Jiě jie',
                  translate: 'Старшая сестра',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妹妹',
                  pinyin: 'Mèi mei',
                  translate: 'Младшая сестра',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '儿子',
                  pinyin: 'Ér zi',
                  translate: 'Сын',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '女儿',
                  pinyin: 'Nǚ ér',
                  translate: 'Дочь',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '丈夫',
                  pinyin: 'Zhàng fu',
                  translate: 'Муж',
                  variant: 5,
                },
              },
              {
                tag: 'HieroglyphWord',
                props: {
                  glyph: '妻子',
                  pinyin: 'Qī zi',
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
