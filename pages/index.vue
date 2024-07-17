<script setup lang="ts">
import htmlToDOM from 'html-dom-parser'
import { Word } from '~/components/domain/word'
import { useWordStore } from '~/components/domain/word/store/word.store'

const str = `
<div class="description">
  <h2>214-ть радикалов, чтобы управлять всеми иероглифами</h2>
  <p>Знание 214-ти радикалов облегчит вам процесс изучения китайского языка. Почему? </p>
  <p>Потому что, когда вы знаете радикалы, вам легче запомнить, как они сочетаются друг с другом, образуя более сложные символы. </p>
  <p>Радикалы могут выполнять одну из следующих функций или обе:</p>
  <ul>
    <li><em>семантический</em>, предоставление части или всего смысла;</li>
    <li><em>фонетика</em>, придание звука персонажу или чему-то очень близкому к нему.</li>
  </ul>
  <p>
    По-китайски ключи именуются <span data-hieroglyph glyph="部首" pinyin="bùshǒu" translate="голова раздела" />
  </p>

  <span>
    Также китайские ключи часто называют “радикалами” (от английского radicals). <span data-hieroglyph glyph="康熙字典" />
  </span>

  <p>
    На протяжении истории количество иероглифов в таблицах ключей варьировалось. Наиболее широкое распространение получила система из словаря Канси (康熙字典), насчитывающая 214 иероглифических ключей.
  </p>
</div>
`

const dom = htmlToDOM(str)

function renderNode(node: any): any {
  if (node.type === 'text') {
    return node.data
  }

  if (node.type === 'tag') {
    const children = node.children ? node.children.map(renderNode) : []

    if (Object.prototype.hasOwnProperty.call(node.attribs, 'data-hieroglyph')) {
      const { glyph, pinyin, translate } = node.attribs

      return h(Word, { glyph, pinyin, translate })
    }

    return h(node.name, node.attribs, children)
  }

  return null
}

const renderedNodes = dom.map(renderNode).filter(node => node !== null)
</script>

<template>
  <div>
    <div>
      <button @click="useWordStore().variant = 0">
        Variant 0
      </button>
      <br>
      <button @click="useWordStore().variant = 1">
        Variant 1
      </button>
      <br>
      <button @click="useWordStore().variant = 2">
        Variant 2
      </button>
      <br>
      <button @click="useWordStore().variant = 3">
        Variant 3
      </button>
      <br>
      <button @click="useWordStore().variant = 4">
        Variant 4
      </button>
    </div>

    <div v-for="(node, index) in renderedNodes" :key="index">
      <component :is="node" v-if="typeof node !== 'string'" />
      <span v-else>{{ node }}</span>
    </div>
  </div>
</template>
