<script setup lang="ts">
// @ts-expect-error svg loader
import LogoSVG from '~/assets/svg/logo.svg?raw'
import { HaoticLines } from '~/components/domain/haotic-lines'
import { OAuthErrors, OAuthProviders } from '~/shared/types/models'

enum RequestKeys {
  SIGN_IN = 'auth_sign-in',
}

const store = useStore(['auth'])
const route = useRoute()

const email = ref<string>('')
const password = ref<string>('')
const terms = ref<boolean>(false)
const contentEl = ref<HTMLElement>()

const formHasErrors = ref<boolean>(false)
const isPasswordShowed = ref<boolean>(false)
const snackbarError = ref({
  showed: false,
  msg: '',
})

const emailRules = [
  (v: string) => !!v || 'Почтовый адрес обязателен',
  (v: string) => /.[^\n\r@\u2028\u2029]*@.+\..+/.test(v) || 'Неверный формат почты',
]

const passwordRules = [
  (v: string) => !!v || 'Пароль обязателен',
  (v: string) => v.length >= 8 || 'Пароль должен быть не менее 8 символов',
]

const isLoading = computed(() => useRequestStatus([RequestKeys.SIGN_IN]))

async function submitSignIn() {
  formHasErrors.value = false

  const emailValid = emailRules.every(rule => rule(email.value) === true)
  const passwordValid = passwordRules.every(rule => rule(password.value) === true)

  if (!emailValid || !passwordValid || !terms.value) {
    formHasErrors.value = true
    return
  }

  try {
    await store.auth.signIn({ email: email.value, password: password.value }, true)

    await navigateTo(RoutePaths.Keys('list'))
  }
  catch (error) {
    let errorMessage: string = 'Неизвестная ошибка.'

    if (isIApiError(error))
      errorMessage = error.message
    else if (error instanceof Error)
      errorMessage = error.message

    snackbarError.value = { showed: true, msg: errorMessage }
  }
}

function customizeSvgColors(content: string) {
  return content
    .replaceAll('#bbcef8', 'var(--fg-accent-color)')
    .replaceAll('#424c86', 'var(--border-accent-color)')
}

async function handleOAuth(provider: OAuthProviders) {
  const { apiBaseUrl } = useRuntimeConfig().public

  switch (provider) {
    case OAuthProviders.GitHub:
      await navigateTo({ path: cleanDoubleSlashes(`${apiBaseUrl}/v1/auth/github`) }, { external: true })
      break

    case OAuthProviders.Google:
      await navigateTo({ path: cleanDoubleSlashes(`${apiBaseUrl}/v1/auth/google`) }, { external: true })
      break
  }
}

onMounted(() => {
  const oauthError = route.query.oa_error as OAuthErrors

  if (oauthError) {
    let msg = ''

    switch (oauthError) {
      case OAuthErrors.MissingToken:
        msg = 'Ошибка при OAuth авторизации'
        break

      case OAuthErrors.MeError:
        msg = 'Не удалось получить данные пользователя'
        break
    }

    snackbarError.value = {
      showed: true,
      msg,
    }

    // Очиска query параметров
    navigateTo({ query: {} })
  }
})
</script>

<template>
  <section ref="contentEl" class="content">
    <div class="card">
      <v-progress-linear
        v-if="isLoading"
        color="var(--fg-accent-color)"
        indeterminate
        height="4"
        class="linear-left"
      />
      <v-progress-linear
        v-if="isLoading"
        color="var(--fg-accent-color)"
        indeterminate
        height="4"
        class="linear-right"
      />

      <div class="logo">
        <span v-html="customizeSvgColors(LogoSVG)" />
      </div>

      <v-form :disabled="isLoading" class="form" @submit.prevent="submitSignIn">
        <v-text-field
          v-model="email"
          label="Почтовый адрес"
          variant="outlined"
          placeholder="chinisik@gmail.com"
          prepend-icon="mdi-email-outline"
          :rules="emailRules"
          type="email"
          name="email"
          required
        />
        <v-text-field
          v-model="password"
          label="Пароль"
          :type="isPasswordShowed ? 'text' : 'password'"
          name="password"
          variant="outlined"
          :rules="passwordRules"
          prepend-icon="mdi-lock-outline"
          :append-inner-icon="isPasswordShowed ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          required
          @click:append-inner="isPasswordShowed = !isPasswordShowed"
        />
        <v-checkbox
          v-model="terms"
          color="primary"
          class="legal"
          label="Я подтверждаю, что прочитал, согласен и принимаю Chinisik's Условия использования и Политику конфиденциальности."
          required
        />

        <v-btn
          type="submit"
          class="mb-4"
          color="primary"
          size="large"
          variant="tonal"
          block
          :disabled="!terms"
        >
          Авторизоваться
        </v-btn>
      </v-form>

      <div class="utils">
        <v-btn variant="text" color="primary" @click="navigateTo(RoutePaths.Auth.ForgotPassword)">
          Забыли пароль?
        </v-btn>
        <v-btn variant="text" color="primary" @click="navigateTo(RoutePaths.Auth.SignUp)">
          Создать аккаунт
        </v-btn>
      </div>

      <div class="divider">
        <div class="divider-left" />
        <div class="divider-text">
          ИЛИ
        </div>
        <div class="divider-right" />
      </div>

      <div class="additional">
        <div class="additional-oauth">
          <v-btn
            variant="outlined"
            color="primary"
            height="52"
            @click="handleOAuth(OAuthProviders.Google)"
          >
            <v-icon size="25">
              mdi-google
            </v-icon>
          </v-btn>
          <v-btn
            variant="outlined"
            color="primary"
            height="52"
            @click="handleOAuth(OAuthProviders.GitHub)"
          >
            <v-icon size="25">
              mdi-github
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <ClientOnly>
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="180"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="220"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>

    <v-snackbar
      v-model="snackbarError.showed"
      close-delay="2"
      location="top"
      color="var(--border-negative-color)"
    >
      <div class="text-center">
        {{ snackbarError.msg }}
      </div>
    </v-snackbar>
  </section>
</template>

<style scoped lang="scss">
.haotic-lines {
  opacity: 0.1;
}
.linear-right {
  right: calc(260px - (660px - 520px) / 2);
}
.linear-left {
  left: calc(260px - (660px - 520px) / 2);
}

.linear-right,
.linear-left {
  position: absolute;
  display: flex;
  top: 0;
  width: 650px;
  transform: rotate(90deg) translateX(50%);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
}

.card {
  position: relative;
  z-index: 10;
  width: 520px;
  margin: 16px;
  background-color: rgba(var(--bg-header-color), 0.2);
  backdrop-filter: blur(8px);
  font-family: 'Rubik';
  text-decoration: none;
  text-transform: none;

  border-left: 4px solid var(--border-secondary-color);
  border-right: 4px solid var(--border-secondary-color);

  padding: 32px;

  &:deep(.v-btn) {
    color: var(--fg-action-color) !important;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.logo {
  margin: 16px;
  margin-top: 8px;
  margin-bottom: 32px;
  gap: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &-icon {
    color: var(--border-accent-color);
  }
}

.legal {
  &:deep(.v-label) {
    font-size: 0.9rem;
  }
}

.utils {
  display: flex;
  justify-content: space-between;

  &:deep(.v-btn) {
    text-decoration: none;
    text-transform: none;
    color: var(--fg-tertiary-color) !important;
  }
}

.divider {
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  display: flex;

  &-left,
  &-right {
    background-color: var(--border-primary-color);
    flex-grow: 1;
    height: 1px;
  }
  &-text {
    color: var(--fg-tertiary-color);
    flex-shrink: 0;
    margin: 0 10px;
  }
}

.additional {
  &-oauth {
    display: flex;
    justify-content: center;
    gap: 18px;
  }
}
</style>
