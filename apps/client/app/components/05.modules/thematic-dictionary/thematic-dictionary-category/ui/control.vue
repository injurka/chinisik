<script lang="ts" setup>
type Controls = Record<any, unknown>

const emits = defineEmits<{ toggleControl: [keyof Controls] }>()
const control = defineModel<Controls>({ required: true })

const store = useStore(['hieroglyphWord'])

const controls: { key: keyof Controls, label: string }[] = [{
  key: 'isFixedStyle',
  label: 'Фиксированный стиль отображения',
}]

const globalLayout = computed({
  get: () => store.hieroglyphWord.settings.layout,
  set: val => store.hieroglyphWord.updateSettings({ layout: val }),
})
</script>

<template>
  <div class="controls">
    <div
      v-for="item in controls" :key="item.key"
      class="controls-item"
      :class="{ actived: control[item.key] }"
      @click="emits('toggleControl', item.key)"
    >
      <span class="controls-button">
        {{ item.label }}
      </span>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>

    <v-btn-toggle
      v-model="globalLayout"
      density="compact"
      variant="text"
      class="controls-item-grouped"
      color="var(--fg-action-color)"
      :disabled="!!control.isFixedStyle"
      mandatory
    >
      <v-btn value="inline" class="group-item" title="Inline">
        <v-icon>mdi-format-align-justify</v-icon>
      </v-btn>
      <v-btn value="vertical" class="group-item" title="Vertical">
        <v-icon>mdi-view-column</v-icon>
      </v-btn>
      <v-btn value="card" class="group-item" title="Card">
        <v-icon>mdi-card-text-outline</v-icon>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  flex-direction: column;
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
    border-radius: 10px 10px 0 0;
    min-width: 140px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &-grouped {
      border-radius: 0 0 10px 10px;
      width: 100%;
      background-color: var(--bg-tertiary-color);
      color: var(--fg-secondary-color);
    }

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
