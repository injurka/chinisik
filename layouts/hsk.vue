<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { PageLoader } from '~/components/shared/page-loader'
import { mockCms } from '~/server/utils/mock/cms/description'
import BaseLayout from './base-with-effects.vue'

export type TabVariant = 'about' | 'words' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsOptions = [
  { key: 'about', icon: 'mdi:book', hint: 'Подробнее о HSK' },
  { key: 'words', icon: 'mdi:book-open-page-variant', hint: 'Слова' },
  { key: 'lab', icon: 'mdi:test-tube', hint: 'Проверка знаний' },
] satisfies TabsOption[]

const { isMobile } = useDevice()
const route = useRoute()
const currentTab = ref<TabVariant>(initialTab())
const isLoadingContent = ref<boolean>(false)

function initialTab() {
  const hash = route.path.split('/').at(-1)
  return tabsOptions.some(tab => tab.key === hash)
    ? hash as TabVariant
    : 'about'
}

watch(
  () => currentTab.value,
  (newTab) => {
    if (newTab && tabsOptions.some(tab => tab.key === newTab)) {
      navigateTo(`/hsk/${newTab}`)
    }
  },
)
</script>

<template>
  <BaseLayout>
    <PageLoader v-if="isLoadingContent" />

    <section class="content">
      <JsonToDom :node="mockCms.hskLevels!" />

      <v-tabs
        v-model="currentTab"
        class="tabs"
        align-tabs="center"
        :fixed-tabs="!isMobile"
        color="var(--fg-accent-color)"
        bg-color="transparent"
        slider-color="var(--fg-action-color)"
      >
        <v-tab
          v-for="tab in tabsOptions"
          :key="tab.key"
          :prepend-icon="tab.icon"
          :value="tab.key"
          :text="isMobile ? '' : tab.hint"
        />
      </v-tabs>

      <v-container fluid class="container">
        <keep-alive>
          <slot />
        </keep-alive>
      </v-container>
    </section>
  </BaseLayout>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  width: 100%;
  background-color: var(--bg-primary-color);

  @include mobile {
    padding: 4px;

    .container {
      padding: 8px 2px;
    }
  }

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 0 16px;

    @include mobile {
      font-size: 0.9rem;

      &:deep(.hw-word) {
        flex-wrap: wrap;
      }
    }
  }
}

.tabs {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 32px;

  .settings {
    position: absolute;
    right: 0;
    top: 0;
    width: 48px;
    height: 48px;
  }

  .v-btn {
    color: var(--fg-secondary-color);
    text-transform: none;
  }
}

.container {
  padding: 20px;
  flex-grow: 1;
}
</style>
