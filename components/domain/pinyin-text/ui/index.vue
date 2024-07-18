<script lang="ts" setup>
export interface Props {
  pinyin: string
  toneIndex: number
  toneType: ToneType
  colored?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  colored: false,
})

const color = computed(() => props.colored
  ? `var(--fg-tone-${props.toneType}-color)`
  : 'var(--fg-primary-color)')

const splitPinyin = computed(() => {
  const { pinyin, toneIndex } = props

  const beforeTone = pinyin.slice(0, toneIndex)
  const toneChar = pinyin[toneIndex]
  const afterTone = pinyin.slice(toneIndex + 1)

  return [beforeTone, toneChar, afterTone]
})
</script>

<template>
  <div class="pinyin">
    <span
      v-for="(part, index) in splitPinyin"
      :key="index"
      class="pinyin-part"
      :class="[{ tone: index === 1 }]"
      :style="index === 1 && { color }"
    >
      {{ part }}
      <span v-if="index === 1" class="pinyin-tone">
        {{ pinyinTone[toneIndex] }}
      </span>
    </span>
  </div>
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
    font-size: 0.6rem;
  }
}
</style>
