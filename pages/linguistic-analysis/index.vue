<script setup lang="ts">
import { JsonToDom } from '~/components/domain/json-to-dom'
import { LinguisticAnalysis } from '~/components/modules/linguistic-analysis'
import { mockCms } from '~/server/utils/mock/cms/description'

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
  </section>
</template>
