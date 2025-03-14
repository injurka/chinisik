<script lang="ts" setup>
const isDrawer = defineModel<boolean>({ required: true })

interface NavItem {
  name: string
  icon: string
  routeName: string
  routePath: string
}

const navItems: NavItem[] = [
  { name: 'Мой профиль', icon: 'material-symbols:frame-person-rounded', routeName: RouteNames.Keys, routePath: RoutePaths.Keys('list') },
  { name: 'Настройки', icon: 'material-symbols:settings-outline', routeName: RouteNames.Pinyin, routePath: RoutePaths.Pinyin },
]

const store = useStore(['auth'])

const { user } = storeToRefs(store.auth)

async function handleLogout() {
  await store.auth.signOut(true)
}
</script>

<template>
  <VNavigationDrawer
    v-model="isDrawer"
    location="right"
    class="drawer"
    width="320"
    temporary
    :touchless="true"
  >
    <div class="profile-header">
      <NuxtImg
        class="profile-header-img"
        width="38"
        height="38"
        placeholder="/images/profile-placeholder.png"
        :src="user?.avatarUrl"
      />
      <div class="profile-header-name">
        {{ user?.name }}
      </div>
      <div class="profile-header-logout" @click="handleLogout">
        <Icon size="20" name="mdi:logout" />
      </div>
      <div class="profile-header-close" @click="isDrawer = !isDrawer">
        <Icon size="20" name="mdi:close" />
      </div>
    </div>

    <hr>

    <div class="nav-list">
      <ul>
        <li
          v-for="item in navItems"
          :key="item.routeName"
          class="link"
          :class="{ actived: $route.name === item.routeName }"
          @click="navigateTo(item.routePath)"
        >
          <Icon class="icon" size="22" :name="item.icon" />
          <span class="label">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  border-right: 1px solid var(--border-primary-color);

  &:deep(.v-navigation-drawer__content) {
    background-color: var(--bg-secondary-color);
    border-right: 1px solid var(--border-primary-color);
    padding: 16px;
  }

  .profile-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    &-name {
      font-size: 0.9rem;
      color: var(--fg-primary-color);
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-img {
      border-radius: 50%;
    }
    &-logout,
    &-close {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      min-height: 30px;
      cursor: pointer;
      border-radius: 6px;
      color: var(--fg-secondary-color);
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }
    }
  }

  .nav-list {
    margin-top: 16px;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 10px 0;
      margin: 0;
    }

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

      .icon {
        color: var(--fg-secondary-color);
      }
      .label {
        color: var(--fg-primary-color);
      }

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
