<script setup lang="ts">
import { mockCms } from '~/../server/utils/mock/cms/description'
import { JsonToDom } from '~/components/03.domain/json-to-dom'
import { LinguisticAnalysis } from '~/components/05.modules/linguistic-analysis'

useSeoMeta({
  title: 'AI Лексический разбор китайского текста',
  ogTitle: 'AI Анализатор китайского текста',
  description: 'Вставьте любой китайский текст и получите подробный грамматический и лексический разбор. ИИ объяснит структуру предложений, роль иероглифов и значения слов.',
})

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <JsonToDom :node="mockCms.linguisticAnalysis!" />

    <LinguisticAnalysis />

    <v-tooltip location="top" text="История лексического разбора">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="history-button"
          rounded
          variant="tonal"

          @click="navigateTo(RoutePaths.LinguisticAnalysis.History())"
        >
          <span>История</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </section>
</template>

<style lang="scss" scoped>
.history-button {
  text-transform: none;
  text-decoration: none;
  letter-spacing: 1px;
  color: var(--fg-secondary-color);
  width: auto;
  margin: 0 auto;
  padding: 0 32px;
  margin-top: auto;

  :first-of-type {
    margin-right: 8px;
  }

  @include mobile {
    font-size: 0.75rem;
  }
}
</style>
