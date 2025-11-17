import { z } from '@hono/zod-openapi'

export const BookSchema = z.object({
  id: z.string().openapi({ example: 'le-petit-prince' }),
  title: z.string().openapi({ example: '小王子 (Маленький принц)' }),
  author: z.string().openapi({ example: 'Антуан де Сент-Экзюпери' }),
  coverUrl: z.string().openapi({ example: '/images/books/placeholder.png' }),
  genre: z.string().openapi({ example: 'Философская сказка' }),
  difficulty: z.string().openapi({ example: 'Начинающий' }),
  uniqueWords: z.number().int(),
}).openapi('Book')

export const BookChapterSchema = z.object({
  id: z.number().int(),
  title: z.string().openapi({ example: 'Глава 1: Таинственный астероид' }),
  startPage: z.number().int().openapi({ example: 1 }),
}).openapi('BookChapter')

export const BookDetailsSchema = z.object({
  id: z.string().openapi({ example: 'le-petit-prince' }),
  title: z.string().openapi({ example: '小王子 (Маленький принц)' }),
  author: z.string().openapi({ example: 'Антуан де Сент-Экзюпери' }),
  originalTitle: z.string().openapi({ example: 'Le Petit Prince' }),
  coverUrl: z.string().openapi({ example: '/images/books/placeholder.png' }),
  genre: z.string().openapi({ example: 'Философская сказка' }),
  summary: z.string(),
  difficultyGeneral: z.string().openapi({ example: 'Начинающий' }),
  difficultyFormal: z.string().openapi({ example: 'HSK 2' }),
  uniqueWords: z.number().int(),
  pageCount: z.number().int().openapi({ example: 125 }),
  chapters: z.array(BookChapterSchema).openapi('Chapters'),
}).openapi('BookDetails')

export const PronunciationSchema = z.object({
  pinyin: z.string().openapi({ example: 'nǐ hǎo' }),
  palladius: z.string().openapi({ example: 'ни хао' }),
}).openapi('Pronunciation')

export const WordSchema = z.object({
  id: z.string(),
  text: z.string(),
  indices: z.tuple([z.number().int(), z.number().int()]),
  translation: z.string(),
  pronunciation: PronunciationSchema,
  partOfSpeech: z.string(),
}).openapi('Word')

export const SentenceSchema = z.object({
  id: z.string(),
  originalText: z.string(),
  translation: z.string(),
  audioUrl: z.string().url().or(z.string().startsWith('/')),
  grammarNotes: z.string().nullable(),
  words: z.array(WordSchema),
}).openapi('Sentence')

export const BookPageSchema = z.object({
  pageNumber: z.number().int(),
  content: z.array(z.array(SentenceSchema)),
}).openapi('BookPage')
