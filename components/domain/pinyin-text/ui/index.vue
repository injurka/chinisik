<script lang="ts" setup>
import { usePinyinTextStore } from '../store'

interface Tone {
  index: number
  type: ToneType
}

export interface Props {
  pinyin: string
  tone: Tone[] | Tone
  colored?: boolean | null
}

const props = withDefaults(defineProps<Props>(), {
  colored: null,
})

const store = usePinyinTextStore()

const tones = computed(() => Array.isArray(props.tone)
  ? props.tone
  : [props.tone],
)
const splitPinyin = computed(() => {
  const pinyin = props.pinyin.replaceAll(' ', '⠀')
  const parts: string[] = []
  let lastIndex = 0

  tones.value.forEach((tone) => {
    parts.push(
      pinyin.slice(lastIndex, tone.index),
      pinyin[tone.index],
    )
    lastIndex = tone.index + 1
  })

  parts.push(pinyin.slice(lastIndex))

  return parts
})
const isColored = computed(() => props.colored ?? store.isColored)

function color(toneType: ToneType) {
  return isColored.value
    ? `var(--fg-tone-${toneType}-color)`
    : ''
}
function isTone(index: number) {
  return index % 2
}
function getTone(index: number) {
  return tones.value[Math.floor(index / 2)]
}
</script>

<template>
  <span :key="`${isColored}`" class="pinyin">
    <span
      v-for="(part, index) in splitPinyin"
      :key="index"
      class="pinyin-part"
      :class="{ tone: isTone(index) }"
      :style="{ color: isTone(index) ? color(getTone(index).type) : '' }"
    >
      {{ part }}
      <span
        v-if="isTone(index)"
        class="pinyin-tone"
      >
        {{ pinyinTone[getTone(index).type] }}
      </span>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.pinyin {
  display: inline-flex;
  justify-content: center;

  &-part {
    &.tone {
      position: relative;
    }
  }
  &-tone {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -2px;
    width: 100%;
    font-weight: 600;
    font-family: 'Noto Sans SC';
    font-size: 0.6em;
  }
}
</style>
