<script setup lang="ts">
import FeaturesDay from './features-day.vue'
import FeaturesSection from './features-section.vue'
</script>

<template>
  <div class="home-sections">
    <FeaturesSection />
    <FeaturesDay />
  </div>
</template>

<style scoped lang="scss">
.home-sections {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
</style>
