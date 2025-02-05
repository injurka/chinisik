<script lang="ts" setup>
import type { ControlHieroglyphKey } from '../store/keys.store'
import { useElementVisibility } from '@vueuse/core'
import { PinyinText } from '~/components/domain/pinyin-text'

interface Props {
  control: ControlHieroglyphKey
  hieroglyph: HieroglyphKey
}

const props = defineProps<Props>()
const emits = defineEmits<{ onExpand: [HieroglyphKey] }>()

const contentEl = ref<HTMLElement | null>(null)

const isElementVisible = useElementVisibility(contentEl)

const isToneCalculated = ref<boolean>(false)
const isFullyShowed = ref<boolean>(false)

const shouldShowPinyin = computed<boolean>(() => props.control.isPinyin || isFullyShowed.value)
const shouldShowTranslate = computed<boolean>(() => props.control.isTranslate || isFullyShowed.value)

watch(
  () => [props.control.isPinyin, props.control.isTranslate],
  () => isFullyShowed.value = false,
)

watch(
  () => [
    props.control.isPinyin,
    isFullyShowed.value,
    isElementVisible.value,
  ],
  () => {
    if (!shouldShowPinyin.value || !isElementVisible.value) {
      return
    }
    isToneCalculated.value = true
  },
)
</script>

<template>
  <div ref="contentEl" class="wrapper">
    <div class="item" @click="isFullyShowed = !isFullyShowed">
      <div class="item-index">
        {{ hieroglyph.index }}
      </div>
      <Transition name="slide-up">
        <div v-if="shouldShowPinyin && isToneCalculated" class="item-pinyin">
          <PinyinText
            :pinyin="hieroglyph.pinyin"
            :tone="{
              index: hieroglyph.toneIndex,
              type: hieroglyph.toneType,
            }"
          />
          <div
            v-show="control.isTranscription && hieroglyph.transcription"
            class="pinyin-tran"
          >
            {{ hieroglyph.transcription }}
          </div>
        </div>
      </Transition>
      <div class="item-hieroglyph">
        {{ hieroglyph.glyph }}
      </div>
      <Transition name="slide-down">
        <div v-if="shouldShowTranslate" class="item-translate">
          {{ hieroglyph.translate }}
        </div>
      </Transition>
      <div
        v-if="isElementVisible"
        class="item-expand"
        @click="emits('onExpand', hieroglyph)"
      >
        <Icon name="mdi:menu" size="15" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.wrapper {
  cursor: pointer;
  position: relative;
  margin: 5px;
  aspect-ratio: 1 / 1;

  width: 160px;
  height: 160px;

  @include tablet {
    width: 30%;
    height: 30%;
  }

  @include mobile {
    width: 45%;
    height: 45%;
  }

  .item {
    overflow: hidden;

    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 10px;
    padding: 5px;

    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 1.5fr 2fr 1.5fr;
    grid-template-areas:
      'pinyin'
      'hieroglyph'
      'translate';

    text-align: center;
    overflow: hidden;

    box-shadow: 0 0 5px var(--bg-overlay-primary-color);

    &:hover {
      box-shadow: 0 0 5px var(--bg-overlay-secondary-color);
      transition: box-shadow 0.2s ease-in-out;
    }

    &:hover {
      .itemindex,
      .item-expand {
        opacity: 1;
        color: var(--fg-primary-color);
        transition: all 0.2s ease-in-out;
      }
    }

    &-pinyin,
    &-hieroglyph,
    &-translate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: normal;
    }

    &-pinyin {
      grid-area: pinyin;
      font-size: 1rem;

      .pinyin-tran {
        font-size: 0.7rem;
        color: var(--fg-secondary-color);
        border-top: 1px solid var(--border-primary-color);
      }
    }

    &-hieroglyph {
      grid-area: hieroglyph;
      font-family: var(--font-family-cn);
      font-size: 2rem;

      @include tablet() {
        font-size: 3rem;
      }
    }

    &-translate {
      grid-area: translate;
      text-align: center;
      font-family: 'Rubik';
      font-size: 0.8rem;
    }

    &-index {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      top: -4px;
      left: -4px;
      height: 26px;
      width: 26px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 50%;
      color: var(--fg-secondary-color);

      @include mobile {
        top: -3px;
        left: -3px;
        height: 20px;
        width: 20px;
        font-size: 0.6rem;
        letter-spacing: 0px;
      }
    }

    &-expand {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      bottom: -4px;
      right: -4px;
      height: 22px;
      width: 22px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 20%;
      transition: all 0.2s ease-in-out;
      opacity: 0;
      color: var(--fg-secondary-color);

      &:hover {
        opacity: 1;
        color: var(--fg-primary-color);
      }

      @include mobile {
        bottom: -3px;
        right: -3px;
        height: 18px;
        width: 18px;
        font-size: 0.6rem;
        letter-spacing: 0px;
        opacity: 1;
      }
    }
  }
}
</style>
