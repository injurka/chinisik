<script lang="ts" setup>
import type { ToonTranslateControlValues } from '../../composables'
import type { HieroglyphWordVariant } from '~/components/domain/hieroglyph-word'

const control = defineModel<ToonTranslateControlValues>({ required: true })

const controlledHieroglyphVariant = computed({
  get: () => control.value.displayStyle,
  set: (value: HieroglyphWordVariant) => control.value.displayStyle = value,
})
</script>

<template>
  <div class="controls">
    <div class="controls-item-block">
      <div
        class="controls-item grouped-header"
        :class="{ actived: control.displayStyle === null }"
        @click="controlledHieroglyphVariant = null"
      >
        <button class="controls-button">
          Глобальный стиль отображения
        </button>
        <Icon class="controls-selected" name="re:checked" size="20" />
      </div>
      <v-btn-toggle
        v-model="controlledHieroglyphVariant"
        density="compact"
        variant="text"
        class="controls-item-grouped grouped-footer"
        color="var(--fg-action-color)"
        mandatory
      >
        <v-btn :value="2" class="group-item">
          1
        </v-btn>
        <v-btn :value="3" class="group-item">
          2
        </v-btn>
        <v-btn :value="4" class="group-item">
          3
        </v-btn>
        <v-btn :value="5" class="group-item">
          4
        </v-btn>
      </v-btn-toggle>
    </div>

    <div
      class="controls-item-block controls-item"
      :class="{ actived: !!control.grammarBlock }"
      @click="control.grammarBlock = !control.grammarBlock"
    >
      <button class="controls-button">
        Отображение грамматики
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>

    <div
      class="controls-item-block controls-item"
      :class="{ actived: !!control.selectionBlock }"
      @click="control.selectionBlock = !control.selectionBlock"
    >
      <button class="controls-button">
        Отображение предпросмотра
      </button>
      <Icon class="controls-selected" name="re:checked" size="20" />
    </div>
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
  gap: 16px;

  .grouped-header {
    border-radius: 10px 10px 0 0;
  }

  .grouped-footer {
    border-radius: 0 0 10px 10px;
    width: 100%;
    background-color: var(--bg-tertiary-color);
    color: var(--fg-secondary-color);
  }

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
