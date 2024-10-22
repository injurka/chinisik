import type { JsonToDomChildren } from '~/components/domain/json-to-dom'

export const mockDescriptionPinyin = {
  tag: 'div',
  class: 'description',
  children: [
    {
      tag: 'h2',
      children: 'Китайские тоны и их обозначения',
    },
    {
      tag: 'p',
      children: 'Каждый китайский иероглиф представляет собой отдельный слог, который может быть произнесен в одной из пяти тональностей. Именно тоны китайского языка представляют наибольшую трудность для изучения, поскольку аналогов на родном языке обычно нет. Тем не менее, после определенной, иногда короткой, практики, в зависимости от слуха ученика, наступает момент, когда тона начинают различаться на слух. Для написания китайских слогов с учетом тонов существует система пиньинь, основанная на латинском алфавите.',
    },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [
            {
              tag: 'b',
              children: 'Первый тон',
            },
            {
              tag: 'span',
              children: ' - произносится высоко и ровно, как писк азбуки Морзе.  Обозначается прямой линией над буквой ',
            },
            {
              tag: 'PinyinText',
              props: {
                pinyin: 'ma',
                tone: [{
                  index: 1,
                  type: 1,
                }],
              },
            },
            {
              tag: 'span',
              children: ' или просто ma1.',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'b',
              children: 'Второй тон',
            },
            {
              tag: 'span',
              children: ' - переход от среднего к высокому звучит как странный вопрос.  Обозначается ',
            },
            {
              tag: 'PinyinText',
              props: {
                pinyin: 'ma',
                tone: [{
                  index: 1,
                  type: 2,
                }],
              },
            },
            {
              tag: 'span',
              children: ' или просто ma2.',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'b',
              children: 'Третий тон',
            },
            {
              tag: 'span',
              children: ' - низкое падение, а затем подъем до среднего уровня.  Тон больше похож на русское междометие \'Ну!?\'.  Обозначается ',
            },
            {
              tag: 'PinyinText',
              props: {
                pinyin: 'ma',
                tone: [{
                  index: 1,
                  type: 3,
                }],
              },
            },
            {
              tag: 'span',
              children: ' или просто ma3.',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'b',
              children: 'Четвёртый тон',
            },
            {
              tag: 'span',
              children: ' - падение с высоты на низ, звучит как своего рода утверждение. Обозначается ',
            },
            {
              tag: 'PinyinText',
              props: {
                pinyin: 'ma',
                tone: [{
                  index: 1,
                  type: 4,
                }],
              },
            },
            {
              tag: 'span',
              children: ' или просто ma4.',
            },
          ],
        },
        {
          tag: 'li',
          children: [
            {
              tag: 'b',
              children: 'Слог без тона',
            },
            {
              tag: 'span',
              children: ' - никак не обозначается и произносится без тональности ',
            },
            {
              tag: 'PinyinText',
              props: {
                pinyin: 'ma',
                tone: [{
                  index: 1,
                  type: 0,
                }],
              },
            },
          ],
        },
      ],
    },
  ],
} satisfies JsonToDomChildren
