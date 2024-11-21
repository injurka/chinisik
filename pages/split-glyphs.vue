<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import type { JsonToDomChildren } from '~/components/domain/json-to-dom'
import { SplitGlyphs } from '~/components/modules/split-glyphs'

const description: JsonToDomChildren = {
  tag: 'div',
  class: 'description',
  children: [
    {
      tag: 'h2',
      children: 'Разбор иероглифа на его состовляющие',
    },
    {
      tag: 'p',
      children: 'В данном разделе вы можете раздробить какой либо иероглиф на его составлющие.',
    },
  ],
}

definePageMeta({ layout: 'base' })
</script>

<template>
  <section class="content">
    <JsonToDom :node="description" />

    <SplitGlyphs />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 16px 6px;
    padding-bottom: 0;

    @include mobile {
      font-size: 0.9rem;
    }
  }
}
</style>
