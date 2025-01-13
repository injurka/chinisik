<script lang="ts" setup>
import { PageLoader } from '~/components/shared/page-loader'
import BaseLayout from './base.vue'

type TabVariant = 'topic' | 'brief' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsLeftOptions = [
  {
    key: 'topic',
    icon: 'material-symbols:slab-serif-outline',
    hint: 'Полное содержимое статьи',
  },
  {
    key: 'brief',
    icon: 'material-symbols:stack-hexagon-outline',
    hint: 'Обобщенние статьи',
  },
  {
    key: 'lab',
    icon: 'material-symbols:lab-research-outline',
    hint: 'Создание тестов относительно материала',
  },
] satisfies TabsOption[]

const route = useRoute()
const currentTab = ref<TabVariant>('topic')
const isLoadingContent = ref<boolean>(false)

function handleChangeTab(value: TabVariant) {
  currentTab.value = value
  navigateTo(`/glossary/1/${value}`)
}

const hash = route.fullPath.split('/').at(-1)
if (hash && tabsLeftOptions.some(tab => tab.key === hash)) {
  currentTab.value = hash as TabVariant
}
</script>

<template>
  <BaseLayout>
    <PageLoader v-if="isLoadingContent" />

    <section v-else class="content">
      <div class="header-section">
        <div class="option left">
          <VTooltip
            v-for="tab in tabsLeftOptions"
            :key="tab.key"
            :text="tab.hint"
          >
            <template #activator="{ props }">
              <Icon
                v-bind="props"
                class="option-item"
                :class="[{ isActive: currentTab === tab.key }]"
                :name="tab.icon"
                size="32"
                @click="handleChangeTab(tab.key)"
              />
            </template>
          </VTooltip>
        </div>

        <h1 class="title">
          Модальные глаголы
        </h1>

        <div class="option right">
          <!--  -->
        </div>
      </div>

      <slot />
    </section>
  </BaseLayout>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  margin: 0 auto;

  @include mobile() {
    padding: 0px;
  }
}

.header-section {
  max-width: 1200px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'LEFT_OPTION TITLE RIGHT_OPTION';
  border-bottom: 2px solid var(--border-primary-color);
  margin: 24px auto 20px auto;
  padding: 5px 0;

  .title {
    grid-area: TITLE;
    text-align: center;
    font-size: 1.8rem;

    @include mobile() {
      border-top: 2px solid var(--border-primary-color);
      padding: 8px 0;
    }
  }

  .option {
    display: flex;
    align-items: center;
    gap: 12px;

    &-item {
      color: var(--fg-secondary-color);
    }
    .isActive {
      color: var(--fg-action-color);
    }

    > * {
      cursor: pointer;
    }

    &.left {
      grid-area: LEFT_OPTION;

      @include mobile() {
        padding-left: 8px;
      }
    }
    &.right {
      grid-area: RIGHT_OPTION;
      display: flex;
      flex-direction: row-reverse;

      @include mobile() {
        padding-right: 8px;
      }
    }
  }

  @include mobile() {
    margin: 8px auto 20px auto;
    padding: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'LEFT_OPTION RIGHT_OPTION'
      'TITLE TITLE';
  }
}

:deep() {
  .example {
    border-left: 2px dashed var(--border-accent-color);
    padding-left: 8px;
  }
  .text {
    line-height: 32px;
  }
  .warn {
    display: inline-block;
    padding: 10px;
    background: var(--bg-secondary-color);
    border-left: 4px solid var(--border-accent-color);
    border-radius: 6px 12px 12px 6px;
    min-width: 420px;
  }
  .fg-secondary {
    color: var(--fg-secondary-color);
  }
  hr {
    margin-top: 32px;
    margin-bottom: 48px;
    border: 1px solid var(--border-secondary-color);
  }
}
</style>
