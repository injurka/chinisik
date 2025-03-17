<script lang="ts" setup>
import type { PersonalNavItem } from '~/components/modules/personal/layout'
import { computed, ref, watch } from 'vue'
import { PersonalHeaderMenuDrawer } from '~/components/modules/personal/layout'
import { BackgroundEffects } from '~/components/shared/background-effects'
import { Footer } from '~/components/shared/footer'
import { Header } from '~/components/shared/header'
import { HeaderProfileDrawer } from '~/components/shared/header-profile-drawer'

interface RouteParams {
  pwd: string[]
  vault: string
}

const router = useRouter()
const store = useStore(['auth'])
const { isMobile } = useDevice()

const params = computed<RouteParams>(() => {
  const routeParams = router.currentRoute.value.params

  return {
    vault: routeParams.vault as string,
    pwd: Array.isArray(routeParams.pwd)
      ? routeParams.pwd
      : [routeParams.pwd as string].filter(Boolean),
  }
})

const { data: navData, refresh } = await useAsyncData<PersonalNavItem[]>(`personal-${params.value.vault}`, async () => {
  const { staticBaseUrl } = useRuntimeConfig().public

  return await $fetch<PersonalNavItem[]>(
    cleanDoubleSlashes(`${staticBaseUrl}/static/personal/${params.value.vault}/nav.json`),
    { method: 'get', responseType: 'json' },
  )
})

const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)

watch(
  () => params.value.vault,
  () => {
    refresh()
    isMenuDrawer.value = false
  },
)
</script>

<template>
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <VLayout>
    <PersonalHeaderMenuDrawer
      v-model="isMenuDrawer"
      :params="params"
      :nav-items="navData!"
    />

    <HeaderProfileDrawer
      v-if="store.auth.isAuthenticated"
      v-model="isProfileDrawer"
    />

    <VMain>
      <div class="main-content">
        <slot />
      </div>

      <ClientOnly>
        <BackgroundEffects v-if="!isMobile" />
      </ClientOnly>

      <Footer />
    </VMain>
  </VLayout>
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
}
</style>
