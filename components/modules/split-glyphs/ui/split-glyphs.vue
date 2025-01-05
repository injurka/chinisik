<script setup lang="ts">
// import { mockGlyphs } from '../constant'
import Control from './control.vue'
import Splitted from './splitted.vue'

const store = useStore(['splitGlyphs'])
</script>

<template>
  <div class="content">
    <Control />

    <Icon
      v-if="store.splitGlyphs.isLoadingSubmit"
      name="line-md:loading-loop"
      class="loader"
    />
    <Splitted
      v-else-if="!!store.splitGlyphs.glyphs"
      :glyphs="store.splitGlyphs.glyphs"
    />
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.loader {
  margin: 0 auto;
  font-size: 4rem;
  color: var(--fg-accent-color);
}
</style>
