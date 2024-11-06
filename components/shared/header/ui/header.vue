<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import type { HieroglyphWordVariant } from '~/components/domain/hieroglyph-word'

enum ThemesVariant {
  Light = 'light',
  Dark = 'dark',
  Rainy = 'rainy',
}

const icons: Record<ThemesVariant, string> = {
  [ThemesVariant.Light]: 'line-md:sunny-outline-twotone',
  [ThemesVariant.Dark]: 'line-md:moon-alt-loop',
  [ThemesVariant.Rainy]: 'line-md:cloud-twotone',
}

const theme = useColorMode()
const store = useStore(['hieroglyphWord', 'pinyinText'])
const { isMobile } = useDevice()
const { fontCn, toggleFontCnFamily } = useChangeFontCn()

const headerEl = ref<HTMLElement>()

const themeIcon = computed(() => icons[theme.value as keyof typeof icons])

function toggleTheme() {
  switch (theme.value) {
    case ThemesVariant.Light:
      theme.preference = ThemesVariant.Dark
      break

    case ThemesVariant.Dark:
      theme.preference = ThemesVariant.Rainy
      break

    case ThemesVariant.Rainy:
      theme.preference = ThemesVariant.Light
      break
  }
}

const colorPinyinIcon = computed(() => `line-md:paint-drop${store.pinyinText.isColored ? '-twotone' : ''}`)
function toggleColorPinyin() {
  store.pinyinText.setIsColored(!store.pinyinText.isColored)
}

function toggleHieroglyphVariant() {
  let newVariant = ++store.hieroglyphWord.variant

  if (newVariant > 4) {
    newVariant = 0
  }

  store.hieroglyphWord.variant = newVariant as HieroglyphWordVariant
}
</script>

<template>
  <header ref="headerEl" class="header">
    <ClientOnly>
      <HaoticLines :viewport-el="headerEl" />
    </ClientOnly>
    <div class="header-content">
      <div class="header-nav">
        <div class="logo">
          <Icon class="logo-icon" name="game-icons:sea-dragon" size="24" />
          <span v-if="!isMobile" class="logo-title"> Chinisik </span>
        </div>
        <div class="vr">
          //
        </div>
        <nav>
          <ul>
            <li
              class="link"
              :class="{ actived: $route.name === RouteNames.Keys }"
              @click="navigateTo(RoutePaths.Keys)"
            >
              Ключи
            </li>
            <li
              class="link"
              :class="{ actived: $route.name === RouteNames.Pinyin }"
              @click="navigateTo(RoutePaths.Pinyin)"
            >
              Пиньин
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-utils">
        <VMenu offset="18" :close-on-content-click="false">
          <template #activator="{ props }">
            <button class="utils-settings-btn">
              <Icon name="line-md:cog-loop" size="24" v-bind="props" />
            </button>
          </template>

          <div class="utils-settings-content">
            <ClientOnly>
              <button @click="toggleTheme">
                <Icon :key="themeIcon" :name="themeIcon" size="24" />
                <span>Цветовое оформление</span>
              </button>
              <button @click="toggleHieroglyphVariant">
                <Icon name="line-md:clipboard" size="24" />
                <!-- <div class="hieroglyph-variant">
                  {{ store.hieroglyphWord.variant }}
                </div> -->
                <span>Стиль отображения иероглифа</span>
              </button>
              <button @click="toggleColorPinyin">
                <Icon :key="colorPinyinIcon" :name="colorPinyinIcon" size="24" />
                <span>Цветное отображения тона</span>
              </button>
              <button @click="toggleFontCnFamily">
                <Icon name="material-symbols:draw" size="24" />
                <span v-if="fontCn === 'base'">Прописные иероглифы</span>
                <span v-else>Печатные иероглифы</span>
              </button>
            </ClientOnly>
          </div>
        </VMenu>

        <div class="vr" />

        <div class="profile">
          <NuxtImg
            class="profile-img"
            width="38"
            height="38"
            placeholder="/images/profile-placeholder.png"
            src="/images/profile-placeholder.png"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  border-bottom: 1px solid var(--border-primary-color);
  height: #{$header-height};
  background-color: var(--bg-secondary-color);
  width: 100%;
  overflow: hidden;

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

      margin: 0;
      padding: 0 10px;
    }

    li {
      list-style: none;
      text-decoration: none;
      span {
        margin-right: 4px;
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
