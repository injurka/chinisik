<script setup lang="ts">
import { BackgroundEffects } from '~/components/02.shared/background-effects'
import { HaoticLines } from '~/components/03.domain/haotic-lines'

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'reset'): void
}>()

const { isMobile } = useDevice()
const resultsEl = ref<HTMLElement>()

const percentage = computed(() => {
  if (props.totalQuestions === 0)
    return 0
  return Math.round((props.score / props.totalQuestions) * 100)
})

const getTrophyInfo = computed(() => {
  if (percentage.value >= 95)
    return { icon: 'mdi:trophy', color: '#FFD700', message: 'Великолепно! Вы мастер!' }
  if (percentage.value >= 75)
    return { icon: 'mdi:trophy-award', color: '#C0C0C0', message: 'Отличный результат! Так держать!' }
  if (percentage.value >= 50)
    return { icon: 'mdi:trophy-variant', color: '#CD7F32', message: 'Хорошая работа! Продолжайте в том же духе.' }
  return { icon: 'mdi:emoticon-sad-outline', color: 'grey', message: 'Неплохое начало, продолжайте тренироваться!' }
})
</script>

<template>
  <div ref="resultsEl" class="results-container">
    <VSheet class="results-sheet">
      <div class="trophy-icon">
        <Icon :name="getTrophyInfo.icon" :style="{ color: getTrophyInfo.color }" />
      </div>

      <h2 class="title">
        Квиз завершен!
      </h2>
      <p class="result-message">
        {{ getTrophyInfo.message }}
      </p>

      <div class="score-display">
        <div class="score-item">
          <div class="label">
            Правильные ответы
          </div>
          <div class="value">
            {{ score }} / {{ totalQuestions }}
          </div>
        </div>
        <div class="score-item">
          <div class="label">
            Точность
          </div>
          <div class="value">
            {{ percentage }}%
          </div>
        </div>
      </div>

      <div class="actions">
        <VBtn
          size="large"
          variant="tonal"
          @click="emit('reset')"
        >
          <Icon name="mdi:reload" start />
          Пройти еще раз
        </VBtn>
        <VBtn
          size="large"
          variant="tonal"
          @click="navigateTo(RoutePaths.Keys.Index())"
        >
          <Icon name="mdi:home" start />
          На главную
        </VBtn>
      </div>
    </VSheet>

    <ClientOnly>
      <BackgroundEffects v-if="!isMobile" />
      <HaoticLines :viewport-el="resultsEl" :speed="1" :weight-stroke="150" color="--bg-overlay-primary-color" />
      <HaoticLines :viewport-el="resultsEl" :speed="1.2" :weight-stroke="100" />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
/* Стили остаются без изменений */
.results-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.results-sheet {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 550px;
  padding: clamp(24px, 5vw, 48px);
  border-radius: 16px;
  background-color: rgba(var(--bg-header-color), 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-secondary-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.trophy-icon {
  font-size: 7rem;
  line-height: 1;
  margin-bottom: -16px;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 0;
}
.result-message {
  font-size: 1.1rem;
  color: var(--fg-secondary-color);
  max-width: 80%;
  margin: 0 auto;
}
.score-display {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: var(--bg-tertiary-color);
  padding: 16px;
  border-radius: 12px;
  margin: 16px 0;
}
.score-item {
  .label {
    font-size: 0.9rem;
    color: var(--fg-secondary-color);
  }
  .value {
    font-size: 2rem;
    font-weight: 500;
    color: var(--fg-primary-color);
  }
}
.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 16px;

  .v-btn {
    text-transform: none;
    flex-grow: 1;
  }
}
</style>
