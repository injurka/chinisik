<script lang="ts" setup>
const isDrawer = defineModel<boolean>({ required: true })

interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

const navItems: NavItem[] = [
  { name: 'Ключи', icon: 'mdi:key', routeName: RouteNames.Keys, routePath: RoutePaths.Keys },
  { name: 'Пиньин', icon: 'mdi:translate', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin },
  { name: 'HSK словарь', icon: 'mdi:trophy-broken', routeName: RouteNames.HSK, routePath: RoutePaths.HSK },
  { name: 'Глоссарий', icon: 'mdi:book-alphabet', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary },
  { name: 'Лексический анализ', icon: 'mdi:layers-search-outline', routeName: RouteNames.LinguisticAnalysis, routePath: RoutePaths.LinguisticAnalysis },
  { name: 'Разбор иероглифов (устарело)', icon: 'mdi:text-box-search', routeName: RouteNames.SplitGlyphs, routePath: RoutePaths.SplitGlyphs },
]
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
      Разделы
    </header>
    <hr>
    <ul class="nav-list">
      <li
        v-for="item in navItems"
        :key="item.routeName"
        v-ripple
        :class="{ actived: $route.name === item.routeName }"
        @click="navigateTo(item.routePath)"
      >
        <Icon size="22" :name="item.icon" />
        <span>{{ item.name }} </span>
      </li>
    </ul>
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
    font-size: 1.4rem;
    margin-top: 16px;
    color: var(--fg-secondary-color);
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
