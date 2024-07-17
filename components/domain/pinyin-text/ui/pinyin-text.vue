<script lang="ts" setup>
interface Props {
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
</script>

<template>
  <div class="pinyin">
    <span
      v-for="(part, key) in pinyin.split('')"
      :key="part"
      class="pinyin-part"
      :class="[{ tone: key === toneIndex }]"
      :style="key === toneIndex && { color }"
    >
      {{ part }}
      <span v-if="key === toneIndex" class="pinyin-tone">
        {{ pinyinTone[toneIndex] }}
      </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.pinyin {
  display: flex;
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
