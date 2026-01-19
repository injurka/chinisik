<script setup lang="ts">
import type { QuizCharItem } from '../../composables/quiz/use-quiz-construction'
import type { DayMaterialQuiz } from '~/shared/types'
import { useFullscreen } from '@vueuse/core'
import { PageLoader } from '~/components/02.shared/page-loader'
import { cancelSpeech, voiceTheText } from '~/shared/lib'
import {
  QUIZ_STAGES,
  useDayMaterialQuiz,
  useQuizConstruction,
  useQuizVocabulary,
} from '../../composables'
import QuizHistory from './quiz-history.vue'

interface Props {
  quizData: DayMaterialQuiz
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'quizRunning', isRunning: boolean): void
}>()

const store = useStore(['auth'])
const quizDataRef = toRef(props, 'quizData')
const quizEl = ref<HTMLElement | null>(null)

// Fullscreen logic
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(quizEl)

// Sound logic
const isMuted = ref(false)

function toggleMute() {
  isMuted.value = !isMuted.value
  if (isMuted.value) {
    cancelSpeech(() => {})
  }
}

function speak(text: string, lang: 'zh-CN' | 'ru-RU' = 'zh-CN') {
  if (isMuted.value)
    return
  cancelSpeech(() => {})
  voiceTheText(text, () => {}, () => {}, lang)
}

// 1. Main Logic
const {
  currentStage,
  currentStageTitle,
  progress,
  score,
  mistakes,
  quizHistory,
  isHistoryLoading,
  hasPerfectScore,
  startQuiz,
  finishQuiz,
  setStage,
  retry,
  addScore,
  addMistake,
  incrementProgress,
} = useDayMaterialQuiz(quizDataRef)

function handleAnswerResult(isCorrect: boolean) {
  if (isCorrect)
    addScore()
  else
    addMistake()

  incrementProgress()
}

// 2. Stage 1: Vocabulary Logic
const vocabData = computed(() => props.quizData.stage1)

const {
  currentQuestion: vocabQuestion,
  currentOptions: vocabOptions,
  selectedOption: vocabSelected,
  handleAnswer: vocabAnswerLogic,
  resetStage: resetVocab,
} = useQuizVocabulary({
  data: vocabData,
  onCorrect: () => handleAnswerResult(true),
  onWrong: () => handleAnswerResult(false),
  onComplete: () => {
    setStage(QUIZ_STAGES.STAGE_2)
    // eslint-disable-next-line ts/no-use-before-define
    resetConstruction()
  },
})

function vocabAnswer(option: string) {
  vocabAnswerLogic(option)

  // Озвучиваем правильный иероглиф
  if (vocabQuestion.value) {
    // Если вопрос на китайском - озвучиваем вопрос
    // Если вопрос на русском - озвучиваем правильный ответ (который на китайском)
    // У нас questionLang: 'ru' | 'cn'
    const textToSpeak = vocabQuestion.value.questionLang === 'cn'
      ? vocabQuestion.value.question
      : vocabQuestion.value.correctAnswer

    speak(textToSpeak)
  }
}

// 3. Stage 2: Construction Logic (Grammar)
const constructionItems = computed(() => props.quizData.stage2 || [])

const {
  questionText: constrQuestion,
  correctSentence: constrCorrectSentence,
  selectedChars: constrSelected,
  availableChars: constrAvailable,
  isErrorShake: constrError,
  isFailed: constrFailed,
  isChecked: constrIsChecked,
  selectChar: constrSelectLogic,
  unselectChar: constrUnselectLogic,
  checkAnswer: constrCheckLogic,
  nextTask: constrNext,
  resetStage: resetConstruction,
  initTask: initConstructionTask,
} = useQuizConstruction({
  items: constructionItems,
  onCorrect: () => handleAnswerResult(true),
  onWrong: () => handleAnswerResult(false),
  onComplete: () => {
    setStage(QUIZ_STAGES.STAGE_3)
    // eslint-disable-next-line ts/no-use-before-define
    resetProverb()
  },
})

function constrCheck() {
  constrCheckLogic()
  speak(constrCorrectSentence.value)
}

// 4. Stage 3: Proverb Logic (reusing construction composable)
const proverbItems = computed(() => props.quizData.stage3 ? [props.quizData.stage3] : [])

const {
  questionText: proverbQuestion,
  correctSentence: proverbCorrectSentence,
  selectedChars: proverbSelected,
  availableChars: proverbAvailable,
  isErrorShake: proverbError,
  isFailed: proverbFailed,
  isChecked: proverbIsChecked,
  selectChar: proverbSelectLogic,
  unselectChar: proverbUnselectLogic,
  checkAnswer: proverbCheckLogic,
  nextTask: proverbNext,
  resetStage: resetProverb,
  initTask: initProverbTask,
} = useQuizConstruction({
  items: proverbItems,
  onCorrect: () => handleAnswerResult(true),
  onWrong: () => handleAnswerResult(false),
  onComplete: () => finishQuiz(),
})

function proverbCheck() {
  proverbCheckLogic()
  speak(proverbCorrectSentence.value)
}

async function animateChipMove(
  item: QuizCharItem,
  action: () => void,
) {
  // 1. Находим элемент до перемещения (First)
  const el = document.querySelector(`[data-id="${item.id}"]`) as HTMLElement
  if (!el) {
    action()
    return
  }

  const oldRect = el.getBoundingClientRect()

  // 2. Выполняем изменение состояния (State Change)
  action()

  await nextTick()

  // 3. Находим элемент на новом месте (Last)
  const newEl = document.querySelector(`[data-id="${item.id}"]`) as HTMLElement

  // Если элемент исчез или не найден (например, если DOM перерисовался иначе), выходим
  if (!newEl)
    return

  const newRect = newEl.getBoundingClientRect()

  // 4. Вычисляем разницу (Invert)
  const dx = oldRect.left - newRect.left
  const dy = oldRect.top - newRect.top

  // Применяем инверсию без анимации, чтобы элемент визуально остался на старом месте
  newEl.style.transition = 'none'
  newEl.style.transform = `translate(${dx}px, ${dy}px)`

  // Форсируем перерисовку (Force Reflow)
  // eslint-disable-next-line ts/no-unused-expressions
  newEl.offsetHeight

  // 5. Запускаем анимацию к 0 (Play)
  newEl.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
  newEl.style.transform = ''

  // Очистка стилей после анимации
  setTimeout(() => {
    if (newEl) {
      newEl.style.transition = ''
      newEl.style.transform = ''
    }
  }, 400)
}

// Обертки для вызова с анимацией
function handleConstrSelect(item: QuizCharItem) {
  animateChipMove(item, () => constrSelectLogic(item))
}
function handleConstrUnselect(item: QuizCharItem) {
  animateChipMove(item, () => constrUnselectLogic(item))
}
function handleProverbSelect(item: QuizCharItem) {
  animateChipMove(item, () => proverbSelectLogic(item))
}
function handleProverbUnselect(item: QuizCharItem) {
  animateChipMove(item, () => proverbUnselectLogic(item))
}

// Handlers
function handleStart() {
  startQuiz()
  resetVocab()
}

function handleRetry() {
  retry()
  resetVocab()
}

function handleExit() {
  setStage(QUIZ_STAGES.INTRO)
  if (isFullscreen.value) {
    toggleFullscreen()
  }
}

// Watch stage transitions
watch(currentStage, (newStage) => {
  const isRunning = newStage !== QUIZ_STAGES.INTRO && newStage !== QUIZ_STAGES.RESULTS
  emit('quizRunning', isRunning)

  if (newStage === QUIZ_STAGES.STAGE_2)
    initConstructionTask()
  if (newStage === QUIZ_STAGES.STAGE_3)
    initProverbTask()
})
</script>

<template>
  <div ref="quizEl" class="quiz-wrapper" :class="{ fullscreen: isFullscreen }">
    <!-- Unauthorized State -->
    <div v-if="!store.auth.isAuthenticated" class="auth-required">
      <Icon name="mdi:lock-outline" size="48" class="mb-4" />
      <h3>Доступно только для авторизованных</h3>
      <p>Войдите в аккаунт, чтобы проверить свои знания и сохранить прогресс.</p>
      <VBtn
        class="mt-4"
        color="var(--fg-accent-color)"
        variant="tonal"
        @click="navigateTo(RoutePaths.Auth.SignIn())"
      >
        Войти
      </VBtn>
    </div>

    <div v-else class="quiz-container">
      <!-- TOP CONTROLS -->
      <div v-if="currentStage !== QUIZ_STAGES.INTRO && currentStage !== QUIZ_STAGES.RESULTS" class="quiz-controls">
        <VBtn icon variant="text" size="small" color="var(--fg-tertiary-color)" @click="handleExit">
          <Icon name="mdi:close" size="24" />
          <VTooltip activator="parent" location="top">
            Завершить тест
          </VTooltip>
        </VBtn>

        <VSpacer />

        <!-- Mute Toggle -->
        <VBtn icon variant="text" size="small" color="var(--fg-tertiary-color)" @click="toggleMute">
          <Icon :name="isMuted ? 'mdi:volume-off' : 'mdi:volume-high'" size="24" />
          <VTooltip activator="parent" location="top">
            {{ isMuted ? 'Включить звук' : 'Выключить звук' }}
          </VTooltip>
        </VBtn>

        <VBtn icon variant="text" size="small" color="var(--fg-tertiary-color)" @click="toggleFullscreen">
          <Icon :name="isFullscreen ? 'mdi:fullscreen-exit' : 'mdi:fullscreen'" size="24" />
          <VTooltip activator="parent" location="top">
            {{ isFullscreen ? 'Выйти из полноэкранного режима' : 'На весь экран' }}
          </VTooltip>
        </VBtn>
      </div>

      <!-- Header / Progress -->
      <div v-if="currentStage !== QUIZ_STAGES.INTRO && currentStage !== QUIZ_STAGES.RESULTS" class="progress-header">
        <div class="stage-label">
          {{ currentStageTitle }}
        </div>
        <v-progress-linear
          :model-value="progress"
          color="var(--fg-accent-color)"
          height="8"
          rounded
          class="mt-2"
        />
      </div>

      <!-- INTRO -->
      <div
        v-if="currentStage === QUIZ_STAGES.INTRO"
        class="stage-card intro"
        :class="{ 'is-perfect': hasPerfectScore }"
      >
        <template v-if="isHistoryLoading">
          <div class="loader-container">
            <PageLoader />
            <p>Загрузка истории...</p>
          </div>
        </template>

        <template v-else>
          <div v-if="hasPerfectScore" class="completion-status">
            <div class="completion-icon">
              <Icon name="mdi:check-decagram" size="48" />
            </div>
            <div class="completion-text">
              <h3>Материал успешно усвоен!</h3>
              <p>Вы прошли тест без единой ошибки.</p>
            </div>
          </div>

          <Icon v-else name="mdi:school-outline" size="64" class="mb-4 intro-icon" />

          <h2>{{ hasPerfectScore ? 'Повторение - мать учения' : 'Проверка знаний' }}</h2>
          <p>Закрепите материал дня с помощью теста из трех этапов:</p>
          <ul class="intro-list">
            <li><strong>1. Словарь:</strong> Перевод слов.</li>
            <li><strong>2. Грамматика:</strong> Составление предложений.</li>
            <li><strong>3. Мудрость:</strong> Сборка пословицы дня.</li>
          </ul>
          <VBtn
            size="large"
            color="var(--fg-accent-color)"
            class="start-btn"
            variant="tonal"
            rounded
            @click="handleStart"
          >
            {{ quizHistory.length > 0 ? 'Пройти заново' : 'Начать тест' }}
          </VBtn>

          <QuizHistory :history="quizHistory" />
        </template>
      </div>

      <!-- STAGE 1: VOCABULARY -->
      <div v-else-if="currentStage === QUIZ_STAGES.STAGE_1 && vocabQuestion" class="stage-card">
        <div class="question-box">
          <span class="question-prefix">
            {{ vocabQuestion.questionLang === 'ru' ? 'Как сказать:' : 'Как переводится:' }}
          </span>
          <span class="question-word">
            {{ vocabQuestion.question }}
          </span>
        </div>
        <div class="options-grid">
          <button
            v-for="option in vocabOptions"
            :key="option"
            v-ripple
            class="option-btn"
            :class="{
              correct: vocabSelected && option === vocabQuestion.correctAnswer,
              wrong: vocabSelected === option && option !== vocabQuestion.correctAnswer,
              disabled: !!vocabSelected,
            }"
            @click="vocabAnswer(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>

      <!-- STAGE 2: SENTENCES -->
      <div v-else-if="currentStage === QUIZ_STAGES.STAGE_2" class="stage-card">
        <div class="instruction">
          Соберите предложение:
        </div>
        <div class="question-text">
          {{ constrQuestion }}
        </div>

        <!-- CONSTRUCTION AREA -->
        <div class="construction-area" :class="{ shake: constrError, failed: constrFailed }">
          <div v-if="constrSelected.length === 0" class="placeholder-text">
            Нажимайте на иероглифы ниже
          </div>

          <div
            v-for="item in constrSelected"
            :key="item.id"
            class="char-chip selected"
            :data-id="item.id"
            @click="handleConstrUnselect(item)"
          >
            {{ item.char }}
          </div>
        </div>

        <!-- POOL AREA OR CORRECT ANSWER -->
        <div class="pool-area-wrapper">
          <Transition name="fade" mode="out-in">
            <div v-if="!constrIsChecked" key="pool" class="pool-area">
              <div
                v-for="item in constrAvailable"
                :key="item.id"
                class="pool-item-wrapper"
              >
                <div
                  v-if="!item.isUsed"
                  class="char-chip"
                  :data-id="item.id"
                  @click="handleConstrSelect(item)"
                >
                  {{ item.char }}
                </div>
                <div v-else class="char-chip placeholder" />
              </div>
            </div>

            <div v-else key="result" class="correct-answer-display">
              <div class="correct-label">
                Правильный ответ:
              </div>
              <div class="correct-text" @click="speak(constrCorrectSentence)">
                {{ constrCorrectSentence }}
                <Icon name="mdi:volume-high" class="ml-2 voice-icon" />
              </div>
            </div>
          </Transition>
        </div>

        <VBtn
          v-if="!constrIsChecked"
          class="mt-6"
          block
          variant="tonal"
          color="var(--fg-accent-color)"
          :disabled="constrSelected.length === 0"
          @click="constrCheck"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="mt-6"
          block
          variant="tonal"
          color="var(--fg-accent-color)"
          @click="constrNext"
        >
          Далее
        </VBtn>
      </div>

      <!-- STAGE 3: PROVERB -->
      <div v-else-if="currentStage === QUIZ_STAGES.STAGE_3" class="stage-card">
        <div class="instruction">
          Соберите пословицу:
        </div>
        <div class="question-text">
          {{ proverbQuestion }}
        </div>

        <!-- CONSTRUCTION AREA -->
        <div class="construction-area" :class="{ shake: proverbError, failed: proverbFailed }">
          <div v-if="proverbSelected.length === 0" class="placeholder-text">
            Нажимайте на иероглифы ниже
          </div>
          <div
            v-for="item in proverbSelected"
            :key="item.id"
            class="char-chip selected"
            :data-id="item.id"
            @click="handleProverbUnselect(item)"
          >
            {{ item.char }}
          </div>
        </div>

        <!-- POOL AREA OR CORRECT ANSWER -->
        <div class="pool-area-wrapper">
          <Transition name="fade" mode="out-in">
            <div v-if="!proverbIsChecked" key="pool" class="pool-area">
              <div
                v-for="item in proverbAvailable"
                :key="item.id"
                class="pool-item-wrapper"
              >
                <div
                  v-if="!item.isUsed"
                  class="char-chip"
                  :data-id="item.id"
                  @click="handleProverbSelect(item)"
                >
                  {{ item.char }}
                </div>
                <div v-else class="char-chip placeholder" />
              </div>
            </div>

            <div v-else key="result" class="correct-answer-display">
              <div class="correct-label">
                Правильный ответ:
              </div>
              <div class="correct-text" @click="speak(proverbCorrectSentence)">
                {{ proverbCorrectSentence }}
                <Icon name="mdi:volume-high" class="ml-2 voice-icon" />
              </div>
            </div>
          </Transition>
        </div>

        <VBtn
          v-if="!proverbIsChecked"
          class="mt-6"
          block
          variant="tonal"
          color="var(--fg-accent-color)"
          :disabled="proverbSelected.length === 0"
          @click="proverbCheck"
        >
          Проверить
        </VBtn>
        <VBtn
          v-else
          class="mt-6"
          block
          variant="tonal"
          color="var(--fg-accent-color)"
          @click="proverbNext"
        >
          Завершить
        </VBtn>
      </div>

      <!-- RESULTS -->
      <div v-else-if="currentStage === QUIZ_STAGES.RESULTS" class="stage-card results">
        <Icon name="mdi:trophy" size="80" color="#FFD700" class="mb-4" />
        <h2>Результат</h2>
        <div class="stats">
          <div class="stat-item">
            <span class="label">Правильно</span>
            <span class="val green">{{ score }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Ошибок</span>
            <span class="val red">{{ mistakes }}</span>
          </div>
        </div>
        <p class="feedback-text">
          {{ mistakes === 0 ? 'Идеально! Вы отлично усвоили материал.' : 'Хорошая работа! Продолжайте практиковаться.' }}
        </p>
        <VBtn class="feedback-btn" variant="tonal" @click="handleRetry">
          Пройти заново
        </VBtn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-wrapper {
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg-primary-color);
  transition: all 0.3s ease;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    padding: 20px;
    justify-content: center;
    overflow-y: auto;
  }
}

.quiz-controls {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
}

.auth-required {
  text-align: center;
  padding: 40px;
  background-color: var(--bg-secondary-color);
  border-radius: 16px;
  border: 1px solid var(--border-secondary-color);
  color: var(--fg-secondary-color);
}

.quiz-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-header {
  .stage-label {
    font-size: 0.9rem;
    color: var(--fg-secondary-color);
    font-weight: 500;
    text-align: center;
  }
}

.stage-card {
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 24px 0;
  transition: border-color 0.3s ease;

  &.intro {
    text-align: center;
    min-height: 400px;
    justify-content: center;

    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      height: 100%;
      width: 100%;
      color: var(--fg-tertiary-color);
    }

    &.is-perfect {
      border: 2px solid var(--fg-success-color);
      background: linear-gradient(to bottom right, var(--bg-secondary-color), rgba(var(--fg-success-color-rgb), 0.05));
    }

    .intro-icon {
      color: var(--fg-accent-color);
    }
    .intro-list {
      text-align: left;
      list-style: none;
      padding: 0;
      margin: 24px 0;
      li {
        margin-bottom: 8px;
        color: var(--fg-secondary-color);
        strong {
          color: var(--fg-primary-color);
        }
      }
    }
  }

  &.results {
    text-align: center;
    .stats {
      display: flex;
      gap: 32px;
      margin: 24px 0;
      .stat-item {
        display: flex;
        flex-direction: column;
        .label {
          font-size: 0.9rem;
          color: var(--fg-secondary-color);
        }
        .val {
          font-size: 2rem;
          font-weight: bold;
        }
        .val.green {
          color: var(--fg-success-color);
        }
        .val.red {
          color: var(--fg-error-color);
        }
      }
    }
  }

  .start-btn {
    text-transform: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--fg-action-color);
    width: auto;
    margin: 0 auto;
    padding: 0 32px;

    @include mobile {
      font-size: 0.75rem;
    }
  }
}

.completion-status {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: rgba(var(--fg-success-color-rgb), 0.1);
  border: 1px solid var(--fg-success-color);
  padding: 16px 24px;
  border-radius: 12px;
  margin-bottom: 24px;
  text-align: left;
  animation: slideDown 0.5s ease-out;

  .completion-icon {
    color: var(--fg-success-color);
    animation: pulse 2s infinite;
  }

  .completion-text {
    h3 {
      color: var(--fg-success-color);
      margin: 0 0 4px 0;
      font-size: 1.1rem;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--fg-secondary-color);
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.feedback-btn {
  margin-top: 24px;
}

/* Stage 1 Styles */
.question-box {
  text-align: center;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .question-prefix {
    font-size: 1rem;
    color: var(--fg-secondary-color);
  }

  .question-word {
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn) 'Sofia Sans';
  }
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
}

.option-btn {
  background-color: var(--bg-tertiary-color);
  border: 2px solid transparent;
  padding: 16px;
  border-radius: 12px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  color: var(--fg-primary-color);
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-family-cn) 'Sofia Sans';

  &:hover:not(.disabled) {
    background-color: var(--bg-hover-color);
    border-color: var(--border-accent-color);
  }

  &.correct {
    background-color: rgba(var(--fg-success-color-rgb), 0.2);
    border-color: var(--fg-success-color);
    color: var(--fg-success-color);
  }

  &.wrong {
    background-color: rgba(var(--fg-error-color-rgb), 0.2);
    border-color: var(--fg-error-color);
    color: var(--fg-error-color);
  }

  &.disabled {
    cursor: default;
    opacity: 0.7;
  }
}

/* Stage 2 & 3 Styles */
.instruction {
  font-size: 0.9rem;
  color: var(--fg-secondary-color);
  margin-bottom: 8px;
}

.question-text {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 24px;
  color: var(--fg-primary-color);
}

.construction-area {
  width: 100%;
  min-height: 80px;
  border-bottom: 2px solid var(--border-accent-color);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  padding: 8px;
  margin-bottom: 32px;
  align-items: center;
  transition: all 0.3s;

  .placeholder-text {
    color: var(--fg-tertiary-color);
    font-size: 0.9rem;
    position: absolute;
  }

  &.shake {
    animation: shake 0.5s;
    border-bottom-color: var(--fg-error-color);
  }

  &.failed {
    border-bottom-color: var(--fg-error-color);
    background-color: rgba(var(--fg-error-color-rgb), 0.05);
  }
}

.pool-area-wrapper {
  min-height: 120px; // Prevent layout jump
  width: 100%;
  display: flex;
  justify-content: center;
}

.pool-area {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.pool-item-wrapper {
  width: 48px;
  height: 48px;
}

.correct-answer-display {
  text-align: center;
  animation: fade-in 0.5s ease;

  .correct-label {
    font-size: 0.9rem;
    color: var(--fg-secondary-color);
    margin-bottom: 8px;
  }

  .correct-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--fg-success-color);
    font-family: var(--font-family-cn);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .voice-icon {
      opacity: 0.7;
      font-size: 1.2rem;
    }

    &:hover .voice-icon {
      opacity: 1;
    }
  }
}

.char-chip {
  background-color: var(--bg-tertiary-color);
  padding: 0;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--font-family-cn);
  cursor: pointer;
  border: 1px solid var(--border-secondary-color);
  user-select: none;
  transition: transform 0.1s;

  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(.placeholder) {
    background-color: var(--bg-hover-color);
    transform: translateY(-2px);
  }

  &.selected {
    background-color: var(--bg-accent-color);
    border-color: var(--border-accent-color);
    color: var(--fg-action-color);
  }

  &.placeholder {
    background-color: transparent;
    border: 1px dashed var(--border-secondary-color);
    cursor: default;
    pointer-events: none;
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
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

@include mobile {
  .stage-card {
    padding: 16px;
  }
  .quiz-wrapper.fullscreen {
    padding: 8px;
  }
}
</style>
