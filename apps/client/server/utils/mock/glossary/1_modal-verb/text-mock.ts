export const textMock = {
  brief: {
    tag: 'div',
    children: [
      {
        tag: 'HieroglyphWord',
        props: {
          glyph: '想',
          pinyin: 'xiǎng',
          translate: 'хотеть, собираться',
          settings: {
            layout: 'card',
            showPinyin: true,
            showTranslation: true,
          },
        },
      },
    ],
  },
  main: {
    tag: 'div',
    children: [
      {
        tag: 'div',
        class: 'text',
        children: [
          {
            tag: 'span',
            children: 'Благодаря глаголам, мы узнаем, что происходит. Благодаря модальным глаголам, мы показываем наше отношение. «Я плаваю» — не то же самое, что «я умею/могу плавать», «мне следует плавать». Модальные глаголы в китайском языке почти никогда не объединяются с существительными. Появляясь в предложении, они притягивают на себя все внимание и даже становятся сильнее грамматически, чем все остальные члены предложения. Так, например, модальные глаголы не удваиваются, не могут употребляться с ',
          },
          {
            tag: 'HieroglyphWord',
            class: 'inline',
            props: {
              glyph: '了',
              pinyin: 'le',
              translate: 'понимать',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'HieroglyphWord',
            class: 'inline',
            props: {
              glyph: '着',
              pinyin: 'zhe',
              translate: 'носить',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'HieroglyphWord',
            class: 'inline',
            props: {
              glyph: '过',
              pinyin: 'guò',
              translate: 'проходить',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'span',
            children: 'Если мы хотим задать вопрос с помощью повторения глагола, повторять мы будем именно модальный глагол: ',
          },
        ],
      },
      {
        tag: 'div',
        class: 'mt-4',
        children: [
          {
            tag: 'HieroglyphWord',
            class: 'example',
            props: {
              glyph: '你想不想看电影',
              pinyin: 'nǐ xiǎng bù xiǎng kàn diànyǐng',
              translate: 'Не хочешь посмотреть фильм?',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          { tag: 'br' },
          {
            tag: 'HieroglyphWord',
            class: 'example',
            props: {
              glyph: '这儿可不可以抽烟',
              pinyin: 'zhèér kěbùkěyǐ chōuyān',
              translate: 'Можно ли здесь курить?',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
        ],
      },
      { tag: 'hr' },
      {
        tag: 'HieroglyphWord',
        props: {
          glyph: '想',
          pinyin: 'xiǎng',
          translate: 'хотеть, собираться',
          settings: {
            layout: 'card',
            showPinyin: true,
            showTranslation: true,
          },
        },
      },
      {
        tag: 'div',
        class: 'mt-4',
        children: [
          {
            tag: 'HieroglyphWord',
            class: 'example',
            props: {
              glyph: '我想喝咖啡',
              pinyin: 'wǒ xiǎng hē kāfēi',
              translate: 'Я хочу выпить кофе.',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          { tag: 'br' },
          {
            tag: 'span',
            class: 'inline',
            children: [
              {
                tag: 'HieroglyphWord',
                class: 'example',
                props: {
                  glyph: '我想去北京旅游',
                  pinyin: 'wǒ xiǎng qù běijīng lǚyóu',
                  translate: 'Я хочу (собираюсь) поехать путешествовать в Пекин',
                  settings: {
                    layout: 'inline',
                    showPinyin: true,
                    showTranslation: true,
                  },
                },
              },
              {
                tag: 'HieroglyphWord',
                class: 'example',
                props: {
                  glyph: '不想',
                  pinyin: 'bù xiǎng',
                  translate: 'Не хочу',
                  settings: {
                    layout: 'inline',
                    showPinyin: true,
                    showTranslation: true,
                  },
                },
              },
            ],
          },
        ],
      },
      {
        tag: 'br',
      },
      {
        tag: 'span',
        class: 'warn',
        children: [
          {
            tag: 'em',
            class: 'block fg-secondary mb-2',
            children: 'Не путайте с глаголом «думать, хотеть, скучать»:',
          },
          {
            tag: 'HieroglyphWord',
            props: {
              glyph: '我想回家',
              pinyin: 'wǒ xiǎng huíjiā',
              translate: 'Я хочу вернуться домой.',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'HieroglyphWord',
            props: {
              glyph: '想',
              pinyin: 'xiǎng',
              translate: 'модальный глагол, после него стоит глагол.',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'br',
          },
          {
            tag: 'HieroglyphWord',
            props: {
              glyph: '我想家',
              pinyin: 'wǒ xiǎng jiā',
              translate: 'Я скучаю по дому.',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
          {
            tag: 'HieroglyphWord',
            props: {
              glyph: '想',
              pinyin: 'xiǎng',
              translate: 'глагол «скучать», после него стоит существительное.',
              settings: {
                layout: 'inline',
                showPinyin: true,
                showTranslation: true,
              },
            },
          },
        ],
      },
    ],
  },
}
