<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'

interface Props {
  src: string
}

defineProps<Props>()

const dialog = defineModel<boolean>()

const contentEl = ref<HTMLElement>()
</script>

<template>
  <div
    v-if="dialog"
    ref="contentEl"
    class="iframe-viewer"
  >
    <div class="content">
      <iframe :src.prop="src" />

      <VBtn
        icon
        variant="text"
        class="close"
        @click="dialog = false"
      >
        <Icon size="24" name="mdi:close" />
      </VBtn>
    </div>

    <HaoticLines
      v-if="dialog"
      :speed="2"
      :weight-stroke="100"
      :points-counts="20"
      :cap="false"
      :viewport-el="contentEl"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.haotic-line) {
  filter: blur(100px);
}

.iframe-viewer {
  z-index: 3000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;

  .content {
    z-index: 3001;
    position: relative;
    height: calc(100% - 14px);
    width: calc(100% - 14px);
    max-width: 1400px;
    margin: 7px;

    iframe {
      border-radius: 16px;
      box-shadow: 0 0 5px var(--bg-overlay-primary-color);
      border: 3px solid var(--border-accent-color);
      width: 100%;
      height: 100%;
      border-radius: 16px;
      overflow: hidden;
      background-color: var(--bg-tertiary-color);
    }

    .close {
      position: absolute;
      right: -6px;
      top: -6px;
      width: 32px;
      height: 32px;
      background-color: var(--bg-tertiary-color);
      border: 2px solid var(--border-accent-color);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
