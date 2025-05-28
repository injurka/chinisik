<script setup lang="ts">
import { useToonManuallyStore } from '../store'
import ImageEditor from './sections/image-editor.vue'
import ImageUploader from './sections/image-uploader.vue'
import TranslationResults from './sections/translation-results.vue'

const store = useToonManuallyStore()
const { uploadedImage, translationResults, selectedArea } = storeToRefs(store)
</script>

<template>
  <div class="toon-manually">
    <div v-if="!uploadedImage" class="steps-indicator">
      <div class="step">
        <div class="step-number">
          1
        </div>
        <div class="step-label">
          Загрузка
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          2
        </div>
        <div class="step-label">
          Выделение
        </div>
      </div>
      <div class="step">
        <div class="step-number">
          3
        </div>
        <div class="step-label">
          Перевод
        </div>
      </div>
    </div>

    <Transition name="smooth-appear" mode="out-in">
      <ImageUploader v-if="!uploadedImage" />
      <ImageEditor v-else />
    </Transition>

    <TranslationResults v-if="translationResults" />
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.toon-manually {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.steps-indicator {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  gap: 32px;

  @include mobile() {
    gap: 16px;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.5;
    transition: opacity 0.3s ease;

    &-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--bg-secondary-color);
      border: 2px solid var(--border-secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: var(--fg-primary-color);
      transition: all 0.3s ease;
    }

    &-label {
      font-size: 0.9rem;
      color: var(--fg-secondary-color);
      text-align: center;
    }

    &.active .step-number {
      border-color: var(--border-accent-color);
      background-color: var(--bg-accent-color);
    }
  }
}
</style>
