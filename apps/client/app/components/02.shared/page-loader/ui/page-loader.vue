<script lang="ts" setup>

</script>

<template>
  <div class="loader">
    <Icon name="mdi:loading" class="spin" />
  </div>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
  font-size: 4rem;
  color: var(--fg-accent-color);
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
