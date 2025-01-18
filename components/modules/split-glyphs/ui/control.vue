<script setup lang="ts">
import { typeCopmonentMappingForControl, typeSplitMapping } from '../constant'

const store = useStore(['splitGlyphs'])

const errors = ref<string[]>([])
const isError = ref<boolean>(false)

const btnToggleValue = computed(() => {
  return Object
    .entries(typeSplitMapping)
    .find(([_, value]) => value === store.splitGlyphs.control.type)?.[0]
})

watch(
  () => store.splitGlyphs.control.type,
  value => useCookie('SPLIT_GPLYPHS_TYPE').value = `${value}`,
)

function isChineseCharacters(text: string): boolean {
  // Регулярное выражение для проверки китайских иероглифов
  const chineseCharacterRegex = /^[\u4E00-\u9FFF]+$/
  return chineseCharacterRegex.test(text)
}

function updateBtnToggleValue(index?: unknown) {
  if (typeof index !== 'number')
    return

  store.splitGlyphs.control.type = Object
    .entries(typeSplitMapping)
    .find(([key, _]) => +key === +index)![1]! as SplitGlyphsType
}

function handleClickSubmit() {
  errors.value = []

  if (!isChineseCharacters(store.splitGlyphs.control.value)) {
    errors.value.push('Текст должен состоит из китайских иероглифов.')
    isError.value = true
  }
  else {
    store.splitGlyphs.postSplitKeys()
  }
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
      v-model="store.splitGlyphs.control.value"
      :disabled="store.splitGlyphs.isLoadingSubmit"
      label="Иероглифы для разбора"
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

    <div class="control-additional">
      <span>Выберите то чем являются текущий набор иероглифов, это поможет более точно подобрать описание.</span>
      <v-btn-toggle
        :disabled="store.splitGlyphs.isLoadingSubmit"
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
