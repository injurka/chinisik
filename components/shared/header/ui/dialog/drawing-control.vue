<script lang="ts" setup>
import { DialogWithClose } from '~/components/shared/dialog-with-close'
import { HanziDrawingBoard } from '~/components/shared/hanzi-drawing-board'

const isDialog = defineModel<boolean>({ required: true })

const drawingBoardRef = ref<InstanceType<typeof HanziDrawingBoard> | null>(null)

function clearDrawing() {
  drawingBoardRef.value?.clearCanvas()
}
</script>

<template>
  <DialogWithClose
    v-model="isDialog"
    class="dialog-settings"
  >
    <div class="dialog-settings-wrapper">
      <span class="title">Рисовалка</span>

      <HanziDrawingBoard
        ref="drawingBoardRef"
        class="board"
      />

      <VBtn
        color="var(--fg-accent-color)"
        variant="text"
        class="clear-btn"
        rounded
        @click="clearDrawing"
      >
        Очистить
      </VBtn>
    </div>
  </DialogWithClose>
</template>

<style lang="scss" scoped>
.dialog-settings {
  .clear-btn {
    margin-top: 12px;
    width: 100%;
    text-transform: none;
    letter-spacing: 0;
    color: var(--fg-primary-color);

    @include mobile() {
      margin-top: 4px;
    }
  }

  .board {
    width: 100%;
  }

  .title {
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--border-secondary-color);
    width: 90%;
    text-align: center;
    padding-bottom: 4px;
    color: var(--fg-primary-color);
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 16px 32px;

    @include mobile() {
      padding: 8px;
    }
  }
}
</style>
