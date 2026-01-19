<script lang="ts" setup>
import type { BlockType } from '../../types/editor'
import { VueDraggableNext } from 'vue-draggable-next'
import { useGlossaryEditorStore } from '../../store/editor.store'
import EditorBlock from './editor-block.vue'

const store = useGlossaryEditorStore()
const { content } = storeToRefs(store)

const blockTypes = [
  { type: 'text', icon: 'mdi-text', label: 'Текст' },
  { type: 'hieroglyph', icon: 'mdi-ideogram-chinese-mandarin', label: 'Слово' },
  { type: 'pinyin', icon: 'mdi-translate', label: 'Пиньинь' },
  { type: 'divider', icon: 'mdi-minus', label: 'Разделитель' },
]

function handleAddBlock(rowIndex: number, type: string) {
  const newItem = { type: type as BlockType }
  store.addItemToRow(rowIndex, newItem)
}

function handleAddRow(afterIndex: number) {
  store.addRow(afterIndex)
}

function updateRowClass(rowIndex: number, className: string) {
  store.updateRow(rowIndex, { customClass: className })
}
</script>

<template>
  <div class="glossary-editor">
    <div v-if="content.rows.length === 0" class="empty-state">
      <v-btn color="primary" variant="tonal" @click="store.addRow()">
        Создать первую строку
      </v-btn>
    </div>

    <VueDraggableNext
      v-model="content.rows"
      handle=".row-handle"
      class="editor-rows"
    >
      <div
        v-for="(row, rIndex) in content.rows"
        :key="row.id"
        class="editor-row-wrapper"
      >
        <!-- Drag Handle -->
        <div class="row-controls left">
          <v-icon class="row-handle" size="small">
            mdi-drag
          </v-icon>
        </div>

        <!-- Row Content -->
        <div class="editor-row-content">
          <VueDraggableNext
            v-model="row.items"
            group="blocks"
            class="blocks-list"
            direction="horizontal"
          >
            <EditorBlock
              v-for="(item, iIndex) in row.items"
              :key="item.id"
              :block="item"
              @update="(data) => store.updateItem(rIndex, iIndex, data)"
              @remove="() => store.removeItem(rIndex, iIndex)"
            />
          </VueDraggableNext>

          <!-- Add Block Menu -->
          <v-menu location="end">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-plus"
                size="x-small"
                variant="text"
                class="add-block-btn"
                color="var(--fg-accent-color)"
              />
            </template>
            <v-list density="compact" class="add-block-menu">
              <v-list-item
                v-for="bt in blockTypes"
                :key="bt.type"
                :prepend-icon="bt.icon"
                :title="bt.label"
                @click="handleAddBlock(rIndex, bt.type)"
              />
            </v-list>
          </v-menu>
        </div>

        <!-- Row Actions (Settings & Delete) -->
        <div class="row-controls right">
          <!-- Row Settings Menu -->
          <v-menu
            :close-on-content-click="false"
            location="start"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-cog-outline"
                size="x-small"
                variant="text"
                color="var(--fg-secondary-color)"
              />
            </template>
            <v-card class="row-settings-card">
              <v-text-field
                :model-value="row.customClass"
                label="CSS классы строки"
                placeholder="например: warn example text-center"
                variant="outlined"
                density="compact"
                hide-details
                autofocus
                @update:model-value="(val) => updateRowClass(rIndex, val)"
              />
            </v-card>
          </v-menu>

          <v-btn
            icon="mdi-delete"
            size="x-small"
            variant="text"
            color="var(--fg-error-color)"
            @click="store.removeRow(rIndex)"
          />
        </div>

        <!-- Add New Row Zone -->
        <div class="add-row-zone" @click="handleAddRow(rIndex)">
          <div class="line" />
          <v-icon size="small" class="plus-icon">
            mdi-plus
          </v-icon>
          <div class="line" />
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>

<style scoped lang="scss">
.glossary-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 100px;
  width: 100%;
}

.editor-row-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 30px 1fr 40px;
  gap: 8px;
  align-items: center;
  padding: 16px 0;
  border-radius: 8px;
  transition: background-color 0.2s;

  &.warn {
    border-left: 2px solid var(--fg-warning-color);
    padding-left: 8px;
  }
  &.example {
    border-left: 2px solid var(--fg-accent-color);
    padding-left: 8px;
  }

  &:hover {
    background-color: rgba(var(--bg-secondary-color-rgb), 0.5);

    .add-row-zone {
      opacity: 0.5;
      pointer-events: auto;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.editor-row-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 44px;
  padding: 6px;
  border: 1px dashed var(--border-secondary-color);
  border-radius: 8px;
  background-color: var(--bg-primary-color);
}

.blocks-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
}

.row-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &.left {
    cursor: grab;
    color: var(--fg-tertiary-color);
    &:active {
      cursor: grabbing;
    }
  }

  &.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.row-settings-card {
  padding: 12px;
  min-width: 250px;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
}

.add-block-btn {
  opacity: 0.7;
  margin-left: 4px;

  &:hover {
    opacity: 1;
    background-color: var(--bg-tertiary-color);
  }
}

.add-row-zone {
  position: absolute;
  bottom: -9px;
  left: 30px;
  right: 30px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  cursor: pointer;
  z-index: 5;
  transition: opacity 0.2s;
  pointer-events: none;

  .line {
    flex-grow: 1;
    height: 2px;
    background-color: var(--fg-accent-color);
    border-radius: 1px;
  }

  .plus-icon {
    background-color: var(--fg-accent-color);
    color: var(--bg-primary-color);
    border-radius: 50%;
    padding: 2px;
    margin: 0 4px;
  }
}

.empty-state {
  display: flex;
  justify-content: center;
  padding: 32px;
}

.add-block-menu {
  background-color: var(--bg-secondary-color) !important;
}
</style>
