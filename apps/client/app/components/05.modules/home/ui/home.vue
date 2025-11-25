<script setup lang="ts">
import { DayMaterial } from '~/components/05.modules/day-material'
import FeaturesSection from './features-section.vue'
</script>

<template>
  <div class="home-sections">
    <FeaturesSection />
    <DayMaterial />
  </div>
</template>

<style scoped lang="scss">
.home-sections {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
</style>
