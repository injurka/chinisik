<script lang="ts" setup>
import { GlossarySysnameLabContent } from '~/components/modules/glossary-sysname-lab'

definePageMeta({
  layout: 'glossary-sysname',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <div class="lab">
    <GlossarySysnameLabContent />
  </div>
</template>

<style scoped lang="scss">
.lab {
  width: 100%;
  margin-top: 32px;
}
</style>
