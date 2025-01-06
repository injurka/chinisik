<script lang="ts" setup>
import { JsonToDom } from '~/components/domain/json-to-dom'
import { textMock } from '~/server/utils/mock/glossary/1_modal-verb/text-mock'

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div>
    <JsonToDom
      :node="textMock.brief!"
    />
  </div>
</template>
