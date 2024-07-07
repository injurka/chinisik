<script lang="ts" setup>
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
const iconTheme = computed(() => icons[theme.value as keyof typeof icons])

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
  <header class="header">
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
.logo {
  margin-right: 8px;
}

.header {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-border);
  height: #{$header-height};
  background-color: var(--color-background-content);
  width: 100%;

  > nav {
    max-width: 1200px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
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
