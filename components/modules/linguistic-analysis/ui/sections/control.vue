<script setup lang="ts">
import type { LinguisticAnalysisContentControl } from '../../composable'

defineProps<{ disabled: boolean }>()
const emits = defineEmits<{ submit: [void] }>()
const control = defineModel<LinguisticAnalysisContentControl>({ required: true })

const errors = ref<string[]>([])
const isError = ref<boolean>(false)

function handleClickSubmit() {
  errors.value = []
  emits('submit')
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    handleClickSubmit()
  }
}
</script>

<template>
  <div class="control">
    <v-text-field
      v-model="control.value"
      :disabled="disabled"
      label="Текст для разбора (RU / CN)"
      variant="outlined"
      hide-details="auto"
      prepend-inner-icon="mdi-rhombus-split"
      @keydown="handleKeyDown"
    >
      <template #append-inner>
        <v-btn
          variant="plain"
          icon="mdi-cube-send"
          color="primary"
          @click="handleClickSubmit"
        />
      </template>
    </v-text-field>
    <v-select
      v-model="control.model"
      class="control-model"
      density="compact"
      hide-details
      label="LLVM модель"
      :items="[
        'deepseek-chat',
        'deepseek/deepseek-chat',
        'google/gemini-flash-1.5-8b',
        'google/gemini-flash-1.5',
        'google/gemini-2.0-flash-001',
      ]"
      variant="filled"
    />
  </div>
  <v-snackbar
    v-model="isError"
    :timeout="2000"
    color="red"
  >
    <div v-for="error in errors" :key="error">
      {{ error }}
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss">
.control {
  margin: 16px 0;
  border-left: 2px solid var(--border-secondary-color);
  border-right: 2px solid var(--border-secondary-color);
  padding: 10px 24px;

  @include mobile() {
    border: none;
    padding: 0;
  }

  &-model {
    margin-top: 8px;
    color: var(--fg-secondary-color);
    &:deep(.v-field) {
      border-radius: 4px;
    }
    &:deep(.v-field__outline) {
      display: none;
    }
  }

  > input {
    font-weight: 500;
  }

  &-additional {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      color: var(--fg-tertiary-color);
      font-size: 0.9rem;
    }
    > div {
      margin-top: 4px;
    }
  }

  &-types {
    margin: 8px 0;
    width: 100%;
    :deep(.v-btn) {
      flex-grow: 1;
      color: var(--fg-primary-color);
      font-size: 0.8rem !important;

      @include mobile() {
        font-size: 0.7rem !important;
      }
    }
  }
}
</style>
