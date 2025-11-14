<script setup lang="ts">
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { VOCABULARY_STYLE_VARIANT } from '~/shared/constant'
import FeaturesDayQuiz from './features-day-quiz.vue'

// Tabs
const activeTab = ref('info')

// Timer
const timeLeft = ref(0)

const hours = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60)).toString().padStart(2, '0'))
const minutes = computed(() => Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'))
const seconds = computed(() => Math.floor((timeLeft.value % (1000 * 60)) / 1000).toString().padStart(2, '0'))

let timerInterval: NodeJS.Timeout | null = null

function updateTimer() {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)
  timeLeft.value = tomorrow.getTime() - now.getTime()
}

onMounted(() => {
  updateTimer()
  timerInterval = setInterval(updateTimer, 1000)
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})

// Existing script
const dayFeatureMenu = ref(false)
const localVariant = useCookie<HieroglyphWordVariant | 'global'>(VOCABULARY_STYLE_VARIANT, { default: () => 5 })
const displayVariant = computed(() => (localVariant.value === 'global' ? undefined : localVariant.value))
const dayFeatures = {
  vocabulary: {
    theme: 'Офис',
    items: [
      { chinese: '办公室', pinyin: 'bàn gōng shì', translation: 'Офис' },
      { chinese: '电脑', pinyin: 'diàn nǎo', translation: 'Компьютер' },
      { chinese: '会议', pinyin: 'huì yì', translation: 'Собрание, конференция' },
      { chinese: '打印机', pinyin: 'dǎ yìn jī', translation: 'Принтер' },
    ],
    description: 'Пополните свой словарный запас словами, которые пригодятся в рабочей обстановке.',
  },
  grammar: {
    title: 'Структура предложения',
    rule: 'Базовый порядок слов в китайском предложении — Подлежащее-Сказуемое-Дополнение (SVO), как и в русском. Это основа, которую легко запомнить.',
    example: {
      chinese: '我爱你',
      pinyin: 'wǒ ài nǐ',
      translation: 'Я люблю тебя',
    },
    description: 'Освойте это правило, чтобы строить простые и понятные предложения.',
  },
}
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

    <VWindow v-model="activeTab" class="mt-2">
      <VWindowItem value="info">
        <div class="day-feature-grid">
          <!-- Блок "Тема дня" -->
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
                :key="item.chinese"
                :glyph="item.chinese"
                :pinyin="item.pinyin"
                :translate="item.translation"
                :variant="displayVariant"
              />
            </div>
            <p class="feature-description">
              {{ dayFeatures.vocabulary.description }}
            </p>
          </div>

          <!-- Блок "Грамматика дня" -->
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
                :glyph="dayFeatures.grammar.example.chinese"
                :pinyin="dayFeatures.grammar.example.pinyin"
                :translate="dayFeatures.grammar.example.translation"
                :variant="5"
              />
            </div>
            <p class="feature-description">
              {{ dayFeatures.grammar.description }}
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
}

.v-btn-toggle {
  .v-btn {
    width: 160px;
    text-transform: none;
    letter-spacing: 0.5px;
  }
}

.day-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
}

.vocabulary-list {
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.grammar-rule {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.grammar-example {
  background: var(--bg-tertiary-color);
  padding: 1rem;
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
      .hw-translate {
        border-top: 2px dashed var(--border-primary-color);
      }
    }
  }
}
</style>
