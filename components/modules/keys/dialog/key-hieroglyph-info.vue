<script lang="ts" setup>
interface Props {
  hieroglyph?: HieroglyphKey
}
const props = defineProps<Props>()

const data = computed(() => ({
  hieroglyph: props?.hieroglyph?.glyph,
  info: 'Ключ 120 (трад. 糸 упр. 糹,纟) — ключ Канси со значением «шёлк»; один из 29-и, состоящих из 6-и черт.',
  description: 'Изначально словарь состоял из 540 идеограмм, но впоследствии был отредактирован и уменьшен (путем исправления ошибок и упразднения ненужных ключей) до классического ныне существующего списка в 214 иероглифических ключа[1], среди которых идеограмма 糸 в переводе с кит. — «шёлк» отображала выделяемую нить гусеницей тутового шелкопряда. В современном варианте ключ имеет значения, аналогичные древним изображениям и имеют отношение к шёлку, нитям и веревкам. Это часто употребляемый иероглиф и он имеет упрощённые встраиваемые варианты: 糹и 纟.',
}))
const isFavorite = ref<boolean>(false)

const dialog = defineModel<boolean>()

function onOpenWiki() {
  window.open(`https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D1%87_${props.hieroglyph?.index}`, '_blank')
}
function onAddToFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>

<template>
  <VDialog
    v-model="dialog"
    class="dialog"
    persistent
  >
    <div class="dialog-wrapper">
      <div class="content">
        <div cl ass="hieroglyph-section">
          <div class="hieroglyph-section-preview">
            {{ data.hieroglyph }}
          </div>
        </div>
        <div class="hr-dashed">
          <div class="hieroglyph-section-control">
            <div class="control-item" @click="onAddToFavorite">
              <VTooltip
                activator="parent"
                location="top"
              >
                Добавить в избранное
              </VTooltip>
              <Icon v-if="!isFavorite" size="24" name="line-md:star-alt-twotone" />
              <Icon v-else size="24" name="line-md:star-alt-filled" :class="{ isFavorite }" />
            </div>
            <div class="control-item" @click="onOpenWiki">
              <VTooltip
                activator="parent"
                location="top"
              >
                Ссылка на wikipedia
              </VTooltip>
              <Icon size="24" name="mdi:wikipedia" />
            </div>
          </div>
        </div>
        <p class="info-section">
          {{ data.info }}
        </p>
      </div>
      <div class="description-title">
        <span class="description-title-text">История</span>
        <div class="description-title-hr" />
      </div>
      <div class="description">
        {{ data.description }}
      </div>
    </div>

    <VBtn
      icon
      variant="text"
      class="close"
      @click="dialog = false"
    >
      <Icon size="24" name="line-md:close-small" />
    </VBtn>
  </VDialog>
</template>

<style lang="scss" scoped>
.dialog {
  height: 400px;
  max-width: 800px;

  &-wrapper {
    display: flex;
    flex-direction: column;

    padding: 16px;

    position: relative;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-dark-color);
    border: 1px solid var(--border-primary-color);

    border-radius: 24px;
    width: 100%;

    .content {
      display: flex;
      flex-direction: row;
      gap: 24px;

      .hr-dashed {
        position: relative;
        flex-grow: 1;
        border: 1px dashed var(--border-primary-color);
      }

      .hieroglyph-section {
        display: flex;
        flex-direction: column;
        gap: 8px;

        height: 100%;

        &-preview {
          display: inline-flex;
          font-size: 8rem;
          background-color: var(--bg-tertiary-color);
          border: 1px solid var(--border-secondary-color);
          border-radius: 8px;
          padding: 16px;
          line-height: 132px;
        }

        &-control {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          gap: 4px;
          position: absolute;
          padding: 10px 0;
          top: 0px;
          left: -12px;

          .control-item {
            color: var(--fg-tertiary-color);
            background-color: var(--bg-secondary-color);
            cursor: pointer;

            > svg {
              transition: all 0.1s ease-in-out;

              &:hover {
                transform: scale(1.5);
                color: var(--fg-secondary-color);
              }

              &.isFavorite {
                color: rgb(209, 136, 27);
              }
            }
          }
        }
      }
    }

    .description-title {
      position: relative;
      width: 100%;
      margin-top: 16px;
      margin-bottom: 8px;
      display: flex;
      flex-direction: row-reverse;

      &-text {
        position: relative;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        margin: 0 20px;
        background-color: var(--bg-secondary-color);
        z-index: 2;
        padding: 0 8px;
      }
      &-hr {
        height: 2px;
        width: 100%;
        background: var(--border-secondary-color);
        left: 0;
        top: 55%;
        position: absolute;
        z-index: 1;
      }
    }
  }

  .close {
    position: absolute;
    right: -8px;
    top: -8px;
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
