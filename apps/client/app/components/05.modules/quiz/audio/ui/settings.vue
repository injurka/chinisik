// File: ui/settings.vue
<script setup lang="ts">
import type { AudioQuizSettings } from '~/shared/types'

defineProps<{
  isLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'start', settings: AudioQuizSettings): void
}>()

const localSettings = ref<AudioQuizSettings>({
  topics: ['Повседневное общение'],
  hskLevel: 1,
  questionCount: 10,
  voice: 'male',
})

const availableTopics = ['Природа', 'Еда', 'Спорт', 'Путешествия', 'Повседневное общение']
const hskLevels = Array.from({ length: 9 }, (_, i) => ({ title: `HSK ${i + 1}`, value: i + 1 }))
</script>

<template>
  <div class="settings-container">
    <VSheet class="settings-sheet">
      <div class="settings-header">
        <h2 class="settings-title">
          <Icon name="mdi:tune-variant" />
          <span>Настройка Квиза</span>
        </h2>
        <p class="settings-description">
          Выберите параметры для создания персональной аудио-тренировки.
        </p>
      </div>

      <div class="setting-block">
        <label>Основные параметры</label>
        <div class="form-grid">
          <VSelect
            v-model="localSettings.topics"
            :items="availableTopics"
            label="Тематика"
            multiple
            chips
            closable-chips
            variant="outlined"
            density="comfortable"
            hide-details
          />
          <VSelect
            v-model="localSettings.hskLevel"
            :items="hskLevels"
            label="Уровень сложности"
            variant="outlined"
            density="comfortable"
            hide-details
          />
        </div>
      </div>

      <div class="setting-block">
        <label>Количество вопросов</label>
        <VSlider
          v-model="localSettings.questionCount"
          :min="5"
          :max="50"
          :step="5"
          thumb-label
          color="var(--fg-accent-color)"
        >
          <template #append>
            <VTextField
              v-model="localSettings.questionCount"
              type="number"
              style="width: 80px"
              density="compact"
              hide-details
              variant="outlined"
            />
          </template>
        </VSlider>
      </div>

      <div class="setting-block">
        <label>Голос озвучки</label>
        <div class="voice-selection">
          <div
            v-ripple
            class="voice-card"
            :class="{ active: localSettings.voice === 'male' }"
            @click="localSettings.voice = 'male'"
          >
            <Icon name="mdi-human-male" size="32" />
            <span>Мужской</span>
            <p>Глубокий и ясный голос</p>
          </div>
          <div
            v-ripple
            class="voice-card"
            :class="{ active: localSettings.voice === 'female' }"
            @click="localSettings.voice = 'female'"
          >
            <Icon name="mdi-human-female" size="32" />
            <span>Женский</span>
            <p>Мягкий и мелодичный</p>
          </div>
        </div>
      </div>

      <VBtn
        :loading="isLoading"
        block
        size="x-large"
        class="start-btn"
        @click="emit('start', localSettings)"
      >
        Начать
      </VBtn>
    </VSheet>
  </div>
</template>

<style scoped lang="scss">
/* Стили остаются без изменений */
.settings-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 16px;
  width: 100%;
}

.settings-sheet {
  width: 100%;
  max-width: 700px;
  padding: clamp(16px, 4vw, 32px);
  border-radius: 16px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  box-shadow: 0 4px 15px var(--bg-overlay-primary-color);
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.settings-header {
  text-align: center;
  border-bottom: 1px solid var(--border-secondary-color);
  padding-bottom: 16px;
}

.settings-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--fg-primary-color);
}

.settings-description {
  color: var(--fg-secondary-color);
  margin-top: 8px;
  font-size: 1rem;
}

.setting-block {
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    font-weight: 500;
    color: var(--fg-secondary-color);
    font-size: 0.9rem;
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.voice-selection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.voice-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid var(--border-secondary-color);
  background-color: var(--bg-tertiary-color);
  cursor: pointer;
  transition: all 0.25s ease-out;
  text-align: center;

  .iconify {
    color: var(--fg-secondary-color);
    transition: all 0.25s ease-out;
  }

  span {
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--fg-primary-color);
  }

  p {
    font-size: 0.85rem;
    color: var(--fg-tertiary-color);
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-accent-color);
  }

  &.active {
    border-color: var(--fg-accent-color);
    background-color: var(--bg-accent-color);
    box-shadow: 0 0 10px rgba(var(--bg-accent-color-rgb), 0.5);

    .iconify {
      color: var(--fg-primary-color);
    }
  }
}

.start-btn {
  margin-top: 16px;
  background-image: linear-gradient(45deg, var(--bg-accent-color) 0%, var(--bg-action-hover-color) 100%);
  border: none;
  color: var(--fg-primary-color);
  text-transform: none;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(var(--bg-accent-color-rgb), 0.4);
    transform: translateY(-2px);
  }
}
</style>
