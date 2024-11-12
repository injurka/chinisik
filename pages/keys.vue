<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { KeyHieroglyph, KeyHieroglyphInfo } from '~/components/modules/keys'
import type { ControlHieroglyphKey } from '~/components/modules/keys/store/keys.store'

const store = useStore(['keys'])
const {
  isLoadingContent,
  description,
  hieroglyphKeys,
  control,
} = storeToRefs(store.keys)
const { toggleControl } = store.keys

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

const controls: { key: keyof ControlHieroglyphKey, label: string }[] = [{
  key: 'isPinyin',
  label: 'Пиньин',
}, {
  key: 'isTranslate',
  label: 'Перевод',
}, {
  key: 'isTranscription',
  label: 'Транскрипция',
}, {
  key: 'isPinyinColored',
  label: 'Цветной пиньин',
}]

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section v-if="isLoadingContent" class="loader">
    <Icon name="line-md:loading-loop" />
  </section>
  <section v-else class="content">
    <JsonToDom
      :node="description!"
    />

    <div class="controls">
      <div
        v-for="item in controls" :key="item.key"
        class="controls-item"
        :class="{ actived: control[item.key] }"
        @click="toggleControl(item.key)"
      >
        <button class="controls-button">
          {{ item.label }}
        </button>
        <Icon class="controls-selected" name="re:checked" size="20" />
      </div>
    </div>

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
  font-family: 'Rubik';

  @include mobile() {
    padding: 8px;
  }

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 16px 6px;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    margin: 25px 0;

    &-item {
      position: relative;

      background-color: var(--bg-secondary-color);
      border: 2px solid var(--border-secondary-color);
      color: var(--fg-primary-color);

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px 10px;
      border-radius: 10px;
      min-width: 140px;
      font-size: 0.9rem;
      text-align: center;
      cursor: pointer;

      &.actived {
        border: 2px solid var(--border-accent-color);
        box-shadow: 0 0 3px var(--bg-accent-color);

        .controls {
          &-selected {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            background-color: var(--border-accent-color);
            border-radius: 5px;
          }
        }
      }
    }

    &-button {
      cursor: pointer;
      color: var(--fg-primary-color);
    }

    &-selected {
      position: absolute;
      top: -10px;
      right: -8px;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease-out;
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
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;

  font-size: 4rem;
  color: var(--fg-accent-color);
}
</style>
