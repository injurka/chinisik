<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'

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

const headerEl = ref<HTMLElement>()

const iconTheme = computed(() => icons[theme.value as keyof typeof icons])
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
        <div>
          <Icon class="logo" name="game-icons:sea-dragon" />
          Chinisik
        </div>
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
            <Icon :key="iconTheme" :name="iconTheme" size="24" />
          </ClientOnly>
        </button>
        <button>
          <ClientOnly>
            <Icon name="line-md:cog-loop" size="24" />
          </ClientOnly>
        </button>
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
      margin-right: 8px;
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
</style>
