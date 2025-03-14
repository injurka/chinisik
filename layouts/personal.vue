<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { BackgroundEffects } from '~/components/shared/background-effects'
import { Footer } from '~/components/shared/footer'
import { Header } from '~/components/shared/header'
import { HeaderMenuDrawer } from '~/components/shared/header-menu-drawer'
import { HeaderProfileDrawer } from '~/components/shared/header-profile-drawer'

enum NavItemType {
  File = 'file',
  Directory = 'directory',
}

interface NavItem {
  sysname: string
  title: string
  type: NavItemType
  children?: NavItem[]
}

interface RouteParams {
  pwd: string[]
  vault: string
}

const router = useRouter()
const store = useStore(['auth'])
const { isMobile } = useDevice()

const params = computed<RouteParams>(() => {
  const routeParams = router.currentRoute.value.params

  return {
    vault: routeParams.vault as string,
    pwd: Array.isArray(routeParams.pwd)
      ? routeParams.pwd
      : [routeParams.pwd as string].filter(Boolean),
  }
})

const { data: navData } = await useAsyncData<NavItem[]>(`personal-${params.value.vault}`, async () => {
  const { staticBaseUrl } = useRuntimeConfig().public

  return await $fetch<NavItem[]>(
    cleanDoubleSlashes(`${staticBaseUrl}/static/personal/${params.value.vault}/nav.json`),
    { method: 'get', responseType: 'json' },
  )
})

const contentType = ref<string>('slot')
const isMenuDrawer = ref<boolean>(false)
const isProfileDrawer = ref<boolean>(false)

const navigationHistory = ref<string[][]>([])
const currentNavLevel = ref<NavItem[]>([])

const isFileRoute = computed(() => {
  if (!navData.value || !params.value.pwd.length) {
    return false
  }

  let level = navData.value
  let currentItem: NavItem | undefined

  for (const segment of params.value.pwd) {
    currentItem = level.find(item => item.sysname === segment)

    if (!currentItem) {
      return false
    }

    if (currentItem.type === NavItemType.File) {
      return true
    }

    if (currentItem.type === NavItemType.Directory && currentItem.children) {
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
    ? params.value.pwd.slice(0, -1)
    : params.value.pwd
})

function updateCurrentNavLevel() {
  if (!navData.value) {
    currentNavLevel.value = []
    return
  }

  let level = navData.value

  if (currentPath.value.length === 0) {
    currentNavLevel.value = level
    return
  }

  for (const segment of currentPath.value) {
    const currentItem = level.find(item => item.sysname === segment)

    if (!currentItem || currentItem.type !== NavItemType.Directory || !currentItem.children) {
      currentNavLevel.value = []
      return
    }

    level = currentItem.children
  }

  currentNavLevel.value = level
}

function navigateToItem(item: NavItem) {
  if (item.type === NavItemType.Directory) {
    navigationHistory.value.push([...currentPath.value])
    const newPath = [...currentPath.value, item.sysname].join('/')

    navigateTo(RoutePaths.Personal.Vault(params.value.vault, newPath))
  }
  else if (item.type === NavItemType.File) {
    const newPath = [...currentPath.value, item.sysname].join('/')

    isMenuDrawer.value = false
    navigateTo(RoutePaths.Personal.Vault(params.value.vault, newPath))
  }
}

function navigateBack() {
  if (navigationHistory.value.length > 0) {
    const previousPath = navigationHistory.value.pop() || []
    const pathString = previousPath.join('/')

    navigateTo(RoutePaths.Personal.Vault(params.value.vault, pathString))
  }
  else if (currentPath.value.length > 0) {
    const parentPath = currentPath.value.slice(0, -1)
    const pathString = parentPath.join('/')

    navigateTo(RoutePaths.Personal.Vault(params.value.vault, pathString))
  }
}

watch(
  () => [params.value, navData.value],
  () => {
    nextTick(() => updateCurrentNavLevel())
  },
  { immediate: true, deep: true },
)

watch(
  () => isMenuDrawer.value,
  (value) => {
    if (value) {
      contentType.value = 'slot'
    }
  },
)
</script>

<template>
  <Header
    v-model:menu-drawer="isMenuDrawer"
    v-model:profile-drawer="isProfileDrawer"
  />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <VLayout>
    <ClientOnly>
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
                  Назад
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
                @click.stop="navigateToItem(item)"
              >
                <template v-if="item.type === NavItemType.Directory">
                  <Icon
                    name="mdi:folder-outline"
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
        font-size: 0.9rem;

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

      .item-icon {
        min-width: 22px;
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
        font-weight: 500;
      }
    }
  }
}
</style>
