<script lang="ts" setup>
interface Props {
  sysname: string
  glyph: string
  name: string
  navigateUrl: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div
      class="card-content"
      @click="navigateTo(navigateUrl)"
    >
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
  --tw-gradient-from: var(--bg-overlay-primary-color);
  --tw-gradient-to: var(--bg-secondary-color);
  --tw-gradient-via-position: 50%;
  --tw-gradient-to-position: 100%;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) var(--tw-gradient-via-position),
    var(--tw-gradient-to) var(--tw-gradient-to-position);
  background: linear-gradient(to right, var(--tw-gradient-stops));

  border-radius: 6px;
  border: 1px solid var(--border-secondary-color);
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid var(--border-accent-color);
    .glyph {
      color: var(--fg-accent-color);
    }
  }

  &-content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    border-radius: inherit;
    cursor: pointer;

    .glyph {
      @include default-font();
      flex-shrink: 0;
      width: 10%;
      text-align: center;
      font-weight: 400;
      border-radius: 5px;
      font-size: 1.2rem;
      color: var(--fg-secondary-color);
      font-family: var(--font-family-cn);
      line-height: normal;
    }

    .name {
      @include default-font();
      font-weight: 500;
      font-size: 0.9rem;
      width: 90%;
      text-align: center;
    }
  }
}
</style>
