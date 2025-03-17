<script lang="ts" setup>
import type { PersonalNavItem } from '../models'
import { HeaderMenuDrawer } from '~/components/shared/header-menu-drawer'
import { PersonalNavItemType } from '../models'

interface RouteParams {
  pwd: string[]
  vault: string
}

const props = defineProps<Props>()

interface Props {
  params: RouteParams
  navItems: PersonalNavItem[]
}

const isMenuDrawer = defineModel<boolean>({ required: true })
const contentType = ref<string>('slot')
const navigationHistory = ref<string[][]>([])

const isFileRoute = computed(() => {
  if (!props.navItems || !props.params.pwd.length) {
    return false
  }

  let level = props.navItems
  let currentItem: PersonalNavItem | undefined

  for (const segment of props.params.pwd) {
    currentItem = level.find(item => item.sysname === segment)

    if (!currentItem) {
      return false
    }

    if (currentItem.type === PersonalNavItemType.File) {
      return true
    }

    if (currentItem.type === PersonalNavItemType.Directory && currentItem.children) {
      level = currentItem.children
    }
    else {
      return false
    }
  }
  return false
})

const currentPath = computed(() => {
  return isFileRoute.value
    ? props.params.pwd.slice(0, -1)
    : props.params.pwd
})

function navigateToItem(item: PersonalNavItem) {
  if (item.type === PersonalNavItemType.Directory) {
    navigationHistory.value.push([...currentPath.value])
    const newPath = [...currentPath.value, item.sysname].join('/')

    navigateTo(RoutePaths.Personal.Vault(props.params.vault, newPath))
  }
  else if (item.type === PersonalNavItemType.File) {
    const newPath = [...currentPath.value, item.sysname].join('/')
    navigateTo(RoutePaths.Personal.Vault(props.params.vault, newPath))
  }
}

function navigateBack() {
  if (navigationHistory.value.length > 0) {
    const previousPath = navigationHistory.value.pop() || []
    const pathString = previousPath.join('/')

    navigateTo(RoutePaths.Personal.Vault(props.params.vault, pathString))
  }
  else if (currentPath.value.length > 0) {
    const parentPath = currentPath.value.slice(0, -1)
    const pathString = parentPath.join('/')

    navigateTo(RoutePaths.Personal.Vault(props.params.vault, pathString))
  }
}

const currentNavLevel = ref<PersonalNavItem[]>([])

function updateCurrentNavLevel() {
  if (!props.navItems) {
    currentNavLevel.value = []
    return
  }

  let level = props.navItems

  if (currentPath.value.length === 0) {
    currentNavLevel.value = level
    return
  }

  for (const segment of currentPath.value) {
    const currentItem = level.find(item => item.sysname === segment)

    if (!currentItem || currentItem.type !== PersonalNavItemType.Directory || !currentItem.children) {
      currentNavLevel.value = []
      return
    }

    level = currentItem.children
  }

  currentNavLevel.value = level
}

watch(
  () => [props.params, props.navItems],
  () => {
    nextTick(() => updateCurrentNavLevel())
  },
  { immediate: true, deep: true },
)

watch(
  () => isMenuDrawer.value,
  (value) => {
    if (value)
      contentType.value = 'slot'
  },
)
</script>

<template>
  <HeaderMenuDrawer
    v-model="isMenuDrawer"
    v-model:content-type="contentType"
    class="drawer"
    :can-go-back="currentPath.length > 0"
    @go-back="navigateBack"
  >
    <template #default>
      <div>
        <div v-if="currentPath.length > 0" class="nav-header">
          <button class="back-button" @click="navigateBack">
            <div class="back-button-title">
              . . .
            </div>
          </button>
        </div>

        <ul class="nav-list">
          <li
            v-for="item in currentNavLevel"
            :key="`${item.sysname}_${item.type}`"
            v-ripple
            :class="[
              {
                actived: params.pwd.includes(item.sysname),
              },
              item.type,
            ]"
            @click="navigateToItem(item)"
          >
            <template v-if="item.type === PersonalNavItemType.Directory">
              <Icon
                name="mdi:folder-outline"
                size="18"
                class="item-icon"
              />
              <span>{{ item.title }}</span>
            </template>

            <span v-else>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </template>
  </HeaderMenuDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  &:deep(.v-navigation-drawer__content) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary-color);
    border-right: 1px solid var(--border-primary-color);
  }

  .nav-header {
    display: flex;
    flex-direction: column;
    padding: 8px 10px;

    .back-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 4px 8px;
      cursor: pointer;
      border-radius: 6px;

      &:hover {
        background-color: var(--bg-tertiary-color);
      }

      &-title {
        font-weight: 500;
        color: var(--fg-accent-color);
        font-size: 1.5rem;
        line-height: 32px;
        text-align: center;

        &:hover {
          color: var(--fg-action-color);
        }
      }
    }
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    padding: 4px;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      text-decoration: none;
      width: 100%;
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      font-size: 0.9rem;
      line-height: normal;

      .item-icon {
        min-width: 22px;
      }

      > span {
        padding: 8px;
      }

      .chevron-icon {
        margin-left: auto;
        opacity: 0.7;
      }

      &:hover {
        color: var(--fg-action-color);
        background-color: var(--bg-tertiary-color);
        box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      }

      &.actived {
        color: var(--fg-accent-color);
      }

      &.directory {
        color: var(--fg-secondary-color);
        > span {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
