<script setup lang="ts">
import { ToonManual } from '~/components/modules/toon/toon-manual'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <div class="header">
      <h1>Переводчик изображений</h1>
      <p class="description">
        Загрузите изображение с текстом, выделите область для перевода и получите результат с помощью AI
      </p>
    </div>

    <ToonManual />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .header {
    text-align: center;
    margin-bottom: 32px;

    h1 {
      color: var(--fg-primary-color);
      margin-bottom: 8px;
    }

    .description {
      color: var(--fg-secondary-color);
      font-size: 1rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @include mobile() {
    padding: 16px 8px;
  }
}
</style>
