<script lang="ts" setup>
const isDrawer = defineModel<boolean>({ required: true })

interface NavItem {
  name: string
  routeName: string
  routePath: string
}

const navItems: NavItem[] = [
  { name: 'Ключи', routeName: RouteNames.Keys, routePath: RoutePaths.Keys },
  { name: 'Пиньин', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin },
  { name: 'Разбор иероглифов', routeName: RouteNames.SplitGlyphs, routePath: RoutePaths.SplitGlyphs },
  { name: 'Глоссарий', routeName: RouteNames.Glossary, routePath: RoutePaths.Glossary },
]
</script>

<template>
  <VNavigationDrawer
    v-if="$vuetify.display.mobile"
    v-model="isDrawer"
    location="left"
    class="drawer"
    temporary
  >
    <ul>
      <li
        v-for="item in navItems"
        :key="item.routeName"
        class="link"
        :class="{ actived: $route.name === item.routeName }"
        @click="navigateTo(item.routePath)"
      >
        {{ item.name }}
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

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 10px;
    margin: 0;
  }

  li {
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
</style>
