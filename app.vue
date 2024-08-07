<script lang="ts" setup>
const app = useAppConfig()
const { $pwa } = useNuxtApp()

useHead({
  ...app,
  htmlAttrs: {
    'lang': 'ru',
    'data-cn': `${useCookie(FONT_FAMILY_CN, { default: () => 'base' }).value}`,
  },
})

onMounted(() => {
  if ($pwa?.offlineReady)
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtPwaAssets />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
