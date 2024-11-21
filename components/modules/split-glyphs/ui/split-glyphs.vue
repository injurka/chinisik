<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
import type { IHieroglyphWordVariousProps } from '~/components/domain/hieroglyph-word'
import type { Tone } from '~/components/domain/pinyin-text/types'
import { ammountSpacing } from '../constant'

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

const typeCopmonentMapping = {
  sentence: 'Предложение',
  hieroglyph: 'Иероглиф',
  word: 'Слово',
  key: 'Ключ',
}

const control = reactive({
  value: '',
  type: 0,
})
const deep = ref<number>(0)

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

function adapter(value: BaseSplitGlyphs): IHieroglyphWordVariousProps {
  switch (value.type) {
    case 'sentence':
      return adapterSentence(value as SplitGlyphsSentence)
    case 'word':
      return adapterWord(value as SplitGlyphsWord)
    case 'hieroglyph':
      return adapterHieroglyph(value as SplitGlyphsHieroglyph)
    default:
      throw new Error(`Unknown glyph type`)
  }
}

function getComponent(glyph: BaseSplitGlyphs) {
  const components = glyphs.find(({ components }) => components.includes(glyph.glyph))?.components ?? []

  return components.map(glyphComponent => ({
    glyph: glyphComponent,
    style: glyphComponent === glyph.glyph
      ? {
          color: 'var(--fg-accent-color)',
          fontWeight: 500,
        }
      : {
          fontWeight: 300,
        },
  }))
}
</script>

<template>
  <div class="content">
    <div class="control">
      <v-text-field
        v-model="control.value"
        label="Иероглифы для разброра"
        variant="outlined"
        hide-details="auto"
        prepend-inner-icon="mdi-rhombus-split"
      >
        <template #append-inner>
          <v-btn
            variant="plain"
            icon="mdi-cube-send"
            color="primary"
          />
        </template>
      </v-text-field>

      <v-btn-toggle
        v-model="control.type"
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
      <div v-for="(item, index) in ((() => (deep = 0, glyphs))())" :key="index" class="splited-item">
        <div class="divider">
          <div class="divider-line" />
          <div class="divider-content">
            <div class="divider-content-text">
              {{ typeCopmonentMapping[item.type] }}
            </div>
            <div v-if="getComponent(item).length" class="divider-content-text right">
              <template v-for="({ glyph, style }, index) in getComponent(item)" :key="glyph">
                <span :style="style">
                  {{ glyph }}
                </span>
                <span v-if="index !== getComponent(item).length - 1">
                  +
                </span>
              </template>
            </div>
            <div class="divider-content-text right index">
              #{{ ++deep }}
            </div>
          </div>
        </div>

        <!-- SENTENCE / WORD / HIEROGLYPH -->

        <div class="glyph-item" :class="item.type">
          <div class="glyph-item-spacing">
            <div
              v-for="spacing in ammountSpacing[item.type]"
              :key="spacing"
              class="glyph-item-spacing-segment"
            />
          </div>
          <div class="glyph-item-content">
            <div>{{ item.glyph }}</div>
          </div>
        </div>
        <!-- <HieroglyphWord :="adapter(item)" /> -->

        <!-- KEYS -->
        <template v-if="item.type === 'hieroglyph'">
          <template v-for="key in item.components" :key="key">
            <div class="divider">
              <div class="divider-line" />
              <div class="divider-content">
                <div class="divider-content-text">
                  {{ typeCopmonentMapping.key }}
                </div>
                <div class="divider-content-text right index">
                  #{{ ++deep }}
                </div>
              </div>
            </div>

            <div class="glyph-item key">
              <div class="glyph-item-spacing">
                <div
                  v-for="spacing in ammountSpacing.key"
                  :key="spacing"
                  class="glyph-item-spacing-segment"
                />
              </div>
              <div class="glyph-item-content">
                <div> {{ key }}</div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;

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

  .splited {
    display: flex;
    flex-direction: column;

    &-item {
      border-radius: 10px;
      padding: 0 12px;
    }
  }
}

.glyph-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  width: 100%;

  &-content {
    padding: 16px;
    border-radius: 16px;
    background-color: var(--bg-secondary-color);
    border: 1px solid #22263b1a;
    box-shadow: 0px 12px 24px -4px #22263b0d;
  }

  &-spacing {
    display: flex;
    height: auto;
    gap: 3px;
    margin-right: 10px;

    &-segment {
      width: 3px;
      height: auto;
      margin: 0 2px;
      opacity: 0.4;
      border-radius: 50px;
      background: var(--border-secondary-color);
      background: linear-gradient(
        180deg,
        var(--border-secondary-color) 0%,
        var(--border-primary-color) 50%,
        var(--border-secondary-color) 100%
      );
    }
  }
}

.divider {
  position: relative;
  margin: 6px 0;
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
    gap: 4px;

    &-text {
      line-height: 25px;

      &.index {
        font-size: 0.7rem;
      }

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
