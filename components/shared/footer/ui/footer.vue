<script lang="ts" setup>

</script>

<template>
  <VFooter class="footer">
    <div class="footer-content">
      <span class="copyright">© 2025 Chinisik</span>
      <VSpacer />

      <div class="links">
        <a href="/about" target="_blank" rel="noopener noreferrer">
          <VIcon
            size="small"
            color="var(--fg-primary-color)"
          >mdi-information-variant</VIcon>
        </a>

        <a href="https://github.com/injurka/chinisik" target="_blank" rel="noopener noreferrer">
          <VIcon
            size="small"
            color="var(--fg-primary-color)"
          >mdi-github</VIcon>
        </a>
      </div>
    </div>
  </VFooter>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-secondary-color);
  border-top: 1px solid var(--border-secondary-color);
  display: flex;
  justify-content: center;

  .copyright {
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .links {
    display: flex;
    gap: 8px;
  }

  &-content {
    display: flex;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    color: var(--fg-primary-color);
  }
}
</style>
