<script lang="ts" setup>
interface Props {
  sections: ThematicDictionaryData['catalog']
}

defineProps<Props>()
</script>

<template>
  <div class="thematic-dictionary-catalog">
    <h2>Тематический словарь</h2>
    <p>
      Этот тематический словарь предназначен для изучения основных слов и фраз по различным темам.
      Он поможет вам расширить свой словарный запас и улучшить навыки общения на разные темы, такие как беседа, путешествия и многое другое.
    </p>
    <div class="list">
      <NuxtLink
        v-for="section in sections"
        :key="section.sysname"
        :to="RoutePaths.ThematicDictionary.Categories(section.sysname)"
        class="card card--catalog"
      >
        <div class="card-content">
          <div class="card-image-container">
            <img
              v-if="section.image"
              :src="section.image"
              :alt="section.name"
              class="card-image"
            >
            <div v-else class="card-glyph">
              {{ section.glyph }}
            </div>
          </div>
          <h3 class="card-name">
            {{ section.name }}
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-catalog {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}

.card--catalog {
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-primary-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: var(--border-accent-color);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: var(--bg-tertiary-color);
    display: flex;
    align-items: center;
    justify-content: center;

    .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-glyph {
      font-size: 4rem;
      color: var(--fg-secondary-color);
    }
  }

  .card-name {
    padding: 16px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
