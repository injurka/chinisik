<script setup lang="ts">
import { useAudioQuiz } from '../composables/use-audio-quiz'
import AudioQuizProcess from './process.vue'
import AudioQuizResults from './results.vue'
import AudioQuizSettings from './settings.vue'

const {
  status,
  isLoading,
  currentQuestion,
  totalQuestions,
  currentQuestionIndex,
  score,
  startQuiz,
  submitAnswer,
  resetQuiz,
} = useAudioQuiz()
</script>

<template>
  <div class="audio-quiz">
    <Transition name="smooth-appear" mode="out-in">
      <AudioQuizSettings
        v-if="status === 'settings'"
        :is-loading="isLoading"
        @start="startQuiz"
      />
      <AudioQuizProcess
        v-else-if="status === 'playing'"
        :is-loading="isLoading"
        :current-question="currentQuestion"
        :current-question-index="currentQuestionIndex"
        :total-questions="totalQuestions"
        @submit-answer="submitAnswer"
        @exit="resetQuiz"
      />
      <AudioQuizResults
        v-else-if="status === 'finished'"
        :score="score"
        :total-questions="totalQuestions"
        @reset="resetQuiz"
      />
    </Transition>
  </div>
</template>
