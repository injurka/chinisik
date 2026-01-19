<script lang="ts" setup>
import type { FontCnVariant } from '~/shared/composables/change-font-cn'
import type { ThemesVariant } from '~/shared/composables/change-theme'
import { DialogWithClose } from '~/components/02.shared/dialog-with-close'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'

const isDialog = defineModel<boolean>({ required: false, default: true })
const store = useStore(['hieroglyphWord', 'pinyinText'])
const { setFontCnFamily, fontCn } = useChangeFontCn()
const { setTheme, theme } = useChangeTheme()

const { settings: hSettings } = storeToRefs(store.hieroglyphWord)

const controlledTheme = computed({
  get: () => theme.preference,
  set: (value: ThemesVariant) => setTheme(value),
})

// eslint-disable-next-line unused-imports/no-unused-vars
const controlledFontCnFamily = computed({
  get: () => fontCn.value,
  set: (value: FontCnVariant) => setFontCnFamily(value),
})

const controlledColorPinyin = computed({
  get: () => store.pinyinText.isColored,
  set: (value: boolean) => store.pinyinText.setIsColored(value),
})

const layoutOptions = [
  { value: 'inline', label: 'В строке', icon: 'mdi-format-align-justify' },
  { value: 'vertical', label: 'Столбик', icon: 'mdi-view-column' },
  { value: 'card', label: 'Карточка', icon: 'mdi-card-text-outline' },
]

function updateHSetting(key: keyof typeof hSettings.value, value: any) {
  store.hieroglyphWord.updateSettings({ [key]: value })
}

const previewProps = {
  glyph: '你好',
  pinyin: 'ni3 hao3',
  translate: 'Привет',
}
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-settings"
    :max-width="400"
  >
    <div class="dialog-settings-wrapper">
      <span class="title">Настройки отображения</span>

      <div class="group-list">
        <div class="group">
          <div class="group-subtitle">
            Тема оформления
          </div>
          <v-btn-toggle
            v-model="controlledTheme"
            variant="outlined"
            class="full-width-toggle"
            color="var(--fg-accent-color)"
            density="compact"
            mandatory
            divided
          >
            <v-btn value="light" class="flex-grow-1">
              <v-icon>mdi-weather-sunny</v-icon>
            </v-btn>
            <v-btn value="dark" class="flex-grow-1">
              <v-icon>mdi-weather-night</v-icon>
            </v-btn>
            <v-btn value="system" class="flex-grow-1">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <div class="group">
          <div class="group-subtitle">
            Вид иероглифов
          </div>
          <v-btn-toggle
            :model-value="hSettings.layout"
            variant="outlined"
            class="full-width-toggle"
            color="var(--fg-accent-color)"
            density="compact"
            mandatory
            divided
            @update:model-value="(v: any) => updateHSetting('layout', v)"
          >
            <v-btn
              v-for="opt in layoutOptions"
              :key="opt.value"
              :value="opt.value"
              class="flex-grow-1"
            >
              <v-icon start>
                {{ opt.icon }}
              </v-icon>
              <span v-if="!$vuetify.display.mobile">{{ opt.label }}</span>
            </v-btn>
          </v-btn-toggle>

          <div
            v-if="hSettings.layout !== 'card'"
            class="layout-options mt-2"
          >
            <div
              class="option-check"
              :class="{ active: hSettings.showPinyin }"
              @click="updateHSetting('showPinyin', !hSettings.showPinyin)"
            >
              <v-checkbox
                :model-value="hSettings.showPinyin"
                density="compact"
                hide-details
                color="var(--fg-accent-color)"
                readonly
                class="ma-0 pa-0 pointer-events-none"
              />
              <span>Пиньинь</span>
            </div>

            <div
              class="option-check"
              :class="{ active: hSettings.showTranslation }"
              @click="updateHSetting('showTranslation', !hSettings.showTranslation)"
            >
              <v-checkbox
                :model-value="hSettings.showTranslation"
                density="compact"
                hide-details
                color="var(--fg-accent-color)"
                readonly
                class="ma-0 pa-0 pointer-events-none"
              />
              <span>Перевод</span>
            </div>
          </div>
        </div>

        <div class="group">
          <div class="group-subtitle">
            Тона пиньиня
          </div>
          <div
            class="switch-row"
            :class="{ active: controlledColorPinyin }"
            @click="controlledColorPinyin = !controlledColorPinyin"
          >
            <span>Цветные тона</span>
            <v-switch
              v-model="controlledColorPinyin"
              color="var(--fg-accent-color)"
              hide-details
              density="compact"
              inset
              class="ma-0 pa-0 pointer-events-none"
            />
          </div>
        </div>

        <div class="preview-box">
          <div class="group-subtitle mb-2 text-center">
            Предпросмотр
          </div>
          <div class="preview-content">
            <HieroglyphWord v-bind="previewProps" />
          </div>
        </div>
      </div>
    </div>
  </DialogWithClose>
</template>

<style lang="scss" scoped>
.dialog-settings {
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border-secondary-color);
    width: 100%;
    text-align: center;
    padding-bottom: 8px;
    color: var(--fg-primary-color);
  }

  &-wrapper {
    background-color: var(--bg-secondary-color);
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .group-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    &-subtitle {
      font-size: 0.9rem;
      color: var(--fg-secondary-color);
      font-weight: 500;
    }
  }

  .full-width-toggle {
    width: 100%;
    display: flex;
    background-color: var(--bg-primary-color);
    border-color: var(--border-secondary-color);
    height: 40px;

    .v-btn {
      height: 100% !important;
      color: var(--fg-secondary-color);
      text-decoration: none;
      text-transform: none;

      &--active {
        color: var(--fg-accent-color) !important;
      }
    }
  }

  .layout-options {
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }

  .option-check {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 8px;
    flex-grow: 1;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;

    .v-checkbox {
      height: 27px;
    }

    &:hover {
      background-color: var(--bg-hover-color);
      border-color: var(--border-accent-color);
    }

    &.active {
      border-color: var(--border-accent-color);
      background-color: rgba(var(--bg-accent-color-rgb), 0.05);

      span {
        color: var(--fg-accent-color);
        font-weight: 500;
      }
    }

    span {
      font-size: 0.9rem;
      color: var(--fg-primary-color);
    }

    :deep(.v-selection-control) {
      min-height: auto;
    }
  }

  .switch-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-tertiary-color);
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--border-secondary-color);
    font-size: 0.9rem;
    color: var(--fg-primary-color);
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;

    &:hover {
      background-color: var(--bg-hover-color);
      border-color: var(--border-accent-color);
    }

    &.active {
      border-color: var(--border-accent-color);
      background-color: rgba(var(--bg-accent-color-rgb), 0.05);

      span {
        color: var(--fg-accent-color);
        font-weight: 500;
      }
    }
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .preview-box {
    margin-top: 8px;
    background-color: var(--bg-primary-color);
    border: 1px dashed var(--border-secondary-color);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
    justify-content: center;
  }
}
</style>
