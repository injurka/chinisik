<script lang="ts" setup>
interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

const canGoBack = defineProps<{
  canGoBack?: boolean
}>()

const slots = defineSlots<{
  default: () => unknown
}>()

const { isMobile } = useDevice()
const isDrawer = defineModel<boolean>({ required: true })
const contentType = defineModel<string>('contentType', { default: 'sections' })

const navGroups: NavGroup[] = [
  {
    title: 'Навигация',
    items: [
      { name: 'Главная', icon: 'mdi:home-outline', routeName: RouteNames.Home, routePath: RoutePaths.Home() },
    ],
  },
  {
    title: 'Обучение',
    items: [
      { name: 'Ключи', icon: 'mdi:key', routeName: RouteNames.Keys, routePath: RoutePaths.Keys.Tab('list') },
      { name: 'Пиньин', icon: 'mdi:translate', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin() },
      { name: 'HSK словарь', icon: 'mdi:trophy-broken', routeName: RouteNames.HSK, routePath: RoutePaths.HSK.Tab('about') },
      { name: 'Книги', icon: 'mdi:book-open-page-variant', routeName: RouteNames.Books, routePath: RoutePaths.Books.Index() },
      { name: 'Тематический словарь', icon: 'mdi:book-open-variant', routeName: RouteNames.ThematicDictionary, routePath: RoutePaths.ThematicDictionary.Sections() },
      { name: 'Глоссарий', icon: 'mdi:book-alphabet', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary.Index() },
    ],
  },
  {
    title: 'Инструменты',
    items: [
      { name: 'Лексический анализ', icon: 'mdi:layers-search', routeName: RouteNames.LinguisticAnalysis, routePath: RoutePaths.LinguisticAnalysis.Index() },
    ],
  },
]

const hasSlotContent = computed(() => {
  return !!slots.default()
})

const router = useRouter()
function navigateTo(path: string) {
  if (isMobile) {
    isDrawer.value = false
  }
  router.push(path)
}
</script>

<template>
  <VNavigationDrawer
    v-model="isDrawer"
    location="left"
    :width="isMobile ? 320 : 380"
    class="drawer"
    mobile-breakpoint="xl"
    temporary
  >
    <header class="header">
      <div class="header-left">
        <Transition name="smooth-appear" mode="out-in">
          <button v-if="contentType === 'slot' && canGoBack" class="header-back" @click="contentType = 'sections'">
            <Icon name="mdi:arrow-left" size="22" />
            <span v-if="!isMobile">Назад</span>
          </button>
        </Transition>
      </div>

      <div class="header-title">
        <Transition name="smooth-appear" mode="out-in">
          <span :key="contentType">{{ contentType === 'sections' ? 'Разделы' : 'Меню' }}</span>
        </Transition>
      </div>

      <div class="header-right">
        <button
          class="header-home"
          :class="{ 'is-active': $route.name === RouteNames.Home }"
          title="На главную"
          @click="navigateTo(RoutePaths.Home())"
        >
          <Icon name="mdi:home-outline" size="24" />
        </button>
      </div>
    </header>

    <main class="main-content">
      <Transition name="smooth-appear" mode="out-in">
        <div v-if="contentType === 'sections'" class="nav-list-container">
          <div v-for="group in navGroups" :key="group.title" class="nav-group">
            <h3 class="group-title">
              {{ group.title }}
            </h3>
            <ul class="group-items">
              <li
                v-for="item in group.items"
                :key="item.routeName"
                v-ripple
                :class="{ actived: $route.name === item.routeName }"
                @click.stop="navigateTo(item.routePath)"
              >
                <Icon size="22" :name="item.icon" />
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div v-else-if="contentType === 'slot' && hasSlotContent" class="slot-content">
          <slot />
        </div>

        <div v-else class="placeholder">
          <p>Нет контента для отображения.</p>
        </div>
      </Transition>
    </main>

    <footer class="footer">
      <button
        v-ripple
        class="about-button"
        @click="navigateTo(RoutePaths.About())"
      >
        О сайте
      </button>
    </footer>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.smooth-appear-enter-active,
.smooth-appear-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.smooth-appear-enter-from,
.smooth-appear-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.drawer {
  border: none;
  border-right: 1px solid var(--border-primary-color);
  user-select: none;

  &:deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary-color);
    overflow: hidden;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: 56px;
    padding: 0 12px;
    border-bottom: 1px solid var(--border-primary-color);
    flex-shrink: 0;

    &-left {
      justify-self: start;
    }

    &-right {
      justify-self: end;
    }

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--fg-secondary-color);
    }

    &-back,
    &-home {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--fg-primary-color);
      transition: all 0.2s ease;
      padding: 8px 12px;
      border-radius: 22px;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
      }
    }

    &-home {
      padding: 8px; // make it round
      border-radius: 50%;

      &.is-active {
        color: var(--fg-accent-color);
        background-color: rgba(var(--bg-accent-color-rgb), 0.1);
      }
    }
  }

  .main-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 8px;
  }

  .nav-group {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  .group-title {
    padding: 0 12px 8px;
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--fg-secondary-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .group-items {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      height: 44px;
      padding: 0 12px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
      font-weight: 400;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
      }

      &.actived {
        color: var(--fg-accent-color);
        background-color: var(--bg-tertiary-color);
        font-weight: 500;
      }
    }
  }

  .placeholder,
  .slot-content {
    padding: 16px;
  }

  .footer {
    padding: 8px;
    margin-top: auto;
    border-top: 1px solid var(--border-primary-color);
    flex-shrink: 0;

    .about-button {
      width: 100%;
      height: 44px;
      border-radius: 8px;
      color: var(--fg-secondary-color);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
      }
    }
  }
}
</style>```
