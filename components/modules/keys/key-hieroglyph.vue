<script lang="ts" setup>
interface Props {
  isPinyinShowed: boolean
  isTranslateShowed: boolean
  hieroglyph: HieroglyphKey
}

const props = defineProps<Props>()

const isFullyShowed: Ref<boolean> = ref(false)

watch(() => [
  props.isPinyinShowed,
  props.isTranslateShowed,
], () => {
  isFullyShowed.value = false
})
</script>

<template>
  <div class="wrapper">
    <div class="item" @click="isFullyShowed = !isFullyShowed">
      <div :key="hieroglyph.index" class="item-index">
        {{ hieroglyph.index }}
      </div>
      <Transition name="slide-up">
        <div
          v-if="isPinyinShowed || isFullyShowed"
          :key="`pinyin${+(isPinyinShowed || isFullyShowed)}`"
          class="item-pinyin"
        >
          {{ hieroglyph.pinyin }}
        </div>
      </Transition>
      <div :key="hieroglyph.hieroglyph" class="item-hieroglyph">
        {{ hieroglyph.hieroglyph }}
      </div>
      <Transition name="slide-down">
        <div
          v-if="isTranslateShowed || isFullyShowed"
          :key="`translate${+(isTranslateShowed || isFullyShowed)}`"
          class="item-translate"
        >
          {{ hieroglyph.translate }}
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
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

  width: 130px;
  height: 130px;

  @include mobile {
    width: 100px;
    height: 100px;
  }

  .item {
    overflow: hidden;

    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-dark-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 10px;
    padding: 5px;

    height: 100%;
    width: 100%;

    display: grid;
    grid-template-rows: 1fr 2fr 1.4fr;
    grid-template-areas:
      'pinyin'
      'hieroglyph'
      'translate';

    text-align: center;
    overflow: hidden;

    &-pinyin,
    &-hieroglyph,
    &-translate {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-pinyin {
      grid-area: pinyin;

      font-size: 1rem;
    }

    &-hieroglyph {
      grid-area: hieroglyph;

      font-size: 2rem;
    }

    &-translate {
      grid-area: translate;
      text-align: center;

      font-size: 0.8rem;
    }

    @include mobile {
      &-pinyin {
        font-size: 0.9rem;
      }

      &-hieroglyph {
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
      background-color: var(--bg-primary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 50%;

      @include mobile {
        top: -2px;
        left: -2px;
        height: 20px;
        width: 20px;
        font-size: 0.5rem;
        letter-spacing: 0px;
      }
    }
  }
}
</style>
