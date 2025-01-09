<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

const app = useAppConfig()
const { $pwa } = useNuxtApp()

useHead({
  ...app,
  htmlAttrs: {
    'lang': 'ru',
    'data-cn': `${useCookie(FONT_FAMILY_CN, { default: () => 'base', sameSite: 'lax' }).value}`,
  },
})

onMounted(() => {
  if ($pwa?.offlineReady)
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
})
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <NuxtLoadingIndicator color="var(--border-accent-color)" />
  <NuxtPwaAssets />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
