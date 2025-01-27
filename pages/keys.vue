<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { KeyHieroglyph, KeyHieroglyphControl, KeyHieroglyphInfo } from '~/components/modules/keys'
import { PageLoader } from '~/components/shared/page-loader'

const store = useStore(['keys'])
const {
  isLoadingContent,
  description,
  hieroglyphKeys,
  control,
} = storeToRefs(store.keys)

const tab = ref(1)
const controlMenu = ref(false)

await useAsyncData(
  'hieroglyph-keys',
  () => Promise.all([
    store.keys.getAllKeys(),
    store.keys.getDescriptionKeys(),
  ]),
  { dedupe: 'defer' },
)

const isExpandedDialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  isExpandedDialog.value = true
}

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <PageLoader v-if="isLoadingContent" />

  <section v-else class="content">
    <JsonToDom
      :node="description!"
    />

    <!-- <hr>
    <KeyHieroglyphControl />
    <hr> -->

    <div class="tabs">
      <v-tabs
        v-model="tab"
        align-tabs="center"
        :fixed-tabs="$vuetify.display.mobile ? false : true"
        color="var(--fg-accent-color)"
        bg-color="transparent"
        slider-color="var(--fg-action-color)"
      >
        <v-tab
          prepend-icon="mdi-book-open-page-variant"
          :value="1"
          :text="$vuetify.display.mobile ? '' : 'Полный список'"
        />
        <v-tab
          prepend-icon="mdi-test-tube"
          :value="2"
          :text="$vuetify.display.mobile ? '' : 'Проверка знаний'"
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

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <v-container fluid>
          <div class="list">
            <KeyHieroglyph
              v-for="(item, key) in hieroglyphKeys!"
              :key="key + 1"
              :hieroglyph="item"
              :control
              @on-expand="onHieroglyphExpand"
            />
          </div>
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <v-container fluid>
          В разработке
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>

    <KeyHieroglyphInfo
      v-model="isExpandedDialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  @include default-font();

  .description {
    font-size: 1rem;
    max-width: 1200px;
    padding: 0 6px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
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

  @include mobile() {
    padding: 8px;
  }
}
</style>
