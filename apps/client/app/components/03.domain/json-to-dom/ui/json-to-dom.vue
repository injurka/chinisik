<script setup lang="ts">
import type { JsonToDomChildren, JsonToDomTags } from '~/components/03.domain/json-to-dom'
import { MarkdownContent } from '~/components/02.shared/markdown-content'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { PinyinText } from '~/components/03.domain/pinyin-text'

interface Props {
  node: JsonToDomChildren
}

defineProps<Props>()

const components: Record<string, Component> = {
  HieroglyphWord,
  PinyinText,
  MarkdownContent,
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
