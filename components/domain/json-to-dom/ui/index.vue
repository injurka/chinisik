<script setup lang="ts">
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import { PinyinText } from '~/components/domain/pinyin-text'
import type { JsonToDomChildren, JsonToDomTags } from '~/components/domain/json-to-dom'
import { JsonToDom } from '~/components/domain/json-to-dom'

defineProps<{ node: JsonToDomChildren }>()

const components: Record<string, Component> = {
  HieroglyphWord,
  PinyinText,
}

function getIsComponent(tag: JsonToDomTags): Component | string {
  if (components[tag]) {
    return components[tag]
  }
  else {
    return tag
  }
}
</script>

<template>
  <component
    :is="getIsComponent(node.tag)"
    :class="node.class"
    v-bind="node.props"
  >
    <template v-if="Array.isArray(node.children)">
      <JsonToDom
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      />
    </template>
    <template v-else>
      {{ node.children }}
    </template>
  </component>
</template>
