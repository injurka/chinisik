<script lang="ts" setup>
import type { JsonToDomChildren } from '~/components/domain/json-to-dom'
import { JsonToDom } from '~/components/domain/json-to-dom'
import { ThematicDictionaryBreadcrumbs } from '~/components/domain/thematic-dictionary/thematic-dictionary-breadcrumbs'
import Control from '~/components/modules/thematic-dictionary/thematic-dictionary-category/ui/control.vue'
import { useThematicDictionaryCategoryControls } from '../composables'

interface Props {
  section: ThematicDictionarySection
  category: ThematicDictionaryCategory
  nextCategory: ThematicDictionaryCategory
}

const props = defineProps<Props>()
const showFullText = ref<boolean>(false)
const { controlMenu, controls, toggleControl } = useThematicDictionaryCategoryControls()

const maxLines = 5

const content = computed<JsonToDomChildren>(() => {
  const content = props.category.content
  const isFixedStyle = controls.value.isFixedStyle

  if (Array.isArray(content.children)) {
    content.children = content.children.map((item) => {
      if (item.props && Object.hasOwn(item.props, 'variant'))
        item.props.variant = isFixedStyle ? 5 : null
      return item
    })
  }

  return content
})
const isLongText = computed(() => {
  const lines = props.category.description?.split('\n')

  return (lines?.length ?? 0) > maxLines
})

function toggleShowFullText() {
  showFullText.value = !showFullText.value
}

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
    <ThematicDictionaryBreadcrumbs :items="breadcrumbs" />

    <div class="content">
      <div class="header">
        <h1>{{ category.name }}</h1>
        <div v-if="section.description" class="description">
          <p
            class="description-text"
            :class="{ truncated: !showFullText && isLongText }"
          >
            {{ category.description }}
          </p>
          <VBtn
            v-if="isLongText"
            rounded
            variant="plain"
            class="description-toggle-full"
            @click="toggleShowFullText"
          >
            {{ showFullText ? 'Скрыть' : 'Показать больше' }}
          </VBtn>
        </div>
      </div>

      <div class="tabs">
        <div class="settings">
          <VMenu
            v-model="controlMenu"
            :close-on-content-click="false"
          >
            <template #activator="{ props: menuProps }">
              <v-btn
                icon
                variant="text"
                v-bind="menuProps"
              >
                <Icon size="24" name="mdi-tune" />
              </v-btn>
            </template>

            <Control
              v-model="controls"
              @toggle-control="toggleControl"
            />
          </VMenu>
        </div>
      </div>

      <JsonToDom
        v-if="content"
        :node="content"
      />
    </div>

    <div v-if="nextCategory" class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        :to="RoutePaths.ThematicDictionary.Category(section.sysname, nextCategory.sysname)"
      >
        « {{ nextCategory.name }} »
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

  .tabs {
    position: relative;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid var(--border-secondary-color);
    height: 48px;

    .settings {
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      height: 48px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &-text {
      white-space: pre-line;
      position: relative;
      margin-top: 12px;

      &.truncated {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        line-clamp: 5;
        -webkit-box-orient: vertical;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3.5rem;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--bg-primary-color));
          pointer-events: none;
        }
      }
    }

    &-toggle-full {
      margin: 16px auto;
      text-transform: none;
      letter-spacing: 0;
      width: 320px;
      color: var(--fg-secondary-color);
    }
  }

  .list {
    margin-top: 16px;
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
