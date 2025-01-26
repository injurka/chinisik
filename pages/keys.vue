<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { KeyHieroglyph, KeyHieroglyphControl, KeyHieroglyphInfo } from '~/components/modules/keys'
import { PageLoader } from '~/components/shared/page-loader'

const store = useStore(['keys'])
const {
  isLoadingContent,
  description,
  hieroglyphKeys,
  control,
} = storeToRefs(store.keys)

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAllKeys(),
    store.keys.getDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content">
    <JsonToDom
      :node="description!"
    />

    <hr>

    <KeyHieroglyphControl />

    <hr>

    <div class="list">
      <KeyHieroglyph
        v-for="(item, key) in hieroglyphKeys!"
        :key="key + 1"
        :hieroglyph="item"
        :control
        @on-expand="onHieroglyphExpand"
      />
    </div>
    <KeyHieroglyphInfo
      v-model="isExpandedDialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  @include default-font();

  .description {
    font-size: 1rem;
    max-width: 1200px;
    padding: 0 6px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 64px;
  }

  @include mobile() {
    padding: 8px;
  }
}
</style>
