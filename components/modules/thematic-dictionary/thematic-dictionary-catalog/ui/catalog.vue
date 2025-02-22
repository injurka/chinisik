<script lang="ts" setup>
import { ThematicDictionaryCard } from '~/components/domain/thematic-dictionary/thematic-dictionary-card'

interface Props {
  sections: ThematicDictionaryData['catalog']
}

defineProps<Props>()
</script>

<template>
  <div class="thematic-dictionary-catalog">
    <h1>Тематический словарь</h1>
    <p>
      Этот тематический словарь предназначен для изучения основных слов и фраз по различным темам.
      Он поможет вам расширить свой словарный запас и улучшить навыки общения на разные темы, такие как беседа, путешествия и многое другое.
    </p>
    <div class="list">
      <ThematicDictionaryCard
        v-for="section in sections"
        :key="section.sysname"
        :navigate-url="RoutePaths.ThematicDictionary.Categories(section.sysname)"
        :sysname="section.sysname"
        :glyph="section.glyph"
        :name="section.name"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.thematic-dictionary-catalog {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 16px 0;
}
</style>
