<script setup lang="ts">
const features = [
  { name: 'Ключи', icon: 'mdi:key-variant', path: RoutePaths.Keys.Tab('list') },
  { name: 'Пиньин', icon: 'mdi:translate', path: RoutePaths.Pinyin() },
  { name: 'HSK Словарь', icon: 'mdi:trophy-outline', path: RoutePaths.HSK.Tab('about') },
  { name: 'Книги', icon: 'mdi:book-open-page-variant-outline', path: RoutePaths.Books.Index() },
  { name: 'Тематический словарь', icon: 'mdi:book-open-variant', path: RoutePaths.ThematicDictionary.Sections() },
  { name: 'Глоссарий', icon: 'mdi:book-alphabet', path: RoutePaths.Glossary.Index() },
  { name: 'Лингв. анализ', icon: 'mdi:layers-search-outline', path: RoutePaths.LinguisticAnalysis.Index() },
]
</script>

<template>
  <section class="features-section">
    <h2 class="section-title">
      Основные разделы
    </h2>
    <div class="features-grid">
      <NuxtLink v-for="feature in features" :key="feature.name" :to="feature.path" class="feature-card">
        <Icon :name="feature.icon" class="feature-icon" />
        <span class="feature-name">{{ feature.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  position: relative;
  color: var(--fg-secondary-color);

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--border-accent-color);
    margin: 0.5rem auto 0;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--fg-secondary-color);
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 12px;
  transition: all 0.2s ease-in-out;

  .feature-icon {
    font-size: 2.5rem;
    color: var(--fg-accent-color);
    transition: all 0.2s ease-in-out;
  }

  .feature-name {
    font-size: 1rem;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--border-accent-color);
    color: var(--fg-primary-color);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

    .feature-icon {
      color: var(--fg-action-color);
      transform: scale(1.1);
    }
  }
}
</style>
