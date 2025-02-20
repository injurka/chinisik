<script lang="ts" setup>
interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

const slots = defineSlots<{
  default: () => unknown
}>()

const isDrawer = defineModel<boolean>({ required: true })
const contentType = defineModel<string>('contentType', { default: 'sections' })

const navItems: NavItem[] = [
  { name: 'Ключи', icon: 'mdi:key', routeName: RouteNames.Keys, routePath: RoutePaths.Keys('list') },
  { name: 'Пиньин', icon: 'mdi:translate', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin },
  { name: 'HSK словарь', icon: 'mdi:trophy-broken', routeName: RouteNames.HSK, routePath: RoutePaths.HSK('about') },
  { name: 'Тематический словарь', icon: 'mdi:book-open-variant', routeName: RouteNames.ThematicDictionary, routePath: RoutePaths.ThematicDictionary.Sections },
  { name: 'Глоссарий', icon: 'mdi:book-alphabet', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary },
  { name: 'Лексический анализ', icon: 'mdi:layers-search', routeName: RouteNames.LinguisticAnalysis, routePath: RoutePaths.LinguisticAnalysis },
  { name: 'Разбор иероглифов', icon: 'mdi:text-box-search', routeName: RouteNames.SplitGlyphs, routePath: RoutePaths.SplitGlyphs },
  { name: 'Shanghai', icon: 'mdi:wallet-travel', routeName: RouteNames.PersonalShanghai, routePath: RoutePaths.Personal.Shanghai('10-maya') },
]

const hasSlotContent = computed(() => {
  // Почему `undefined`
  return !!slots.default()
})
</script>

<template>
  <VNavigationDrawer
    v-model="isDrawer"
    location="left"
    width="320"
    class="drawer"
    temporary
  >
    <header class="title">
      <div v-if="contentType === 'sections'">
        Разделы
      </div>
      <div v-else class="title-back" @click="contentType = 'sections'">
        <Icon name="mdi:arrow-left" class="icon" />
        Вернуться к разделам
      </div>
    </header>

    <hr class="divider">

    <Transition name="smooth-appear">
      <ul v-if="contentType === 'sections'" class="nav-list">
        <li
          v-for="item in navItems"
          :key="item.routeName"
          v-ripple
          :class="{ actived: $route.name === item.routeName }"
          @click="navigateTo(item.routePath)"
        >
          <Icon size="22" :name="item.icon" />
          <span>{{ item.name }}</span>
        </li>
      </ul>

      <slot v-else-if="contentType === 'slot' && hasSlotContent" />

      <template v-else>
        <p>Нет контента для отображения.</p>
      </template>
    </Transition>

    <footer class="footer">
      <button
        v-ripple
        class="about"
        @click="navigateTo(RoutePaths.About)"
      >
        О сайте
      </button>
    </footer>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  border-right: 1px solid var(--border-primary-color);
  user-select: none;

  &:deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary-color);
    border-right: 1px solid var(--border-primary-color);
  }

  .title {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 12px;
    color: var(--fg-secondary-color);

    &-back {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      cursor: pointer;
      margin-right: 16px;
    }
  }

  .divider {
    margin: 12px 0;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
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
      line-height: 38px;
      padding: 0 8px;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

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

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    .about {
      color: var(--fg-secondary-color);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      padding: 16px 0;
      width: 100%;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }
    }
  }
}
</style>
