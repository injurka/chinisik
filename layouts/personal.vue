<script lang="ts" setup>
import { BackgroundEffects } from '~/components/shared/background-effects'
import { Footer } from '~/components/shared/footer'
import { Header } from '~/components/shared/header'
import { HeaderMenuDrawer } from '~/components/shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/shared/header-profile-drawer'

const route = useRoute()
const store = useStore(['auth'])
const { isMobile } = useDevice()

const daysNavList = [
  { sysname: '10-maya', title: 'Начало пути' },
  { sysname: '11-maya', title: 'Привет Шанхай (Waitan))' },
  { sysname: '12-maya', title: 'Сады, Храмы и Чаи' },
  { sysname: '13-maya', title: 'Коммерческий мир' },
  { sysname: '14-maya', title: 'Ура небоскребам (Pudong)' },
  { sysname: '15-maya', title: 'Древний город (Zhujiajiao Water Town)' },
  { sysname: '16-maya', title: 'День Утки по-пекински и Ночной жизни!' },
  { sysname: '17-maya', title: 'Искусство и Архитектура' },
  { sysname: '18-maya', title: 'Шоппинг и Развлечения' },
  { sysname: '19-maya', title: 'Гимн Спокойствию (Suzhou)' },
  { sysname: '20-maya', title: 'День на выбор' },
  { sysname: '21-maya', title: 'Подготовка к отъезду' },
  { sysname: '22-maya', title: 'Побег' },
  { sysname: '23-maya', title: 'На распутье (Урумчи)' },
]

const sysname = route.params.sysname as string

const contentType = ref<string>('slot')
const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)
const selectedDay = ref<string>(sysname ?? daysNavList[0].sysname)

function selectDay(sysname: string) {
  selectedDay.value = sysname
  navigateTo(RoutePaths.Personal.Shanghai(sysname))
}

watch(
  () => isMenuDrawer.value,
  (value) => {
    if (value)
      contentType.value = 'slot'
  },
)
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <VLayout>
    <ClientOnly>
      <HeaderMenuDrawer
        v-model="isMenuDrawer"
        v-model:content-type="contentType"
        class="drawer"
      >
        <template #default>
          <ul class="nav-list">
            <li
              v-for="item in daysNavList"
              :key="item.sysname"
              v-ripple
              :class="{ actived: selectedDay === item.sysname }"
              @click="selectDay(item.sysname)"
            >
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </template>
      </HeaderMenuDrawer>
      <HeaderProfileDrawer
        v-if="store.auth.isAuthenticated"
        v-model="isProfileDrawer"
      />
    </ClientOnly>

    <VMain>
      <div class="main-content">
        <slot />
      </div>

      <ClientOnly>
        <BackgroundEffects v-if="!isMobile" />
      </ClientOnly>

      <Footer />
    </VMain>
  </VLayout>
</template>

<style scoped lang="scss">
.main-content {
  height: 100%;
}

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
</style>
