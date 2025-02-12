<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'

import { HskAbout, HskLab, HskWords } from '~/components/modules/hsk'
import { mockCms } from '~/server/utils/mock/cms/description'

type TabVariant = 'about' | 'words' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsOptions = [
  { key: 'about', icon: 'mdi-book', hint: 'Подробнее о HSK' },
  { key: 'words', icon: 'mdi-book-open-page-variant', hint: 'Слова' },
  { key: 'lab', icon: 'mdi-test-tube', hint: 'Проверка знаний' },
] satisfies TabsOption[]

const { isMobile } = useDevice()
const route = useRoute()

const currentTab = ref<TabVariant>(initialTab())

function initialTab() {
  const tab = route.query.tab as TabVariant | undefined
  return tab && tabsOptions.some(t => t.key === tab) ? tab : 'about'
}

watch(
  currentTab,
  (newTab) => {
    navigateTo({
      path: '/hsk',
      query: { tab: newTab },
      replace: true,
    })
  },
)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content">
    <JsonToDom :node="mockCms.hskLevels!" />

    <div class="tabs">
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
    </div>

    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="about">
        <v-container fluid class="container">
          <HskAbout />
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="words">
        <v-container fluid class="container">
          <HskWords />
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="lab">
        <v-container fluid class="container">
          <HskLab />
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
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
</style>
