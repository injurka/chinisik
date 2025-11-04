<script setup lang="ts">
import { MarkdownContent } from '~/components/02.shared/markdown-content'

interface Props {
  content: string
}

defineProps<Props>()
</script>

<template>
  <div class="linguistic-analysis-md">
    <MarkdownContent
      :content="content"
    />
  </div>
</template>

<style scoped lang="scss">
.linguistic-analysis-md {
  margin: 0;
}
</style>
