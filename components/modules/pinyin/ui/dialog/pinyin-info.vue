<script lang="ts" setup>
import { Howl } from 'howler'
import { PinyinText } from '~/components/domain/pinyin-text'
import { HaoticLines } from '~/components/domain/haotic-lines'

interface Props {
  pinyin: string
  initialWithFinal: InitialWithFinal
}
const props = defineProps<Props>()
const dialog = defineModel<boolean>()
const dialogEl = ref<HTMLElement>()

const audio = ref<Howl | null>(null)

const pinyinData = computed(() => {
  const pinyinSection = props.pinyin.split('+')

  return {
    value: pinyinSection.join(''),
    index: pinyinSection[0].length,
  }
})

const haoticLinesProps = computed(() => ({
  width: dialogEl.value?.offsetWidth || 0,
  height: dialogEl.value?.offsetHeight || 0,
}))

function playPinyin(value: string, tone: ToneType) {
  const track = `/chinese-pinyin-sound/${value}${tone}.mp3`

  if (audio.value) {
    audio.value.stop()
  }

  audio.value = new Howl({ src: [track] })
  audio.value.play()
}
</script>

<template>
  <ClientOnly>
    <VDialog
      v-model="dialog"
      class="dialog"
    >
      <div ref="dialogEl" class="dialog-wrapper">
        <HaoticLines
          :width="haoticLinesProps.width"
          :height="haoticLinesProps.height"
        />

        <div class="hint">
          <Icon name="line-md:alert-circle-loop" size="18" />
          <span> нажмите чтобы прослушать </span>
        </div>
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
:deep(.pinyin) {
  font-size: 1.2rem;
}

.dialog {
  max-width: 700px;

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    padding: 16px;

    position: relative;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 5px var(--bg-overlay-dark-color);
    border: 1px solid var(--border-primary-color);

    border-radius: 24px;
    width: 100%;

    .hint {
      display: inline-flex;
      align-items: flex-end;
      gap: 4px;

      margin: 0 auto;

      position: absolute;

      left: 10px;
      top: 8px;
      font-family: 'Rubik';
      line-height: 19px;

      font-size: 0.8rem;
      color: var(--fg-muted-color);
    }

    .content {
      display: flex;
      justify-content: center;
      gap: 24px;
      z-index: 10;

      @include mobile {
        flex-wrap: wrap;
      }

      .pinyin-btn {
        background-color: var(--bg-accent-color);
        text-transform: none;
        width: 100px;
        border: 1px solid var(--border-button-secondary-color);
        box-shadow: 0 0 14px var(--bg-overlay-light-color);

        :deep(.pinyin-tone) {
          top: -4px;
        }

        @include mobile {
          width: 150px;
        }
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
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
