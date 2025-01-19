<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { JsonToDom } from '~/components/domain/json-to-dom'
import { textMock } from '~/server/utils/mock/glossary/1_modal-verb/text-mock'

function handleNavigateTab(tab: TabVariant) {
  navigateTo(`/glossary/1/${tab}`)
}

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="content">
    <JsonToDom
      :node="textMock.main!"
    />

    <div class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('brief')"
      >
        Перейти к кратком содержанию
        <Icon name="mdi:arrow-right" />
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 16px;
  width: 100%;

  @include mobile() {
    padding: 4px;
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);

    &-btn {
      background-color: var(--bg-accent-color);
      text-transform: none;
      letter-spacing: 0;
      border: 1px solid var(--border-button-secondary-color);
    }
  }
}
</style>
