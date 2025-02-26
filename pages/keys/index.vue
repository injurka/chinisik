<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { KeyHieroglyph, KeyHieroglyphControl, KeyHieroglyphInfo } from '~/components/modules/keys'
import { PageLoader } from '~/components/shared/page-loader'

type TabVariant = 'list' | 'lab'
interface TabsOption {
  key: TabVariant
  icon: string
  hint: string
}

const tabsOptions = [
  { key: 'list', icon: 'mdi-book-open-page-variant', hint: 'Полный список' },
  { key: 'lab', icon: 'mdi-test-tube', hint: 'Проверка знаний' },
] satisfies TabsOption[]

const route = useRoute()
const { isMobile } = useDevice()
const store = useStore(['keys'])
const {
  isLoadingContent,
  description,
  hieroglyphKeys,
  control,
} = storeToRefs(store.keys)

const controlMenu = ref(false)
const currentTab = ref<TabVariant>(initialTab())

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAndSetAllKeys(),
    store.keys.getAndSetDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}

function initialTab() {
  const tab = route.query.tab as TabVariant | undefined
  return tab && tabsOptions.some(t => t.key === tab) ? tab : 'list'
}

watch(
  currentTab,
  (newTab) => {
    navigateTo({
      path: `/${RouteNames.Keys}`,
      query: { tab: newTab },
      replace: true,
    })
  },
)

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
      :node="description!"
    />

    <div class="tabs">
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        :fixed-tabs="isMobile ? false : true"
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
      <div class="settings">
        <v-menu
          v-model="controlMenu"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-btn
              icon
              variant="text"
              v-bind="props"
            >
              <Icon size="24" name="mdi-tune" />
            </v-btn>
          </template>

          <KeyHieroglyphControl />
        </v-menu>
      </div>
    </div>

    <v-tabs-window v-model="currentTab">
      <v-tabs-window-item value="list">
        <v-container fluid>
          <div class="list">
            <KeyHieroglyph
              v-for="(item, key) in hieroglyphKeys!"
              :key="key + 1"
              :hieroglyph="item"
              :control
              @on-expand="onHieroglyphExpand"
            />
            <KeyHieroglyphInfo
              v-model="isExpandedDialog"
              :hieroglyph="expandedHieroglyphKey"
            />
          </div>
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item value="lab">
        <v-container fluid>
          <p>
            В разработке
          </p>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  .tabs {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;
    border-bottom: 1px solid var(--border-secondary-color);

    .settings {
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      height: 48px;
    }
    .v-btn {
      color: var(--fg-primary-color);
      text-transform: none;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 64px;
  }
}
</style>
