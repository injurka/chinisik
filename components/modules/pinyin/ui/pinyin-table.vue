<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import { usePinyinStore } from '../store/pinyin.store'
import PinyinInfo from './dialog/pinyin-info.vue'

const hoveredPinyin = ref<{ initial: Initial | null, final: Final | null }>({
  final: null,
  initial: null,
})
const dialog = ref<boolean>(false)
const lastSelectedPinyin = ref<string>('')

const store = usePinyinStore()

const { finals, initials, initialWithFinal } = storeToRefs(store)

const handleLeavePinyin = useDebounceFn((initial: Initial, final: Final) => {
  if (initial.id === hoveredPinyin.value.initial?.id
    && final.id === hoveredPinyin.value.final?.id
  ) {
    hoveredPinyin.value = { initial: null, final: null }
  }
}, 100)
function handleOverPinyin(initial: Initial, final: Final) {
  hoveredPinyin.value = { initial, final }
}
function handleClickPinyin(value: string) {
  lastSelectedPinyin.value = value
  dialog.value = true
}
</script>

<template>
  <div class="pinyin">
    <div class="pinyin-container">
      <div :style="{ gridRow: 1 }" class="pinyin-row__empty" />

      <template v-for="final in finals" :key="final.id">
        <div
          :style="{ gridRow: 1 }"
          class="pinyin-row__h"
          :class="{ highlight: hoveredPinyin.final?.id === final.id }"
        >
          {{ final.name }}
        </div>
      </template>

      <template v-for="initial in initials" :key="initial.id">
        <div
          :style="{ gridRow: initial.pos + 1 }"
          class="pinyin-row__v"
          :class="{ highlight: hoveredPinyin.initial?.id === initial.id }"
        >
          {{ initial.name }}
        </div>
        <div
          v-for="final in finals" :key="final.id"
          :style="{ gridRow: initial.pos + 1 }"
          class="pinyin-row"
          @mouseover="handleOverPinyin(initial, final)"
          @mouseleave="handleLeavePinyin(initial, final)"
        >
          <div
            v-if="initialWithFinal.get(`${initial.name}+${final.name}`)?.length"
            @click="handleClickPinyin(`${initial.name}+${final.name}`)"
          >
            {{ `${initial.name}${final.name}` }}
          </div>
          <div v-else class="pinyin-row__empty" />
        </div>
      </template>
    </div>
    <PinyinInfo
      v-model="dialog"
      :pinyin="lastSelectedPinyin"
      :initial-with-final
    />
  </div>
</template>

<style lang="scss" scoped>
.pinyin {
  padding: 5px;

  width: 100%;
  height: 100%;

  margin: 0px auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  &-container {
    max-width: 1800px;
    border-radius: 10px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(36, 1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 1px;
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-primary-color);
  }
  &-row {
    background-color: var(--bg-tertiary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--bg-action-hover-color);
      transition: background-color 0.2s ease-in;
    }
    transition: background-color 0.2s ease-out;

    &__h {
      // &:not(:first-child) {
      //   background-color: var(--bg-overlay-dark-color);
      // }
      &.highlight {
        background-color: var(--bg-overlay-light-color);
        transition: background-color 0.4s ease-in;
      }
      transition: background-color 0.4s ease-out;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;
    }

    &__v {
      // &:not(:first-child) {
      //   background-color: var(--bg-overlay-dark-color);
      // }
      &.highlight {
        background-color: var(--bg-overlay-light-color);
        transition: background-color 0.4s ease-in;
      }
      transition: background-color 0.4s ease-out;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;
    }

    &__empty {
      background-color: var(--bg-secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &-menu {
    &__content {
      color: var(--color-text-invert);
      padding: 15px;

      font-size: 1rem;
      background-color: var(--color-background-modal);
      width: 320px;
      max-height: 500px;
      height: 100%;
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      color: var(--color-text-invert);
      font-size: 2rem;
      border-bottom: 2px solid var(--border-primary-color);
      padding: 5px 0;
      margin-bottom: 10px;
    }

    &-tones {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;

      &__button {
        color: var(--color-text-invert);
        font-size: 1.3rem;
        background-color: var(--color-background-modal-content);
        border: 1px solid var(--border-primary-color);
        border-radius: 10px;
        padding: 5px 10px;
      }
    }
  }
}
</style>
