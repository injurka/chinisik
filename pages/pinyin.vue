<script setup lang="ts">
import { JsonToDom, type JsonToDomChildren } from '~/components/domain/json-to-dom'
import { PinyinTable } from '~/components/modules/pinyin/index'

const store = useStore(['pinyin'])
const { finals, initials, initialWithFinal } = storeToRefs(store.pinyin)

await store.pinyin.getPinyin()

const descriptionNodes = {
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
} as JsonToDomChildren

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content">
    <JsonToDom :node="descriptionNodes" />
    <PinyinTable
      :finals
      :initials
      :initial-with-final
    />
  </section>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Rubik';

  width: 100%;
  padding: 16px;

  @include mobile() {
    padding: 2px;
  }

  .description {
    font-size: 1rem;
    max-width: 1200px;
    padding: 18px 14px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
</style>
