<script lang="ts" setup>
import type { ControlHieroglyphKey } from '../store/keys.store'

const store = useStore(['keys'])
const { toggleControl } = store.keys
const { control } = storeToRefs(store.keys)

const controls: { key: keyof ControlHieroglyphKey, label: string }[] = [{
  key: 'isPinyin',
  label: 'Пиньин',
}, {
  key: 'isTranslate',
  label: 'Перевод',
}, {
  key: 'isTranscription',
  label: 'Транскрипция',
}]
</script>

<template>
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
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;

  gap: 10px;
  background-color: var(--bg-primary-color);
  margin: 8px;
  padding: 16px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  border: 1px solid var(--border-primary-color);
  border-radius: 16px;

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
</style>
