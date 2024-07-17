<script setup>
import { PinyinTable } from '~/components/modules/pinyin/index'

const store = useStore(['pinyin'])
const { finals, initials, initialWithFinal } = storeToRefs(store.pinyin)

await store.pinyin.getPinyin()

definePageMeta({ layout: 'base' })
</script>

<template>
  <div class="pinyin">
    <div class="pinyin-description">
      <p>
        Каждый китайский иероглиф представляет собой отдельный слог, который может быть произнесен в одной из пяти тональностей.  Именно тоны китайского языка представляют наибольшую трудность для изучения, поскольку аналогов на родном языке обычно нет.  Тем не менее, после определенной, иногда короткой, практики, в зависимости от слуха ученика, наступает момент, когда тона начинают различаться на слух.  Для написания китайских слогов с учетом тонов существует система пиньинь, основанная на латинском алфавите.
        <ol>
          <p>
            <b>Первый тон</b>
            - произносится высоко и ровно, как писк азбуки Морзе.  Обозначается прямой линией над буквой mā или просто ma1.
            <br>
            <b>Второй тон</b>
            - переход от среднего к высокому звучит как странный вопрос.  Обозначается ma или ma2.
            <br>
            <b>Третий тон</b>
            - низкое падение, а затем подъем до среднего уровня.  Тон больше похож на русское междометие 'Ну!?'.  Обозначается ma или ma3.
            <br>
            <b>Четвёртый тон</b>
            - падение с высоты на низ, звучит как своего рода утверждение. Обозначается mà или ma4.
            <br>
            <b>Слог без тона</b>
            - никак не обозначается и произносится без тональности.
          </p>
        </ol>
      </p>
    </div>
    <PinyinTable
      :finals
      :initials
      :initial-with-final
    />
  </div>
</template>

<style lang="scss" scoped>
.pinyin {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 5px;
}

.pinyin-description {
  font-size: 1rem;
  max-width: 1200px;
  padding: 16px 6px;

  @include mobile {
    font-size: 0.9rem;
  }
}
</style>
