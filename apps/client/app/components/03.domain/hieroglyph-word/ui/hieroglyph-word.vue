<script setup lang="ts">
import type { HieroglyphSettings, IHieroglyphWordVariousProps } from '~/components/03.domain/hieroglyph-word/types'
import type { PinyinTextProps, PinyinTextTone } from '~/components/03.domain/pinyin-text'
import type { PinyinAnalysis } from '~/shared/lib'
import { mergeProps } from 'vue'
import { useDisplay } from 'vuetify'
import { LexicalAnalysisModal } from '~/components/02.shared/lexical-analysis-modal'
import { useHieroglyphWordStore } from '~/components/03.domain/hieroglyph-word/store'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { analyzePinyin, cancelSpeech, initSpeechSynthesis, voiceTheText } from '~/shared/lib'
import HieroglyphTooltip from './hieroglyph-tooltip.vue'

const props = defineProps<IHieroglyphWordVariousProps>()

const store = useHieroglyphWordStore()
const { mobile } = useDisplay()

const isMenuOpen = ref(false)
const snackbar = ref<boolean>(false)
const snackbarText = ref<string>('')
const isSpeaking = ref<boolean>(false)
const isLexicalAnalysisModalOpen = ref(false)

const config = computed<HieroglyphSettings>(() => ({
  layout: props.settings?.layout ?? store.settings.layout,
  showPinyin: props.settings?.showPinyin ?? store.settings.showPinyin,
  showTranslation: props.settings?.showTranslation ?? store.settings.showTranslation,
}))

const isPinyinHidden = computed(() => !config.value.showPinyin)
const isTranslationHidden = computed(() => !config.value.showTranslation)
const hasHiddenInfo = computed(() => isPinyinHidden.value || isTranslationHidden.value)

const isSpaceless = computed(() => {
  return typeof props.pinyin === 'string' && !/[\s']/.test(props.pinyin)
})

const processedPinyin = computed<PinyinTextProps | undefined>(() => {
  if (!props.pinyin)
    return undefined
  if (typeof props.pinyin === 'object')
    return props.pinyin

  const analyses: PinyinAnalysis[] = analyzePinyin(props.pinyin)
  const pinyinString = analyses.map(a => a.rawPinyin).join(' ')
  const tones: PinyinTextTone[] = []

  let offset = 0
  for (const analysis of analyses) {
    if (analysis.position !== -1) {
      tones.push({
        index: offset + analysis.position,
        type: analysis.toneNumber as ToneType,
      })
    }
    offset += analysis.rawPinyin.length + 1
  }

  return { pinyin: pinyinString, tone: tones }
})

const finalPinyinProps = computed<PinyinTextProps | undefined>(() => {
  const pinyinProps = processedPinyin.value
  if (!pinyinProps)
    return undefined

  if (!isSpaceless.value || !pinyinProps.pinyin.includes(' ')) {
    return pinyinProps
  }

  const pinyinWithSpaces = pinyinProps.pinyin
  const pinyinWithoutSpaces = pinyinWithSpaces.replace(/ /g, '')
  const originalTones = Array.isArray(pinyinProps.tone) ? pinyinProps.tone : [pinyinProps.tone]

  const spaceIndices: number[] = []
  for (let i = 0; i < pinyinWithSpaces.length; i++) {
    if (pinyinWithSpaces[i] === ' ') {
      spaceIndices.push(i)
    }
  }

  const adjustedTones = originalTones.map((tone) => {
    const spacesBefore = spaceIndices.filter(spaceIndex => tone.index > spaceIndex).length
    return { ...tone, index: tone.index - spacesBefore }
  })

  return { ...pinyinProps, pinyin: pinyinWithoutSpaces, tone: adjustedTones }
})

function handleSpeak() {
  if (isSpeaking.value) {
    cancelSpeech(() => { isSpeaking.value = false })
  }
  else {
    voiceTheText(
      props.glyph!,
      () => { isSpeaking.value = true },
      () => { isSpeaking.value = false },
      'zh-CN',
    )
  }
  isMenuOpen.value = false
}

function showSnackbar(text: string) {
  snackbarText.value = text
  snackbar.value = true
}

function copyGlyph() {
  if (!props.glyph)
    return
  navigator.clipboard.writeText(props.glyph).then(() => {
    showSnackbar('Иероглиф скопирован!')
  }).catch((err) => {
    console.error('Failed to copy text: ', err)
    showSnackbar('Ошибка при копировании!')
  })
  isMenuOpen.value = false
}

function openLexicalAnalysis() {
  isLexicalAnalysisModalOpen.value = true
  isMenuOpen.value = false
}

onMounted(() => initSpeechSynthesis())

onUnmounted(() => {
  if (isSpeaking.value)
    cancelSpeech(() => { isSpeaking.value = false })
})
</script>

<template>
  <span
    class="hw-word"
    :class="[
      `layout-${config.layout}`,
      { 'no-pinyin': isPinyinHidden, 'no-translation': isTranslationHidden },
    ]"
  >
    <VSnackbar
      v-model="snackbar"
      :timeout="2000"
      :location="mobile ? 'bottom' : 'top'"
      color="var(--bg-tertiary-color)"
      variant="flat"
    >
      <div class="hw-snackbar">{{ snackbarText }}</div>
    </VSnackbar>

    <LexicalAnalysisModal
      v-if="glyph"
      v-model="isLexicalAnalysisModalOpen"
      :text-to-analyze="glyph"
    />

    <VMenu
      v-model="isMenuOpen"
      :close-on-content-click="false"
      location="top"
      offset="4"
      open-on-click
      content-class="hieroglyph-word-menu-content"
    >
      <!-- ACTIVATOR -->
      <template #activator="{ props: menuProps }">
        <!-- TOOLTIP WRAPPER -->
        <VTooltip
          :disabled="!hasHiddenInfo || isMenuOpen"
          location="top"
          open-on-hover
          content-class="hw-hover-tooltip"
        >
          <!-- TOOLTIP ACTIVATOR (The Glyph itself) -->
          <template #activator="{ props: tooltipProps }">
            <span
              v-bind="mergeProps(menuProps, tooltipProps)"
              class="hw-glyph"
              :class="{ 'card-glyph': config.layout === 'card' }"
            >
              {{ glyph }}
            </span>
          </template>

          <!-- TOOLTIP CONTENT -->
          <div class="hw-tooltip-inner">
            <PinyinText
              v-if="isPinyinHidden && finalPinyinProps"
              v-bind="finalPinyinProps"
              :colored="finalPinyinProps.colored"
              class="hw-tooltip-pinyin"
            />
            <span v-if="isTranslationHidden && translate" class="hw-tooltip-translate">
              {{ translate }}
            </span>
          </div>
        </VTooltip>
      </template>

      <!-- MENU CONTENT -->
      <div class="hw-menu-wrapper">
        <!-- 1. Pinyin -->
        <div v-if="isPinyinHidden && finalPinyinProps" class="hw-menu-info pinyin-info">
          <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
        </div>

        <!-- 2. Translation -->
        <div v-if="isTranslationHidden && translate" class="hw-menu-info translate-info">
          {{ translate }}
        </div>

        <!-- 3. Actions -->
        <HieroglyphTooltip @copy="copyGlyph" @speak="handleSpeak" @analyze="openLexicalAnalysis" />
      </div>
    </VMenu>

    <!-- VISIBLE CONTENT RENDERING -->

    <!-- Inline Layout -->
    <template v-if="config.layout === 'inline'">
      <span v-if="config.showPinyin && finalPinyinProps" class="hw-pinyin">
        <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
      </span>
      <span v-if="config.showTranslation && translate" class="hw-translate">
        — {{ translate }}
      </span>
    </template>

    <!-- Vertical Layout -->
    <template v-else-if="config.layout === 'vertical'">
      <span v-if="config.showPinyin && finalPinyinProps" class="hw-pinyin">
        <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
      </span>
      <!-- Glyph rendered via activator above -->
      <span v-if="config.showTranslation && translate" class="hw-translate">
        {{ translate }}
      </span>
    </template>

    <!-- Card Layout -->
    <template v-else-if="config.layout === 'card'">
      <div class="hw-card-details">
        <span v-if="finalPinyinProps" class="hw-pinyin">
          <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
        </span>
        <span v-if="translate" class="hw-translate">{{ translate }}</span>
      </div>
    </template>
  </span>
</template>

<style lang="scss">
.hieroglyph-word-menu-content {
  min-width: fit-content !important;
  padding: 0;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
  overflow: visible;
}

.hw-menu-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.hw-menu-info {
  background-color: var(--bg-tertiary-color);
  border: 1px solid var(--border-secondary-color);
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--fg-primary-color);
  text-align: center;
  max-width: 200px;
  width: 100%;

  &.pinyin-info {
    color: var(--fg-secondary-color);
    font-weight: 500;
  }
}

.hw-hover-tooltip {
  background: var(--bg-tertiary-color) !important;
  border: 1px solid var(--border-secondary-color);
  color: var(--fg-primary-color) !important;
  border-radius: 8px;
  font-size: 0.9rem;
}

.hw-tooltip-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  .hw-tooltip-pinyin {
    color: var(--fg-secondary-color);
    font-weight: 500;
  }
  .hw-tooltip-translate {
    font-size: 0.85rem;
  }
}

.hw-word {
  display: inline-flex;
  font-family: var(--font-family-cn);
  margin: 4px;
  position: relative;
  vertical-align: middle;
  line-height: 1.5;

  /* --- INLINE (Default) --- */
  &.layout-inline {
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

    .hw-glyph {
      font-size: 1.2rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
    }

    .hw-pinyin {
      color: var(--fg-secondary-color);
      font-size: 1rem;
      letter-spacing: 0.2px;
      font-family: 'Sofia Sans';
      font-weight: 500;
    }

    .hw-translate {
      color: var(--fg-primary-color);
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 0.2px;
      font-family: 'Sofia Sans';
    }
  }

  /* --- VERTICAL --- */
  &.layout-vertical {
    display: inline-flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid var(--border-accent-color);
    background-color: var(--bg-primary-color);
    overflow: hidden;
    min-width: 60px;

    /* Используем order для визуального порядка, так как DOM порядок определяется v-menu */
    .hw-pinyin {
      order: -1; /* Пиньинь всегда сверху */
      text-align: center;
      justify-content: center;
      padding: 4px 12px;
      font-size: 1rem;
      white-space: normal;
      color: var(--fg-secondary-color);
      font-family: 'Sofia Sans';
      border-bottom: 1px solid var(--border-accent-color);
    }

    .hw-glyph {
      order: 0; /* Иероглиф посередине */
      font-size: 1.3rem;
      text-align: center;
      padding: 4px;
      // Границы сверху и снизу теперь определяются соседями или логикой
      background-color: var(--bg-tertiary-color);
      color: var(--fg-primary-color);
      font-weight: 500;
      // Добавляем границу снизу, которая отделит иероглиф от перевода
      border-bottom: 1px solid var(--border-accent-color);
    }

    .hw-translate {
      order: 1; /* Перевод снизу */
      text-align: center;
      padding: 4px 12px;
      font-size: 0.9rem;
      white-space: normal;
      word-break: break-word;
      color: var(--fg-primary-color);
      font-family: 'Sofia Sans';
    }

    /* Условия отсутствия границ */

    /* Если нет перевода, у иероглифа (который последний) не должно быть нижней границы */
    &.no-translation .hw-glyph {
      border-bottom: none;
    }
  }

  /* --- CARD --- */
  &.layout-card {
    display: inline-flex;
    align-items: center;
    gap: 0;

    .hw-glyph.card-glyph {
      font-size: 2.1rem;
      line-height: 64px;
      border-radius: 10px;
      min-width: 64px;
      min-height: 64px;
      text-align: center;
      padding: 0 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
    }

    .hw-card-details {
      padding-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;

      .hw-pinyin {
        padding: 2px;
        padding-bottom: 4px;
        font-size: 1rem;
        font-weight: 500;
        color: var(--fg-secondary-color);
        font-family: 'Sofia Sans';
      }

      .hw-translate {
        padding: 2px;
        border-top: 2px dashed var(--border-secondary-color);
        font-weight: 500;
        word-break: break-word;
        overflow-wrap: break-word;
        font-size: 1rem;
        color: var(--fg-primary-color);
        font-family: 'Sofia Sans';
      }
    }
  }
}

// Common base styles
.hw-glyph {
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}

.hw-pinyin {
  display: inline-flex;
}

.hw-translate {
  display: inline;
}

.hw-snackbar {
  text-align: center;
  color: var(--fg-accent-color);
  z-index: 9999;
}
</style>
