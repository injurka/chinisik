<script setup lang="ts">
import { PageLoader } from '~/components/shared/page-loader'

const route = useRoute()
const store = useStore(['auth'])

async function authorizationCallback() {
  const token = route.query.token as string

  if (!token) {
    navigateTo({
      path: RoutePaths.Auth.SignIn,
      query: {
        oa_error: OAuthErrors.MissingToken,
      },
    })
  }

  store.auth.saveTokens(token)
  await nextTick()
  validateUser()
}

async function validateUser() {
  const { status } = await store.auth.me()

  if (status === 'REJECTED') {
    navigateTo({
      path: RoutePaths.Auth.SignIn,
      query: { oa_error: OAuthErrors.MeError },
    })
  }
  else {
    navigateTo({ path: RoutePaths.Keys('list') })
  }
}

onMounted(() => {
  authorizationCallback()
})
</script>

<template>
  <div class="content">
    <div class="card">
      <p class="title">
        正在完成授权...
      </p>
      <p class="subtitle">
        Завершение авторизации...
      </p>
      <PageLoader />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      font-family: var(--font-family-cn);
      color: var(--fg-primary-color);
      font-weight: 500;
      font-size: 2rem;
    }

    .subtitle {
      font-family: 'Rubik';
      font-weight: 400;
      color: var(--fg-secondary-color);
      font-size: 0.9rem;
    }

    .loader {
      margin-top: 24px;
      height: auto;
      flex-grow: 0;
      font-size: 2rem;
    }
  }
}
</style>
