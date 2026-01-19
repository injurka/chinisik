<script lang="ts" setup>
import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word/types'

const model = defineModel<Partial<HieroglyphSettings> | 'global'>({ required: true, default: 'global' })

const defaultSettings: HieroglyphSettings = {
  layout: 'inline',
  showPinyin: true,
  showTranslation: true,
}

const currentSettings = computed(() => {
  if (model.value !== 'global') {
    return { ...defaultSettings, ...model.value } as HieroglyphSettings
  }
  return defaultSettings
})

const isGlobal = computed(() => model.value === 'global')

function updateSetting(key: keyof HieroglyphSettings, value: any) {
  const base = model.value === 'global'
    ? { ...defaultSettings }
    : { ...model.value }

  model.value = {
    ...base,
    [key]: value,
  } as HieroglyphSettings
}

function toggleGlobal() {
  if (model.value === 'global') {
    model.value = { ...defaultSettings }
  }
  else {
    model.value = 'global'
  }
}
</script>

<template>
  <div class="style-switcher">
    <div
      class="controls-item"
      :class="{ actived: isGlobal }"
      @click="toggleGlobal"
    >
      <button class="controls-button">
        Глобальный вариант
      </button>
      <Icon class="controls-selected" name="mdi:check-circle" size="20" />
    </div>

    <div class="controls-body" :class="{ 'is-active': !isGlobal }">
      <v-btn-toggle
        :model-value="currentSettings.layout"
        density="compact"
        variant="text"
        class="controls-item-grouped"
        color="var(--fg-accent-color)"
        mandatory
        @update:model-value="(v: any) => updateSetting('layout', v)"
      >
        <v-btn value="inline" class="group-item">
          <v-icon>mdi-format-align-justify</v-icon>
          <v-tooltip activator="parent" location="top">
            В строке
          </v-tooltip>
        </v-btn>
        <v-btn value="vertical" class="group-item">
          <v-icon>mdi-view-column</v-icon>
          <v-tooltip activator="parent" location="top">
            Столбик
          </v-tooltip>
        </v-btn>
        <v-btn value="card" class="group-item">
          <v-icon>mdi-card-text-outline</v-icon>
          <v-tooltip activator="parent" location="top">
            Карточка
          </v-tooltip>
        </v-btn>
      </v-btn-toggle>

      <div v-if="currentSettings.layout !== 'card'" class="controls-options">
        <div
          class="option-check"
          :class="{ active: currentSettings.showPinyin }"
          @click="!isGlobal && updateSetting('showPinyin', !currentSettings.showPinyin)"
        >
          <span>Пиньинь</span>
          <v-icon
            size="18"
            :color="currentSettings.showPinyin ? 'var(--fg-accent-color)' : ''"
            :icon="currentSettings.showPinyin ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
          />
        </div>

        <div
          class="option-check"
          :class="{ active: currentSettings.showTranslation }"
          @click="!isGlobal && updateSetting('showTranslation', !currentSettings.showTranslation)"
        >
          <span>Перевод</span>
          <v-icon
            size="18"
            :color="currentSettings.showTranslation ? 'var(--fg-accent-color)' : ''"
            :icon="currentSettings.showTranslation ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.style-switcher {
  min-width: 260px;
}

.controls-item {
  position: relative;
  background-color: var(--bg-secondary-color);
  color: var(--fg-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 10px;
  font-size: 0.95rem;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid var(--border-secondary-color);
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background-color: var(--bg-hover-color);
  }

  &.actived {
    background-color: rgba(var(--bg-accent-color-rgb), 0.1);
    color: var(--fg-accent-color);
    font-weight: 500;

    .controls-selected {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.controls-body {
  padding: 12px;
  opacity: 0.5;
  pointer-events: none;
  transition: opacity 0.2s;
  background-color: var(--bg-tertiary-color);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.is-active {
    opacity: 1;
    pointer-events: auto;
  }
}

.controls-item-grouped {
  width: 100%;
  background-color: var(--bg-primary-color);
  border-radius: 8px;
  border: 1px solid var(--border-secondary-color);

  .v-btn {
    flex-grow: 1;
    height: 36px !important;
    color: var(--fg-secondary-color);

    &--active {
      color: var(--fg-accent-color) !important;
    }
  }
}

.controls-options {
  display: flex;
  gap: 8px;
  justify-content: space-between;
}

.option-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  background-color: var(--bg-primary-color);
  border: 1px solid var(--border-secondary-color);
  color: var(--fg-secondary-color);
  flex-grow: 1;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background-color: var(--bg-hover-color);
    border-color: var(--border-accent-color);
  }

  &.active {
    border-color: var(--border-accent-color);
    color: var(--fg-accent-color);
    background-color: rgba(var(--bg-accent-color-rgb), 0.05);
    font-weight: 500;
  }
}

.controls-button {
  cursor: pointer;
  color: inherit;
  width: 100%;
  text-align: center;
}

.controls-selected {
  position: absolute;
  right: 16px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease-out;
  color: var(--fg-accent-color);
}
</style>
