<script lang="ts" setup>
import type { TabVariant } from '~/layouts/glossary-sysname.vue'
import { GlossarySysnameLabContent } from '~/components/modules/glossary-sysname-lab'

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
  <div class="content-section">
    <GlossarySysnameLabContent />

    <div class="navigate-panel">
      <VBtn
        class="navigate-panel-btn"
        rounded
        variant="tonal"
        @click="handleNavigateTab('brief')"
      >
        <template #prepend>
          <Icon name="mdi:arrow-left" />
        </template>
        Перейти к кратком содержанию
      </VBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-section {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding: 16px;

  > :first-child {
    height: 100%;
  }

  @include mobile() {
    padding: 4px;
  }

  .navigate-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px;
    padding-top: 32px;
    margin-top: 16px;
    border-top: 2px dashed var(--border-button-secondary-color);
    font-size: 1rem;
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
}
</style>
