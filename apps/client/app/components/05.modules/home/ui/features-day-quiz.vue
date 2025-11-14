<script setup lang="ts">
</script>

<template>
  <div class="quiz-placeholder">
    <h3>Проверка знаний</h3>
    <p>Здесь скоро появится интерактивный тест по материалам дня.</p>
    <Icon name="mdi:test-tube" size="48" class="placeholder-icon" />
  </div>
</template>

<style scoped lang="scss">
.quiz-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
  border-radius: 12px;
  background-color: var(--bg-secondary-color);
  border: 1px dashed var(--border-secondary-color);
  min-height: 600px;
  color: var(--fg-secondary-color);

  h3 {
    font-size: 1.5rem;
    color: var(--fg-primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 400px;
    margin-bottom: 1.5rem;
  }

  .placeholder-icon {
    color: var(--fg-tertiary-color);
  }
}
</style>
