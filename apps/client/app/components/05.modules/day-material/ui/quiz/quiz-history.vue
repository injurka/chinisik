<script lang="ts" setup>
import type { QuizAttempt } from '../../composables/quiz/use-day-material-quiz'

interface Props {
  history: QuizAttempt[]
}

const props = defineProps<Props>()

const isExpanded = ref(false)

const bestAttempt = computed(() => {
  if (!props.history.length)
    return null

  return [...props.history].sort((a, b) => {
    if (a.mistakes !== b.mistakes)
      return a.mistakes - b.mistakes

    return b.score - a.score
  })[0]
})

const attemptsCount = computed(() => props.history.length)

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function getStatusColor(mistakes: number) {
  if (mistakes === 0)
    return 'green'
  if (mistakes <= 2)
    return 'orange'
  return 'red'
}

function getStatusIcon(mistakes: number) {
  if (mistakes === 0)
    return 'mdi:check-circle'
  if (mistakes <= 2)
    return 'mdi:alert-circle'
  return 'mdi:close-circle'
}
</script>

<template>
  <div v-if="history.length > 0" class="quiz-history">
    <!-- Summary Header -->
    <div
      class="history-summary"
      :class="{ 'is-expanded': isExpanded }"
      @click="isExpanded = !isExpanded"
    >
      <div class="summary-left">
        <div class="summary-icon">
          <Icon name="mdi:history" size="24" />
        </div>
        <div class="summary-text">
          <div class="title">
            История прохождений
          </div>
          <div class="subtitle">
            Сегодня попыток: {{ attemptsCount }} <span v-if="bestAttempt" class="best-score">• Лучший: {{ bestAttempt.score }}/{{ bestAttempt.totalQuestions }}</span>
          </div>
        </div>
      </div>
      <div class="summary-right">
        <Icon
          name="mdi:chevron-down"
          class="expand-icon"
          :class="{ rotated: isExpanded }"
        />
      </div>
    </div>

    <!-- Expanded List -->
    <v-expand-transition>
      <div v-if="isExpanded" class="history-list">
        <div
          v-for="(attempt, index) in history"
          :key="attempt.id"
          class="history-item"
        >
          <div class="item-meta">
            <span class="attempt-number">#{{ history.length - index }}</span>
            <span class="attempt-time">{{ formatTime(attempt.timestamp) }}</span>
          </div>

          <div class="item-result" :class="`status-${getStatusColor(attempt.mistakes)}`">
            <Icon :name="getStatusIcon(attempt.mistakes)" size="18" class="result-icon" />
            <div class="result-details">
              <span>{{ attempt.mistakes === 0 ? 'Идеально' : `${attempt.mistakes} ош.` }}</span>
              <span class="result-score">{{ attempt.score }}/{{ attempt.totalQuestions }}</span>
            </div>
          </div>
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<style lang="scss" scoped>
.quiz-history {
  width: 100%;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 12px;
  margin-top: 24px;
  overflow: hidden;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--border-accent-color);
  }
}

.history-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: var(--bg-tertiary-color);
  user-select: none;

  .summary-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .summary-icon {
    color: var(--fg-secondary-color);
    display: flex;
  }

  .summary-text {
    display: flex;
    flex-direction: column;
    align-items: start;

    .title {
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--fg-primary-color);
    }
    .subtitle {
      font-size: 0.8rem;
      color: var(--fg-secondary-color);
    }
    .best-score {
      color: var(--fg-success-color);
      font-weight: 500;
    }
  }

  .expand-icon {
    transition: transform 0.3s ease;
    color: var(--fg-tertiary-color);
    &.rotated {
      transform: rotate(180deg);
    }
  }
}

.history-list {
  background-color: var(--bg-secondary-color);
  border-top: 1px solid var(--border-secondary-color);
  max-height: 200px;
  overflow-y: auto;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid var(--border-secondary-color);

  &:last-child {
    border-bottom: none;
  }

  .item-meta {
    display: flex;
    gap: 12px;
    font-size: 0.85rem;
    color: var(--fg-secondary-color);

    .attempt-number {
      font-weight: 600;
      color: var(--fg-tertiary-color);
      min-width: 24px;
    }
  }

  .item-result {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 6px;
    background-color: var(--bg-tertiary-color);

    &.status-green {
      color: var(--fg-success-color);
      background-color: rgba(var(--fg-success-color-rgb), 0.1);
    }
    &.status-orange {
      color: var(--fg-warning-color);
      background-color: rgba(var(--fg-warning-color-rgb), 0.1);
    }
    &.status-red {
      color: var(--fg-error-color);
      background-color: rgba(var(--fg-error-color-rgb), 0.1);
    }

    .result-details {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .result-score {
      padding-left: 8px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      opacity: 0.9;
    }
  }
}
</style>
