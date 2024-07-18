<script setup lang="ts">
import type { JsonToDomChildren } from '~/components/domain/json-to-dom'
import { JsonToDom } from '~/components/domain/json-to-dom'
import {
  type HieroglyphWordVariant,
  useHieroglyphWordStore,
} from '~/components/domain/hieroglyph-word'

const json = {
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
        // {
        //   tag: 'PinyinText',
        //   props: {
        //     colored: true,
        //     pinyin: 'yi',
        //     toneIndex: 1,
        //     toneType: 3,
        //   },
        // },
        {
          tag: 'HieroglyphWord',
          props: {
            glyph: '部首',
            pinyin: {
              colored: true,
              pinyin: 'yi',
              toneIndex: 1,
              toneType: 3,
            },
            variant: 2,
          },
        },
      ],
    },
    {
      tag: 'p',
      children: 'На протяжении истории количество иероглифов в таблицах ключей варьировалось. Наиболее широкое распространение получила система из словаря Канси (康熙字典), насчитывающая 214 иероглифических ключей.',
    },
  ],
} as JsonToDomChildren

definePageMeta({ layout: 'base' })

const variants = [0, 1, 2, 3, 4] as HieroglyphWordVariant[]
</script>

<template>
  <div>
    <button
      v-for="variant in variants"
      :key="variant"
      @click="useHieroglyphWordStore().variant = variant"
    >
      Variant {{ variant }}
    </button>

    <hr>

    <JsonToDom :node="json" />
  </div>
</template>
