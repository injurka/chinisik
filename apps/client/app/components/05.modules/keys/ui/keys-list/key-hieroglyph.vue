<script lang="ts" setup>
import type { ControlHieroglyphKey } from '../../store/keys.store'
import { useElementVisibility } from '@vueuse/core'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { analyzePinyin, cancelSpeech, initSpeechSynthesis, voiceTheText } from '~/shared/lib'

interface Props {
  control: ControlHieroglyphKey
  hieroglyph: HieroglyphKey
}

const props = defineProps<Props>()
const emits = defineEmits<{ onExpand: [HieroglyphKey] }>()

const contentEl = ref<HTMLElement | null>(null)
const isElementVisible = useElementVisibility(contentEl)

const isFullyShowed = ref<boolean>(false)
const isSpeaking = ref<boolean>(false)

const shouldShowPinyin = computed<boolean>(() => props.control.isPinyin || isFullyShowed.value)
const shouldShowTranslate = computed<boolean>(() => props.control.isTranslate || isFullyShowed.value)

const pinyinData = computed(() => {
  if (!props.hieroglyph.pinyin)
    return null

  const analysis = analyzePinyin(props.hieroglyph.pinyin)

  return analysis[0]
})

function handleVoiceClick() {
  isSpeaking.value
    ? cancelSpeech(() => { isSpeaking.value = false })
    : voiceTheText(
        props.hieroglyph.glyph,
        () => { isSpeaking.value = true },
        () => { isSpeaking.value = false },
      )
}

watch(
  () => [props.control.isPinyin, props.control.isTranslate],
  () => {
    isFullyShowed.value = false
  },
)

onMounted(() => initSpeechSynthesis())

onUnmounted(() => {
  if (isSpeaking.value) {
    cancelSpeech(() => { isSpeaking.value = false })
  }
})
</script>

<template>
  <div ref="contentEl" class="wrapper">
    <div class="item" @click="isFullyShowed = !isFullyShowed">
      <div class="item-index">
        {{ hieroglyph.index }}
      </div>

      <Transition name="slide-up">
        <div v-if="shouldShowPinyin && isElementVisible && pinyinData" class="item-pinyin">
          <PinyinText
            :pinyin="pinyinData.rawPinyin"
            :tone="{
              index: pinyinData.position,
              type: pinyinData.toneNumber as ToneType,
            }"
          />
          <div
            v-show="control.isTranscription && hieroglyph.transcription"
            class="pinyin-tran"
          >
            {{ hieroglyph.transcription }}
          </div>
        </div>
      </Transition>

      <div class="item-hieroglyph">
        <span class="main-glyph">{{ hieroglyph.glyph }}</span>
        <span v-if="hieroglyph.alternative" class="alternative-glyph">
          {{ hieroglyph.alternative }}
        </span>
      </div>

      <Transition name="slide-down">
        <div v-if="shouldShowTranslate" class="item-translate">
          {{ hieroglyph.translate }}
        </div>
      </Transition>

      <div v-if="isElementVisible" class="item-actions">
        <div
          class="action-btn item-voice"
          @click.stop="handleVoiceClick"
        >
          <Icon :name="isSpeaking ? 'mdi:stop' : 'mdi:volume-high'" size="15" />
        </div>
        <div
          class="action-btn item-expand"
          @click.stop="emits('onExpand', hieroglyph)"
        >
          <Icon name="mdi:menu" size="15" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.wrapper {
  cursor: pointer;
  position: relative;
  margin: 5px;
  aspect-ratio: 1 / 1;

  width: 160px;
  height: 160px;

  @include tablet {
    width: 30%;
    height: 30%;
  }

  @include mobile {
    width: 45%;
    height: 45%;
  }

  .item {
    overflow: hidden;
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 10px;
    padding: 5px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1.5fr 2fr 1.5fr;
    grid-template-areas:
      'pinyin'
      'hieroglyph'
      'translate';
    text-align: center;
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);

    &:hover {
      box-shadow: 0 0 5px var(--bg-overlay-secondary-color);
      transition: box-shadow 0.2s ease-in-out;

      .item-index,
      .action-btn {
        opacity: 1;
        color: var(--fg-primary-color);
        transition: all 0.2s ease-in-out;
      }
    }

    &-pinyin,
    &-hieroglyph,
    &-translate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: normal;
    }

    &-pinyin {
      grid-area: pinyin;
      font-size: 1rem;

      .pinyin-tran {
        font-size: 0.7rem;
        color: var(--fg-secondary-color);
        border-top: 1px solid var(--border-primary-color);
      }
    }

    &-hieroglyph {
      grid-area: hieroglyph;
      font-family: var(--font-family-cn);
      font-size: 2rem;
      position: relative;

      @include tablet() {
        font-size: 3rem;
      }

      .alternative-glyph {
        position: absolute;
        top: 70%;
        left: calc(50% + 30px);
        transform: translateY(-50%);
        font-size: 1rem;
        color: var(--fg-secondary-color);
        background-color: var(--bg-tertiary-color);
        border-radius: 4px;
        padding: 0 8px;
        opacity: 0.8;
      }
    }

    &-translate {
      grid-area: translate;
      text-align: center;
      font-family: 'Sofia Sans';
      font-size: 0.8rem;
    }

    &-index {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      top: -4px;
      left: -4px;
      height: 26px;
      width: 26px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 50%;
      color: var(--fg-secondary-color);
      z-index: 10;

      @include mobile {
        top: -3px;
        left: -3px;
        height: 20px;
        width: 20px;
        font-size: 0.6rem;
        letter-spacing: 0px;
      }
    }

    &-actions {
      position: absolute;
      bottom: -4px;
      right: -4px;
      display: flex;
      gap: 4px;
      z-index: 5;
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 22px;
      width: 22px;
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-secondary-color);
      border-radius: 20%;
      transition: all 0.2s ease-in-out;
      opacity: 0;
      color: var(--fg-secondary-color);

      &:hover {
        opacity: 1;
        color: var(--fg-primary-color);
      }

      @include mobile {
        height: 18px;
        width: 18px;
        font-size: 0.6rem;
        opacity: 1;
      }
    }
  }
}
</style>
