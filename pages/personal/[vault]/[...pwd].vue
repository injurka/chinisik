<script setup lang="ts">
import { MarkdownContent } from '~/components/shared/markdown-content'
import { PageLoader } from '~/components/shared/page-loader'

interface RouteParams {
  pwd: string[]
  vault: string
}

const route = useRoute()
const { staticBaseUrl } = useRuntimeConfig().public
const params = computed(() => {
  const routeParams = route.params as any
  return {
    vault: routeParams.vault,
    pwd: Array.isArray(routeParams.pwd) ? routeParams.pwd : [routeParams.pwd].filter(Boolean),
  } as RouteParams
})

const { data: content, refresh, status } = useAsyncData(`personal-${params.value.vault}-${params.value.pwd}`, () => {
  const path = params.value.pwd.join('/')

  return $fetch<string>(
    cleanDoubleSlashes(`${staticBaseUrl}/static/personal/${params.value.vault}/content/${path}.md`),
    { method: 'get', responseType: 'text' },
  )
})

const imageBasePath = computed(() => cleanDoubleSlashes(`${staticBaseUrl}/static/personal/${params.value.vault}/img/`))

watch(
  () => params.value.pwd,
  () => refresh(),
)

definePageMeta({
  layout: 'personal',
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
})
</script>

<template>
  <section class="content-wrapper personal">
    <PageLoader v-if="status === 'pending'" />

    <MarkdownContent
      v-else-if="content"
      :content="content"
      :image-base-path="imageBasePath"
    />

    <div v-else>
      <v-alert
        text="Выберите интересующею вас тему."
        title="Ничего не выбрано."
        type="info"
        variant="tonal"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.personal {
  margin: auto;

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
