<script setup lang="ts">
import { useToonManuallyStore } from '../../store'

const emits = defineEmits<{ onSelect: [File] }>()

const store = useToonManuallyStore()
const { isLoading } = storeToRefs(store)

const fileInput = ref<HTMLInputElement>()
const dragover = ref(false)
const pasteSupported = ref(false)

// Обработка файлов
async function handleFiles(files: FileList | File[]) {
  const file = files[0]
  if (!file || !file.type.startsWith('image/')) {
    return
  }

  await store.uploadImage(file)
  emits('onSelect', file)
}

function onFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    handleFiles(target.files)
  }
}

// Drag & Drop
function onDragOver(event: DragEvent) {
  event.preventDefault()
  dragover.value = true
}

function onDragLeave() {
  dragover.value = false
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  dragover.value = false

  if (event.dataTransfer?.files?.length) {
    handleFiles(event.dataTransfer.files)
  }
}

// Вставка из буфера
async function pasteFromClipboard() {
  try {
    const clipboardItems = await navigator.clipboard.read()

    for (const item of clipboardItems) {
      for (const type of item.types) {
        if (type.startsWith('image/')) {
          const blob = await item.getType(type)
          const file = new File([blob], 'pasted-image.png', { type })
          await handleFiles([file])
          return
        }
      }
    }
  }
  catch (error) {
    console.error('Ошибка при вставке из буфера:', error)
  }
}

// Обработка вставки через Ctrl+V
function onPaste(event: ClipboardEvent) {
  const items = event.clipboardData?.items
  if (!items)
    return

  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        handleFiles([file])
      }
    }
  }
}

onMounted(() => {
  pasteSupported.value = navigator.clipboard && 'read' in navigator.clipboard
  document.addEventListener('paste', onPaste)
})

onUnmounted(() => {
  document.removeEventListener('paste', onPaste)
})
</script>

<template>
  <div class="image-uploader">
    <div
      class="upload-area"
      :class="{ dragover, loading: isLoading }"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
      @click="fileInput?.click()"
    >
      <div v-if="isLoading" class="loading-content">
        <Icon name="line-md:loading-loop" size="48" />
        <p>Загрузка изображения...</p>
      </div>

      <div v-else class="upload-content">
        <Icon name="mdi:cloud-upload" size="64" />
        <h3>Загрузите изображение</h3>
        <p>Перетащите файл сюда или нажмите для выбора</p>
        <div class="supported-formats">
          Поддерживаемые форматы: JPG, PNG, GIF, WEBP
        </div>
      </div>
    </div>

    <div class="upload-actions">
      <VBtn
        color="primary"
        variant="tonal"
        prepend-icon="mdi-folder-open"
        @click="fileInput?.click()"
      >
        Выбрать файл
      </VBtn>

      <VBtn
        v-if="pasteSupported"
        color="secondary"
        variant="tonal"
        prepend-icon="mdi-content-paste"
        @click="pasteFromClipboard"
      >
        Вставить из буфера
      </VBtn>
    </div>

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      hidden
      @change="onFileSelect"
    >
  </div>
</template>

<style scoped lang="scss">
.image-uploader {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.upload-area {
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 2px dashed var(--border-secondary-color);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--bg-secondary-color);

  &:hover {
    border-color: var(--border-accent-color);
    background-color: var(--bg-tertiary-color);
  }

  &.dragover {
    border-color: var(--border-accent-color);
    background-color: var(--bg-accent-color);
    transform: scale(1.02);
  }

  &.loading {
    cursor: wait;
    border-color: var(--border-accent-color);
  }

  .upload-content {
    text-align: center;
    color: var(--fg-secondary-color);

    h3 {
      margin: 16px 0 8px;
      color: var(--fg-primary-color);
    }

    p {
      margin-bottom: 16px;
    }

    .supported-formats {
      font-size: 0.85rem;
      color: var(--fg-tertiary-color);
    }
  }

  .loading-content {
    text-align: center;
    color: var(--fg-secondary-color);

    p {
      margin-top: 16px;
    }
  }
}

.upload-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  .v-btn {
    text-transform: none;
  }
}
</style>
