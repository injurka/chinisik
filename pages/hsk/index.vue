<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'

import { HskAbout, HskLab, HskWords } from '~/components/modules/hsk'
import { mockCms } from '~/server/utils/mock/cms/description'

const { isMobile } = useDevice()

const tab = ref(1)

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content">
    <JsonToDom :node="mockCms.hskLevels!" />

    <div class="tabs">
      <v-tabs
        v-model="tab"
        align-tabs="center"
        :fixed-tabs="isMobile ? false : true"
        color="var(--fg-accent-color)"
        bg-color="transparent"
        slider-color="var(--fg-action-color)"
      >
        <v-tab
          prepend-icon="mdi-book"
          :value="1"
          :text="isMobile ? '' : 'Подробнее о HSK'"
        />
        <v-tab
          prepend-icon="mdi-book-open-page-variant"
          :value="2"
          :text="isMobile ? '' : 'Слова'"
        />
        <v-tab
          prepend-icon="mdi-test-tube"
          :value="3"
          :text="isMobile ? '' : 'Проверка знаний'"
        />
      </v-tabs>
    </div>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <v-container fluid class="container">
          <HskAbout />
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <v-container fluid class="container">
          <HskWords />
        </v-container>
      </v-tabs-window-item>
      <v-tabs-window-item :value="3">
        <v-container fluid class="container">
          <HskLab />
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  width: 100%;
  background-color: var(--bg-primary-color);

  @include mobile {
    padding: 4px;

    .container {
      padding: 8px 2px;
    }
    .hw-word {
      flex-wrap: wrap;
    }
  }

  .description {
    font-size: 1rem;
    margin: 0 auto;
    padding: 0 16px;

    @include mobile {
      font-size: 0.9rem;
    }
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
</style>
