<script setup lang="ts">
import { useCardQueue, useSwipeHandler } from '../composables'

interface Props {
  words: HieroglyphHsk[]
}

const props = defineProps<Props>()

const { currentCard, markAsKnown, markForRepeat } = useCardQueue(props.words)
const { cardStyle, swipeDirection, isSwiping, swipeHandlers } = useSwipeHandler({
  onSwipeLeft: handleKnow,
  onSwipeRight: handleRepeat,
})

const showDetails = ref(false)
const lastAction = ref<'know' | 'repeat' | null>(null)

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

// Computed classes
const cardClass = computed(() => ({
  'card--swiping': isSwiping.value,
  'card--swipe-left': swipeDirection.value === 'left',
  'card--swipe-right': swipeDirection.value === 'right',
}))
</script>

<template>
  <div class="quiz-container">
    <Transition name="card" mode="out-in">
      <div
        v-if="currentCard && !showDetails"
        class="card"
        :class="cardClass"
        :style="cardStyle"
        v-on="swipeHandlers"
      >
        <div class="card__content">
          <div class="card__glyph">
            {{ currentCard.glyph }}
          </div>
          <div class="card__actions">
            <button class="btn btn--repeat" @click="handleRepeat">
              Повторить
            </button>
            <button class="btn btn--know" @click="handleKnow">
              Знаю
            </button>
          </div>
        </div>

        <div class="card__swipe-hints">
          <div class="hint hint--left" :class="{ 'hint--active': swipeDirection === 'left' }">
            Повторить
          </div>
          <div class="hint hint--right" :class="{ 'hint--active': swipeDirection === 'right' }">
            Знаю
          </div>
        </div>
      </div>

      <div v-else-if="!currentCard" class="empty">
        Все карточки пройдены! 🎉
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="showDetails" class="details">
        <div class="details__content">
          <h2 class="details__glyph">
            {{ currentCard?.glyph }}
          </h2>
          <div v-if="currentCard?.traditionalGlyph" class="details__traditional">
            Традиционный: {{ currentCard.traditionalGlyph }}
          </div>
          <div class="details__pinyin">
            <span v-for="(p, idx) in currentCard?.pinyin" :key="idx">
              {{ p.syllable }}<sup>{{ p.tone }}</sup>
            </span>
          </div>
          <div class="details__translation">
            <p>Английский: {{ currentCard?.translation.en }}</p>
            <p>Русский: {{ currentCard?.translation.ru }}</p>
          </div>
        </div>
        <button class="btn btn--continue" @click="handleContinue">
          Продолжить
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.quiz-container {
  position: relative;
  max-width: 600px;
  min-height: 600px;
  margin: 0 auto;
}

.card {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
  touch-action: none;
  user-select: none;

  &__content {
    position: relative;
    z-index: 2;
  }

  &__glyph {
    font-size: 5rem;
    margin-bottom: 2rem;
    color: #333;
    text-align: center;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  &__swipe-hints {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;

    .hint {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 1rem;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.2s ease;

      &--active {
        opacity: 1;
      }

      &--left {
        left: 1rem;
      }

      &--right {
        right: 1rem;
      }
    }
  }

  &--swiping {
    cursor: grabbing;
  }

  &--swipe-left {
    background: linear-gradient(45deg, #ffebee, #fff);
  }

  &--swipe-right {
    background: linear-gradient(-45deg, #e8f5e9, #fff);
  }
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &--know {
    background: #4caf50;
    color: white;

    &:hover {
      background: #388e3c;
    }
  }

  &--repeat {
    background: #f44336;
    color: white;

    &:hover {
      background: #d32f2f;
    }
  }
}

// Анимации
.card-enter-active,
.card-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.details {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);

  &__content {
    margin-bottom: 2rem;
  }

  &__glyph {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #333;
  }

  &__traditional {
    color: #666;
    margin-bottom: 1rem;
  }

  &__pinyin {
    font-size: 1.5rem;
    margin: 1.5rem 0;

    span {
      margin-right: 0.5rem;
    }
  }

  &__translation {
    color: #444;
    line-height: 1.6;
  }
}
</style>
