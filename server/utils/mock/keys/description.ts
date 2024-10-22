import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

export const mockDescriptionHieroglyphKeys = {
  tag: 'div',
  class: 'description',
  children: [
    {
      tag: 'h2',
      children: '214-ть радикалов, чтобы управлять всеми иероглифами',
    },
    {
      tag: 'p',
      children: 'Знание 214-ти радикалов облегчит вам процесс изучения китайского языка. Почему?',
    },
    {
      tag: 'p',
      children: 'Потому что, когда вы знаете радикалы, вам легче запомнить, как они сочетаются друг с другом, образуя более сложные символы.',
    },
    {
      tag: 'p',
      children: 'Радикалы могут выполнять одну из следующих функций или обе:',
    },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [
            {
              tag: 'em',
              children: 'семантический',
            },
            {
              tag: 'span',
              children: ', предоставление части или всего смысла;',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'em',
              children: 'фонетика',
            },
            {
              tag: 'span',
              children: ', придание звука персонажу или чему-то очень близкому к нему.',
            },
          ],
        },
      ],
    },
    {
      tag: 'p',
      children: [
        {
          tag: 'span',
          children: 'По-китайски ключи именуются ',
        },
        {
          tag: 'HieroglyphWord',
          props: {
            glyph: '部首',
            pinyin: {
              pinyin: 'bushou',
              tone: [{
                index: 1,
                type: 1,
              }, {
                index: 4,
                type: 3,
              }],
            },
            variant: 2,
          },
        },
        {
          tag: 'span',
          children: ' дословно “голова раздела”.',
        },
      ],
    },
    {
      tag: 'span',
      children: 'Также китайские ключи часто называют “радикалами” (от английского radicals). ',
    },
    {
      tag: 'p',
      children: [{
        tag: 'span',
        children: 'На протяжении истории количество иероглифов в таблицах ключей варьировалось. Наиболее широкое распространение получила система из словаря Канси ',
      }, {
        tag: 'HieroglyphWord',
        props: {
          glyph: '康熙字典',
          pinyin: {
            pinyin: 'kangxi zidian',
            tone: [{
              index: 1,
              type: 1,
            }, {
              index: 5,
              type: 1,
            }, {
              index: 8,
              type: 4,
            }, {
              index: 11,
              type: 3,
            }],
          },
          variant: 2,
          translate: 'Словарь канси',
        },
      }, {
        tag: 'span',
        children: ' , насчитывающая 214 иероглифических ключей.',
      }],
    },
  ],
} satisfies JsonToDomChildren
