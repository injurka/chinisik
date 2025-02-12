<script setup lang="ts">
import { HaoticLines } from '~/components/domain/haotic-lines'
import { PinyinText } from '~/components/domain/pinyin-text'
import { useCardQueue, useSwipeHandler } from '../composables'

interface Props {
  words: HieroglyphHsk[]
}

const props = defineProps<Props>()
const isFullscreen = defineModel<boolean>('fullscreen', { required: true, default: false })

const { currentCard, markAsKnown, markForRepeat } = useCardQueue(props.words)
const { cardStyle, swipeDirection, isSwiping, swipeHandlers } = useSwipeHandler({
  onSwipeLeft: handleKnow,
  onSwipeRight: handleRepeat,
})

const showDetails = ref(false)
const lastAction = ref<'know' | 'repeat' | null>(null)
const contentEl = ref<HTMLElement>()

function handleKnow() {
  lastAction.value = 'know'
  showDetails.value = true
}

function handleRepeat() {
  lastAction.value = 'repeat'
  showDetails.value = true
}

function handleContinue() {
  if (!currentCard.value)
    return

  if (lastAction.value === 'know') {
    markAsKnown()
  }
  else if (lastAction.value === 'repeat') {
    markForRepeat()
  }

  showDetails.value = false
  lastAction.value = null
}

const cardClass = computed(() => ({
  'card--swiping': isSwiping.value,
  'card--swipe-left': swipeDirection.value === 'left',
  'card--swipe-right': swipeDirection.value === 'right',
}))
</script>

<template>
  <div ref="contentEl" class="quiz-container" :class="{ isFullscreen: fullscreen }">
    <Transition name="card" mode="out-in">
      <div
        v-if="currentCard && !showDetails"
        class="card"
        :class="cardClass"
        :style="cardStyle"
        v-on="swipeHandlers"
      >
        <div class="card-content">
          <div class="card-glyph">
            {{ currentCard.glyph }}
          </div>
          <div class="card-actions">
            <v-btn
              variant="tonal"
              class="btn btn--repeat"
              color="red"
              @click="handleRepeat"
            >
              Забыл
            </v-btn>
            <v-btn
              variant="tonal"
              class="btn btn--know"
              color="green"
              @click="handleKnow"
            >
              Знаю
            </v-btn>
          </div>
        </div>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="showDetails" class="card-details">
        <div class="card-details-content">
          <h2 class="card-details-glyph">
            {{ currentCard?.glyph }}
          </h2>

          <div class="card-details-pinyin">
            <div v-for="(p, pIndex) in currentCard.pinyin" :key="pIndex">
              <PinyinText
                :pinyin="p.syllable"
                :tone="{
                  index: p.position + pIndex,
                  type: p.tone as ToneType,
                }"
              />
            </div>
          </div>
          <div class="card-details-translation">
            <p>{{ currentCard?.translation.ru }}</p>
          </div>
        </div>
        <v-btn
          variant="tonal"
          class="btn btn--continue"
          @click="handleContinue"
        >
          Продолжить
        </v-btn>

        <v-btn
          v-if="!fullscreen"
          icon
          variant="text"
          class="fullscreen"
          @click="isFullscreen = !isFullscreen"
        >
          <Icon
            name="mdi:fullscreen"
            size="26"
          />
        </v-btn>
      </div>

      <div v-else-if="!currentCard" class="empty">
        Все карточки пройдены! 🎉
      </div>
    </Transition>

    <v-btn
      v-if="!!fullscreen"
      icon
      variant="text"
      class="fullscreen"
      @click="isFullscreen = !isFullscreen"
    >
      <Icon
        name="mdi:fullscreen"
        size="32"
      />
    </v-btn>

    <ClientOnly>
      <HaoticLines
        v-if="fullscreen"
        class="haotic-lines"
        :speed="2"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.haotic-lines {
  opacity: 0.1;
}
.quiz-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  width: 100%;
  height: 100%;

  &.isFullscreen {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    margin: 0;
    background-color: var(--bg-primary-color);
    align-items: center;

    .card-details,
    .card {
      max-width: 600px;
      max-height: 600px;
      z-index: 10;
      aspect-ratio: 1 / 1;
      border-radius: 0;
    }
  }
}

.fullscreen {
  position: absolute;
  right: 4px;
  top: 4px;
  color: var(--fg-tertiary-color);
  z-index: 10;
}

.card {
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  max-width: 500px;
  max-height: 500px;
  position: relative;
  background: radial-gradient(ellipse at top, var(--bg-accent-color), var(--bg-secondary-color)),
    radial-gradient(ellipse at bottom, var(--bg-secondary-color), var(--bg-secondary-color));
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    z-index: 2;
  }

  &-glyph {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-actions {
    display: flex;
    justify-content: space-between;

    .btn {
      text-transform: none;
      width: 45%;
      font-size: 0.9rem;
    }
  }

  &--swiping {
    cursor: grabbing;
  }

  &--swipe-left {
    background: linear-gradient(45deg, var(--bg-error-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-error-color);
    border: 1px solid var(--bg-error-color);
  }

  &--swipe-right {
    background: linear-gradient(-45deg, var(--bg-success-color), var(--bg-secondary-color));
    box-shadow: 0px 0px 0px 2px var(--bg-success-color);
    border: 1px solid var(--bg-success-color);
  }
}

.card-details {
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);
  touch-action: none;
  user-select: none;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    gap: 4px;
  }

  &-glyph {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 5rem;
    line-height: normal;
    letter-spacing: 2px;
    font-weight: 400;
    border-radius: 5px;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  &-pinyin {
    font-size: 1.4rem;
    text-align: center;
    color: var(--fg-secondary-color);
    font-family: var(--font-family-cn);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px dashed var(--border-secondary-color);

    > div {
      margin: 4px;
    }
  }

  &-translation {
    color: var(--fg-primary-color);
    font-weight: 1rem;
    font-family: 'Rubik';
    text-align: center;
  }

  .btn {
    text-transform: none;
    font-size: 0.9rem;
  }
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.card-leave-to {
  opacity: 0;

  &.card--swipe-left {
    transform: translateX(-100px) rotate(-15deg);
  }

  &.card--swipe-right {
    transform: translateX(100px) rotate(15deg);
  }
}
</style>
