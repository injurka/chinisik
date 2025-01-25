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
  { name: 'Разбор иероглифов', icon: 'mdi:text-box-search', routeName: RouteNames.SplitGlyphs, routePath: RoutePaths.SplitGlyphs },
  { name: 'Глоссарий', icon: 'mdi:book-alphabet', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary },
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
    <ul class="nav-list">
      <li
        v-for="item in navItems"
        :key="item.routeName"
        :class="{ actived: $route.name === item.routeName }"
        @click="navigateTo(item.routePath)"
      >
        <Icon size="22" :name="item.icon" />
        <span>{{ item.name }} </span>
      </li>
    </ul>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  border-right: 1px solid var(--border-primary-color);

  &:deep(.v-navigation-drawer__content) {
    background-color: var(--bg-secondary-color);
    border-right: 1px solid var(--border-primary-color);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 10px;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 100%;
      height: 32px;
      line-height: 32px;
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
}
</style>
