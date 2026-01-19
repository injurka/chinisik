<script lang="ts" setup>
import type { HieroglyphSettings } from '~/components/03.domain/hieroglyph-word/types'
import PageLoader from '~/components/02.shared/page-loader/ui/page-loader.vue'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import HskWordsControl from '~/components/05.modules/hsk/words/ui/hsk-words-control.vue'
import { useTextToSpeechPopup } from '~/shared/composables'
import { useHskWords } from '../composables'

const HSK_WORDS_STYLE_VARIANT = 'hsk_words_style_variant'

const {
  HSK_LEVELS,
  VISIBLE_PAGES,
  MOBILE_VISIBLE_PAGES,
  page,
  searchKeyword,
  selectedLevel,
  isMobile,
  data,
  isLoading,
  totalPages,
  error,
} = await useHskWords()

const listVariant = useCookie<Partial<HieroglyphSettings> | 'global'>(HSK_WORDS_STYLE_VARIANT, { default: () => 'global' })
const controlMenu = ref(false)

const wordsListContainer = ref<HTMLElement | null>(null)
const { popup, isSpeaking, handleVoiceButtonClick } = useTextToSpeechPopup(
  wordsListContainer,
  {
    targetSelector: '.hw-glyph',
    lang: 'zh-CN',
    popupOffset: { top: 5 },
  },
)

watch(page, () => {
  if (typeof window !== 'undefined')
    window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <div class="hsk-words">
    <div class="controls">
      <v-select
        v-model="selectedLevel"
        :items="HSK_LEVELS"
        class="controls-hsk"
        label="HSK"
        variant="outlined"
        density="comfortable"
        hide-details
        prepend-inner-icon="mdi-trophy-outline"
      />
      <v-text-field
        v-model="searchKeyword"
        label="Поиск"
        placeholder="Введите иероглиф, пиньинь или перевод..."
        class="controls-keyword"
        clearable
        outlined
        hide-details
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        density="comfortable"
      />
      <v-menu
        v-model="controlMenu"
        :close-on-content-click="false"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            variant="plain"
            v-bind="props"
          >
            <Icon size="24" name="mdi-tune" />
          </v-btn>
        </template>

        <HskWordsControl v-model="listVariant" />
      </v-menu>
    </div>

    <PageLoader v-if="isLoading" class="loader" />

    <div
      v-else-if="data?.data?.length && !error?.data"
      ref="wordsListContainer"
      class="words-list"
    >
      <v-btn
        v-if="popup.show"
        class="speech-popup"
        :icon="isSpeaking ? 'mdi-stop' : 'mdi-volume-high'"
        size="small"
        :style="{ top: `${popup.top}px`, left: `${popup.left}px` }"
        @click="handleVoiceButtonClick"
      />

      <HieroglyphWord
        v-for="item in data.data"
        :key="item.id"
        :settings="listVariant === 'global' ? undefined : listVariant"
        :glyph="item.glyph"
        :translate="item.translation.ru"
        :pinyin="item.pinyin"
      />

      <v-pagination
        v-model="page"
        :length="totalPages"
        :total-visible="isMobile ? MOBILE_VISIBLE_PAGES : VISIBLE_PAGES"
        color="primary"
      />
    </div>

    <div v-else class="empty">
      <NuxtImg
        width="200"
        height="200"
        src="/images/not-found.gif"
      />
      <span v-if="error?.data">
        Ошибка получения данных :(
      </span>
      <span v-else>
        Ничего не найдено :(
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hsk-words {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  &:deep(.v-pagination__list) {
    .v-btn {
      color: var(--fg-accent-color) !important;
    }
  }

  .controls {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    margin-top: 16px;

    &-hsk {
      max-width: 100px;
    }

    @include mobile() {
      flex-direction: column;
      gap: 8px;

      &-hsk {
        max-width: 100%;
      }
    }
  }
  .words-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .speech-popup {
    position: absolute;
    z-index: 10;
    transform: translateX(-50%);
    background-color: var(--bg-secondary-color);
    border: 1px solid var(--border-secondary-color);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  .empty {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 0;

    > img {
      box-shadow: 0 0 30px var(--bg-error-color);
      border: 2px solid var(--border-primary-color);
      border-radius: 8px;
    }

    > span {
      margin: 0 auto;
      font-size: 1.2rem;
      margin-top: 24px;
      color: var(--fg-secondary-color) !important;
    }
  }
  .loader {
    margin-top: 100px;
  }
}
</style>
