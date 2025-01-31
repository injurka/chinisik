<script setup lang="ts">
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import { ammountSpacing, typeCopmonentMapping } from '../../constant'
import { adapter } from '../../lib'

const props = defineProps<{ glyphs: SplitedGlyphs }>()

const store = useStore(['keys'])

const sectionsSettings = ref<{ [key in string]: { isCollapsed: boolean } }>({})

// eslint-disable-next-line unused-imports/no-unused-vars
const adapterGlyphs = computed(() => adapter)

function getComponent(glyph: BaseSplitGlyphs) {
  const components = props.glyphs.find(({ components }) => components.includes(glyph.glyph))?.components ?? []

  return components.map(glyphComponent => ({
    glyph: glyphComponent,
    style: glyphComponent === glyph.glyph
      ? {
          color: 'var(--fg-accent-color)',
          fontWeight: 500,
        }
      : {
          fontWeight: 300,
        },
  }))
}

function handleClickDivider({ glyph, type }: Pick<BaseSplitGlyphs, 'glyph' | 'type'>) {
  sectionsSettings.value[`${type}-${glyph}`] = {
    isCollapsed: !sectionsSettings.value[`${type}-${glyph}`]?.isCollapsed,
  }
}

const checkIsSectionCollapsed = ({ type, glyph }: Pick<BaseSplitGlyphs, 'glyph' | 'type'>) => sectionsSettings.value[`${type}-${glyph}`]?.isCollapsed

function isHieroglyphKeyExist(key: string) {
  return !!store.keys.hieroglyphKeys.find(
    ({ glyph, alternative }) => (glyph === key) || (alternative === key),
  )
}

// eslint-disable-next-line unused-imports/no-unused-vars
function formatHieroglyphKey(key: string): BaseSplitGlyphs {
  const keyData = store.keys.hieroglyphKeys.find(
    ({ glyph, alternative }) => (glyph === key) || (alternative === key),
  )!

  return {
    ...keyData,
    type: 'key',
    components: [],
  }
}

watch(
  () => props.glyphs,
  () => props.glyphs.forEach(({ type, glyph, components }) => {
    sectionsSettings.value[`${type}-${glyph}`] = { isCollapsed: false }

    if (type === 'hieroglyph') {
      components.forEach((glyph) => {
        sectionsSettings.value[`key-${glyph}`] = { isCollapsed: false }
      })
    }
  }),
  { deep: true, immediate: true },
)
</script>

<template>
  <div class="splited">
    <div v-for="(item, index) in glyphs" :key="index" class="splited-item">
      <TransitionGroup name="slide-down">
        <div
          :key="`${item.glyph}-divider`"
          class="divider"
          @click="handleClickDivider(item)"
        >
          <div class="divider-line" />
          <div class="divider-content">
            <div class="divider-content-text word">
              <div>
                {{ typeCopmonentMapping[item.type] }}
              </div>
            </div>
            <div v-if="getComponent(item).length" class="divider-content-text right">
              <template v-for="({ glyph, style }, indexGlyph) in getComponent(item)" :key="glyph">
                <span :style="style">
                  {{ glyph }}
                </span>
                <span v-if="indexGlyph !== getComponent(item).length - 1">
                  +
                </span>
              </template>
            </div>
            <div class="divider-content-text right index">
              #{{ index + 1 }}
            </div>
          </div>
        </div>

        <!-- SENTENCE / WORD / HIEROGLYPH -->
        <div
          v-if="!checkIsSectionCollapsed(item)"
          :key="item.glyph"
          class="glyph-item"
          :class="item.type"
        >
          <div class="glyph-item-spacing">
            <div
              v-for="spacing in ammountSpacing[item.type]"
              :key="spacing"
              class="glyph-item-spacing-segment"
            />
          </div>

          <HieroglyphWord :="adapterGlyphs(item)" />
          <!-- <SplittedItemContent :="adapter(item)" /> -->
        </div>

        <!-- KEYS -->
        <template v-if="item.type === 'hieroglyph'">
          <template v-for="key in item.components" :key="key">
            <div
              class="divider"
              @click="handleClickDivider({ glyph: key, type: 'key' })"
            >
              <div class="divider-line" />
              <div class="divider-content">
                <div class="divider-content-text word">
                  <div>
                    {{ typeCopmonentMapping.key }}
                  </div>
                </div>
                <div class="divider-content-text right index">
                  #{{ index + 1 }}
                </div>
              </div>
            </div>

            <div
              v-if="!checkIsSectionCollapsed({ glyph: key, type: 'key' })"
              class="glyph-item key"
            >
              <div class="glyph-item-spacing">
                <div
                  v-for="spacing in ammountSpacing.key"
                  :key="spacing"
                  class="glyph-item-spacing-segment"
                />
              </div>

              <div v-if="!isHieroglyphKeyExist(key)" class="glyph-item-not-found">
                Не найдено описание для - <HieroglyphWord :variant="0" :glyph="key" />
              </div>
              <template v-else>
                <HieroglyphWord :="adapterGlyphs(formatHieroglyphKey(key))" />
              </template>
            </div>
          </template>
        </template>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s cubic-bezier(0.1, 0.9, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.splited {
  display: flex;
  flex-direction: column;

  &-item {
    border-radius: 10px;
    padding: 0 12px;
  }
}

.glyph-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  width: 100%;

  &-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &-spacing {
    display: flex;
    height: auto;
    gap: 3px;
    margin-right: 10px;

    &-segment {
      width: 3px;
      height: auto;
      margin: 0 2px;
      opacity: 0.4;
      border-radius: 50px;
      background: var(--border-secondary-color);
      background: linear-gradient(
        180deg,
        var(--border-secondary-color) 0%,
        var(--border-primary-color) 50%,
        var(--border-secondary-color) 100%
      );
    }
  }
}

.divider {
  position: relative;
  margin: 6px 0;
  display: flex;
  height: 25px;

  &-line {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 12px;
    bottom: 0;
    right: 0;
    background-color: var(--border-primary-color);
    height: 1px;
  }

  &-content {
    display: flex;
    position: relative;
    z-index: 2;
    padding: 0 8px;
    width: 100%;
    gap: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: var(--fg-action-color);
      background-color: var(--bg-tertiary-color);
      box-shadow: 0px 0px 0px 1px var(--border-accent-color);

      .divider-content-text {
        border-left: 1px solid var(--border-secondary-color);
        border-right: 1px solid var(--border-secondary-color);

        &.word {
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          > div {
            border-left: 1px solid var(--border-secondary-color);
            border-right: 1px solid var(--border-secondary-color);
          }
        }
      }
    }

    &-text {
      transition: all 0.2s ease-in-out;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      line-height: 25px;

      &.word {
        display: flex;
        flex-direction: row;
        width: 150px;
        align-items: center;
        z-index: 10;

        > div {
          padding: 0 8px;
          color: var(--fg-tertiary-color);
          background-color: var(--bg-primary-color);
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
        }
      }

      &.index {
        font-size: 0.7rem;
        background-color: var(--bg-primary-color);
      }

      &.right {
        margin-left: auto;
        background-color: var(--bg-primary-color);
      }
    }

    > div {
      padding: 0 8px;
      color: var(--fg-tertiary-color);
    }
  }
}
</style>
