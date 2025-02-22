<script lang="ts" setup>
interface Props {
  items: {
    title: string
    to: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <VBreadcrumbs
    class="breadcrumbs"
    :items="items"
    color="var(--fg-secondary-color)"
  >
    <template #item="{ item }">
      <VBreadcrumbsItem
        :to="item.to"
        :title="item.title"
      />
    </template>
  </VBreadcrumbs>
</template>

<style scoped lang="scss">
.breadcrumbs {
  padding: 8px 0;
  font-size: 0.8rem;
}
</style>
