<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import type { IHieroglyphWordVariousProps } from '~/components/domain/hieroglyph-word'
import { JsonToDom } from '~/components/domain/json-to-dom'
import type { JsonToDomChildren } from '~/components/domain/json-to-dom'
import type { Tone } from '~/components/domain/pinyin-text/types'

const glyphs: SplitedGlyphs = [
  {
    type: 'sentence',
    glyph: '打电话',
    pinyin: [
      {
        value: 'da',
        toneType: 3,
        toneIndex: 1,
      },
      {
        value: 'dian',
        toneType: 4,
        toneIndex: 2,
      },
      {
        value: 'hua',
        toneType: 4,
        toneIndex: 2,
      },
    ],
    translate: 'позвонить по телефону',
    transcription: 'да диан хуа',
    components: [
      '打',
      '电话',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '打',
    pinyin: 'da',
    toneType: 3,
    toneIndex: 1,
    translate: [
      {
        pos: 'verb',
        value: 'звонить',
        freq: 0.8,
      },
      {
        pos: 'verb',
        value: 'бить',
        freq: 0.5,
      },
    ],
    transcription: 'да',
    components: [
      '扌',
      '丁',
    ],
  },
  {
    type: 'word',
    glyph: '电话',
    pinyin: [
      {
        value: 'dian',
        toneType: 4,
        toneIndex: 2,
      },
      {
        value: 'hua',
        toneType: 4,
        toneIndex: 2,
      },
    ],
    translate: 'телефон',
    transcription: 'диан хуа',
    components: [
      '电',
      '话',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '电',
    pinyin: 'dian',
    toneType: 4,
    toneIndex: 2,
    translate: [
      {
        pos: 'noun',
        value: 'телефон',
        freq: 0.9,
      },
      {
        pos: 'noun',
        value: 'электричество',
        freq: 0.7,
      },
    ],
    transcription: 'диан',
    components: [
      '曰',
      '乚',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '话',
    pinyin: 'hua',
    toneType: 4,
    toneIndex: 2,
    translate: [
      {
        pos: 'noun',
        value: 'разговор',
        freq: 0.9,
      },
      {
        pos: 'noun',
        value: 'речь',
        freq: 0.8,
      },
    ],
    transcription: 'хуа',
    components: [
      '讠',
      '舌',
    ],
  },
]

const description: JsonToDomChildren = {
  tag: 'div',
  children: 'В данном разделе вы можете раздробить какой либо иероглиф на его составлющие. ',
}

const typeCopmonentMapping = {
  sentence: 'Предложение',
  hieroglyph: 'Иероглиф',
  word: 'Слово',
  key: 'Ключ',
}

const valueSpliting = ref('')
const typeSpliting = ref(0)

function calculatePrefixSum(pinyin: { value: string, toneIndex: number }[]): number[] {
  return pinyin.reduce((acc, curr, index) => {
    if (index) {
      const prevPinyin = pinyin[index - 1]
      const prevMissingLength = prevPinyin.value.length - (prevPinyin.toneIndex + 1)
      const prevLength = acc[index - 1] + prevMissingLength
      acc.push(curr.toneIndex + prevLength + 2)
    }
    else {
      acc.push(curr.toneIndex)
    }
    return acc
  }, [] as number[])
}

function adapterSentence(value: SplitGlyphsSentence): IHieroglyphWordVariousProps {
  const prefixSum = calculatePrefixSum(value.pinyin)

  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin.map(m => m.value).join(' '),
      tone: value.pinyin.map((m, index) => ({
        index: prefixSum[index],
        type: m.toneType as unknown as Tone,
      })),
    } as unknown as IHieroglyphWordVariousProps['pinyin'],
    translate: value.translate,
  }
}

function adapterWord(value: SplitGlyphsWord): IHieroglyphWordVariousProps {
  const prefixSum = calculatePrefixSum(value.pinyin)

  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin.map(m => m.value).join(' '),
      tone: value.pinyin.map((m, index) => ({
        index: prefixSum[index],
        type: m.toneType as unknown as Tone,
      })),
    } as unknown as IHieroglyphWordVariousProps['pinyin'],
    translate: value.translate,
  }
}

function adapterHieroglyph(value: SplitGlyphsHieroglyph): IHieroglyphWordVariousProps {
  return {
    glyph: value.glyph,
    pinyin: {
      pinyin: value.pinyin,
      tone: {
        index: value.toneIndex,
        type: value.toneType,
      },
    } as unknown as IHieroglyphWordVariousProps['pinyin'],
    translate: value.translate[0].value,
  }
}

function adapter(value: SplitGlyphsSentence | SplitGlyphsWord | SplitGlyphsHieroglyph): IHieroglyphWordVariousProps {
  switch (value.type) {
    case 'sentence':
      return adapterSentence(value)
    case 'word':
      return adapterWord(value)
    case 'hieroglyph':
      return adapterHieroglyph(value)
    default:
      throw new Error(`Unknown glyph type`)
  }
}

definePageMeta({ layout: 'base' })
</script>

<template>
  <section class="content">
    <JsonToDom
      :node="description!"
    />

    <div class="control">
      <v-text-field
        v-model="valueSpliting"
        label="Иероглифы для разброра"
        variant="outlined"
        hide-details="auto"
        prepend-inner-icon="mdi-rhombus-split"
      />

      <v-btn-toggle
        v-model="typeSpliting"
        divided
        variant="outlined"
        class="control-types"
      >
        <v-btn>
          Предложение
        </v-btn>
        <v-btn>
          Слово
        </v-btn>
        <v-btn>
          Иероглиф
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="splited">
      <div v-for="(item, index) in glyphs" :key="index" class="splited-item">
        <div class="divider">
          <div class="divider-line" />
          <div class="divider-content">
            <div class="divider-content-title">
              #{{ index }}
            </div>
            <div class="divider-content-title">
              {{ typeCopmonentMapping[item.type] }}
            </div>
            <div class="divider-content-title right">
              {{ item.glyph }}
            </div>
          </div>
        </div>

        <!-- <HieroglyphWord :="adapter(item)" /> -->

        <template v-if="item.type === 'hieroglyph'">
          <div class="divider">
            <div class="divider-line" />
            <div class="divider-content">
              <div class="divider-content-title">
                #{{ index }}
              </div>
              <div class="divider-content-title">
                {{ typeCopmonentMapping.key }}
              </div>
              <div class="divider-content-title right">
                {{ item.glyph }}
              </div>
            </div>
          </div>

          <div v-for="key in item.components" :key="key">
            {{ key }}
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .control {
    margin: 16px 0;
    border-left: 2px solid var(--border-secondary-color);
    border-right: 2px solid var(--border-secondary-color);
    padding: 10px 24px;

    @include mobile() {
      border: none;
      padding: 0;
    }

    &-types {
      margin: 8px 0;
      width: 100%;
      :deep(.v-btn) {
        flex-grow: 1;
        color: var(--fg-primary-color);
        font-size: 0.8rem !important;

        @include mobile() {
          font-size: 0.7rem !important;
        }
      }
    }
  }

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 16px 6px;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .splited {
    display: flex;
    flex-direction: column;

    &-item {
      border-radius: 10px;
      padding: 5px 10px;
    }
  }
}

.divider {
  position: relative;
  margin: 8px 0;
  display: flex;
  height: 25px;

  &-line {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 12px;
    bottom: 0;
    right: 0;
    background-color: var(--border-primary-color);
    height: 1px;
  }

  &-content {
    display: flex;
    position: relative;
    z-index: 2;
    padding: 0 8px;
    width: 100%;

    &-title {
      margin-left: 10px;

      &.right {
        margin-left: auto;
      }
    }

    > div {
      padding: 0 8px;
      background-color: var(--bg-primary-color);
      color: var(--fg-tertiary-color);
    }
  }
}
</style>
