<script lang="ts" setup>
interface Props {
  sysname: string
  glyph: string
  name: string
  navigateUrl: string
  variant?: 'catalog' | 'section'
}

withDefaults(defineProps<Props>(), {
  variant: 'catalog',
})
</script>

<template>
  <div
    class="card"
    :class="`card--${variant}`"
    @click="navigateTo(navigateUrl)"
  >
    <div class="card-content">
      <div class="glyph">
        {{ glyph }}
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: radial-gradient(circle at 10% 20%, var(--bg-secondary-color), var(--bg-overlay-primary-color) 90%);
  border-radius: 8px;
  border: 1px solid var(--border-secondary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: var(--border-accent-color);
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .glyph {
      color: var(--fg-accent-color);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    border-radius: inherit;
    gap: 12px;
    background-color: transparent;

    .glyph {
      @include default-font();
      color: var(--fg-secondary-color);
      font-family: var(--font-family-cn);
      line-height: 1.2;
      transition: color 0.2s ease-in-out;
    }

    .name {
      @include default-font();
      font-weight: 500;
      color: var(--fg-primary-color);
    }
  }

  // Стили для карточек в каталоге (вертикальные, крупные)
  &--catalog {
    .card-content {
      flex-direction: column;
      justify-content: center;
      padding: 24px 16px;
      gap: 12px;
    }

    .glyph {
      font-size: 2.5rem;
    }

    .name {
      font-size: 0.95rem;
      text-align: center;
    }
  }

  // Стили для карточек в секциях (горизонтальные, компактные)
  &--section {
    .card-content {
      flex-direction: row;
      padding: 12px 16px;
      gap: 16px;
    }

    .glyph {
      font-size: 1.8rem;
    }

    .name {
      font-size: 0.9rem;
      text-align: left;
    }
  }
}
</style>
