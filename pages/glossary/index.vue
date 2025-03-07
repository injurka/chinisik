<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { PageLoader } from '~/components/shared/page-loader'
import { mockCms } from '~/server/utils/mock/cms/description'

const isLoadingContent = ref<boolean>(false)
const items = [
  'Модальный глагол 1',
  'Модальный глагол 2',
  'Модальный глагол 3',
]

function handleOpenTopic(value: string) {
  navigateTo(`${RoutePaths.GlossaryTopic(value)}`)
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

    <div class="topic-list">
      <div
        v-for="item in items"
        :key="item"
        class="topic-item"
        @click="handleOpenTopic('1')"
      >
        <Icon name="material-symbols:stacks-outline" size="28" />
        <span class="topic-item-name"> {{ item }} </span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  .topic {
    &-list {
      max-width: 1200px;
      width: 100%;
      margin: 24px auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 20px;
    }

    &-item {
      background-color: var(--bg-secondary-color);
      border: 1px solid var(--border-secondary-color);
      height: 44px;
      padding: 4px;
      cursor: pointer;
      display: flex;
      flex-grow: 1;
      flex-basis: 300px;
      gap: 8px;
      font-size: 1rem;
      align-items: center;
      overflow: hidden;
      transition: box-shadow 0.2s ease-in-out;

      .iconify {
        min-width: 1em;
        color: var(--fg-accent-color);
      }

      &-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:hover {
        box-shadow: 0 0 8px var(--bg-overlay-secondary-color);
      }
    }
  }
}
</style>
