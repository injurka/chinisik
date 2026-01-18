<script lang="ts" setup>
import { mockCms } from '~/../server/utils/mock/cms/description'
import { topicList } from '~/../server/utils/mock/glossary/topic-list'
import { PageLoader } from '~/components/02.shared/page-loader'
import { JsonToDom } from '~/components/03.domain/json-to-dom'

const items = topicList

const isLoadingContent = ref<boolean>(false)

function handleOpenTopic(topicId: string) {
  navigateTo(`${RoutePaths.Glossary.Page(topicId, 'topic')}`)
}

function getIconForCategory(title: string): string {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes('фонетика'))
    return 'mdi:volume-high'
  if (lowerTitle.includes('иероглифика'))
    return 'mdi:pencil-outline'
  if (lowerTitle.includes('грамматика'))
    return 'mdi:book-open-outline'
  if (lowerTitle.includes('лексика'))
    return 'mdi:tag-outline'
  if (lowerTitle.includes('стратег') || lowerTitle.includes('ресурс') || lowerTitle.includes('культур'))
    return 'mdi:brain'

  return 'mdi:layers-outline'
}

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content-wrapper">
    <JsonToDom
      :node="mockCms.glossary"
    />

    <div class="topics-container">
      <div
        v-for="section in items"
        :key="section.title"
        class="topic-section"
      >
        <h2 class="section-title">
          {{ section.title }}
        </h2>

        <div
          v-for="subsection in section.subsections"
          :key="subsection.title"
          class="topic-subsection"
        >
          <h3 class="subsection-title">
            <Icon :name="getIconForCategory(subsection.title)" size="24" />
            <span>{{ subsection.title }}</span>
          </h3>

          <div class="topic-grid">
            <div
              v-for="topic in subsection.topics"
              :key="topic.id"
              class="topic-card"
              @click="handleOpenTopic(topic.id)"
            >
              <h4 class="topic-title">
                {{ topic.title }}
              </h4>
              <div class="topic-tags">
                <span
                  v-for="tag in topic.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  .description {
    padding: 0;
  }
}

.topics-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 24px;
}

.topic-section {
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--fg-primary-color);
    margin-bottom: 24px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--border-accent-color);
  }
}

.topic-subsection {
  margin-top: 32px;

  .subsection-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--fg-secondary-color);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;

    .iconify {
      color: var(--fg-accent-color);
    }
  }
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.topic-card {
  background-color: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  min-height: 140px;

  .topic-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--fg-primary-color);
    line-height: 1.4;
    margin: 0;
  }

  .topic-tags {
    display: flex;
    flex-wrap: wrap;
    // [ИЗМЕНЕНИЕ] Уменьшен отступ между тегами
    gap: 6px;

    .tag {
      background-color: var(--bg-tertiary-color);
      color: var(--fg-tertiary-color);
      // [ИЗМЕНЕНИЕ] Уменьшены внутренние отступы
      padding: 3px 8px;
      // [ИЗМЕНЕНИЕ] Уменьшен радиус скругления
      border-radius: 10px;
      // [ИЗМЕНЕНИЕ] Уменьшен размер шрифта
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px var(--bg-overlay-secondary-color);
  }
}
</style>
