<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'

interface Props {
  section: ThematicDictionarySection
  category: ThematicDictionaryCategory
  nextCategory: ThematicDictionaryCategory
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
  if (props.section && props.category) {
    crumbs.push({
      title: props.category.name,
      to: RoutePaths.ThematicDictionary.Category(props.section.sysname, props.category.sysname),
    })
  }
  return crumbs
})
</script>

<template>
  <div class="thematic-dictionary-category">
    <v-breadcrumbs :items="breadcrumbs" color="var(--fg-secondary-color)">
      <template #item="{ item }">
        <v-breadcrumbs-item :to="item.to" :title="item.title" />
      </template>
    </v-breadcrumbs>

    <div class="content">
      <div class="header">
        <h1>{{ category.name }}</h1>
        <p v-if="category.description">
          {{ category.description }}
        </p>
      </div>

      <JsonToDom
        v-if="category.words && category.words.length"
        :node="category.content"
      />
    </div>

    <div v-if="nextCategory" class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        :to="RoutePaths.ThematicDictionary.Category(section.sysname, nextCategory.sysname)"
      >
        Следующая категория: {{ nextCategory.name }}
        <template #append>
          <Icon name="mdi:arrow-right" />
        </template>
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-category {
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

  .header {
    margin-top: 16px;
  }

  .list {
    margin-top: 32px;
    display: flex;
    flex-direction: column;

    @include mobile {
      font-size: 0.9rem;

      &:deep(.hw-word) {
        .hw-glyph {
          font-size: 1.5rem;
          line-height: 32px;
          min-width: 32px;
          min-height: 32px;
        }
        .hw-pinyin {
          font-size: 0.9rem;
        }
        .hw-translate {
          font-size: 0.9rem;
        }
      }
    }
  }
}

.navigate-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0;
  padding-top: 32px;
  margin-top: 16px;
  border-top: 2px dashed var(--border-button-secondary-color);
  gap: 8px;

  @include mobile() {
    font-size: 0.9rem;
    padding-left: 8px;
    padding-right: 8px;

    &:deep(.v-btn) {
      width: 100%;
    }
  }
  &-btn {
    background-color: var(--bg-accent-color);
    text-transform: none;
    letter-spacing: 0;
    border: 1px solid var(--border-button-secondary-color);
  }
}
</style>
