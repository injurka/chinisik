import type { Prisma } from '@prisma/client'

export async function mockBookChapter(): Promise<Prisma.BookChapterCreateInput[]> {
  return [
    // Chapters for 'le-petit-prince'
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава I',
      startPage: 7,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава II',
      startPage: 10,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава III',
      startPage: 15,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава IV',
      startPage: 18,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава V',
      startPage: 23,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава VI',
      startPage: 28,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава VII',
      startPage: 30,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава VIII',
      startPage: 36,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава IX',
      startPage: 41,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава X',
      startPage: 44,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XI',
      startPage: 49,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XII',
      startPage: 51,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XIII',
      startPage: 53,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XIV',
      startPage: 60,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XV',
      startPage: 63,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XVI',
      startPage: 71,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XVII',
      startPage: 73,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XVIII',
      startPage: 75,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XIX',
      startPage: 76,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XX',
      startPage: 78,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXI',
      startPage: 81,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXII',
      startPage: 94,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXIII',
      startPage: 96,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXIV',
      startPage: 98,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXV',
      startPage: 100,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXVI',
      startPage: 105,
    },
    {
      book: { connect: { id: 'le-petit-prince' } },
      title: 'Глава XXVII',
      startPage: 118,
    },
  ]
}
