<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import { IframeViewer } from '~/components/domain/iframe-viewer'
import { PinyinText } from '~/components/domain/pinyin-text'

interface Props {
  hieroglyph?: HieroglyphKey
}
const props = defineProps<Props>()

const isWikiViewing = ref<boolean>(false)

const data = computed(() => ({
  hieroglyph: props.hieroglyph!,
  info: 'Описание для данного ключа не найдено.',
  description: '',
  wiki: `https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D1%87_${props.hieroglyph?.index}`,
}))

const dialog = defineModel<boolean>()
const hieroglyphEl = ref<HTMLElement>()

function onOpenWiki() {
  isWikiViewing.value = !isWikiViewing.value
}
</script>

<template>
  <ClientOnly>
    <VDialog
      v-model="dialog"
      class="dialog"
      persistent
    >
      <v-card class="dialog-content">
        <div ref="hieroglyphEl" class="hieroglyph-container">
          <HaoticLines
            v-if="dialog"
            :viewport-el="hieroglyphEl"
          />
          <div class="hieroglyph-item item">
            <div class="item-pinyin">
              <PinyinText
                :pinyin="data.hieroglyph.pinyin"
                :tone="{
                  index: data.hieroglyph.toneIndex,
                  type: data.hieroglyph.toneType,
                }"
              />
              <div class="pinyin-tran">
                {{ data.hieroglyph.transcription }}
              </div>
            </div>
            <div class="item-hieroglyph">
              {{ data.hieroglyph.glyph }}
            </div>
            <div class="item-translate">
              {{ data.hieroglyph.translate }}
            </div>
          </div>
        </div>
        <div class="control">
          <div class="control-hr" />
          <div class="control-items">
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
      </v-card>

      <VBtn
        icon
        variant="text"
        class="close"
        @click="dialog = false"
      >
        <Icon size="24" name="line-md:close-small" />
      </VBtn>
    </VDialog>

    <IframeViewer v-model="isWikiViewing" :src="data.wiki" />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dialog {
  max-width: 800px;

  &-content {
    position: relative;
    display: flex;
    flex-direction: column;

    padding: 16px;

    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    color: var(--fg-primary-color);

    border-radius: 24px !important;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    .hieroglyph {
      &-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px 0;

        .item {
          overflow: hidden;

          background-color: var(--bg-tertiary-color);
          border: 1px solid var(--border-secondary-color);

          border-radius: 10px;
          padding: 5px;

          aspect-ratio: 1 / 1;
          height: 220px;
          z-index: 10;

          display: grid;
          grid-template-rows: 1.5fr 2fr 1.5fr;
          grid-template-areas:
            'pinyin'
            'hieroglyph'
            'translate';

          text-align: center;
          overflow: hidden;

          box-shadow: 0 0 5px var(--bg-overlay-primary-color);

          &-pinyin,
          &-hieroglyph,
          &-translate {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          &-pinyin {
            grid-area: pinyin;
            :deep(.pinyin-part) {
              font-size: 1.1rem !important;
            }

            .pinyin-tran {
              margin-top: 4px;
              font-size: 0.8rem;
              color: var(--fg-secondary-color);
              border-top: 1px solid var(--border-primary-color);
            }
          }

          &-hieroglyph {
            grid-area: hieroglyph;
            font-family: var(--font-family-cn);
            font-size: 4rem;
          }

          &-translate {
            grid-area: translate;
            text-align: center;
            font-family: 'Rubik';
            font-size: 0.9rem;
          }
        }
      }
    }

    .info {
      text-align: center;
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
  }

  .close {
    position: absolute;
    right: -8px;
    top: -8px;
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
</style>
