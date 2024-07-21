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

const headerEl = ref<HTMLElement>()

const themeIcon = computed(() => icons[theme.value as keyof typeof icons])
const haoticLinesProps = computed(() => ({
  width: headerEl.value?.offsetWidth || 0,
  height: headerEl.value?.offsetHeight || 0,
}))

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
      <HaoticLines
        :width="haoticLinesProps.width"
        :height="haoticLinesProps.height"
      />
    </ClientOnly>
    <div class="header-content">
      <div class="header-nav">
        <div class="logo">
          <Icon class="logo-icon" name="game-icons:sea-dragon" size="24" />
          <span> Chinisik </span>
        </div>
        <div class="vr" />
        <nav>
          <ul>
            <li>
              <NuxtLink :to="RoutePaths.Keys" class="link">
                Ключи
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="RoutePaths.Pinyin" class="link">
                Пиньин
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-utils">
        <button @click="toggleTheme">
          <ClientOnly>
            <Icon :key="themeIcon" :name="themeIcon" size="24" />
            <VTooltip
              activator="parent"
              location="bottom"
            >
              Цветовое оформление приложения
            </VTooltip>
          </ClientOnly>
        </button>
        <button @click="toggleHieroglyphVariant">
          <ClientOnly>
            <Icon name="line-md:clipboard" size="24" />
            <div class="hieroglyph-variant">
              {{ store.hieroglyphWord.variant }}
            </div>
            <VTooltip
              activator="parent"
              location="bottom"
            >
              Стиль отображения иероглифа, всего имеется 5 стилей (0-5)
            </VTooltip>
          </ClientOnly>
        </button>
        <button @click="toggleColorPinyin">
          <ClientOnly>
            <Icon :key="colorPinyinIcon" :name="colorPinyinIcon" size="24" />
            <VTooltip
              activator="parent"
              location="bottom"
            >
              Цветное отображения тона
            </VTooltip>
          </ClientOnly>
        </button>
        <button>
          <ClientOnly>
            <Icon name="line-md:cog-loop" size="24" />
            <VTooltip
              activator="parent"
              location="bottom"
            >
              Настройки
            </VTooltip>
          </ClientOnly>
        </button>
        <div class="vr" />
        <div class="profile">
          <NuxtImg
            class="profile-img"
            width="38"
            height="38"
            placeholder="/images/profile-placeholder.png"
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
      &-icon {
        margin-right: 8px;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;

      margin: 0;
      padding: 0 10px;
    }

    li {
      position: relative;

      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .link {
        text-decoration: none;
        color: var(--fg-primary-color);

        transition: color 0.2s ease-in-out;
        &:hover {
          color: var(--fg-accent-color);
        }
      }

      span {
        margin-right: 4px;
      }
    }
  }

  &-utils {
    display: flex;
    gap: 16px;

    button {
      position: relative;

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

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;

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
  border: none;
  border-left: 2px solid var(--border-secondary-color);
  height: 50%;
  width: 1px;
  margin: 0 auto;
}
</style>
