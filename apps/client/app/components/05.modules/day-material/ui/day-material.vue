<script setup lang="ts">
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'
import type { IDayMaterialListItem } from '~/shared/api/collections/day-material/handlers/v1.types'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { PageLoader } from '~/components/02.shared/page-loader'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { VOCABULARY_STYLE_VARIANT } from '~/shared/constant'
import { useNextDayCountdown } from '../composables'
import DayMaterialQuiz from './quiz/quiz-material.vue'

enum RequestKeys {
  HISTORY = 'day-material_get-history-list',
}

const { api } = useApi()
const localVariant = useCookie<HieroglyphWordVariant | 'global'>(VOCABULARY_STYLE_VARIANT, { default: () => 5 })
const { hours, minutes, seconds } = useNextDayCountdown()

const currentMaterialId = ref<number | null>(null)
const isHistoryOpen = ref(false)
const dayFeatureMenu = ref(false)
const activeTab = ref('info')
const isQuizRunning = ref(false)

const historyList = ref<IDayMaterialListItem[]>([])

const historyPending = computed(() => useRequestStatus([RequestKeys.HISTORY]))

const { data: dayFeatures, pending, error, refresh } = await useAsyncData(
  'day-material',
  () => {
    if (currentMaterialId.value)
      return api.dayMaterial.v1.getById({ id: currentMaterialId.value })

    return api.dayMaterial.v1.getToday()
  },
  {
    watch: [currentMaterialId],
    getCachedData: () => (currentMaterialId.value ? undefined : undefined),
  },
)

async function fetchHistory() {
  await useRequest({
    key: RequestKeys.HISTORY,
    fn: ({ api }) => api.dayMaterial.v1.getList(),
    onSuccess: ({ data }) => {
      historyList.value = data
    },
  })
}

const displayVariant = computed(() => (localVariant.value === 'global' ? undefined : localVariant.value))
const isTodayView = computed(() => !currentMaterialId.value)

function openHistory() {
  isHistoryOpen.value = true

  if (historyList.value.length === 0) {
    fetchHistory()
  }
}

function selectMaterial(id: number) {
  currentMaterialId.value = id
  isHistoryOpen.value = false
  activeTab.value = 'info'
}

function handleResetToToday() {
  currentMaterialId.value = null
  isHistoryOpen.value = false
  activeTab.value = 'info'
}

function formatDate(isoString: string) {
  return new Date(isoString).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  })
}

function handleQuizRunning(isRunning: boolean) {
  isQuizRunning.value = isRunning
}
</script>

<template>
  <section class="day-feature">
    <div class="section-title-container">
      <h2 class="section-title">
        {{ isTodayView ? 'Материалы дня' : `Архив: ${dayFeatures ? formatDate(dayFeatures.date) : ''}` }}

        <VBtn
          icon="mdi-history"
          variant="tonal"
          class="history-btn"
          color="var(--fg-accent-color)"
          round
          density="comfortable"
          @click="openHistory"
        />
      </h2>
      <div v-if="isTodayView" class="timer">
        Следующее обновление через:
        <span class="timer-digits">{{ hours }}:{{ minutes }}:{{ seconds }}</span>
      </div>
    </div>

    <div class="tabs-container">
      <v-btn-toggle
        v-model="activeTab"
        variant="outlined"
        divided
        mandatory
        color="var(--fg-accent-color)"
      >
        <v-btn
          value="info"
          :disabled="isQuizRunning"
        >
          Информация
        </v-btn>
        <v-btn value="quiz">
          Проверка знаний
        </v-btn>
      </v-btn-toggle>
    </div>

    <div v-if="pending" class="loader-container">
      <PageLoader />
      <p>Загружаем материалы...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <h3>Ошибка!</h3>
      <p>Не удалось загрузить материалы. Попробуйте обновить страницу.</p>
      <VBtn variant="tonal" class="mt-4" @click="refresh">
        Повторить
      </VBtn>
    </div>
    <VWindow v-else-if="dayFeatures" v-model="activeTab" class="mt-2">
      <VWindowItem value="info">
        <div class="day-feature-grid">
          <!-- Vocabulary Block -->
          <div class="feature-block vocabulary">
            <div class="feature-title-container">
              <h3 class="feature-title">
                <span>Тематика:</span>
                <span class="feature-title-highlight"> {{ dayFeatures.vocabulary.theme }}</span>
              </h3>
              <v-menu v-model="dayFeatureMenu" :close-on-content-click="false" location="bottom end">
                <template #activator="{ props: menuProps }">
                  <v-btn icon variant="text" density="compact" v-bind="menuProps">
                    <Icon name="mdi:tune" />
                  </v-btn>
                </template>
                <StyleSwitcher v-model="localVariant" />
              </v-menu>
            </div>
            <div class="vocabulary-list">
              <HieroglyphWord
                v-for="item in dayFeatures.vocabulary.items"
                :key="item.glyph"
                :glyph="item.glyph"
                :pinyin="item.pinyin"
                :translate="item.translation"
                :variant="displayVariant"
              />
            </div>
            <p class="feature-description">
              {{ dayFeatures.vocabulary.description }}
            </p>
          </div>

          <!-- Grammar Block -->
          <div class="feature-block grammar">
            <div class="feature-title-container">
              <h3 class="feature-title">
                <span>Грамматика дня:</span>
                <span class="feature-title-highlight"> {{ dayFeatures.grammar.title }}</span>
              </h3>
            </div>
            <p class="grammar-rule">
              {{ dayFeatures.grammar.rule }}
            </p>
            <div class="grammar-example">
              <HieroglyphWord
                v-for="(example, index) in dayFeatures.grammar.examples"
                :key="index"
                :glyph="example.glyph"
                :pinyin="example.pinyin"
                :translate="example.translation"
                :variant="example.glyph.length > 5 ? 4 : 5"
              />
            </div>
            <p class="feature-description">
              {{ dayFeatures.grammar.description }}
            </p>
          </div>

          <!-- Proverb Block -->
          <div class="feature-block proverb-block">
            <div class="feature-title-container">
              <h3 class="feature-title">
                <span>Поговорка:</span>
              </h3>
            </div>
            <div class="proverb-content">
              <HieroglyphWord
                :glyph="dayFeatures.proverb.glyph"
                :pinyin="dayFeatures.proverb.pinyin"
                :translate="dayFeatures.proverb.translation"
                :variant="4"
              />
            </div>
            <p class="feature-description">
              {{ dayFeatures.proverb.description }}
            </p>
          </div>
        </div>
      </VWindowItem>
      <VWindowItem value="quiz">
        <DayMaterialQuiz
          :key="dayFeatures.id"
          :quiz-data="dayFeatures.quiz"
          @quiz-running="handleQuizRunning"
        />
      </VWindowItem>
    </VWindow>

    <!-- History Dialog -->
    <DialogWithClose v-model="isHistoryOpen" :max-width="600">
      <div class="history-dialog">
        <h2 class="history-title">
          История материалов
        </h2>

        <!-- Today Button inside History -->
        <div
          v-if="!isTodayView"
          class="history-list special-list"
        >
          <div
            v-ripple
            class="history-item today-item"
            @click="handleResetToToday"
          >
            <div class="item-content">
              <div class="item-theme">
                Вернуться к сегодня
              </div>
              <div class="item-grammar">
                Текущий материал
              </div>
            </div>
            <div class="item-status">
              <Icon name="mdi:calendar-today" color="var(--fg-accent-color)" size="24" />
            </div>
          </div>
        </div>

        <div v-if="historyPending" class="history-loader">
          <PageLoader />
        </div>
        <div v-else-if="historyList && historyList.length > 0" class="history-list">
          <div
            v-for="item in historyList"
            :key="item.id"
            v-ripple
            class="history-item"
            @click="selectMaterial(item.id)"
          >
            <div class="item-date">
              {{ formatDate(item.date) }}
            </div>
            <div class="item-content">
              <div class="item-theme">
                {{ item.theme }}
              </div>
              <div class="item-grammar">
                {{ item.grammarTitle }}
              </div>
            </div>
            <div v-if="item.isCompleted" class="item-status">
              <Icon name="mdi:check-circle" color="var(--fg-success-color)" size="24" />
              <VTooltip activator="parent" location="top">
                Пройдено
              </VTooltip>
            </div>
          </div>
        </div>
        <div v-else class="history-empty">
          История пока пуста
        </div>
      </div>
    </DialogWithClose>
  </section>
</template>

<style scoped lang="scss">
.section-title-container {
  text-align: center;
  margin-bottom: 2rem;
}

.history-btn {
  position: absolute;
  top: 0;
  right: 2px;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  position: relative;
  color: var(--fg-secondary-color);
  margin-bottom: 0.5rem;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--border-accent-color);
    margin: 0.5rem auto 0;
  }
}

.timer {
  font-size: 0.9rem;
  color: var(--fg-tertiary-color);
  margin-top: 0.5rem;

  &-digits {
    font-weight: 600;
    color: var(--fg-secondary-color);
    margin-left: 8px;
    font-family: monospace;
  }
}

.tabs-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  :deep(.v-btn-toggle) {
    border-color: var(--border-primary-color);
    height: 41px;

    .v-btn {
      color: var(--fg-secondary-color);
      width: 160px;
      text-transform: none;
      letter-spacing: 0.5px;

      &:hover {
        background-color: var(--bg-hover-color);
      }
    }
  }
}

.day-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

.feature-block {
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.feature-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-primary-color);
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--fg-primary-color);
  margin: 0;
  border: none;
  padding: 0;

  &-highlight {
    background-color: var(--bg-tertiary-color);
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 8px;
  }
}

.feature-description {
  font-size: 0.9rem;
  color: var(--fg-tertiary-color);
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-secondary-color);
}

.vocabulary-list {
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .hw-word {
    margin: 0;
  }
}

.grammar-rule {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.grammar-example {
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  :deep() {
    .hw-word {
      .hw-pinyin-translate {
        width: 100%;
      }

      &.variant-5 {
        .hw-translate {
          border-top: 2px dashed var(--border-primary-color);
        }
      }

      &.variant-4 {
        border: 0;
        width: 100%;
        border: none;
        flex-grow: 1;

        .hw-pinyin-translate {
          width: 100%;
        }
        .hw-glyph {
          border-radius: 8px;
          border: 1px solid var(--border-accent-color);
        }
      }
    }
  }
}

.proverb-block {
  grid-column: 1 / -1;

  .feature-description {
    text-align: center;
  }
}
.proverb-content {
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  :deep(.hw-word) {
    margin: 0;
    border: none;

    .variant-4 {
      border: 0;
    }

    .hw-pinyin-translate {
      width: 100%;
    }
    .hw-glyph {
      border-radius: 8px;
      border: 1px solid var(--border-accent-color);
    }
  }
}

/* History Dialog Styles */
.history-dialog {
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
}

.history-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--fg-primary-color);
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding-right: 4px;

  &.special-list {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px dashed var(--border-secondary-color);
    flex-shrink: 0;
  }
}

.history-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--bg-tertiary-color);
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid var(--border-secondary-color);

  &:hover {
    background-color: var(--bg-hover-color);
    border-color: var(--border-accent-color);
  }

  &.today-item {
    background-color: var(--bg-accent-color);
    border-color: var(--border-accent-color);

    .item-theme {
      color: var(--fg-action-color);
    }
  }

  .item-date {
    font-size: 0.85rem;
    color: var(--fg-tertiary-color);
    min-width: 80px;
    font-weight: 500;
  }

  .item-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .item-theme {
    font-weight: 600;
    color: var(--fg-primary-color);
  }

  .item-grammar {
    font-size: 0.85rem;
    color: var(--fg-secondary-color);
  }

  .item-status {
    display: flex;
    align-items: center;
  }
}

.history-loader,
.history-empty {
  display: flex;
  justify-content: center;
  padding: 20px;
  color: var(--fg-secondary-color);
}

.loader-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  background-color: var(--bg-secondary-color);
  border-radius: 12px;
  padding: 2rem;
  color: var(--fg-secondary-color);
}
</style>
