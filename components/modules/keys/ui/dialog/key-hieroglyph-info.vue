<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'

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
const hieroglyphEl = ref<HTMLElement>()

const haoticLinesProps = computed(() => ({
  width: hieroglyphEl.value?.offsetWidth || 0,
  height: hieroglyphEl.value?.offsetHeight || 0,
}))

function onOpenWiki() {
  window.open(`https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D1%87_${props.hieroglyph?.index}`, '_blank')
}
function onAddToFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>

<template>
  <ClientOnly>
    <VDialog
      v-model="dialog"
      class="dialog"
      persistent
    >
      <div class="dialog-wrapper">
        <div class="content">
          <div ref="hieroglyphEl" class="hieroglyph">
            <HaoticLines
              :width="haoticLinesProps.width"
              :height="haoticLinesProps.height"
            />
            <div class="hieroglyph-glyph">
              {{ data.hieroglyph }}
            </div>
          </div>
          <div class="control">
            <div class="control-hr" />
            <div class="control-items">
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
          <p class="info">
            {{ data.info }}
          </p>
          <p class="description">
            {{ data.description }}
          </p>
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
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dialog {
  max-width: 800px;

  &-wrapper {
    display: flex;
    flex-direction: column;

    padding: 16px;

    position: relative;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);

    border-radius: 24px;
    width: 100%;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 12px;

      .hieroglyph {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;

        &-glyph {
          display: inline-flex;
          font-size: 8rem;
          background-color: var(--bg-tertiary-color);
          border: 1px solid var(--border-secondary-color);
          border-radius: 8px;
          padding: 16px;
          line-height: 132px;
          z-index: 6;
          box-shadow: 0 0 10px var(--bg-overlay-primary-color);
        }
      }

      .control {
        position: relative;

        &-items {
          position: relative;
          display: flex;
          justify-content: center;
          z-index: 4;
          gap: 32px;
        }

        &-item {
          color: var(--fg-tertiary-color);
          background-color: var(--bg-secondary-color);
          cursor: pointer;
          height: 100%;

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

        &-hr {
          position: absolute;
          width: 100%;
          height: 1px;
          border: 1px dashed var(--border-primary-color);
          top: 50%;
          z-index: 3;
        }
      }

      .description {
        max-height: 350px;
        overflow: scroll;
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
