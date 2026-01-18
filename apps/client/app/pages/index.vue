<script setup lang="ts">
import { Home } from '~/components/05.modules/home'

useSeoMeta({
  title: 'Chinisik — Изучение китайского языка',
  ogTitle: 'Chinisik — Изучение китайского языка',
  description: 'Ваш помощник в изучении китайского. Иероглифические ключи, пиньинь, словарь HSK, адаптивные книги и лексический анализ текста с помощью искусственного интеллекта.',
  ogDescription: 'Ваш помощник в изучении китайского. Иероглифические ключи, пиньинь, словарь HSK, адаптивные книги и лексический анализ текста с помощью искусственного интеллекта.',
  ogImage: '/logo.png',
})

definePageMeta({
  layout: 'base-with-effects',
})
</script>

<template>
  <section class="content-wrapper">
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Добро пожаловать в Chinisik
        </h1>
        <p class="hero-subtitle">
          Ваш персональный помощник в захватывающем мире китайского языка.
        </p>
        <p class="hero-description">
          Откройте для себя иероглифы, грамматику и культуру Китая с помощью интерактивных инструментов и материалов.
        </p>
      </div>
    </div>

    <Home />
  </section>
</template>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 2rem 1rem;
  color: var(--fg-primary-color);
}

.hero {
  text-align: center;
  padding: 2rem 0;

  &-title {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--fg-primary-color);
    line-height: 3rem;
  }

  &-subtitle {
    font-size: 1.25rem;
    color: var(--fg-secondary-color);
    margin-bottom: 1rem;
  }

  &-description {
    font-size: 1rem;
    color: var(--fg-tertiary-color);
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
