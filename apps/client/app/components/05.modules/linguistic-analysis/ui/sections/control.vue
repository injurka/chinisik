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
const errors = ref<string[]>([])
const isError = ref<boolean>(false)

const btnToggleValue = computed(() => {
  return Object
    .entries(typeSplitMapping)
    .find(([_, value]) => value === control.value.dataType)?.[0]
})

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
          color="var(--fg-accent-color)"
          @click="handleClickSubmit"
        />
      </template>
    </v-text-field>

    <!-- Новая панель управления -->
    <div class="control-toolbar">
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
        variant="solo"
        flat
      >
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

      <v-divider vertical class="mx-2" />

      <v-btn-toggle
        :disabled="disabled"
        variant="text"
        class="control-types"
        :model-value="btnToggleValue"
        @update:model-value="updateBtnToggleValue"
      >
        <v-btn
          v-for="(type, key) in typeCopmonentMappingForControl"
          :key="type"
          :class="{ active: key.toLowerCase() === control.dataType }"
        >
          {{ type }}
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
  <v-snackbar
    v-model="isError"
    :timeout="2000"
    color="error"
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
}

.control-toolbar {
  margin-top: 12px;
  display: flex;
  align-items: center;
  background-color: var(--bg-secondary-color);
  border-radius: 6px;
  padding: 4px 8px;

  @include mobile() {
    flex-direction: column;
    align-items: stretch;
    padding: 8px;
    gap: 8px;
  }

  .v-divider {
    border-color: var(--border-secondary-color);
    opacity: 1;
    margin: 4px;
  }
}

.control-model {
  flex-grow: 1;

  &:deep(.v-field) {
    background-color: transparent !important;
    box-shadow: none;
  }
}

.control-types {
  :deep(.v-btn) {
    color: var(--fg-secondary-color);
    font-size: 0.85rem !important;
    font-weight: 400;
    text-transform: none;
    letter-spacing: normal;
    border-radius: 4px;
    white-space: nowrap; // Предотвращаем перенос текста в кнопках

    &.active {
      background-color: var(--bg-primary-color);
      color: var(--fg-accent-color);
      font-weight: 700; // Выделяем активную кнопку жирным
    }
  }
}

.group-header {
  font-weight: bold;
  color: var(--fg-tertiary-color);
  cursor: default;
  user-select: none;
}
</style>
