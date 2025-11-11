<script lang="ts" setup>
import type { BookPage, Sentence, Word } from '~/shared/types'
import { PageLoader } from '~/components/02.shared/page-loader'
import { cancelSpeech, initSpeechSynthesis, voiceTheText } from '~/shared/lib'
import { useTooltipPositioning } from '../composables/use-tooltip-positioning'
import SentenceTooltip from './sentence-tooltip.vue'
import WordTooltip from './word-tooltip.vue'

interface ActiveWord {
  word: Word
  target: EventTarget | null
}

interface ActiveSentence {
  sentence: Sentence
  target: EventTarget | null
}

const route = useRoute()
const { api } = useApi()
const bookId = computed(() => route.params.id as string)

const { data: bookContent, pending, error } = await useAsyncData<BookPage[]>(
  `book-content-${bookId.value}`,
  () => api.books.v1.content({ id: bookId.value }),
)

const currentPageIndex = ref(0)
const isSpeaking = ref(false)
const longPressTimer = ref<NodeJS.Timeout | null>(null)

const activeWord = ref<ActiveWord | null>(null)
const activeSentence = ref<ActiveSentence | null>(null)

// --- Tooltip positioning logic ---
const readerContainer = ref<HTMLElement | null>(null)
const wordTooltipRef = ref<InstanceType<typeof WordTooltip> | null>(null)
const sentenceTooltipRef = ref<InstanceType<typeof SentenceTooltip> | null>(null)
const { tooltipStyle, calculatePosition, hide } = useTooltipPositioning()

const currentPage = computed(() => {
  if (!bookContent.value || !bookContent.value[currentPageIndex.value])
    return null
  return bookContent.value[currentPageIndex.value]
})

function renderSentence(sentence: Sentence) {
  const chunks = []
  let lastIndex = 0
  sentence.words.forEach((word) => {
    const [start, end] = word.indices
    if (start > lastIndex)
      chunks.push({ type: 'text', content: sentence.originalText.substring(lastIndex, start) })

    chunks.push({ type: 'word', content: word })
    lastIndex = end
  })
  if (lastIndex < sentence.originalText.length)
    chunks.push({ type: 'text', content: sentence.originalText.substring(lastIndex) })

  return chunks
}

function closeTooltips() {
  activeWord.value = null
  activeSentence.value = null
  hide()
}

async function showSentenceTooltip(event: PointerEvent, sentence: Sentence) {
  const sentenceEl = (event.target as HTMLElement).closest('.sentence-block')
  if (sentenceEl) {
    activeSentence.value = { sentence, target: event.target }
    activeWord.value = null
    // Ждем, пока тултип появится в DOM, чтобы получить его размеры
    await nextTick()
    calculatePosition(sentenceEl.getBoundingClientRect(), sentenceTooltipRef.value?.$el, readerContainer.value)
  }
}

async function showWordTooltip(event: PointerEvent, word: Word) {
  const targetEl = event.target as HTMLElement
  activeWord.value = { word, target: event.target }
  activeSentence.value = null
  // Ждем, пока тултип появится в DOM, чтобы получить его размеры
  await nextTick()
  calculatePosition(targetEl.getBoundingClientRect(), wordTooltipRef.value?.$el, readerContainer.value)
}

function handlePointerDown(event: PointerEvent, sentence: Sentence) {
  if (longPressTimer.value)
    clearTimeout(longPressTimer.value)

  longPressTimer.value = setTimeout(() => {
    longPressTimer.value = null
    showSentenceTooltip(event, sentence)
  }, 350)
}

function handlePointerUp(event: PointerEvent, word: Word) {
  if (longPressTimer.value) {
    clearTimeout(longPressTimer.value)
    longPressTimer.value = null
    showWordTooltip(event, word)
  }
}

function handlePointerMove() {
  if (longPressTimer.value) {
    clearTimeout(longPressTimer.value)
    longPressTimer.value = null
  }
}

function nextPage() {
  if (bookContent.value && currentPageIndex.value < bookContent.value.length - 1) {
    currentPageIndex.value++
    closeTooltips()
  }
}

function prevPage() {
  if (currentPageIndex.value > 0) {
    currentPageIndex.value--
    closeTooltips()
  }
}

function handleSpeak(text: string) {
  if (isSpeaking.value)
    cancelSpeech(() => isSpeaking.value = false)

  voiceTheText(text, () => isSpeaking.value = true, () => isSpeaking.value = false, 'zh-CN')
}

onMounted(() => {
  initSpeechSynthesis()
})
</script>

<template>
  <div class="book-reader" @pointerdown="closeTooltips">
    <PageLoader v-if="pending" />
    <div v-else-if="error" class="error-state">
      <p>Не удалось загрузить контент книги.</p>
    </div>
    <div v-else-if="currentPage" ref="readerContainer" class="reader-container">
      <div class="reader-viewport">
        <div class="page-content">
          <span
            v-for="sentence in currentPage.content"
            :key="sentence.id"
            class="sentence-block"
            :class="{ highlighted: activeSentence?.sentence.id === sentence.id }"
          >
            <template v-for="(chunk, index) in renderSentence(sentence)" :key="index">
              <span
                v-if="chunk.type === 'word'"
                class="word-interactive"
                :class="{ highlighted: activeWord?.word.id === chunk.content.id }"
                @pointerdown.stop="handlePointerDown($event, sentence)"
                @pointerup.stop="handlePointerUp($event, chunk.content)"
                @pointermove.stop="handlePointerMove"
                @contextmenu.prevent
              >
                {{ chunk.content.text }}
              </span>
              <template v-else>
                {{ chunk.content }}
              </template>
            </template>
            {{ ' ' }}
          </span>
        </div>
      </div>

      <div class="pagination">
        <VBtn :disabled="currentPageIndex === 0" @click="prevPage">
          <Icon name="mdi:arrow-left" />
          Предыдущая
        </VBtn>
        <span class="page-number">
          Страница {{ currentPage.pageNumber }} из {{ bookContent.length }}
        </span>
        <VBtn :disabled="currentPageIndex >= bookContent.length - 1" @click="nextPage">
          Следующая
          <Icon name="mdi:arrow-right" />
        </VBtn>
      </div>

      <Teleport to="body">
        <WordTooltip
          v-if="activeWord"
          ref="wordTooltipRef"
          :style="tooltipStyle"
          :word="activeWord.word.text"
          :translation="activeWord.word.translation"
          :pronunciation="activeWord.word.pronunciation"
          :part-of-speech="activeWord.word.partOfSpeech"
          @close="closeTooltips"
          @speak="handleSpeak(activeWord.word.text)"
          @add-to-dictionary="(word: string) => console.log('Add to dict:', word)"
        />
        <SentenceTooltip
          v-if="activeSentence"
          ref="sentenceTooltipRef"
          :style="tooltipStyle"
          :sentence="activeSentence.sentence"
          @close="closeTooltips"
          @speak="handleSpeak(activeSentence.sentence.originalText)"
          @bookmark="(sentence: string) => console.log('Bookmark:', sentence)"
        />
      </Teleport>
    </div>
  </div>
</template>

<style scoped lang="scss">
.book-reader {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
}

.reader-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.reader-viewport {
  flex-grow: 1;
  background-color: var(--bg-secondary-color);
  padding: 32px 48px;
  border-radius: 8px;
  border: 1px solid var(--border-secondary-color);
  margin-bottom: 24px;
  font-family: var(--font-family-cn);

  @include mobile {
    padding: 16px;
  }
}

.page-content {
  font-size: 1.6rem;
  line-height: 2.5;
  color: var(--fg-primary-color);
  user-select: none;
  text-align: justify;

  .sentence-block,
  .word-interactive {
    &.highlighted {
      background-color: var(--bg-accent-color);
      color: var(--fg-primary-color);
      border-radius: 4px;
    }
  }

  .word-interactive {
    cursor: pointer;
    border-bottom: 2px dotted rgba(var(--v-theme-primary), 0.3);
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: var(--bg-accent-color);
      color: var(--fg-primary-color);
      border-bottom-style: solid;
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  padding: 8px 0;
  .page-number {
    color: var(--fg-secondary-color);
  }
  .v-btn {
    text-transform: none;
  }
}

.error-state {
  text-align: center;
  padding: 40px;
}
</style>
