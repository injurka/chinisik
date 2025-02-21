<script lang="ts" setup>
interface Props {
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
    <v-breadcrumbs :items="breadcrumbs" color="var(--fg-secondary-color)">
      <template #item="{ item }">
        <v-breadcrumbs-item :to="item.to" :title="item.title" />
      </template>
    </v-breadcrumbs>
    <div class="content">
      <div class="header">
        <h1>{{ section.name }}</h1>
        <p v-if="section.description">
          {{ section.description }}
        </p>
      </div>

      <div class="list">
        <div
          v-for="category in section.categories"
          :key="category.sysname"
          class="card"
        >
          <div
            class="card-content"
            @click="navigateTo(RoutePaths.ThematicDictionary.Category(section.sysname, category.sysname))"
          >
            <div class="glyph">
              {{ category.glyph }}
            </div>
            <div class="name">
              {{ category.name }}
            </div>
          </div>
        </div>
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
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

.card {
  --tw-gradient-from: var(--bg-overlay-primary-color);
  --tw-gradient-to: var(--bg-secondary-color);
  --tw-gradient-via-position: 50%;
  --tw-gradient-to-position: 100%;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) var(--tw-gradient-via-position),
    var(--tw-gradient-to) var(--tw-gradient-to-position);

  border-radius: 6px;
  border: 1px solid var(--border-secondary-color);
  background: linear-gradient(to right, var(--tw-gradient-stops));
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    .glyph {
      color: var(--fg-accent-color);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    cursor: pointer;
    border-radius: inherit;

    .glyph {
      @include default-font();
      flex-shrink: 0;
      width: 10%;
      text-align: center;
      font-weight: 400;
      border-radius: 5px;
      font-size: 2rem;
      color: var(--fg-secondary-color);
      font-family: var(--font-family-cn);
      line-height: normal;
    }

    .name {
      @include default-font();
      font-weight: 500;
      width: 90%;
      text-align: center;
    }
  }
}
</style>
