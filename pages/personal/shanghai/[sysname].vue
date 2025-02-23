<script setup lang="ts">
import { MarkdownContent } from '~/components/shared/markdown-content'
import { PageLoader } from '~/components/shared/page-loader'

const route = useRoute()
const sysname = route.params.sysname as string

const dayContent = ref<string>('')
const isLoading = ref<boolean>(true)

async function getContent(sysname: string) {
  isLoading.value = true
  dayContent.value = await $fetch<string>(`/personal/content/${sysname}.md`, { method: 'get', responseType: 'text' })
  isLoading.value = false
}

watch(
  () => sysname,
  () => getContent(sysname),
)

onMounted(() => {
  getContent(sysname)
})

definePageMeta({
  layout: 'personal',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper shanghai">
    <PageLoader v-if="isLoading" />

    <MarkdownContent v-else-if="dayContent" :content="dayContent" />

    <v-alert v-else type="info" class="tip">
      Ничего не найдено. Выберите другой день из меню
    </v-alert>
  </section>
</template>

<style scoped lang="scss">
.shanghai {
  margin: 16px auto;

  @include mobile() {
    font-size: 0.8rem;
  }

  .loader {
    margin-top: 64px;
    height: auto;
    flex-grow: 0;
  }
}
</style>
