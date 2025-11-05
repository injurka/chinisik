<script setup lang="ts">
import { AudioQuiz } from '~/components/05.modules/quiz/audio'

definePageMeta({
  layout: 'base-with-effects',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper">
    <AudioQuiz />
  </section>
</template>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
}
</style>
