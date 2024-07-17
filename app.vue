<script lang="ts" setup>
const app = useAppConfig()

useHead({
  ...app,
  htmlAttrs: {
    ...app.htmlAttrs,
    'data-cn': `${useCookie(FONT_FAMILY).value}`,
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
