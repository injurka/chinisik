<script lang="ts" setup>
import type { EditorBlockData } from '../../types/editor'
import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word'
import { MarkdownContent } from '~/components/02.shared/markdown-content'
import { StyleSwitcher } from '~/components/02.shared/style-switcher'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { PinyinTextRaw } from '~/components/03.domain/pinyin-text'

const props = defineProps<{
  block: EditorBlockData
  isSelected?: boolean
}>()

const emit = defineEmits<{
  update: [data: Partial<EditorBlockData>]
  remove: []
}>()

const isEditMenuOpen = ref(false)

// Локальная модель для StyleSwitcher
// Может быть объектом настроек или строкой 'global'
const styleState = ref<Partial<HieroglyphSettings> | 'global'>('global')

const localData = reactive({
  ...props.block,
  variant: undefined,
})

// Синхронизация пропсов с локальным состоянием при открытии меню или изменении пропсов
function syncState() {
  Object.assign(localData, { ...props.block })

  // Если настройки есть и они не пустые — используем их, иначе — global
  if (props.block.settings && Object.keys(props.block.settings).length > 0) {
    styleState.value = { ...props.block.settings }
  }
  else {
    styleState.value = 'global'
  }
}

watch(() => props.block, () => {
  if (!isEditMenuOpen.value) {
    syncState()
  }
}, { deep: true })

watch(isEditMenuOpen, (isOpen) => {
  if (isOpen) {
    syncState()
  }
})

function save() {
  const { variant, ...cleanData } = localData

  // Обработка настроек отображения
  if (styleState.value === 'global') {
    cleanData.settings = undefined
  }
  else {
    cleanData.settings = styleState.value as Partial<HieroglyphSettings>
  }

  emit('update', cleanData as EditorBlockData)
  isEditMenuOpen.value = false
}

function handleRemove() {
  emit('remove')
  isEditMenuOpen.value = false
}
</script>

<template>
  <div
    class="editor-block"
    :class="[`type-${block.type}`, { selected: isSelected }]"
  >
    <!-- ACTIVATOR AREA -->
    <div
      id="menu-activator"
      class="block-content"
    >
      <v-menu
        v-model="isEditMenuOpen"
        :close-on-content-click="false"
        location="bottom center"
        offset="10"
        activator="parent"
      >
        <div class="edit-card" @click.stop @keydown.stop>
          <!-- Text Edit -->
          <div v-if="block.type === 'text'" class="fields">
            <v-textarea
              v-model="localData.content"
              label="Markdown текст"
              rows="3"
              variant="outlined"
              density="compact"
              hide-details
              color="var(--fg-accent-color)"
              autofocus
              @keydown.enter.ctrl.prevent="save"
            />
          </div>

          <!-- Hieroglyph Edit -->
          <div v-else-if="block.type === 'hieroglyph'" class="fields">
            <div class="inputs-row">
              <v-text-field
                v-model="localData.glyph"
                label="Иероглиф"
                variant="outlined"
                density="compact"
                hide-details
                color="var(--fg-accent-color)"
              />
              <v-text-field
                v-model="localData.pinyin"
                label="Пиньинь"
                placeholder="ni3 hao3"
                variant="outlined"
                density="compact"
                hide-details
                color="var(--fg-accent-color)"
              />
            </div>
            <v-text-field
              v-model="localData.translate"
              label="Перевод"
              variant="outlined"
              density="compact"
              hide-details
              color="var(--fg-accent-color)"
            />

            <v-divider class="my-3 border-dashed" />

            <div class="settings-controls">
              <label class="text-caption mb-2 d-block text-secondary">Вид отображения:</label>
              <StyleSwitcher v-model="styleState" />
            </div>
          </div>

          <!-- Pinyin Edit -->
          <div v-else-if="block.type === 'pinyin'" class="fields">
            <v-text-field
              v-model="localData.pinyin"
              label="Пиньинь"
              variant="outlined"
              density="compact"
              hide-details
              color="var(--fg-accent-color)"
            />
          </div>

          <!-- Actions -->
          <div class="actions mt-4">
            <v-btn
              color="var(--fg-error-color)"
              variant="text"
              size="small"
              icon
              @click="handleRemove"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              color="var(--fg-accent-color)"
              variant="tonal"
              size="small"
              @click="save"
            >
              Сохранить
            </v-btn>
          </div>
        </div>
      </v-menu>

      <!-- PREVIEW CONTENT -->
      <!-- pointer-events: none предотвращает открытие внутренних тултипов -->
      <div class="disable-events">
        <template v-if="block.type === 'text'">
          <MarkdownContent
            v-if="block.content"
            :content="block.content"
            class="inline-md"
          />
          <span v-else class="placeholder">Текст...</span>
        </template>

        <template v-else-if="block.type === 'hieroglyph'">
          <HieroglyphWord
            :glyph="block.glyph || '?'"
            :pinyin="block.pinyin"
            :translate="block.translate"
            :settings="block.settings"
          />
        </template>

        <template v-else-if="block.type === 'pinyin'">
          <PinyinTextRaw
            v-if="block.pinyin"
            :pinyin="block.pinyin"
          />
          <span v-else class="placeholder">Pinyin...</span>
        </template>

        <template v-else-if="block.type === 'divider'">
          <hr class="editor-hr">
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editor-block {
  display: inline-flex;
  align-items: center;
  margin: 2px;
  border-radius: 4px;
  min-height: 24px;
  vertical-align: middle;

  .block-content {
    padding: 2px 4px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;

    &:hover {
      background-color: var(--bg-tertiary-color);
      border-color: var(--border-primary-color);
    }
  }

  .disable-events {
    pointer-events: none;
  }

  .placeholder {
    opacity: 0.5;
    font-style: italic;
    color: var(--fg-secondary-color);
  }

  &.type-divider {
    width: 100%;
    .block-content {
      width: 100%;
    }
    .editor-hr {
      width: 100%;
      border-top: 1px dashed var(--border-accent-color);
      margin: 8px 0;
    }
  }

  &.type-text {
    .inline-md {
      display: inline;
      :deep(p) {
        margin: 0;
        display: inline;
      }
    }
  }
}

.edit-card {
  padding: 16px;
  min-width: 360px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
  color: var(--fg-primary-color);

  .fields {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .inputs-row {
    display: flex;
    gap: 8px;

    > * {
      flex: 1;
    }
  }

  .text-secondary {
    color: var(--fg-secondary-color) !important;
  }

  .border-dashed {
    border-style: dashed;
    border-color: var(--border-secondary-color);
  }

  .actions {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-secondary-color);
    padding-top: 8px;
  }
}
</style>
