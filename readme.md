# Chinisik (Чайнизик) 🐉

**Chinisik** — это комплексное веб-приложение для изучения китайского языка, сочетающее в себе традиционные методики обучения с интерактивными инструментами и возможностями искусственного интеллекта. Проект создан как персональная площадка для освоения иероглифов, грамматики и культуры Китая.

[![Nuxt](https://img.shields.io/badge/Nuxt-3-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-3-1867C0?logo=vuetify)](https://vuetifyjs.com/)
[![Hono](https://img.shields.io/badge/Hono-E36002?logo=hono)](https://hono.dev/)
[![Bun](https://img.shields.io/badge/Bun-%23000000.svg?logo=bun)](https://bun.sh)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

![Снимок экрана Chinisik 1](https://github.com/user-attachments/assets/ef0f09ec-0135-4047-b5aa-3495c5ec236c)

## 🌟 Ключевые возможности

-   **📚 Интерактивные словари:** Изучайте иероглифические ключи (радикалы), лексику HSK и слова, сгруппированные по темам.
-   **✍️ Практика и тренировка:**
    -   **Лаборатория HSK:** Тренируйте слова с помощью интерактивных карточек.
    -   **Аудио-квизы:** Проверяйте свои знания на слух.
    -   **Доска для прописи:** Практикуйтесь в написании иероглифов с возможностью проверки через ИИ.
-   **🤖 Лингвистический анализ:** Получайте глубокий разбор предложений с помощью ИИ, включая структуру, грамматику, этимологию и составные части иероглифов.
-   **📖 Читалка книг:** Читайте адаптированные книги с интерактивным переводом и разбором слов по клику.
-   **🖼️ Переводчик изображений:** Загружайте изображения (комиксы, мемы), выделяйте текст и получайте его перевод и анализ.
-   **📡 PWA и Офлайн-доступ:** Установите приложение на свое устройство и используйте кэшированные данные благодаря Service Worker.
-   **🎨 Гибкая настройка:** Меняйте тему оформления (светлая/темная), стиль отображения иероглифов и пиньиня.

## 🏗️ Архитектура проекта

Проект организован как монорепозиторий, управляемый с помощью `Bun Workspaces`.

-   **`apps/client` (Клиентское приложение)**
    -   **Фреймворк:** Nuxt 3 (Vue 3) с рендерингом на стороне сервера (SSR).
    -   **UI:** Vuetify 3 для создания современного и адаптивного интерфейса.
    -   **Управление состоянием:** Pinia для централизованного управления состоянием.
    -   **Офлайн-режим:** Реализован с помощью `@vite-pwa/nuxt` и кастомного Service Worker для кэширования статических ресурсов и API-запросов.
    -   **API-клиент:** Кастомный модуль Nuxt для удобной и типизированной работы с бэкендом, с автоматическим обновлением токенов.

-   **`apps/server` (Серверная часть)**
    -   **Среда выполнения и фреймворк:** Bun и Hono для создания высокопроизводительного API.
    -   **База данных:** PostgreSQL с Prisma ORM для работы с данными.
    -   **API:** OpenAPI-совместимый REST API с валидацией схем через Zod.
    -   **Интеграции:** Взаимодействие с моделями ИИ (OpenAI/Gemini) для реализации продвинутых функций, таких как лингвистический анализ и распознавание текста.

## 🚀 Технологический стек

-   **Фронтенд:** Nuxt 3, Vue 3, Vite, TypeScript, Pinia, Vuetify 3, SCSS.
-   **Бэкенд:** Hono, Bun, TypeScript, Prisma, Zod.
-   **База данных:** PostgreSQL.
-   **Инструменты:** Bun Workspaces, Docker, ESLint.

## 🛠️ Установка и запуск

### Предварительные требования

-   [Bun](https://bun.sh/) (v1.2.0 или выше).
-   [Docker](https://www.docker.com/get-started/) и Docker Compose.

### Пошаговая инструкция

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/injurka/chinisik
    cd chinisik
    ```

2.  **Установите зависимости во всем проекте:**
    ```bash
    bun install
    ```

3.  **Настройте и запустите бэкенд:**

    a. **Запустите контейнер с PostgreSQL:**
    ```bash
    docker run -p 5432:5432 \
      --name chinisik-bd \
      -e POSTGRES_PASSWORD=chinisik \
      -e POSTGRES_USER=chinisik \
      -e POSTGRES_DB=chinisik_dev \
      -d \
      --restart always \
      postgres:latest
    ```

    b. **Создайте файл окружения** в `apps/server/.env` и добавьте в него необходимые переменные (ключи API, секреты JWT и т.д.):
    ```env
    DATABASE_URL="postgresql://chinisik:chinisik@localhost:5432/chinisik_dev"
    JWT_SECRET="your_super_secret_jwt_key"
    AI_HUBMIX_KEY="your_ai_hubmix_api_key"
    # ...другие переменные
    ```

    c. **Примените миграции и наполните БД сервера:**
    ```bash
    bun --cwd ./apps/server run prisma:reset
    ```

### Запуск в режиме разработки

Откройте два терминала для одновременного запуска сервера и клиента.

1.  **Запустите сервер:**
    ```bash
    bun --cwd ./apps/server dev
    ```
    Сервер будет доступен по адресу `http://localhost:8080`.

2.  **Запустите клиент:**
    ```bash
    bun --cwd ./apps/client dev
    ```
    Веб-приложение будет доступно по адресу `http://localhost:5173`.

## 📜 Доступные скрипты

| Команда | Описание |
| :--- | :--- |
| **Разработка** |
| `bun dev:server` | Запуск сервера API в режиме разработки. |
| `bun dev:client` | Запуск веб-клиента в режиме разработки. |
| **Сборка** |
| `bun build` | Сборка production-версий клиента и сервера. |
| **База данных (для сервера)** |
| `bun --cwd ./apps/server prisma:migrate` | Применение миграций к БД сервера (PostgreSQL). |
| `bun --cwd ./apps/server prisma:seed` | Наполнение БД сервера тестовыми данными. |
| `bun --cwd ./apps/server prisma:reset` | Сброс, миграция и наполнение БД сервера. |
| **Линтинг и типизация** |
| `bun lint` | Проверка кода всего проекта с помощью ESLint. |
| `bun typecheck` | Проверка типов TypeScript во всем проекте. |

## 📜 Примеры интерфейса

![Снимок экрана Chinisik 2](https://github.com/user-attachments/assets/a20e8ed7-7538-4c76-8d95-b24e5e265553)![Снимок экрана Chinisik 3](https://github.com/user-attachments/assets/9d2c41ac-fdb6-4a3a-826c-ea99f9c098b3)![Снимок экрана Chinisik 4](https://github.com/user-attachments/assets/ded8fd4f-cf99-42ed-9171-46acf4c03ffc)![Снимок экрана Chinisik 5](https://github.com/user-attachments/assets/8238c96c-7e74-4d09-b78b-a15530f0ab96)
