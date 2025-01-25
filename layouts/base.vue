<script lang="ts" setup>
import { Header } from '~/components/shared/header'
import { HeaderMenuDrawer } from '~/components/shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/shared/header-profile-drawer'

const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <VLayout>
    <HeaderMenuDrawer
      v-if="$vuetify.display.mobile"
      v-model="isMenuDrawer"
    />
    <HeaderProfileDrawer
      v-model="isProfileDrawer"
    />

    <VMain>
      <slot />
    </VMain>
  </VLayout>
</template>
