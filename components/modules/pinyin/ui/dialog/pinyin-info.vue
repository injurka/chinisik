<script lang="ts" setup>
import { Howl } from 'howler'
import { HaoticLines } from '~/components/domain/haotic-lines'
import { HieroglyphWord } from '~/components/domain/hieroglyph-word'
import { PinyinText } from '~/components/domain/pinyin-text'
import { DialogWithClose } from '~/components/shared/dialog-with-close'
import { PageLoader } from '~/components/shared/page-loader'

interface Props {
  pinyin: string
  initialWithFinal: InitialWithFinal
}
const props = defineProps<Props>()

enum RequestKeys {
  PINIYIN_HIEROGLYPH = 'pinyin_pinyin-hieroglyphs',
}

const dialog = defineModel<boolean>({ required: true })
const dialogEl = ref<HTMLElement>()
const audio = ref<Howl | null>(null)
const abortController = ref<AbortController>(new AbortController())

const pinyinData = computed(() => {
  const pinyinSection = props.pinyin.split('+')

  return {
    value: pinyinSection.join(''),
    index: pinyinSection[0].length,
  }
})

const pinyinHieroglyphsExample = ref<PinyinHieroglyphs | null>(null)
const isLoadingPinyinHieroglyph = computed(() => useRequestStatus([RequestKeys.PINIYIN_HIEROGLYPH]))
const isExampleHidden = computed<boolean>(() => !!pinyinHieroglyphsExample.value || isLoadingPinyinHieroglyph.value)
const apiErrorPinyinHieroglyph = computed(() => useRequestError(RequestKeys.PINIYIN_HIEROGLYPH))

function playPinyin(value: string, tone: ToneType) {
  const track = `/chinese-pinyin-sound/${value}${tone}.mp3`

  if (audio.value) {
    audio.value.stop()
  }

  audio.value = new Howl({ src: [track] })
  audio.value.play()
}

function generatePinyinHieroglyph() {
  useRequest({
    key: RequestKeys.PINIYIN_HIEROGLYPH,
    fn: ({ api }) => api.llvm.v1.pinyinHieroglyphs({
      pinyin: pinyinData.value.value,
      tones: props.initialWithFinal[props.pinyin] as ToneType[],
      count: 2,
    }, abortController.value),
    onSuccess: ({ data }) => pinyinHieroglyphsExample.value = data,
  })
}

function handleRefreshExample() {
  generatePinyinHieroglyph()
}

function resetExamples() {
  pinyinHieroglyphsExample.value = null
  abortController.value.abort()
  abortController.value = new AbortController()
}
</script>

<template>
  <ClientOnly>
    <DialogWithClose
      v-model="dialog"
      class="dialog"
      @after-leave="resetExamples"
    >
      <div ref="dialogEl" class="dialog-wrapper">
        <p class="title">
          Вариации и звучание слога
          <PinyinText
            :pinyin="pinyinData.value"
            :tone="{
              index: pinyinData.index,
              type: 0 as ToneType,
            }"
          />
        </p>

        <div class="content">
          <VBtn
            v-for="tone in initialWithFinal[pinyin]"
            :key="tone"
            variant="tonal"
            class="pinyin-btn"
            size="x-large"
            rounded="sm"
            @click="playPinyin(pinyinData.value, tone as ToneType)"
          >
            <PinyinText
              :pinyin="pinyinData.value"
              :tone="{
                index: pinyinData.index,
                type: tone as ToneType,
              }"
            />
          </VBtn>
        </div>

        <div class="example">
          <Transition name="smooth-appear" mode="out-in">
            <VBtn
              v-if="!isExampleHidden"
              class="example-btn"
              rounded
              variant="tonal"
              @click="generatePinyinHieroglyph"
            >
              Сгенерировать примеры иероглифов
            </VBtn>

            <PageLoader v-else-if="isLoadingPinyinHieroglyph" />

            <div v-else-if="!!pinyinHieroglyphsExample" class="example-content">
              <div class="example-content-control">
                <hr class="divider">
                <VBtn
                  icon
                  class="icon"
                  variant="plain"
                  density="compact"
                  @click="handleRefreshExample"
                >
                  <Icon name="mdi:refresh" size="24" />
                </VBtn>
              </div>
              <div class="example-content-list">
                <div
                  v-for="item in pinyinHieroglyphsExample?.examples"
                  :key="item.tone"
                  class="example-content-item"
                >
                  <HieroglyphWord
                    v-for="word in item.hieroglyphs"
                    :key="word.glyph"
                    :variant="5"
                    :translate="word.translate"
                    :glyph="word.glyph"
                    :pinyin="{
                      pinyin: word.pinyin,
                      tone: {
                        index: word.toneIndex,
                        type: word.toneType as ToneType,
                      },
                    }"
                  />
                </div>
              </div>
            </div>
          </Transition>
          <VSnackbar
            :model-value="!!apiErrorPinyinHieroglyph"
            :timeout="2000"
            color="red"
          >
            <div>
              {{ apiErrorPinyinHieroglyph?.message }}
            </div>
          </VSnackbar>
        </div>

        <HaoticLines :viewport-el="dialogEl" />
      </div>
    </DialogWithClose>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dialog {
  &-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-primary-color);
    border: 1px solid var(--border-primary-color);
    border-radius: 24px;
    width: 100%;
    padding: 32px;

    .title {
      z-index: 10;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin-bottom: 24px;
      font-family: 'Rubik';
      line-height: 19px;
      font-size: 1.1rem;
      color: var(--fg-secondary-color);
      font-weight: 500;
      background: transparent;
      border-bottom: 2px solid var(--border-button-secondary-color);
      padding-bottom: 12px;

      @include mobile {
        font-size: 0.9rem;
      }

      .pinyin {
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        border-radius: 5px;
        padding: 4px 6px;
        font-size: 1.1rem;
        color: var(--fg-secondary-color);

        @include mobile {
          font-size: 0.9rem;
        }
      }
    }

    .content {
      gap: 24px;
      z-index: 10;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-self: center;

      :deep(.pinyin) {
        font-size: 1.2rem;
        letter-spacing: 0;
      }

      @include mobile {
        display: flex;
        flex-direction: column;
      }

      .pinyin-btn {
        background-color: var(--bg-accent-color);
        text-transform: none;
        min-width: 100px;
        width: 20%;
        border: 1px solid var(--border-button-secondary-color);
        box-shadow: 0 0 4px var(--bg-overlay-secondary-color);

        @include mobile {
          min-width: 150px;
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
      &-content {
        width: 100%;

        &-control {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
          gap: 8px;

          .divider {
            width: 100%;
            border: 1px solid var(--border-secondary-color);
          }
          .icon {
            display: flex;
            color: var(--fg-secondary-color);
          }
        }
        &-list {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr 1fr;
          grid-template-columns: 1fr;

          @include mobile {
            display: flex;
            flex-direction: column;
          }
        }
        &-item {
          display: flex;
          @include mobile {
            flex-direction: column;
          }

          .word {
            width: 50%;

            @include mobile {
              width: 100%;
            }
          }
        }
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
  }
}
</style>
