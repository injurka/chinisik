<script lang="ts" setup>
interface Props {
  id: string
}
defineProps<Props>()

const dialog = defineModel<boolean>()
</script>

<template>
  <v-dialog
    v-model="dialog"
    class="dialog"
    persistent
  >
    <div class="dialog-wrapper">
      <div class="content">
        <div class="hieroglyph">
          长
        </div>
        <div class="hr-dash" />
        <p>
          Ключ 168 (трад. 長, упр. 长) — ключ Канси со значением «длинный»; один из девяти, состоящих из восьми штрихов.

          В словаре Канси есть 55 символов (из 49 030), которые можно найти c этим радикалом.
        </p>
      </div>

      <v-btn
        icon
        variant="text"
        class="close"
        @click="dialog = false"
      >
        <Icon size="24" name="line-md:close-small" />
      </v-btn>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
:deep(.v-overlay__content) {
  width: 100%;
  height: 100%;
}

.dialog {
  height: 400px;
  max-width: 800px;

  &-wrapper {
    padding: 24px;

    position: relative;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-dark-color);
    border: 1px solid var(--border-primary-color);

    border-radius: 24px;
    height: 100%;
    width: 100%;

    .content {
      display: flex;
      flex-direction: row;
      gap: 24px;

      .nice {
        position: relative;
        width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hr-dash {
        flex-grow: 1;
        border: 1px dashed var(--border-primary-color);
      }

      .hieroglyph {
        display: inline-flex;
        font-size: 8rem;
        background-color: var(--bg-tertiary-color);
        border: 1px solid var(--border-secondary-color);
        padding: 16px;
        border-radius: 8px;
        line-height: 132px;
      }
    }
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 32px;
    height: 32px;
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
