export const textMock = {
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
          },
        },
        {
          tag: 'HieroglyphWord',
          class: 'inline',
          props: {
            glyph: '着',
            pinyin: 'zhe',
            translate: 'носить',
          },
        },
        {
          tag: 'HieroglyphWord',
          class: 'inline',
          props: {
            glyph: '过',
            pinyin: 'guò',
            translate: 'проходить',
          },
        },
      ],
    },
    { tag: 'br' },
    {
      tag: 'div',
      children: [
        {
          tag: 'HieroglyphWord',
          class: 'example',
          props: {
            glyph: '你想不想看电影',
            pinyin: 'nǐ xiǎng bù xiǎng kàn diànyǐng',
            translate: 'Не хочешь посмотреть фильм?',
          },
        },
        {
          tag: 'HieroglyphWord',
          class: 'example',
          props: {
            glyph: '这儿可不可以抽烟',
            pinyin: 'zhèér kěbùkěyǐ chōuyān',
            translate: 'Можно ли здесь курить?',
          },
        },
      ],
    },
    { tag: 'br' },
    //* {
    //*   tag: 'HieroglyphWord',
    //*   props: {
    //*     glyph: '想',
    //*     pinyin: 'xiǎng',
    //*     translate: 'хотеть, собираться',
    //*   },
    //* },
    {
      tag: 'div',
      children: [
        {
          tag: 'HieroglyphWord',
          class: 'example block',
          props: {
            glyph: '我想喝咖啡',
            pinyin: 'wǒ xiǎng hē kāfēi',
            translate: 'Я хочу выпить кофе.',
          },
        },
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
              },
            },
            {
              tag: 'HieroglyphWord',
              class: 'example',
              props: {
                glyph: '不想',
                pinyin: 'bù xiǎng',
                translate: 'Не хочу',
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
          class: 'block fg-secondary',
          children: 'Не путайте с глаголом «думать, хотеть, скучать»:',
        },
        {
          tag: 'HieroglyphWord',
          props: {
            glyph: '我想回家',
            pinyin: 'wǒ xiǎng huíjiā',
            translate: 'Я хочу вернуться домой.',
          },
        },
        {
          tag: 'HieroglyphWord',
          props: {
            glyph: '想',
            pinyin: 'xiǎng',
            translate: 'модальный глагол, после него стоит глагол.',
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
          },
        },
        {
          tag: 'HieroglyphWord',
          props: {
            glyph: '想',
            pinyin: 'xiǎng',
            translate: 'глагол «скучать», после него стоит существительное.',
          },
        },
      ],
    },
  ],
}
