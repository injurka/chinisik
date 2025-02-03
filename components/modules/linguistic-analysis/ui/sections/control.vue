<script setup lang="ts">
defineProps<{ disabled: boolean }>()
const emits = defineEmits<{ submit: [void] }>()
const value = defineModel<string>({ required: true, default: '' })

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
      v-model="value"
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
