<script lang="ts" setup>
import KeyHieroglyphInfo from './dialog/key-hieroglyph-info.vue'
import KeyHieroglyph from './key-hieroglyph.vue'

interface Props {
  items: HieroglyphKey[]
}

defineProps<Props>()

const store = useStore(['keys'])
const { control } = storeToRefs(store.keys)

const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}
</script>

<template>
  <div class="list">
    <KeyHieroglyph
      v-for="(item, key) in items!"
      :key="key + 1"
      :hieroglyph="item"
      :control
      @on-expand="onHieroglyphExpand"
    />
    <KeyHieroglyphInfo
      v-model="isExpandedDialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </div>
</template>

<style lang="scss" scoped>
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
</style>
