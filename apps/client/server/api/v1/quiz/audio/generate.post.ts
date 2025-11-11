import type { AudioQuizQuestion } from '~/shared/types'

const mockQuestions: AudioQuizQuestion[] = [
  {
    id: 'q1',
    audioUrl: '/audio/ni_hao.mp3',
    text: '你好',
    pinyin: 'nǐ hǎo',
    translation: 'Привет',
    answers: [
      { id: 1, text: 'Пока' },
      { id: 2, text: 'Привет' },
      { id: 3, text: 'Спасибо' },
      { id: 4, text: 'Пожалуйста' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 'q2',
    audioUrl: '/audio/xie_xie.mp3',
    text: '谢谢',
    pinyin: 'xièxiè',
    translation: 'Спасибо',
    answers: [
      { id: 1, text: 'Извините' },
      { id: 2, text: 'Доброе утро' },
      { id: 3, text: 'Спасибо' },
      { id: 4, text: 'Как дела?' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 'q3',
    audioUrl: '/audio/zai_jian.mp3',
    text: '再见',
    pinyin: 'zàijiàn',
    translation: 'Пока',
    answers: [
      { id: 1, text: 'Пока' },
      { id: 2, text: 'Меня зовут...' },
      { id: 3, text: 'Сколько это стоит?' },
      { id: 4, text: 'Где туалет?' },
    ],
    correctAnswerId: 1,
  },
]

let questionIndex = 0

export default defineEventHandler(async () => {
  await sleepRequest(300)

  const question = mockQuestions[questionIndex % mockQuestions.length]
  questionIndex++

  return {
    ...question,
    id: `${question?.id}_${Date.now()}`,
  }
})
