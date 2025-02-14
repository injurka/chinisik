<script lang="ts" setup>
import { thematicDictionaryDataMock } from '~/server/utils/mock/thematic-dictionary'

const route = useRoute()
const categorySysname = route.params.category as string
const sectionSysname = route.params.section as string

const currentSection = thematicDictionaryDataMock.sections.find(s => s.sysname === sectionSysname) ?? null
const currentCategory = currentSection?.categories.find(c => c.sysname === categorySysname) ?? null

const nextCategory = computed(() => {
  if (!currentSection || !currentCategory)
    return null

  const currentIndex = currentSection.categories.findIndex(cat => cat.sysname === currentCategory?.sysname)
  if (currentIndex === -1 || currentIndex === currentSection.categories.length - 1)
    return null

  return currentSection.categories[currentIndex + 1]
})

const breadcrumbs = computed(() => {
  const crumbs = [{ title: 'Секции', to: RoutePaths.ThematicDictionary.Sections }]

  if (currentSection) {
    crumbs.push({ title: currentSection.name, to: RoutePaths.ThematicDictionary.Categories(currentSection.sysname) })
  }
  if (currentSection && currentCategory) {
    crumbs.push({ title: currentCategory.name, to: RoutePaths.ThematicDictionary.Category(currentSection.sysname, currentCategory.sysname) })
  }
  return crumbs
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: false,
})
</script>

<template>
  <section class="content-wrapper">
    <v-breadcrumbs :items="breadcrumbs" color="var(--fg-secondary-color)">
      <template #item="{ item }">
        <v-breadcrumbs-item :to="item.to" :title="item.title" />
      </template>
    </v-breadcrumbs>

    <template v-if="currentCategory">
      <h1>{{ currentCategory.name }}</h1>
      <p v-if="currentCategory.description">
        {{ currentCategory.description }}
      </p>

      <v-list v-if="currentCategory.words && currentCategory.words.length">
        <v-list-item v-for="word in currentCategory.words" :key="word.id">
          <v-list-item-title>{{ word.term }}</v-list-item-title>
          <v-list-item-subtitle v-if="word.definition">
            {{ word.definition }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-btn
        v-if="nextCategory"
        :to="RoutePaths.ThematicDictionary.Category(sectionSysname, nextCategory.sysname)"
      >
        Следующая категория: {{ nextCategory.name }}
      </v-btn>
    </template>

    <p v-else>
      Категория не найдена.
    </p>
  </section>
</template>
