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
    <nav>
      <div>
        <ul>
          <li>
            <Icon class="logo" name="game-icons:sea-dragon" />
            Chinisik
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <ClientOnly>
              <button @click="toggleTheme">
                <Icon :key="iconTheme" :name="iconTheme" size="24" />
              </button>
            </ClientOnly>
          </li>
        </ul>
      </div>
    </nav>
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

  > nav {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    z-index: 6;
    font-family: 'Rubik';

    .logo {
      margin-right: 8px;
    }
  }

  ul {
    width: 100%;
    height: 100%;

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

    span {
      margin-right: 4px;
    }
  }
}
</style>
