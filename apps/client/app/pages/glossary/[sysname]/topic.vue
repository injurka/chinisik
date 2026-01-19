<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { textMock } from '~/../server/utils/mock/glossary/1_modal-verb/text-mock'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { useGlossaryEditorStore } from '~/components/05.modules/glossary/store/editor.store'
import GlossaryEditor from '~/components/05.modules/glossary/ui/editor/glossary-editor.vue'

function handleNavigateTab(value: TabVariant) {
  navigateTo(RoutePaths.Glossary.Page('1', value))
}

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})

const editorStore = useGlossaryEditorStore()

// Инициализация редактора данными при входе
onMounted(() => {
  if (textMock.main) {
    editorStore.initFromData(textMock.main)
  }
})
</script>

<template>
  <div class="content-section">
    <Transition name="fade" mode="out-in">
      <!-- 1. РЕЖИМ РЕДАКТИРОВАНИЯ (Drag & Drop) -->
      <GlossaryEditor
        v-if="editorStore.isEditing && !editorStore.isPreviewing"
      />

      <!-- 2. РЕЖИМ ПРЕДПРОСМОТРА РЕДАКТОРА (То, что получилось) -->
      <div v-else-if="editorStore.isEditing && editorStore.isPreviewing" class="preview-mode">
        <div class="preview-label">
          Режим предпросмотра
        </div>
        <JsonToDom :node="editorStore.exportToJson()" />
      </div>

      <!-- 3. ОБЫЧНЫЙ РЕЖИМ (Данные с сервера) -->
      <JsonToDom
        v-else
        :node="textMock.main!"
      />
    </Transition>

    <!-- Панель навигации в обычном режиме -->
    <div v-if="!editorStore.isEditing" class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('brief')"
      >
        Перейти к кратком содержанию
        <template #append>
          <Icon name="mdi:arrow-right" />
        </template>
      </VBtn>
    </div>

    <!-- Панель управления в режиме редактора -->
    <div v-else class="navigate-panel editor-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        :variant="editorStore.isPreviewing ? 'flat' : 'tonal'"
        :color="editorStore.isPreviewing ? 'primary' : ''"
        @click="editorStore.togglePreview()"
      >
        <template #prepend>
          <Icon :name="editorStore.isPreviewing ? 'mdi:pencil' : 'mdi:eye'" />
        </template>
        {{ editorStore.isPreviewing ? 'Вернуться к редактированию' : 'Предпросмотр' }}
      </VBtn>

      <VBtn
        class="navigate-panel-btn"
        rounded
        color="success"
        variant="tonal"
        @click="console.log('Saved JSON:', editorStore.exportToJson())"
      >
        Сохранить (Log JSON)
        <template #append>
          <Icon name="mdi:content-save" />
        </template>
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 16px;

  > :first-child {
    height: 100%;
  }

  @include mobile() {
    padding: 4px;
  }

  .preview-mode {
    border: 2px dashed var(--fg-accent-color);
    padding: 16px;
    border-radius: 8px;
    position: relative;

    .preview-label {
      position: absolute;
      top: -12px;
      left: 16px;
      background-color: var(--bg-primary-color);
      padding: 0 8px;
      color: var(--fg-accent-color);
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);
    gap: 16px;
    flex-wrap: wrap;

    @include mobile() {
      font-size: 0.9rem;
      padding-left: 8px;
      padding-right: 8px;

      &:deep(.v-btn) {
        width: 100%;
      }
    }

    &-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      letter-spacing: 0;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}
</style>
