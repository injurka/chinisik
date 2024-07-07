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
      <TransitionGroup name="item-transition">
        <div :key="hieroglyph.index" class="item-index">
          {{ hieroglyph.index }}
        </div>
        <div
          v-if="isPinyinShowed || isFullyShowed"
          :key="`pinyin${+(isPinyinShowed || isFullyShowed)}`"
          class="item-pinyin"
        >
          {{ hieroglyph.pinyin }}
        </div>
        <div :key="hieroglyph.hieroglyph" class="item-hieroglyph">
          {{ hieroglyph.hieroglyph }}
        </div>
        <div
          v-if="isTranslateShowed || isFullyShowed"
          :key="`translate${+(isTranslateShowed || isFullyShowed)}`"
          class="item-translate"
        >
          {{ hieroglyph.translate }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
}

.item {
  overflow: hidden;

  background-color: var(--color-background-content);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
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
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
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
</style>
