<script lang="ts" setup>
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'

type StyleVariant = HieroglyphWordVariant | 'global'

const model = defineModel<StyleVariant>({ required: true })
</script>

<template>
  <div class="hsk-words-control">
    <StyleSwitcher v-model="model" />
  </div>
</template>

<style lang="scss" scoped>
.hsk-words-control {
  background-color: var(--bg-primary-color);
  padding: 8px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;

  :deep(.style-switcher) {
    margin: 0;
  }
}
</style>
