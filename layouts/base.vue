<script lang="ts" setup>
import { Header } from '~/components/shared/header'
import { HeaderDrawer } from '~/components/shared/header-drawer'

const isDrawer = ref<boolean>(false)
</script>

<template>
  <VLayout>
    <HeaderDrawer v-model="isDrawer" />
    <VMain>
      <Header v-model:drawer="isDrawer" />
      <slot />
    </VMain>
  </VLayout>
</template>
