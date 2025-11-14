<script setup lang="ts">
import type { LinguisticAnalysisContentControl, LinguisticAnalysisDataType } from '../../composable'
import { typeCopmonentMappingForControl, typeSplitMapping } from '~/components/05.modules/linguistic-analysis/constant'

defineProps<{ disabled: boolean }>()
const emits = defineEmits<{ submit: [any] }>()
const control = defineModel<LinguisticAnalysisContentControl>({ required: true })

const LLMs = [
  {
    title: 'AI HUB MIX',
    items: [
      'gemini-2.5-flash-lite',
      'gemini-2.5-flash',
      'gpt-5-mini',
    ],
  },
]

const formattedLLMs = ref(formatItems(LLMs))

function formatItems(items: any[]) {
  const result = []
  for (const group of items) {
    result.push({
      title: group.title,
      header: true,
      group: true,
    })
    for (const item of group.items) {
      result.push({
        value: item,
        title: item,
      })
    }
  }
  return result
}
const errors = ref<string[]>([])
const isError = ref<boolean>(false)

const btnToggleValue = computed(() => {
  return Object
    .entries(typeSplitMapping)
    .find(([_, value]) => value === control.value.dataType)?.[0]
})

function handleClickSubmit() {
  errors.value = []

  const payload = {
    value: control.value,
    model: control.value.model,
    dataType: control.value.dataType,
  }

  emits('submit', payload)
}

function updateBtnToggleValue(index?: unknown) {
  if (typeof index !== 'number')
    return

  control.value.dataType = Object
    .entries(typeSplitMapping)
    .find(([key, _]) => +key === +index)![1]! as LinguisticAnalysisDataType
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
      :disabled="disabled"
      density="compact"
      hide-details
      label="LLM модель"
      :items="formattedLLMs"
      item-title="title"
      item-value="value"
      variant="filled"
    >
      <template #selection="{ item }">
        {{ item.title }}
      </template>

      <template #item="{ item, props }">
        <v-list-item
          v-if="item.raw.header"
          density="compact"
          :title="item.raw.title"
          :disabled="true"
          class="group-header"
        />
        <v-list-item
          v-else
          density="compact"
          v-bind="props"
          :title="item.raw.title"
        />
      </template>
    </v-select>

    <div class="control-additional">
      <span>Выберите формат вывода для анализа.</span>
      <v-btn-toggle
        :disabled="disabled"
        divided
        variant="outlined"
        class="control-types"
        :model-value="btnToggleValue"
        @update:model-value="updateBtnToggleValue"
      >
        <v-btn v-for="type in typeCopmonentMappingForControl" :key="type">
          {{ type }}
        </v-btn>
      </v-btn-toggle>
    </div>

    <!-- <v-switch
      v-model="isMarkdown"
      :disabled="disabled"
      class="control-md"
      density="compact"
      label="Вывод в Markdown"
      color="var(--fg-accent-color)"
      hide-details
      append-icon="mdi-language-markdown"
    /> -->
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

  &-md {
    margin-top: 8px;
    margin-left: 8px;
    color: var(--fg-secondary-color);
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

.group-header {
  font-weight: bold;
  color: var(--fg-tertiary-color); /* Adjust color as needed */
  cursor: default; /* No pointer on hover */
  user-select: none; /* Prevent text selection */
}
</style>
