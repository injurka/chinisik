<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import SettingsControl from './dialog/settings-control.vue'

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

const sentinelEl = ref<HTMLElement>()
const headerEl = ref<HTMLElement>()
const isDialogSettings = ref<boolean>(false)
const isDrawer = defineModel<boolean>('drawer', { required: true })
const isSticky = ref<boolean>(false)
const store = useStore(['auth'])

function handleProfile() {
  navigateTo(RoutePaths.Auth.SignIn)
}

onMounted(() => {
  if (sentinelEl.value) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isSticky.value = entry.isIntersecting
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    )

    observer.observe(sentinelEl.value)

    onBeforeUnmount(() => {
      observer.disconnect()
    })
  }
})
</script>

<template>
  <div ref="sentinelEl" class="sentinel" />
  <header
    ref="headerEl"
    class="header"
    :class="{ blurred: !isSticky }"
  >
    <ClientOnly>
      <HaoticLines :viewport-el="headerEl" />
    </ClientOnly>

    <div class="header-content">
      <div class="header-nav">
        <div class="logo">
          <Icon class="logo-icon" name="game-icons:sea-dragon" size="24" />
          <span v-if="!$vuetify.display.mobile" class="logo-title"> Chinisik </span>
        </div>
        <template v-if="!$vuetify.display.mobile">
          <div class="vr">
            //
          </div>
          <nav>
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
          </nav>
        </template>
        <template v-else>
          <VBtn
            icon="mdi-menu"
            variant="text"
            @click="isDrawer = !isDrawer"
          />
        </template>
      </div>

      <div class="header-utils">
        <button
          class="utils-settings-btn"
          @click="isDialogSettings = !isDialogSettings"
        >
          <Icon name="line-md:cog-loop" size="24" />
        </button>
        <SettingsControl v-model="isDialogSettings" />

        <div class="vr" />

        <div class="profile" @click="handleProfile">
          <NuxtImg
            v-if="!!store.auth.user"
            class="profile-img"
            width="38"
            height="38"
            placeholder="/images/profile-placeholder.png"
            src="/images/profile-placeholder.png"
          />
          <div v-else class="profile-img">
            <Icon
              size="28"
              name="mdi:face-man-profile"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.sentinel {
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  border-bottom: 1px solid var(--border-primary-color);
  height: #{$header-height};
  background-color: rgb(var(--bg-header-color));
  width: 100%;
  overflow: hidden;
  z-index: 100;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;

  &.blurred {
    background-color: rgba(var(--bg-header-color), 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  &-content {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    z-index: 6;
    font-family: 'Rubik';
    padding: 0 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-nav {
    .logo {
      display: inline-flex;
      margin: 0 8px;

      &-title {
        margin-left: 8px;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
      padding: 0 10px;

      li {
        list-style: none;
        text-decoration: none;

        span {
          margin-right: 4px;
        }
      }
    }

    .link {
      color: var(--fg-primary-color);
      cursor: pointer;
      border-radius: 6px;

      transition: all 0.2s ease-in-out;
      padding: 2px 8px;
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

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;

    &-img {
      border-radius: 50%;
      border: 2px solid var(--border-primary-color);
      overflow: hidden;
      cursor: pointer;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;

      transition: border 0.2s ease-in-out;
      &:hover {
        border: 2px solid var(--border-accent-color);
      }
    }
  }
}

.vr {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  letter-spacing: normal;
  font-weight: 400;
  color: var(--fg-muted-color);
}

.utils-settings {
  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }

  &-content {
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 100%;
    padding: 8px;

    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 8px;

    button {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      height: 48px;
      border-bottom: 1px solid var(--border-secondary-color);

      svg {
        min-width: 24px;
      }

      &:last-child {
        border: none;
      }

      .hieroglyph-variant {
        position: absolute;
        bottom: 0px;
        right: 0px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--bg-secondary-color);
        border: 1px solid var(--fg-primary-color);
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.095em;
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
    }
  }
}
</style>
