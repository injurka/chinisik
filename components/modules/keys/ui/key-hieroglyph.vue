<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'
import type { ControlHieroglyphKey } from '../store/keys.store'

interface Props {
  control: ControlHieroglyphKey
  hieroglyph: HieroglyphKey
}

const props = defineProps<Props>()
const emits = defineEmits<{ onExpand: [void] }>()

const pinyinEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

const isToneCalculated = ref<boolean>(false)
const isElementVisible = useElementVisibility(contentEl)
const isFullyShowed = ref<boolean>(false)
const shouldShowPinyin = computed<boolean>(() => props.control.isPinyin || isFullyShowed.value)
const shouldShowTranslate = computed<boolean>(() => props.control.isTranslate || isFullyShowed.value)

function updateToneColor() {
  if (!pinyinEl.value) {
    return
  }

  const { toneType } = props.hieroglyph

  const pinyinToneEl = pinyinEl.value.querySelectorAll<HTMLElement>('.tone')!
  const color = props.control.isPinyinColored
    ? `var(--fg-tone-${toneType}-color)`
    : 'var(--fg-primary-color)'

  pinyinToneEl[0].style.color = color
}

function applyToneStyles() {
  if (
    !shouldShowPinyin.value
    || isToneCalculated.value
    || !isElementVisible.value
  ) {
    return
  }

  nextTick(() => {
    updateToneColor()
  })

  isToneCalculated.value = true
}

watch(
  () => [props.control.isPinyinColored],
  () => updateToneColor(),
)

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
  () => applyToneStyles(),
)
</script>

<template>
  <div ref="contentEl" class="wrapper">
    <div class="item" @click="isFullyShowed = !isFullyShowed">
      <div class="item-index">
        {{ hieroglyph.index }}
      </div>
      <Transition name="slide-up">
        <div v-show="shouldShowPinyin" class="item-pinyin">
          <div ref="pinyinEl" class="pinyin-text">
            <span
              v-for="(part, key) in hieroglyph.pinyin.split('')"
              :key="part"
              class="pinyin-text-part"
              :class="[{ tone: key === hieroglyph.toneIndex }]"
            >
              {{ part }}
              <span v-if="key === hieroglyph.toneIndex" class="pinyin-text-tone">
                {{ pinyinTone[hieroglyph.toneIndex] }}
              </span>
            </span>
          </div>
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
        <div v-show="shouldShowTranslate" class="item-translate">
          {{ hieroglyph.translate }}
        </div>
      </Transition>
      <div class="item-expand" @click="emits('onExpand', hieroglyph)">
        <Icon name="material-symbols:eye-tracking-outline-rounded" size="15" />
        <VTooltip
          activator="parent"
          location="top"
        >
          Посмотреть подробную информацию
        </VTooltip>
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

  width: 160px;
  height: 160px;

  @include mobile {
    width: 140px;
    height: 140px;
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

    box-shadow: 0 0 5px var(--bg-overlay-dark-color);

    &:hover {
      box-shadow: 0 0 5px var(--bg-overlay-light-color);
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
    }

    &-pinyin {
      grid-area: pinyin;
      font-size: 1rem;

      .pinyin-text {
        display: flex;
        justify-content: center;

        &-part {
          &.tone {
            position: relative;
          }
        }
        &-tone {
          display: flex;
          justify-content: center;
          position: absolute;
          top: -4px;
          width: 100%;
          font-weight: 600;
          font-family: 'Noto Sans SC';
          font-size: 0.6rem;
        }
      }

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
    }

    &-translate {
      grid-area: translate;
      text-align: center;
      font-family: 'Rubik';
      font-size: 0.8rem;
    }

    @include mobile {
      &-pinyin {
        font-size: 0.9rem;
        &-tran {
          font-size: 0.65rem;
        }
      }

      &-hieroglyph {
        font-family: var(--font-family-cn);
        font-size: 1.8rem;
      }

      &-translate {
        font-size: 0.7rem;
      }
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
