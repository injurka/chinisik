<script lang="ts" setup>
const app = useAppConfig()
const { $pwa } = useNuxtApp()
const { theme, getHeadThemeColor } = useChangeTheme()
const fontFamilyCookie = useCookie(FONT_FAMILY_CN, { default: () => 'base', sameSite: 'lax' })

useHead({
  ...app,
  htmlAttrs: {
    'lang': 'ru',
    'data-cn': fontFamilyCookie.value,
  },
  meta: [
    { name: 'theme-color', content: getHeadThemeColor() },
  ],
})

watch(
  () => theme.value,
  () => {
    useHead({
      ...app,
      meta: [
        { name: 'theme-color', content: getHeadThemeColor() },
      ],
    })
  },
)

onMounted(() => {
  if ($pwa?.offlineReady) {
    // eslint-disable-next-line no-console
    console.info('App ready to work offline')
  }
})
</script>

<template>
  <NuxtLoadingIndicator color="var(--border-accent-color)" />
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
