<script setup lang="ts">
import type { PropType } from 'vue'
import type { AudioQuizQuestion } from '~/shared/types'
import { Howl } from 'howler'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

const props = defineProps({
  isLoading: Boolean,
  currentQuestion: {
    type: Object as PropType<AudioQuizQuestion | null>,
    default: null,
  },
  currentQuestionIndex: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'submitAnswer', answerId: number): void
  (e: 'exit'): void
}>()

const userAnswerId = ref<number | null>(null)
const audio = ref<Howl | null>(null)
const isExitDialogVisible = ref(false)

const isFeedbackVisible = computed(() => userAnswerId.value !== null)

watch(() => props.currentQuestion, (newQuestion) => {
  if (newQuestion) {
    userAnswerId.value = null
    if (newQuestion.audioUrl) {
      audio.value = new Howl({ src: [newQuestion.audioUrl], html5: true })
      nextTick(() => playSound())
    }
  }
})

function playSound() {
  audio.value?.play()
}

function selectAnswer(id: number) {
  if (userAnswerId.value !== null)
    return
  userAnswerId.value = id
}

function getAnswerClass(id: number) {
  if (userAnswerId.value === null)
    return ''
  const isCorrect = id === props.currentQuestion?.correctAnswerId
  const isSelected = id === userAnswerId.value

  if (isCorrect)
    return 'correct'
  if (isSelected)
    return 'incorrect'
  return 'disabled'
}

function handleExit() {
  emit('exit')
  isExitDialogVisible.value = false
}
</script>

<template>
  <div class="process-container">
    <template v-if="isLoading && !currentQuestion">
      <PageLoader />
      <p>Генерируем вопросы...</p>
    </template>

    <div v-else-if="currentQuestion" class="quiz-content">
      <VBtn
        icon
        variant="text"
        class="exit-btn"
        @click="isExitDialogVisible = true"
      >
        <Icon name="mdi:close" size="24" />
      </VBtn>

      <VProgressLinear
        :model-value="((currentQuestionIndex + 1) / totalQuestions) * 100"
        color="var(--fg-accent-color)"
        height="6"
        rounded
        class="progress-bar"
      />
      <div class="progress-text">
        Вопрос {{ currentQuestionIndex + 1 }} из {{ totalQuestions }}
      </div>

      <div class="audio-player">
        <VBtn icon size="x-large" variant="tonal" @click="playSound">
          <Icon name="mdi:play" size="36" />
        </VBtn>
        <p>Нажмите, чтобы прослушать фразу</p>
      </div>

      <div class="answers-grid">
        <div
          v-for="answer in currentQuestion.answers"
          :key="answer.id"
          v-ripple
          class="answer-card"
          :class="getAnswerClass(answer.id)"
          @click="selectAnswer(answer.id)"
        >
          {{ answer.text }}
        </div>
      </div>

      <div class="feedback-wrapper" :class="{ 'is-active': isFeedbackVisible }">
        <Transition name="fade-in">
          <div v-if="isFeedbackVisible" class="feedback-section">
            <HieroglyphWord
              :settings="{
                layout: 'inline',
                showPinyin: false,
                showTranslation: false,
              }"
              :glyph="currentQuestion.text"
              :pinyin="currentQuestion.pinyin"
              :translate="currentQuestion.translation"
            />
            <VBtn
              block
              size="large"
              class="next-btn"
              @click="emit('submitAnswer', userAnswerId!)"
            >
              Далее
            </VBtn>
          </div>
        </Transition>
      </div>
    </div>

    <VDialog v-model="isExitDialogVisible" max-width="500">
      <VCard
        title="Подтверждение выхода"
        text="Вы уверены, что хотите прервать квиз? Ваш текущий прогресс будет потерян."
      >
        <VCardActions>
          <VSpacer />
          <VBtn text @click="isExitDialogVisible = false">
            Отмена
          </VBtn>
          <VBtn color="error" variant="tonal" @click="handleExit">
            Выйти
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<style scoped lang="scss">
/* Стили остаются без изменений */
.fade-in-enter-active,
.fade-in-leave-active {
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
  transition-delay: 0.1s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.process-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
  padding: 16px;
  width: 100%;
}
.quiz-content {
  position: relative;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.exit-btn {
  top: 0;
  left: 0;
  z-index: 10;
  color: var(--fg-tertiary-color);
}
.progress-bar {
  margin-bottom: 4px;
}
.progress-text {
  text-align: center;
  color: var(--fg-secondary-color);
  font-size: 0.9rem;
}
.audio-player {
  text-align: center;
  p {
    margin-top: 12px;
    color: var(--fg-tertiary-color);
  }
}
.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @include mobile {
    grid-template-columns: 1fr;
  }
}
.answer-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 80px;
  text-align: center;
  font-size: 1rem;

  &:hover {
    border-color: var(--border-accent-color);
    background-color: var(--bg-tertiary-color);
  }
  &.correct {
    border-color: #00ff4c60;
    background-color: #00ff9d21;
    color: #0d4e00da;
    pointer-events: none;
  }
  &.incorrect {
    border-color: #ff1e0060;
    background-color: #ff000021;
    color: #4e0024da;
    pointer-events: none;
  }
  &.disabled {
    opacity: 0.6;
    pointer-events: none;
    background-color: var(--bg-tertiary-color);
    &:hover {
      border-color: var(--border-secondary-color);
    }
  }
}

.feedback-wrapper {
  min-height: 0;
  overflow: hidden;
  transition: min-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

  &.is-active {
    min-height: 220px;
    @include mobile {
      min-height: 250px;
    }
  }
}

.feedback-section {
  padding-top: 24px;
  border-top: 2px dashed var(--border-secondary-color);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.next-btn {
  background-color: var(--bg-accent-color);
  border: 1px solid var(--border-button-secondary-color);
  color: var(--fg-primary-color);
  text-transform: none;
}
</style>
