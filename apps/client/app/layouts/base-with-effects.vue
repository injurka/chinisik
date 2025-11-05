<script lang="ts" setup>
import { BackgroundEffects } from '~/components/02.shared/background-effects'
import { Footer } from '~/components/02.shared/footer'
import { Header } from '~/components/02.shared/header'
import { HeaderMenuDrawer } from '~/components/02.shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/02.shared/header-profile-drawer'

const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)

const { isMobile } = useDevice()
const store = useStore(['auth'])
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <VLayout>
    <HeaderMenuDrawer v-model="isMenuDrawer" />
    <HeaderProfileDrawer v-if="store.auth.isAuthenticated" v-model="isProfileDrawer" />

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
