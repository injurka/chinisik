<script lang="ts" setup>
import { HaoticLines } from '~/components/domain/haotic-lines'
import { IframeViewer } from '~/components/domain/iframe-viewer'
import { PinyinText } from '~/components/domain/pinyin-text'
import { DialogWithClose } from '~/components/shared/dialog-with-close'
import { PageLoader } from '~/components/shared/page-loader'

interface Props {
  hieroglyph?: HieroglyphKey
}
const props = defineProps<Props>()

enum RequestKeys {
  KEY_HIEROGLYPH = 'key_key-hieroglyphs',
}

const isWikiViewing = ref<boolean>(false)

const data = computed(() => ({
  hieroglyph: props.hieroglyph!,
  info: 'Описание для данного ключа не найдено.',
  description: '',
  wiki: `https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%8E%D1%87_${props.hieroglyph?.index}`,
}))

const dialog = defineModel<boolean>({ required: true })
const hieroglyphEl = ref<HTMLElement>()

// Example
const example = ref<PinyinHieroglyphs | null>(null)
const isLoadingExample = computed(() => useRequestStatus([RequestKeys.KEY_HIEROGLYPH]))
const isExampleHidden = computed<boolean>(() => !!example.value || isLoadingExample.value)
const apiErrorExample = computed(() => useRequestError(RequestKeys.KEY_HIEROGLYPH))
const abortController = ref<AbortController>(new AbortController())

function generateExample() {
//  TODO
}

// eslint-disable-next-line unused-imports/no-unused-vars
function handleRefreshExample() {
  generateExample()
}

function resetExamples() {
  example.value = null
  abortController.value.abort()
  abortController.value = new AbortController()
}

function onOpenWiki() {
  isWikiViewing.value = !isWikiViewing.value
}
</script>

<template>
  <ClientOnly>
    <DialogWithClose
      v-model="dialog"
      class="dialog"
      @after-leave="resetExamples"
    >
      <VCard class="dialog-content">
        <div ref="hieroglyphEl" class="hieroglyph-container">
          <HaoticLines
            v-if="dialog"
            :weight-stroke="40"
            class="haotic-lines"
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
          <VBtn
            v-if="!isExampleHidden"
            class="example-btn"
            rounded
            variant="tonal"
            @click="generateExample"
          >
            Сгенерировать примеры иероглифов
          </VBtn>

          <PageLoader v-else-if="isLoadingExample" />

          <VSnackbar
            :model-value="!!apiErrorExample"
            :timeout="2000"
            color="red"
          >
            <div>
              {{ apiErrorExample?.message }}
            </div>
          </VSnackbar>
        </p>
        <p class="description">
          {{ data.description }}
        </p>
      </VCard>
    </DialogWithClose>

    <IframeViewer v-model="isWikiViewing" :src="data.wiki" />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.haotic-lines {
  opacity: 0.2;
}

.dialog {
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
}

.example {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  .loader {
    font-size: 36px;
  }

  &-btn {
    z-index: 10;
    text-transform: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: var(--fg-action-color);
    width: auto;
    margin: 0 auto;
    padding: 0 32px;
    font-size: 0.8rem;

    @include mobile {
      font-size: 0.75rem;
    }
  }
}
</style>
