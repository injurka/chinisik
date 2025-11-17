<script lang="ts" setup>
import type { BookDetails, BookPage, Sentence, Word } from '~/shared/types'
import { PageLoader } from '~/components/02.shared/page-loader'
import { cancelSpeech, initSpeechSynthesis, voiceTheText } from '~/shared/lib'
import { useTooltipPositioning } from '../composables/use-tooltip-positioning'
import { ChaptersDialog } from './dialogs'
import SentenceTooltip from './sentence-tooltip.vue'
import WordTooltip from './word-tooltip.vue'

interface TextChunk {
  type: 'text'
  content: string
}

interface WordChunk {
  type: 'word'
  content: Word
}

type SentenceChunk = TextChunk | WordChunk

interface ActiveWord {
  word: Word
  target: EventTarget | null
}

interface ActiveSentence {
  sentence: Sentence
  target: EventTarget | null
}

const route = useRoute()
const router = useRouter()
const { api } = useApi()
const { isMobile } = useDevice()
const bookId = computed(() => route.params.id as string)

const { data: bookDetails, pending: pendingDetails, error: errorDetails } = await useAsyncData<BookDetails>(
  `book-details-${bookId.value}`,
  () => api.books.v1.details({ id: bookId.value }),
)

const currentPageNumber = computed(() => {
  const page = Number.parseInt(route.query.page as string, 10)
  return Number.isNaN(page) || page < 1 ? 1 : page
})

const { data: currentPage, pending: pendingContent, error: errorContent } = await useAsyncData<BookPage>(
  `book-content-${bookId.value}-page-${currentPageNumber.value}`,
  () => api.books.v1.content({ id: bookId.value, page: currentPageNumber.value }),
  { watch: [currentPageNumber] },
)

const pending = computed(() => (pendingContent.value && !currentPage.value) || pendingDetails.value)
const error = computed(() => errorContent.value || errorDetails.value)

const isChaptersDialogVisible = ref(false)
const isSpeaking = ref(false)
const longPressTimer = ref<NodeJS.Timeout | null>(null)

const activeWord = ref<ActiveWord | null>(null)
const activeSentence = ref<ActiveSentence | null>(null)

const readerContainer = ref<HTMLElement | null>(null)
const wordTooltipRef = ref<InstanceType<typeof WordTooltip> | null>(null)
const sentenceTooltipRef = ref<InstanceType<typeof SentenceTooltip> | null>(null)
const { tooltipStyle, calculatePosition, hide } = useTooltipPositioning()

const currentChapterId = computed(() => {
  return bookDetails.value?.chapters.find(chapter => chapter.title === currentPage.value?.chapterTitle)?.id
})

function updateRouteQuery(pageNumber: number) {
  router.push({ query: { ...route.query, page: pageNumber.toString() } })
}

function navigateToPage(pageNumber: number) {
  if (bookDetails.value && pageNumber > 0 && pageNumber <= bookDetails.value.pageCount) {
    updateRouteQuery(pageNumber)
    closeTooltips()
  }
}

function navigateToChapter(page: number) {
  navigateToPage(page)
}

function nextPage() {
  if (currentPageNumber.value < (bookDetails.value?.pageCount ?? 0))
    navigateToPage(currentPageNumber.value + 1)
}

function prevPage() {
  if (currentPageNumber.value > 1)
    navigateToPage(currentPageNumber.value - 1)
}

function renderSentence(sentence: Sentence): SentenceChunk[] {
  const chunks: SentenceChunk[] = []
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
    await nextTick()
    calculatePosition(sentenceEl.getBoundingClientRect(), sentenceTooltipRef.value?.$el, readerContainer.value)
  }
}

async function showWordTooltip(event: PointerEvent, word: Word) {
  const targetEl = event.target as HTMLElement
  activeWord.value = { word, target: event.target }
  activeSentence.value = null
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

function handleSpeak(text: string) {
  if (isSpeaking.value)
    cancelSpeech(() => isSpeaking.value = false)

  voiceTheText(text, () => isSpeaking.value = true, () => isSpeaking.value = false, 'zh-CN')
}

onMounted(() => {
  initSpeechSynthesis()
  const pageFromQuery = Number.parseInt(route.query.page as string, 10)
  if (Number.isNaN(pageFromQuery) || pageFromQuery < 1)
    updateRouteQuery(1)
})
</script>

<template>
  <div class="book-reader" @pointerdown="closeTooltips">
    <PageLoader v-if="pending" />
    <div v-else-if="error" class="error-state">
      <p>Не удалось загрузить контент книги.</p>
    </div>
    <div v-else-if="currentPage && bookDetails" ref="readerContainer" class="reader-container">
      <header class="reader-header">
        <VBtn
          icon="mdi-arrow-left"
          variant="text"
          :to="RoutePaths.Books.Details(bookId)"
        />
        <h2>{{ currentPage.chapterTitle }}</h2>
        <VBtn
          icon="mdi-format-list-bulleted"
          variant="text"
          @click.stop="isChaptersDialogVisible = true"
        />
      </header>

      <div class="reader-viewport">
        <div class="page-content">
          <p
            v-for="(paragraph, pIndex) in currentPage.content"
            :key="`p-${pIndex}`"
            class="paragraph-block"
          >
            <span
              v-for="sentence in paragraph"
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
          </p>
        </div>
      </div>

      <div class="pagination">
        <VBtn variant="text" :disabled="currentPageNumber <= 1" @click="prevPage">
          <Icon name="mdi:arrow-left" />
          <span v-if="!isMobile">Предыдущая</span>
        </VBtn>
        <span class="page-number">
          Страница {{ currentPage.pageNumber }} из {{ bookDetails.pageCount }}
        </span>
        <VBtn variant="text" :disabled="currentPageNumber >= bookDetails.pageCount" @click="nextPage">
          <span v-if="!isMobile">Следующая</span>
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

      <ChaptersDialog
        v-model="isChaptersDialogVisible"
        :chapters="bookDetails.chapters"
        :current-chapter-id="currentChapterId"
        @select-chapter="navigateToChapter"
      />
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

.reader-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-secondary-color);
  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--fg-secondary-color);
    flex-grow: 1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .v-btn {
    width: 48px;
    flex-shrink: 0;
  }
}

.reader-viewport {
  flex-grow: 1;
  background-color: var(--bg-secondary-color);
  padding: 24px 32px;
  border-radius: 8px;
  border: 1px solid var(--border-secondary-color);
  margin-bottom: 24px;
  font-family: var(--font-family-cn);

  @include mobile {
    padding: 16px;
  }
}

.page-content {
  font-size: 1.5rem;
  line-height: 3rem;
  color: var(--fg-primary-color);
  user-select: none;
  text-align: justify;

  .paragraph-block {
    margin-bottom: 8px;
    text-indent: 2em;

    &:first-child {
      text-indent: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

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
  padding: 16px 0;
  margin-top: 16px;
  border-top: 1px solid var(--border-secondary-color);

  .page-number {
    color: var(--fg-secondary-color);
    font-weight: 500;
    background-color: var(--bg-tertiary-color);
    padding: 6px 16px;
    border-radius: 20px;
    border: 1px solid var(--border-secondary-color);
  }

  .v-btn {
    text-transform: none;
    color: var(--fg-action-color);
    font-weight: 500;

    &:hover:not(:disabled) {
      background-color: var(--bg-hover-color);
    }

    @include mobile {
      min-width: 48px;
      padding: 0 12px;
    }
  }
}

.error-state {
  text-align: center;
  padding: 40px;
}
</style>
