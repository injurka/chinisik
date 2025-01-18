<script lang="ts" setup>
import type { HieroglyphWordVariant, IHieroglyphWordProps } from '~/components/domain/hieroglyph-word'
import type { FontCnVariant } from '~/shared/composables/change-font-cn'
import type { ThemesVariant } from '~/shared/composables/change-theme'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import { DialogWithClose } from '~/components/shared/dialog-with-close'

const isDialog = defineModel<boolean>({ required: false, default: true })
const store = useStore(['hieroglyphWord', 'pinyinText'])
const { setFontCnFamily, fontCn } = useChangeFontCn()
const { setTheme, theme } = useChangeTheme()

// Controllers
const controlledTheme = computed({
  get: () => theme,
  set: (value: ThemesVariant) => setTheme(value),
})

const controlledHieroglyphVariant = computed({
  get: () => store.hieroglyphWord.variant,
  set: (value: HieroglyphWordVariant) => store.hieroglyphWord.variant = value,
})

const controlledColorPinyin = computed({
  get: () => store.pinyinText.isColored,
  set: (value: boolean) => store.pinyinText.setIsColored(value),
})

const controlledFontCnFamily = computed({
  get: () => fontCn.value,
  set: (value: FontCnVariant) => setFontCnFamily(value),
})

// Preview
const showPreview = ref<boolean>(false)
let timeoutId: (ReturnType<typeof setTimeout>) | null = null

function showPreviewHandler() {
  showPreview.value = true
  if (timeoutId)
    clearTimeout(timeoutId)
}

function hidePreviewHandler() {
  timeoutId = setTimeout(() => {
    showPreview.value = false
  }, 500)
}

const previewProps = computed(() => ({
  glyph: '你好',
  pinyin: {
    pinyin: 'ni hao',
    tone: [{
      index: 1,
      type: 3,
    }, {
      index: 4,
      type: 3,
    }],
  },
  translate: 'Привет',
} as IHieroglyphWordProps))
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-settings"
    :max-width="360"
  >
    <div class="dialog-settings-wrapper">
      <span class="title">Общие настройки</span>

      <div class="group-list">
        <div class="group">
          <div class="group-subtitle">
            Цветовое оформление
          </div>
          <v-btn-toggle
            v-model="controlledTheme"
            variant="text"
            class="group-items"
            color="var(--fg-action-color)"
            density="comfortable"
            mandatory
          >
            <v-btn value="light" class="group-item">
              <Icon name="line-md:sunny-outline-twotone" />
            </v-btn>
            <v-btn value="dark" class="group-item">
              <Icon name="line-md:moon-alt-loop" />
            </v-btn>
            <v-btn value="rainy" class="group-item">
              <Icon name="line-md:cloud-twotone" />
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль отображения иероглифа
          </div>
          <v-btn-toggle
            v-model="controlledHieroglyphVariant"
            density="comfortable"
            variant="text"
            class="group-items"
            color="var(--fg-action-color)"
            mandatory
          >
            <v-btn class="group-item">
              1
            </v-btn>
            <v-btn class="group-item">
              2
            </v-btn>
            <v-btn class="group-item">
              3
            </v-btn>
            <v-btn class="group-item">
              4
            </v-btn>
            <v-btn class="group-item">
              5
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль отображения тона
          </div>
          <v-btn-toggle
            v-model="controlledColorPinyin"
            density="comfortable"
            variant="text"
            mandatory
            class="group-items"
            color="var(--fg-action-color)"
          >
            <v-btn :value="true" class="group-item colorfull">
              цветной
            </v-btn>
            <v-btn :value="false" class="group-item">
              обычный
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group" @mouseenter="showPreviewHandler" @mouseleave="hidePreviewHandler">
          <div class="group-subtitle">
            Стиль написание иероглифа
          </div>
          <v-btn-toggle
            v-model="controlledFontCnFamily"
            density="comfortable"
            variant="text"
            mandatory
            class="group-items"
            color="var(--fg-action-color)"
          >
            <v-btn :value="FontCnVariant.Brushed" class="group-item cn-draw">
              прописные
            </v-btn>
            <v-btn :value="FontCnVariant.Base" class="group-item">
              печатные
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
    </div>

    <div class="preview" :class="{ 'show-preview': showPreview }">
      <HieroglyphWord
        :glyph="previewProps.glyph"
        :pinyin="previewProps.pinyin"
        :translate="previewProps.translate"
      />
      <div class="preview-bg" />
    </div>
  </DialogWithClose>
</template>

<style lang="scss">
.dialog-settings {
  .preview {
    position: absolute;
    right: -270px;
    top: calc(50% - 110px);
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 16px;
    background-color: var(--bg-tertiary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    &.show-preview {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .title {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--border-secondary-color);
    width: 90%;
    text-align: center;
    padding-bottom: 4px;
    color: var(--fg-primary-color);
  }

  .group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-items {
      width: 100%;
      background-color: var(--bg-tertiary-color);
    }
    &-item {
      flex-grow: 1;
      font-size: 0.9rem;
      letter-spacing: 0;
      font-weight: 400;
      text-decoration: none;
      color: var(--fg-primary-color);
      text-transform: none;

      &.colorfull {
        background: linear-gradient(
          to right,
          var(--fg-tone-0-color) 0%,
          var(--fg-tone-1-color) 20%,
          var(--fg-tone-2-color) 40%,
          var(--fg-tone-3-color) 60%,
          var(--fg-tone-4-color) 80%,
          var(--fg-tone-4-color) 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &.cn-draw {
        font-family: 'Noto Serif SC';
      }
    }

    &-subtitle {
      color: var(--fg-secondary-color);
      font-size: 1rem;
      margin: 2px;
    }
    &-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;
      margin-top: 4px;
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    min-height: 200px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 16px;
  }
}
</style>
