<script setup lang="ts">
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import { mockGlyphs } from '../constant'
import Control from './sections/control.vue'
import Splitted from './sections/splitted.vue'

const store = useStore(['splitGlyphs'])

const isExample = ref<boolean>(false)
const glyphs = computed<SplitedGlyphs>(() => {
  if (store.splitGlyphs.glyphs)
    return store.splitGlyphs.glyphs

  if (isExample.value && !store.splitGlyphs.glyphs)
    return mockGlyphs

  return []
})
const isExampleHidden = computed<boolean>(() => !!store.splitGlyphs.glyphs || store.splitGlyphs.isLoadingSubmit)
</script>

<template>
  <div class="content">
    <Control />

    <Icon
      v-if="store.splitGlyphs.isLoadingSubmit"
      name="line-md:loading-loop"
      class="loader"
    />

    <VBtn
      v-if="!isExampleHidden"
      class="example-btn"
      rounded
      variant="tonal"
      @click="isExample = !isExample"
    >
      {{ isExample ? 'Скрыть' : 'Показать' }} пример для
      <HieroglyphWord
        :variant="0"
        glyph="打电话"
        translate="Привет"
        pinyin="ni hao"
      />
    </VBtn>

    <Splitted :glyphs="glyphs" />

    <VSnackbar
      :model-value="!!store.splitGlyphs.apiError"
      :timeout="2000"
      color="red"
    >
      <div>
        {{ store.splitGlyphs.apiError?.message }}
      </div>
    </VSnackbar>
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
.example-btn {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-action-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;

  .word {
    margin-left: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>
