<script lang="ts" setup>
const emits = defineEmits<{ startTest: [void] }>()
</script>

<template>
  <div class="lab-settings">
    <span class="lab-settings-header">Содержание теста</span>
    <div class="lab-settings-list">
      <div class="lab-settings-item">
        <p>Варианты ответов:</p>
        <div>
          <v-checkbox
            color="var(--fg-accent-color)"
            label="Единичный"
            hide-details
            density="comfortable"
          />
          <v-checkbox
            color="var(--fg-accent-color)"
            label="Множественный"
            hide-details
            density="comfortable"
          />
        </div>
      </div>
    </div>
    <div class="lab-settings-start">
      <VBtn
        variant="tonal"
        class="pinyin-btn"
        rounded="sm"
        @click="emits('startTest')"
      >
        Начать тест
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lab-settings {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 340px;

  &-header {
    text-align: center;
    margin: 12px;
    font-size: 1.2rem;
  }
  &-list {
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    padding: 12px;
  }
  &-start {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .v-btn {
      background-color: var(--bg-accent-color);
      border: 1px solid var(--border-button-secondary-color);
      text-transform: none;
    }
  }
}
</style>
