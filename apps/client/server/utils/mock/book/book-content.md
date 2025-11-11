### Итоговая подробная модель данных (JSON)

#### 1. `BookPage` (Корневой объект)

Представляет одну страницу книги.

- `pageNumber` (число): Номер страницы.
- `content` (массив): Массив объектов `Sentence`, составляющих содержимое страницы.

#### 2. `Sentence` (Объект предложения)

Описывает одно полное предложение и содержит массив интерактивных слов.

- `id` (строка): Уникальный ID предложения.
- `originalText` (строка): Полный текст предложения на китайском языке.
- `translation` (строка): Перевод предложения на русский язык.
- `audioUrl` (строка): URL-адрес аудиофайла для озвучивания всего предложения.
- `grammarNotes` (строка | null): Пояснения к грамматическим конструкциям в предложении.
- `words` (массив): Массив объектов `Word`, описывающих интерактивные слова в предложении.

#### 3. `Word` (Объект слова)

Атомарная интерактивная единица. Описывает слово и его точное положение в строке `originalText`.

- `id` (строка): Уникальный ID слова.
- `text` (строка): Текст слова (один или несколько иероглифов).
- `indices` (массив чисел): Массив из двух чисел `[startIndex, endIndex]`, обозначающий диапазон слова в `originalText`.
- `translation` (строка): Перевод слова на русский.
- `pronunciation` (объект): **(Финальная версия)** Информация о произношении.
  - `pinyin` (строка): Пиньинь с диакритическими знаками (тоновыми метками), например, `nǐ hǎo`.
  - `palladius` (строка): Транскрипция на русский язык по системе Палладия, например, `ни хао`.
- `partOfSpeech` (строка): Часть речи.

---

### Пример JSON для одной страницы с двумя предложениями

```json
{
  "pageNumber": 7,
  "content": [
    {
      "id": "sent-7-0",
      "originalText": "你好，我叫大卫。",
      "translation": "Привет, меня зовут Давид.",
      "audioUrl": "/audio/book_cn_1/page_7_sent_0.mp3",
      "grammarNotes": "Базовая структура для представления себя.",
      "words": [
        {
          "id": "word-7-0-0",
          "text": "你好",
          "indices": [0, 2],
          "translation": "Привет",
          "pronunciation": {
            "pinyin": "nǐ hǎo",
            "palladius": "ни хао"
          },
          "partOfSpeech": "приветствие"
        },
        {
          "id": "word-7-0-1",
          "text": "我",
          "indices": [3, 4],
          "translation": "я",
          "pronunciation": {
            "pinyin": "wǒ",
            "palladius": "во"
          },
          "partOfSpeech": "местоимение"
        },
        {
          "id": "word-7-0-2",
          "text": "叫",
          "indices": [4, 5],
          "translation": "звать, называться",
          "pronunciation": {
            "pinyin": "jiào",
            "palladius": "цзяо"
          },
          "partOfSpeech": "глагол"
        },
        {
          "id": "word-7-0-3",
          "text": "大卫",
          "indices": [5, 7],
          "translation": "Давид",
          "pronunciation": {
            "pinyin": "Dàwèi",
            "palladius": "Давэй"
          },
          "partOfSpeech": "имя собственное"
        }
      ]
    },
    {
      "id": "sent-7-1",
      "originalText": "你来自哪个国家？",
      "translation": "Из какой ты страны?",
      "audioUrl": "/audio/book_cn_1/page_7_sent_1.mp3",
      "grammarNotes": "Вопросительное слово '哪个' (который, какой) используется для выбора из нескольких вариантов.",
      "words": [
        {
          "id": "word-7-1-0",
          "text": "你",
          "indices": [0, 1],
          "translation": "ты",
          "pronunciation": {
            "pinyin": "nǐ",
            "palladius": "ни"
          },
          "partOfSpeech": "местоимение"
        },
        {
          "id": "word-7-1-1",
          "text": "来自",
          "indices": [1, 3],
          "translation": "быть родом из",
          "pronunciation": {
            "pinyin": "láizì",
            "palladius": "лайцзы"
          },
          "partOfSpeech": "глагол"
        },
        {
          "id": "word-7-1-2",
          "text": "哪个",
          "indices": [3, 5],
          "translation": "какой, который",
          "pronunciation": {
            "pinyin": "nǎge",
            "palladius": "нагэ"
          },
          "partOfSpeech": "вопросительное местоимение"
        },
        {
          "id": "word-7-1-3",
          "text": "国家",
          "indices": [5, 7],
          "translation": "страна, государство",
          "pronunciation": {
            "pinyin": "guójiā",
            "palladius": "гоцзя"
          },
          "partOfSpeech": "существительное"
        }
      ]
    }
  ]
}
```
