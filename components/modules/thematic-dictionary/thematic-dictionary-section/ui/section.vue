<script lang="ts" setup>
import { ThematicDictionaryBreadcrumbs } from '~/components/domain/thematic-dictionary/thematic-dictionary-breadcrumbs'
import { ThematicDictionaryCard } from '~/components/domain/thematic-dictionary/thematic-dictionary-card'

interface Props {
  sections: ThematicDictionaryData['catalog']
  section: ThematicDictionarySection
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

  return crumbs
})
</script>

<template>
  <div class="thematic-dictionary-section">
    <ThematicDictionaryBreadcrumbs :items="breadcrumbs" />

    <div class="content">
      <div class="header">
        <h1>{{ section.name }}</h1>
        <div v-if="section.description" class="description">
          <p class="description-text">
            {{ section.description }}
          </p>
        </div>
      </div>

      <aside class="side-catalog">
        <ul class="side-catalog-list">
          <li
            v-for="item in sections"
            :key="item.id"
            class="side-catalog-item"
            :class="{ actived: item.sysname === section.sysname }"
            @click="navigateTo(RoutePaths.ThematicDictionary.Categories(item.sysname))"
          >
            <span>{{ item.glyph }}</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </aside>

      <div class="list">
        <ThematicDictionaryCard
          v-for="category in section.categories"
          :key="category.sysname"
          :navigate-url="RoutePaths.ThematicDictionary.Category(section.sysname, category.sysname)"
          :sysname="category.sysname"
          :glyph="category.glyph"
          :name="category.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    &-text {
      margin-top: 12яpx;
      white-space: pre-line;
      position: relative;
    }
  }
}

.header {
  margin-top: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}

.side-catalog {
  position: absolute;
  top: 95px;
  left: -260px;
  border-right: 3px solid var(--border-secondary-color);
  border-radius: 0 12px 12px 0;
  overflow: hidden;
  opacity: 0.6;
  min-height: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1700px) {
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  &-list {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    gap: 4px;
    margin: 0;

    --tw-gradient-from: transparent;
    --tw-gradient-to: var(--bg-secondary-color);
    --tw-gradient-via-position: 50%;
    --tw-gradient-to-position: 100%;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) var(--tw-gradient-via-position),
      var(--tw-gradient-to) var(--tw-gradient-to-position);
    background: linear-gradient(to right, var(--tw-gradient-stops));

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 200px;
      height: 32px;
      line-height: 32px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      user-select: none;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      > :first-of-type {
        @include default-font();
        text-align: center;
        font-weight: 400;
        border-radius: 5px;
        font-size: 1.2rem;
        color: var(--fg-secondary-color);
        font-family: var(--font-family-cn);
        line-height: normal;
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        padding: 2px 4px;
      }
      > :last-of-type {
        @include default-font();
        font-weight: 400;
        font-size: 0.9rem;
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-shrink: 0;
      }

      &.actived {
        > :first-of-type {
          color: var(--fg-accent-color);
        }
        > :last-of-type {
          color: var(--fg-accent-color);
        }
      }
    }
  }
}
</style>
