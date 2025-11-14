<script lang="ts" setup>
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'

type StyleVariant = HieroglyphWordVariant | 'global'

const model = defineModel<StyleVariant>({ required: true, default: 'global' })

const toggleValue = computed({
  get: () => (model.value === 'global' ? undefined : model.value),
  set: (val) => {
    model.value = val === undefined ? 'global' : val
  },
})

function setGlobal() {
  model.value = 'global'
}
</script>

<template>
  <div class="style-switcher">
    <div
      class="controls-item"
      :class="{ actived: model === 'global' }"
      @click="setGlobal"
    >
      <button class="controls-button">
        Глобальный вариант
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
    <v-btn-toggle
      v-model="toggleValue"
      density="compact"
      variant="text"
      class="controls-item-grouped"
      color="var(--fg-action-color)"
    >
      <v-btn :value="1" class="group-item">
        1
      </v-btn>
      <v-btn :value="2" class="group-item">
        2
      </v-btn>
      <v-btn :value="3" class="group-item">
        3
      </v-btn>
      <v-btn :value="4" class="group-item">
        4
      </v-btn>
      <v-btn :value="5" class="group-item">
        5
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<style lang="scss" scoped>
.style-switcher {
  display: flex;
  flex-direction: column;
  margin: 8px;
  border-radius: 16px;
  min-width: 220px;
}
.controls-item {
  position: relative;
  background-color: var(--bg-secondary-color);
  border: 2px solid var(--border-secondary-color);
  color: var(--fg-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
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

    .controls-selected {
      opacity: 1;
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: var(--border-accent-color);
      border-radius: 5px;
    }
  }
}

.controls-button {
  cursor: pointer;
  color: var(--fg-primary-color);
}

.controls-selected {
  position: absolute;
  top: -10px;
  left: -8px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease-out;
}
</style>
