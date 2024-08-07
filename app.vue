<script lang="ts" setup>
import Nice from './components/domain/nice.client.vue'

const app = useAppConfig()
const { $pwa } = useNuxtApp()

useHead({
  ...app,
  htmlAttrs: {
    'lang': 'ru',
    'data-cn': `${useCookie(FONT_FAMILY).value}`,
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
    <Nice />
    <NuxtPage />
  </NuxtLayout>
</template>
