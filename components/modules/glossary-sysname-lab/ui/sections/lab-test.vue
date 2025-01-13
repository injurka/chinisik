<script lang="ts" setup>
import type { IAnswer } from '~/shared/types'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'

interface IProps {
  test: any
}

const props = defineProps<IProps>()

const isFullscreen = defineModel<boolean>('fullscreen', { required: true, default: false })

const isAnswered = ref<boolean>(false)
const selectedAnswered = ref<IAnswer | null>(null)

const correctAnswer = computed(() => props.test.correct[0])

function controlledAnswerStyled(answer: IAnswer) {
  const selectedAnswerValue = selectedAnswered.value?.key

  if (!isAnswered.value) {
    return {
      selected: selectedAnswerValue === answer.key,
    }
  }

  const answerCorrect = props.test.correct[0].key

  return {
    correct: selectedAnswerValue === answer.key && answerCorrect === selectedAnswerValue,
    uncorrect: selectedAnswerValue === answer.key && answerCorrect !== selectedAnswerValue,
  }
}

function handleSelectAnswer(answer: IAnswer) {
  selectedAnswered.value = answer
}

function handleSubmitAnswer() {
  isAnswered.value = true
}

function handleNextAnswer() {
  isAnswered.value = false
  selectedAnswered.value = null
}
</script>

<template>
  <div class="lab-test">
    <div class="lab-test-content">
      <div class="question">
        <p class="question-title">
          {{ test.question }}
        </p>
        <hr class="question-divider">
      </div>
      <div class="answer-list">
        <VBtn
          v-for="(answer, key) in test.answers"
          :key="key"
          variant="text"
          class="answer"
          :disabled="isAnswered"
          :class="controlledAnswerStyled(answer)"
          @click="handleSelectAnswer(answer)"
        >
          {{ answer.value }}
        </VBtn>
      </div>

      <div v-if="isAnswered" class="answer-description">
        <hr class="answer-description-divider">
        <div class="answer-description-content">
          <div class="answer-description-header">
            Правильный ответ:
          </div>
          <div>
            <HieroglyphWord
              :="correctAnswer.meta.hieroglyph"
              :variant="$vuetify.display.mobile ? 4 : 5"
            />
            <div class="answer-description-hint">
              {{ correctAnswer.meta.description }}
            </div>
          </div>
        </div>
      </div>

      <div class="check">
        <div class="check-option left">
          <VTooltip
            text="Настройки теста"
          >
            <template #activator="{ props }">
              <Icon
                v-bind="props"
                class="check-option-item"
                name="mdi:settings-box"
                size="32"
                @click="isFullscreen = !isFullscreen"
              />
            </template>
          </VTooltip>
        </div>

        <VBtn
          v-if="!isAnswered"
          class="check-btn"
          rounded
          variant="tonal"
          @click="handleSubmitAnswer"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="check-btn"
          rounded
          variant="tonal"
          @click="handleNextAnswer"
        >
          Следующий вопрос
        </VBtn>

        <div class="check-option right">
          <VTooltip
            text="На весь экран"
          >
            <template #activator="{ props }">
              <Icon
                v-bind="props"
                class="check-option-item check-fullscreen"
                name="mdi:fullscreen"
                size="32"
                @click="isFullscreen = !isFullscreen"
              />
            </template>
          </VTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Переопределенние стилей для лучшего отображения
:deep() {
  .word {
    &.variant-4 {
      padding-left: 0px !important;
      border: none;
      border-left: 3px dashed var(--border-accent-color);
      border-right: 3px dashed var(--border-accent-color);
      border-radius: 0;
      width: 100%;
    }
  }
}

.lab-test {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &-content {
    max-width: 800px;
    width: 100%;
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    padding: 16px;

    .question {
      &-title {
        display: flex;
        font-size: 1.5rem;

        @include mobile() {
          font-size: 1.1rem;
        }
      }
      &-divider {
        margin-top: 8px;
        border: 1px solid var(--border-secondary-color);
      }
    }

    .answer-list {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 32px;

      @include mobile() {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
      }
    }

    .answer {
      min-width: 80px;
      min-height: 80px;
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
      font-size: 2rem;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 4px;
      padding: 8px;
      flex-basis: 300px;
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      gap: 8px;
      cursor: pointer;

      &:hover {
        color: var(--fg-action-color);
      }

      &.selected {
        color: var(--fg-action-color);
        border: 2px solid var(--border-accent-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }
      &.correct {
        opacity: 1;
        border: 1px solid #00ff4c60;
        background-color: #00ff9d21;
        color: #0d4e00da;
      }
      &.uncorrect {
        opacity: 1;
        border: 1px solid #ff1e0060;
        background-color: #ff000021;
        color: #4e0024da;
      }

      @include mobile() {
        flex-basis: 190px;
        min-width: 50px;
        min-height: 50px;
        font-size: 1rem;
      }
    }

    .answer-description {
      display: flex;
      flex-direction: column;

      &-content {
        padding: 0 16px;
      }
      &-header {
        margin-bottom: 12px;
        font-style: italic;
        font-size: 1rem;

        @include mobile() {
          font-size: 0.9rem;
        }
      }
      &-divider {
        width: 100%;
        margin-top: 18px;
        margin-bottom: 24px;
        border: 1px solid var(--border-secondary-color);
      }
      &-hint {
        margin: 0 2px;
        margin-top: 12px;
        font-size: 0.8rem;
        font-family: 'Rubik';
        color: var(--fg-secondary-color);
      }
    }

    .check {
      margin-top: 48px;
      position: relative;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: 'LEFT_OPTION BTN RIGHT_OPTION';

      &-btn {
        grid-area: BTN;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 1px;
        padding: 0 24px;
        color: var(--fg-primary-color);
      }

      &-option {
        display: flex;
        align-items: center;
        gap: 12px;

        &-item {
          color: var(--fg-secondary-color);
        }

        > * {
          cursor: pointer;
        }

        &.left {
          grid-area: LEFT_OPTION;
        }
        &.right {
          grid-area: RIGHT_OPTION;
          display: flex;
          flex-direction: row-reverse;
        }
      }

      @include mobile() {
        margin: 8px auto 20px auto;
        padding: 0;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          'LEFT_OPTION RIGHT_OPTION'
          'BTN BTN';
      }
    }

    @include mobile() {
      padding: 16px 8px;
    }
  }

  &.fullscreen {
    z-index: 100;
    height: 100%;
    background-color: transparent;

    .lab-test-content {
      background-color: transparent !important;
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 100%;
      border: none;
      padding: 8px;

      .answer-list {
        margin-top: auto;
      }

      .check {
        margin-top: auto;
      }
    }
  }
}
</style>
