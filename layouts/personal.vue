<script lang="ts" setup>
import { Header } from '~/components/shared/header'
import { HeaderMenuDrawer } from '~/components/shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/shared/header-profile-drawer'

const route = useRoute()

const daysNavList = [
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

const sysname = route.params.sysname as string

const contentType = ref<string>('slot')
const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)
const selectedDay = ref<string>(sysname ?? daysNavList[0].sysname)
const { isMobile } = useDevice()

function getRandomChar() {
  const rangeStart = 0x4E00
  const rangeEnd = 0x62FF
  return String.fromCodePoint(
    Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart),
  )
}

const symbols = Array.from({ length: 40 }, () => ({
  char: getRandomChar(),
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 15,
  size: 1 + Math.random() * 0.4,
}))

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
      <HeaderProfileDrawer v-model="isProfileDrawer" />
    </ClientOnly>

    <VMain>
      <slot />

      <client-only>
        <div v-if="!isMobile" class="background-effects">
          <div
            v-for="(symbol, index) in symbols"
            :key="index"
            class="symbol"
            :style="{
              top: `${symbol.top}%`,
              left: `${symbol.left}%`,
              animationDelay: `${symbol.delay}s`,
              animationDuration: `${symbol.duration}s`,
              fontSize: `${symbol.size}rem`,
            }"
          >
            {{ symbol.char }}
          </div>
        </div>
      </client-only>
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

.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to center, var(--bg-primary-color), var(--bg-tertiary-color));
  z-index: -1;

  .symbol {
    position: absolute;
    color: var(--fg-seconday-color);
    animation: floatEffect linear infinite;
    user-select: none;
    font-family: 'Arial', sans-serif;
    opacity: 0;
  }
}

@keyframes floatEffect {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }
  20% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
    transform: translateY(-40px) rotate(180deg);
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) rotate(360deg);
  }
}
</style>
