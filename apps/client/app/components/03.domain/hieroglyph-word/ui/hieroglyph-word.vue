<script setup lang="ts">
import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word/types'
import type { PinyinTextProps, PinyinTextTone } from '~/components/03.domain/pinyin-text'
import type { PinyinAnalysis } from '~/shared/lib'
import { useDisplay } from 'vuetify'
import { LexicalAnalysisModal } from '~/components/02.shared/lexical-analysis-modal'
import { useHieroglyphWordStore } from '~/components/03.domain/hieroglyph-word/store'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { analyzePinyin, cancelSpeech, initSpeechSynthesis, voiceTheText } from '~/shared/lib'
import HieroglyphTooltip from './hieroglyph-tooltip.vue'

interface Props {
  variant?: HieroglyphWordVariant
  pinyin?: PinyinTextProps | string
  translate?: string
  glyph: string
}

// --- Props ---
const props = defineProps<Props>()

// --- Store and State ---
const store = useHieroglyphWordStore()
const { mobile } = useDisplay()

const isMenuOpen = ref(false)
const snackbar = ref<boolean>(false)
const snackbarText = ref<string>('')
const isSpeaking = ref<boolean>(false)
const isLexicalAnalysisModalOpen = ref(false)

// --- Computed properties ---
const variant = computed(() => (props.variant ?? store.variant) as HieroglyphWordVariant)

const isSpaceless = computed(() => {
  return typeof props.pinyin === 'string' && !/[\s']/.test(props.pinyin)
})

const processedPinyin = computed<PinyinTextProps | undefined>(() => {
  if (!props.pinyin) {
    return undefined
  }

  if (typeof props.pinyin === 'object') {
    return props.pinyin
  }

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

  return {
    pinyin: pinyinString,
    tone: tones,
  }
})

const finalPinyinProps = computed<PinyinTextProps | undefined>(() => {
  const pinyinProps = processedPinyin.value
  if (!pinyinProps) {
    return undefined
  }

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
    return {
      ...tone,
      index: tone.index - spacesBefore,
    }
  })

  return {
    ...pinyinProps,
    pinyin: pinyinWithoutSpaces,
    tone: adjustedTones,
  }
})

const extraClasses = computed(() => {
  const classes: string[] = []
  if (!props.pinyin)
    classes.push('hw-none-pinyin')
  if (!props.translate)
    classes.push('hw-none-translate')
  return classes
})

// --- Methods ---
function handleSpeak() {
  if (isSpeaking.value) {
    cancelSpeech(() => {
      isSpeaking.value = false
    })
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

// --- Lifecycle Hooks ---
onMounted(() => initSpeechSynthesis())

onUnmounted(() => {
  if (isSpeaking.value) {
    cancelSpeech(() => {
      isSpeaking.value = false
    })
  }
})
</script>

<template>
  <span :key="`${variant}-${glyph}`" class="hw-word" :class="[`variant-${variant}`, ...extraClasses]">
    <VSnackbar
      v-model="snackbar"
      :timeout="2000"
      :location="mobile ? 'bottom' : 'top'"
      color="var(--bg-tertiary-color)"
      variant="flat"
    >
      <div class="hw-snackbar">
        {{ snackbarText }}
      </div>
    </VSnackbar>

    <LexicalAnalysisModal
      v-if="glyph"
      v-model="isLexicalAnalysisModalOpen"
      :text-to-analyze="glyph"
    />

    <template v-if="variant === 0">
      <VMenu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        location="top"
        activator="parent"
        offset="4"
        open-on-click
        content-class="hieroglyph-word-menu-content"
      >
        <template #activator="{ props: menuProps }">
          <span
            v-bind="menuProps"
            class="hw-glyph"
          >
            {{ glyph }}
          </span>
        </template>
        <HieroglyphTooltip
          @copy="copyGlyph"
          @speak="handleSpeak"
          @analyze="openLexicalAnalysis"
        />
      </VMenu>
    </template>

    <template v-else-if="variant === 1">
      <VMenu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        location="top"
        activator="parent"
        offset="4"
        origin="top center"
        open-on-click
        content-class="hieroglyph-word-menu-content"
      >
        <template #activator="{ props: menuProps }">
          <span
            v-bind="menuProps"
            class="hw-glyph"
          >
            {{ glyph }}
          </span>
        </template>
        <HieroglyphTooltip
          @copy="copyGlyph"
          @speak="handleSpeak"
          @analyze="openLexicalAnalysis"
        />
      </VMenu>
      —
      <span v-if="translate" class="hw-translate">{{ translate }}</span>
    </template>

    <template v-else-if="variant === 2">
      <VMenu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        location="top"
        activator="parent"
        offset="4"
        open-on-click
        content-class="hieroglyph-word-menu-content"
      >
        <template #activator="{ props: menuProps }">
          <span
            v-bind="menuProps"
            class="hw-glyph"
          >
            {{ glyph }}
          </span>
        </template>
        <HieroglyphTooltip
          @copy="copyGlyph"
          @speak="handleSpeak"
          @analyze="openLexicalAnalysis"
        />
      </VMenu>
      <span v-if="finalPinyinProps" class="hw-pinyin">
        <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
      </span>
    </template>

    <template v-else-if="variant === 3 || variant === 4">
      <span v-if="finalPinyinProps" class="hw-pinyin">
        <PinyinText v-bind="finalPinyinProps" :colored="finalPinyinProps.colored" />
      </span>
      <VMenu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        location="top center"
        activator="parent"
        offset="4"
        open-on-click
        content-class="hieroglyph-word-menu-content"
      >
        <template #activator="{ props: menuProps }">
          <span
            v-bind="menuProps"
            class="hw-glyph"
          >
            {{ glyph }}
          </span>
        </template>
        <HieroglyphTooltip
          @copy="copyGlyph"
          @speak="handleSpeak"
          @analyze="openLexicalAnalysis"
        />
      </VMenu>
      <span v-if="translate" class="hw-translate">{{ translate }}</span>
    </template>

    <template v-else-if="variant === 5">
      <VMenu
        v-model="isMenuOpen"
        :close-on-content-click="false"
        location="top"
        activator="parent"
        offset="4"
        open-on-click
        content-class="hieroglyph-word-menu-content"
      >
        <template #activator="{ props: menuProps }">
          <span
            v-bind="menuProps"
            class="hw-glyph"
          >
            {{ glyph }}
          </span>
        </template>
        <HieroglyphTooltip
          @copy="copyGlyph"
          @speak="handleSpeak"
          @analyze="openLexicalAnalysis"
        />
      </VMenu>
      <div class="hw-pinyin-translate">
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
}

.variant-0 {
  display: inline-flex;
}
.variant-1 {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.variant-2 {
  display: inline-flex;
  align-items: center;
  gap: 12px;

  .hw-pinyin {
    display: flex;
  }
}
.variant-3 {
  display: flex;
  align-items: center;
  margin: 0 5px;
  gap: 12px;
}
.variant-4 {
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  padding-left: 0px !important;
  border: 1px solid var(--border-accent-color);
  gap: 0px;
  max-width: 100%;

  &.hw-none-pinyin,
  &.hw-none-translate {
    border: none;
  }

  .hw-pinyin {
    text-align: center;
    justify-content: center;
    padding: 4px 12px;
    font-size: 1rem;
    white-space: normal;
  }

  .hw-glyph {
    font-size: 1.3rem;
    text-align: center;
    border-radius: 0px;
    border: none;
    border-top: 1px solid var(--border-accent-color);
    border-bottom: 1px solid var(--border-accent-color);
    box-shadow: none;
    white-space: normal;
    word-break: break-all;
  }

  .hw-translate {
    text-align: center;
    padding: 4px 12px;
    line-height: 30px;
    font-size: 0.9rem;
    white-space: normal;
    word-break: break-word;
  }
}
.variant-5 {
  display: inline-flex;

  .hw-glyph {
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
  }
  .hw-pinyin-translate {
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;

    .hw-pinyin {
      padding: 2px;
      padding-bottom: 4px;
    }
    .hw-translate {
      padding: 2px;
      border-top: 2px dashed var(--border-secondary-color);
      font-weight: 500;
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      min-width: 0;
    }
  }
}

.hw-word {
  font-size: 1rem;
  margin: 4px 0;
  margin-right: 8px;
  display: inline-flex;
  font-family: var(--font-family-cn);
}
.hw-pinyin {
  color: var(--fg-secondary-color);
  font-size: 1rem;
  letter-spacing: 0.2px;
  font-family: 'Sofia Sans';
  font-weight: 500;
  display: flex;
  min-width: 0;
  overflow-wrap: break-word;
}
.hw-glyph {
  letter-spacing: 2px;
  font-weight: 500;
  padding: 2px 4px;
  border-radius: 5px;
  background: var(--bg-accent-color);
  box-shadow: inset 0 0 2px var(--border-accent-color);
  color: var(--fg-primary-color);
  font-family: var(--font-family-cn);
  cursor: pointer;
  user-select: none;
}
.hw-translate {
  color: var(--fg-primary-color);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2px;
  font-family: 'Sofia Sans';
}

.hw-snackbar {
  text-align: center;
  color: var(--fg-accent-color);
  z-index: 9999;
}

.block {
  display: flex;
  width: auto;
  flex-wrap: wrap;
}
</style>
