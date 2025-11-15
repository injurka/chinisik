<script lang="ts" setup>
import { analyzePinyin } from '~/shared/lib'
import { PinyinText } from '..'

interface Props {
  pinyin: string
  colored?: boolean | null
}

const props = withDefaults(
  defineProps<Props>(),
  {
    colored: null,
  },
)

const pinyinData = computed(() => analyzePinyin(props.pinyin)[0]!)
</script>

<template>
  <PinyinText
    :pinyin="pinyinData.rawPinyin"
    :tone="{
      index: pinyinData.position,
      type: pinyinData.toneNumber as ToneType,
    }"
  />
</template>
