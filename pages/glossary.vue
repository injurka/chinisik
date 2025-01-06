<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { textMock } from '~/server/utils/mock/glossary/1_modal-verb/text-mock'

definePageMeta({
  layout: 'base',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <!-- <section class="loader">
    <Icon name="line-md:loading-loop" />
  </section> -->
  <section class="content">
    <JsonToDom
      :node="textMock!"
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  font-family: 'Rubik';
  max-width: 1200px;
  margin: 0 auto;

  @include mobile() {
    padding: 8px;
  }

  .description {
    font-size: 1rem;
    max-width: 1200px;
    padding: 16px 6px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding-bottom: 64px;
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;

  font-size: 4rem;
  color: var(--fg-accent-color);
}

:deep() {
  .example {
    border-left: 2px dashed var(--border-accent-color);
    padding-left: 8px;
  }
  .text {
    line-height: 30px;
  }
  .warn {
    display: inline-block;
    padding: 10px;
    background: var(--bg-secondary-color);
    border-left: 4px solid var(--border-accent-color);
    border-radius: 6px 12px 12px 6px;
    min-width: 420px;
  }
  .fg-secondary {
    color: var(--fg-secondary-color);
  }
}
</style>
