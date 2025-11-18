<script setup lang="ts">
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'
import { PageLoader } from '~/components/02.shared/page-loader'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { VOCABULARY_STYLE_VARIANT } from '~/shared/constant'
import { useNextDayCountdown } from '../composables'
import FeaturesDayQuiz from './features-day-quiz.vue'

// API Fetching
const { api } = useApi()
const { data: dayFeatures, pending, error } = await useAsyncData(
  'day-material',
  () => api.dayMaterial.v1.getToday(),
)

// Timer Logic
const { hours, minutes, seconds } = useNextDayCountdown()

// Component state
const dayFeatureMenu = ref(false)
const activeTab = ref('info')
const localVariant = useCookie<HieroglyphWordVariant | 'global'>(VOCABULARY_STYLE_VARIANT, { default: () => 5 })
const displayVariant = computed(() => (localVariant.value === 'global' ? undefined : localVariant.value))
</script>

<template>
  <section class="day-feature">
    <div class="section-title-container">
      <h2 class="section-title">
        Материалы дня
      </h2>
      <div class="timer">
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
        <v-btn value="info">
          Информация
        </v-btn>
        <v-btn value="quiz">
          Проверка знаний
        </v-btn>
      </v-btn-toggle>
    </div>

    <div v-if="pending" class="loader-container">
      <PageLoader />
      <p>Загружаем материалы дня...</p>
    </div>
    <div v-else-if="error" class="error-container">
      <h3>Ошибка!</h3>
      <p>Не удалось загрузить материалы дня. Попробуйте обновить страницу.</p>
      <pre>{{ error.message }}</pre>
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
                    <Icon name="mdi-tune" />
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
        <FeaturesDayQuiz />
      </VWindowItem>
    </VWindow>
  </section>
</template>

<style scoped lang="scss">
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

.error-container {
  h3 {
    color: var(--fg-error-color);
  }
  pre {
    margin-top: 1rem;
    background-color: var(--bg-tertiary-color);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: var(--fg-tertiary-color);
    max-width: 100%;
    overflow-x: auto;
  }
}

.section-title-container {
  text-align: center;
  margin-bottom: 2rem;
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
</style>
