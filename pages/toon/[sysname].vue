<!-- eslint-disable no-alert -->
<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { HighlightArea, ToonReaderMode } from '~/components/modules/toon/toon-reader'
import { ToonReader } from '~/components/modules/toon/toon-reader'

definePageMeta({
  layout: 'base-with-effects',
})

const toonImages = ref([
  '/toon/tsinning/0001.jpg',
  '/toon/tsinning/0002.jpg',
])

// Моковые данные для предустановленных областей
const predefinedAreas = ref<HighlightArea[]>([
  {
    id: 'area1-page0',
    pageId: '0',
    rect: { x: 50, y: 100, width: 200, height: 80 },
    text: 'Это первая область на первой странице!',
  },
  {
    id: 'area2-page0',
    pageId: '0',
    rect: { x: 300, y: 200, width: 150, height: 100 },
    text: 'Другой текст здесь.',
  },
  {
    id: 'area1-page1',
    pageId: '1',
    rect: { x: 100, y: 50, width: 250, height: 120 },
    text: 'Текст для второй страницы.',
  },
] as HighlightArea[])

const readerMode = ref<ToonReaderMode>('view') // 'view' или 'edit'
const currentDisplayedText = ref<string | null>(null)
const lastCreatedSnippet = ref<{ area: HighlightArea, snippetBase64: string | null } | null>(null)

function handleAreaClicked(area: HighlightArea) {
  console.log('Page: Area clicked in view mode:', area)
  currentDisplayedText.value = area.text || 'Нет текста для этой области.'
  // Можно отобразить текст в модальном окне или специальном блоке
  // Например, используя Vuetify диалог:
  // dialogText.value = area.text; isDialogVisible.value = true;
}

function handleAreaCreated(payload: { area: HighlightArea, snippetBase64: string | null }) {
  console.log('Page: Area created/selected for AI:', payload)
  lastCreatedSnippet.value = payload
  // Здесь можно сразу отправить payload.snippetBase64 в AI для получения текста
  // и потом обновить payload.area.text
  // Например:
  // const aiText = await fetchAiText(payload.snippetBase64);
  // const areaToUpdate = predefinedAreas.value.find(a => a.id === payload.area.id);
  // if (areaToUpdate) areaToUpdate.text = aiText;
  // Или если хотите, чтобы пользователь сам вводил текст:
  // просто сохраняем, что область создана.

  // Добавляем новую область в наш список (если ее еще нет)
  // Это важно, если создание происходит только через UI модуля
  const exists = predefinedAreas.value.some(a => a.id === payload.area.id)
  if (!exists) {
    predefinedAreas.value.push(payload.area)
  }
}

function handleAreaUpdated(updatedArea: HighlightArea) {
  console.log('Page: Area text updated:', updatedArea)
  const index = predefinedAreas.value.findIndex(a => a.id === updatedArea.id)
  if (index !== -1) {
    predefinedAreas.value[index] = { ...updatedArea }
  }
  currentDisplayedText.value = null // Сбросить отображаемый текст
  if (lastCreatedSnippet.value?.area.id === updatedArea.id) {
    lastCreatedSnippet.value = null // Очистить, если обновляли только что созданную
  }
}

function handleAreaDeleted(payload: { areaId: string }) {
  console.log('Page: Area deleted:', payload.areaId)
  predefinedAreas.value = predefinedAreas.value.filter(a => a.id !== payload.areaId)
  currentDisplayedText.value = null
  if (lastCreatedSnippet.value?.area.id === payload.areaId) {
    lastCreatedSnippet.value = null
  }
}

function toggleMode() {
  readerMode.value = readerMode.value === 'view' ? 'edit' : 'view'
  currentDisplayedText.value = null
  lastCreatedSnippet.value = null
}
</script>

<template>
  <section class="content-wrapper">
    <div class="header-controls">
      <h1 class="page-title">
        蓝溪镇
      </h1>
      <div>
        <span>0003 Прощание</span>
      </div>
      <v-tooltip
        location="top"
        :text="`Перейти в режим ${readerMode === 'view' ? 'Редактирования' : 'Просмотра'}`"
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            rounded
            variant="tonal"
            @click="toggleMode"
          >
            <v-icon>
              {{ readerMode === 'view' ? 'mdi-pencil' : 'mdi-eye' }}
            </v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </div>

    <ToonReader
      :images="toonImages"
      :initial-areas="predefinedAreas"
      :mode="readerMode"
      @area-clicked="handleAreaClicked"
      @area-created="handleAreaCreated"
      @area-updated="handleAreaUpdated"
      @area-deleted="handleAreaDeleted"
    />
  </section>
</template>

<style scoped lang="scss">
.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 4px;
}

.page-title {
  text-align: left;
  margin-bottom: 0;
  font-size: 1.8rem;
}

.displayed-text-panel {
  margin-top: 1.5rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--border-accent-color);
  border-radius: 8px;
  background-color: var(--bg-secondary-color);
  width: 100%;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.3rem;
    color: var(--fg-primary-color);
    margin-bottom: 0.75rem;
  }
  p {
    color: var(--fg-primary-color);
    white-space: pre-wrap; /* Чтобы сохранять переносы строк из текста */
    line-height: 1.6;
  }
  .v-btn {
    margin-top: 0.5rem;
    float: right;
  }
}

.ai-processing-section {
  margin-top: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border-primary-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-tertiary-color);
  width: 100%;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.4rem;
    color: var(--fg-accent-color);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: var(--fg-secondary-color);
  }
  .page-extracted-image {
    max-width: 100%;
    max-height: 200px;
    border: 1px solid var(--border-secondary-color);
    object-fit: contain;
  }
  .v-btn {
    text-transform: none;
  }
}
</style>
