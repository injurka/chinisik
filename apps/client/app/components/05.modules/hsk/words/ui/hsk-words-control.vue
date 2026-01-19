<script lang="ts" setup>
import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word/types'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'

type StyleVariant = Partial<HieroglyphSettings> | 'global'

const model = defineModel<StyleVariant>({ required: true })
</script>

<template>
  <div class="hsk-words-control">
    <StyleSwitcher v-model="model" />
  </div>
</template>

<style lang="scss" scoped>
.hsk-words-control {
  margin-top: 8px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--border-secondary-color);
  overflow: hidden;
}
</style>
