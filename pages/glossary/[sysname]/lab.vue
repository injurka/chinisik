<script lang="ts" setup>
import type { PinyinTextProps } from '~/components/domain/pinyin-text'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'

interface IAnswer {
  key: number
  type: 'glyph'
  value: string
}

const testQuestion = {
  type: 'single',
  question: 'Какой из иероглифов означает "Январь"?',
  answers: [{
    key: 1,
    type: 'glyph',
    value: '行进',
  }, {
    key: 2,
    type: 'glyph',
    value: '四月',
  }, {
    key: 3,
    type: 'glyph',
    value: '一月',
  }, {
    key: 4,
    type: 'glyph',
    value: '二月',
  }] satisfies IAnswer[],
  correct: [{
    key: 1,
    meta: {
      hieroglyph: {
        glyph: '行进',
        pinyin: {
          pinyin: 'xing jin',
          tone: [{
            index: 1,
            type: 2,
          }, {
            index: 6,
            type: 4,
          }],
        } as PinyinTextProps,
        translate: 'Движение вперед, продвижение',
      },
      description: `Иероглиф '一月' означает 'Январь' — первый месяц года в григорианском календаре. В китайском языке названия месяцев формируются по принципу 'число + месяц', где '一' (yī) означает 'один', а '月' (yuè) — 'месяц'. Таким образом, '一月' дословно переводится как 'первый месяц'.`,
    },
  }],
}

const isTestActive = ref<boolean>(true)
const isAnswered = ref<boolean>(false)
const selectedAnswered = ref<IAnswer | null>(null)

function handleStartTest() {
  isTestActive.value = true
}

function controlledAnswerStyled(answer: IAnswer) {
  const selectedAnswerValue = selectedAnswered.value?.key

  if (!isAnswered.value) {
    return {
      selected: selectedAnswerValue === answer.key,
    }
  }

  const answerCorrect = testQuestion.correct[0].key

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

const correctAnswer = computed(() => testQuestion.correct[0])

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="lab">
    <div v-if="!isTestActive" class="lab-settings">
      <span class="lab-settings-header">Содержание теста</span>
      <div class="lab-settings-list">
        <div class="lab-settings-item">
          <p>Варианты ответов:</p>
          <div>
            <v-checkbox
              color="var(--fg-accent-color)"
              label="Единичный"
              hide-details
              density="comfortable"
            />
            <v-checkbox
              color="var(--fg-accent-color)"
              label="Множественный"
              hide-details
              density="comfortable"
            />
          </div>
        </div>
      </div>
      <div class="lab-settings-start">
        <VBtn
          variant="tonal"
          class="pinyin-btn"
          rounded="sm"
          @click="handleStartTest"
        >
          Начать тест
        </VBtn>
      </div>
    </div>

    <div v-else class="lab-test">
      <div class="lab-test-content">
        <p class="question">
          {{ testQuestion.question }}
        </p>
        <div class="answer-list">
          <VBtn
            v-for="(answer, key) in testQuestion.answers"
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
        </div>
      </div>
    </div>

    <!-- <ClientOnly>
      <VDialog
        v-model="isFullscreen"
        class="dialog"
        persistent
      >
        <div>123</div>
      </VDialog>
    </ClientOnly> -->
  </div>
</template>

<style scoped lang="scss">
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

.lab {
  width: 100%;
  margin-top: 32px;
}

.lab-settings {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 340px;

  &-header {
    text-align: center;
    margin: 12px;
    font-size: 1.2rem;
  }
  &-list {
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    padding: 12px;
  }
  &-start {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-btn {
      background-color: var(--bg-accent-color);
      border: 1px solid var(--border-button-secondary-color);
      text-transform: none;
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
      display: flex;
      font-size: 1.5rem;

      @include mobile() {
        font-size: 1.1rem;
      }
    }

    .answer-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 18px;
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
        width: 95%;
        margin: 0 auto;
        margin-top: 18px;
        margin-bottom: 24px;
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
      margin-top: 24px;
      display: flex;
      justify-content: center;
      align-items: center;

      &-btn {
        text-transform: none;
        text-decoration: none;
        letter-spacing: 1px;
        padding: 0 24px;
        color: var(--fg-primary-color);
      }
    }

    @include mobile() {
      padding: 16px 8px;
    }
  }
}
</style>
