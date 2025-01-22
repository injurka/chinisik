<script lang="ts" setup>
import { Header } from '~/components/shared/header'
import { HeaderDrawer } from '~/components/shared/header-drawer'

const isDrawer = ref<boolean>(false)
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Header v-model:drawer="isDrawer" />
  <VLayout>
    <HeaderDrawer v-model="isDrawer" />
    <VMain>
      <slot />
    </VMain>
  </VLayout>
</template>
