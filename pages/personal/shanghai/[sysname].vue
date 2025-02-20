<script setup lang="ts">
import { MarkdownContent } from '~/components/shared/markdown-content'
import { PageLoader } from '~/components/shared/page-loader'
import { ThemesVariant } from '~/shared/composables/change-theme'

const route = useRoute()
const sysname = route.params.sysname as string

const { setTheme, theme } = useChangeTheme()

// Список доступных тем
const availableThemes: ThemesVariant[] = [ThemesVariant.Light, ThemesVariant.Dark, ThemesVariant.Rainy]

// Индекс текущей темы в списке
const currentThemeIndex = ref(availableThemes.indexOf(theme.value))

// Функция для переключения темы
function toggleTheme() {
  currentThemeIndex.value = (currentThemeIndex.value + 1) % availableThemes.length
  setTheme(availableThemes[currentThemeIndex.value])
}

// Вычисляемая иконка для кнопки
const themeIcon = computed(() => {
  const currentTheme = availableThemes[currentThemeIndex.value]
  switch (currentTheme) {
    case 'light':
      return 'line-md:sunny-outline-twotone'
    case 'dark':
      return 'line-md:moon-alt-loop'
    case 'rainy':
      return 'line-md:cloud-twotone'
    default:
      return 'line-md:question-mark' //  на всякий случай
  }
})

const days = [
  { sysname: '10-maya', title: 'Начало пути' },
  { sysname: '11-maya', title: 'Bund (Waitan)' },
  { sysname: '12-maya', title: 'Коммерческий мир' },
  { sysname: '13-maya', title: 'Pudong' },
  { sysname: '14-maya', title: 'Искусство и Архитектура' },
  { sysname: '15-maya', title: 'Ancient Town (Zhujiajiao Water Town)' },
  { sysname: '16-maya', title: 'Сады, Храмы и Чаи' },
  { sysname: '17-maya', title: 'Море (Jinshan City Beach)' },
  { sysname: '18-maya', title: 'День Утки по-пекински и Ночной жизни!' },
  { sysname: '19-maya', title: 'Шоппинг и Развлечения' },
  { sysname: '20-maya', title: 'День на выбор' },
  { sysname: '21-maya', title: 'Подготовка к отъезду' },
  { sysname: '22-maya', title: 'Побег' },
  { sysname: '23-maya', title: '(Урумчи)' },
]

const drawer = ref<boolean>(false)
const selectedDay = ref<string>(sysname)
const dayContent = ref<string>('')
const isLoading = ref<boolean>(true)

async function getContent(sysname: string) {
  isLoading.value = true
  dayContent.value = await $fetch<string>(`/personal/content/${sysname}.md`, { method: 'get', responseType: 'text' })
  isLoading.value = false
}

async function selectDay(sysname: string) {
  drawer.value = false
  selectedDay.value = sysname
  await navigateTo(`/personal/shanghai/${sysname}`)
}

watch(
  () => selectedDay.value,
  () => getContent(selectedDay.value),
)

onMounted(() => {
  getContent(selectedDay.value)
})
</script>

<template>
  <VLayout>
    <VNavigationDrawer
      v-model="drawer"
      location="left"
      temporary
      width="320"
      class="drawer"
    >
      <ul class="nav-list">
        <li
          v-for="item in days"
          :key="item.sysname"
          v-ripple
          :class="{ actived: selectedDay === item.sysname }"
          @click="selectDay(item.sysname)"
        >
          <span>{{ item.title }} </span>
        </li>
      </ul>
    </VNavigationDrawer>
    <VMain>
      <section class="content-wrapper shanghai">
        <VBtn
          class="shanghai-drawer-btn"
          icon="mdi-menu"
          variant="tonal"
          @click="drawer = !drawer"
        />
        <VBtn
          variant="tonal"
          class="shanghai-theme-btn"
          icon
          @click="toggleTheme"
        >
          <Icon size="20" :name="themeIcon" />
        </VBtn>

        <PageLoader v-if="isLoading" />

        <MarkdownContent v-else-if="selectedDay && dayContent" :content="dayContent" />

        <v-alert v-else type="info" class="tip">
          Ничего не найдено. Выберите другой день из меню
        </v-alert>
      </section>
    </VMain>
  </VLayout>
</template>

<style scoped lang="scss">
  .drawer {
  border-right: 1px solid var(--border-primary-color);
  user-select: none;

  &:deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary-color);
    border-right: 1px solid var(--border-primary-color);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2px;
    padding: 10px;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 100%;
      height: 38px;
      padding: 0 8px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      font-size: 0.84rem;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      &.actived {
        color: var(--fg-accent-color);
      }
    }
  }
}

.shanghai {
  padding-top: 64px;

  @include mobile() {
    font-size: 0.8rem;
  }

  &-drawer-btn {
    z-index: 100;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  &-theme-btn {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
