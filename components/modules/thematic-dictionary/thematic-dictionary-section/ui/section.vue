<script lang="ts" setup>
import { ThematicDictionaryBreadcrumbs } from '~/components/domain/thematic-dictionary/thematic-dictionary-breadcrumbs'
import { ThematicDictionaryCard } from '~/components/domain/thematic-dictionary/thematic-dictionary-card'

interface Props {
  section: ThematicDictionarySection
}

const props = defineProps<Props>()

const breadcrumbs = computed(() => {
  const crumbs = [{ title: 'Секции', to: RoutePaths.ThematicDictionary.Sections }]

  if (props.section) {
    crumbs.push({
      title: props.section.name,
      to: RoutePaths.ThematicDictionary.Categories(props.section.sysname),
    })
  }

  return crumbs
})
</script>

<template>
  <div class="thematic-dictionary-section">
    <ThematicDictionaryBreadcrumbs :items="breadcrumbs" />

    <div class="content">
      <div class="header">
        <h1>{{ section.name }}</h1>
        <div v-if="section.description" class="description">
          <p class="description-text">
            {{ section.description }}
          </p>
        </div>
      </div>

      <div class="list">
        <ThematicDictionaryCard
          v-for="category in section.categories"
          :key="category.sysname"
          :navigate-url="RoutePaths.ThematicDictionary.Category(section.sysname, category.sysname)"
          :sysname="category.sysname"
          :glyph="category.glyph"
          :name="category.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &-text {
      margin-top: 12яpx;
      white-space: pre-line;
      position: relative;
    }
  }
}

.header {
  margin-top: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}
</style>
