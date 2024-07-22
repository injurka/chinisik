<script lang="ts" setup>
import { KeyHieroglyph, KeyHieroglyphInfo } from '~/components/modules/keys'
import type { ControlHieroglyphKey } from '~/components/modules/keys/store/keys.store'
import { JsonToDom, type JsonToDomChildren } from '~/components/domain/json-to-dom'

const store = useStore(['keys'])
const { hieroglyphKeys, isLoadingContent, control } = storeToRefs(store.keys)
const { toggleControl } = store.keys

await store.keys.getAllKeys()

//* Expanded hieroglyph key
const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}
//*

const descriptionNodes = {
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
} as JsonToDomChildren

const controls: { key: keyof ControlHieroglyphKey, label: string }[] = [{
  key: 'isPinyin',
  label: 'Пиньин',
}, {
  key: 'isTranslate',
  label: 'Перевод',
}, {
  key: 'isTranscription',
  label: 'Транскрипция',
}, {
  key: 'isPinyinColored',
  label: 'Цветной пиньин',
}]

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

    <div class="controls">
      <div
        v-for="item in controls" :key="item.key"
        class="controls-item"
        :class="{ actived: control[item.key] }"
        @click="toggleControl(item.key)"
      >
        <button class="controls-button">
          {{ item.label }}
        </button>
        <Icon class="controls-selected" name="Checked" size="20" />
      </div>
    </div>

    <div class="list">
      <Icon v-if="isLoadingContent" name="line-md:loading-loop" class="loader" />
      <KeyHieroglyph
        v-for="(item, key) in hieroglyphKeys"
        v-else
        :key="key + 1"
        :hieroglyph="item"
        :control
        @on-expand="onHieroglyphExpand"
      />
    </div>
    <KeyHieroglyphInfo
      v-model="isExpandedDialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';

  @include mobile() {
    padding: 12px;
  }

  .description {
    font-size: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 6px;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    margin: 25px 0;

    &-item {
      position: relative;

      background-color: var(--bg-secondary-color);
      border: 2px solid var(--border-secondary-color);
      color: var(--fg-primary-color);

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px 10px;
      border-radius: 10px;
      min-width: 140px;
      font-size: 0.9rem;
      text-align: center;
      cursor: pointer;

      &.actived {
        border: 2px solid var(--border-accent-color);
        box-shadow: 0 0 3px var(--bg-accent-color);

        .controls {
          &-selected {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            fill: var(--border-accent-color);
          }
        }
      }
    }

    &-button {
      cursor: pointer;
      color: var(--fg-primary-color);
    }

    &-selected {
      position: absolute;
      top: -10px;
      right: -8px;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease-out;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding-bottom: 64px;
  }
}

.loader {
  margin: 32px 0;
  font-size: 3rem;
  color: var(--bg-accent-color);
}
</style>
