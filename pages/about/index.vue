<script setup lang="ts">
import { ref } from 'vue'
import { HaoticLines } from '~/components/domain/haotic-lines'

const contentEl = ref<HTMLElement>()

function getRandomChar() {
  const rangeStart = 0x4E00
  const rangeEnd = 0x62FF
  return String.fromCodePoint(
    Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart),
  )
}

const symbols = Array.from({ length: 40 }, () => ({ // Уменьшили количество символов для мобильных
  char: getRandomChar(),
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 15,
  size: 0.8 + Math.random() * 0.4, // Уменьшили размер символов
}))
</script>

<template>
  <section ref="contentEl" class="wrapper">
    <div class="background-effects">
      <div
        v-for="(symbol, index) in symbols"
        :key="index"
        class="symbol"
        :style="{
          top: `${symbol.top}%`,
          left: `${symbol.left}%`,
          animationDelay: `${symbol.delay}s`,
          animationDuration: `${symbol.duration}s`,
          fontSize: `${symbol.size}rem`,
        }"
      >
        {{ symbol.char }}
      </div>
    </div>

    <div class="content">
      <h1>О проекте</h1>
      <p>
        Добро пожаловать! Меня зовут Иван, и когда в жизни стало слишком обыденно,
        я решил бросить вызов самому себе. Так появилась идея совместить изучение
        китайского языка с созданием этого веб-приложения.
        <br><br>
        По сути, это цифровой дневник с инструментами, которые помогают закрепить
        знания на глубинном уровне. Здесь собраны личные заметки и разработки,
        рождённые в процессе погружения в китайский язык.
        <br><br>
        Если вы хотите узнать о технической реализации проекта или предложить
        улучшения, исходный код доступен на
        <span class="source">
          <a href="https://github.com/injurka/chinisik">GitHub</a>
        </span>
      </p>

      <div class="section">
        <h2>Важно знать</h2>
        <ul>
          <li>Проект создан для личного использования без коммерческих целей</li>
          <li>Контент основан на субъективном опыте изучения языка</li>
          <li>Материалы собирались из открытых источников и в процессе работы с языковыми моделями</li>
        </ul>
      </div>
    </div>

    <ClientOnly>
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="180"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="240"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
      />
      <HaoticLines
        class="haotic-lines"
        :speed="3"
        :weight-stroke="220"
        :points-counts="15"
        :cap="true"
        :viewport-el="contentEl"
        color="--bg-overlay-primary-color"
      />
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
.haotic-lines {
  opacity: 0.1;
}

.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  background: radial-gradient(circle at center, var(--bg-primary-color) 0%, var(--bg-tertiary-color) 100%);

  .symbol {
    position: absolute;
    color: var(--fg-seconday-color);
    animation: floatEffect linear infinite;
    user-select: none;
    font-family: 'Arial', sans-serif;
    opacity: 0;
  }
}

@keyframes floatEffect {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg);
  }
  20% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
    transform: translateY(-40px) rotate(180deg);
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateY(-80px) rotate(360deg);
  }
}

.content {
  z-index: 10;
  position: relative;
  max-width: 800px;
  margin: 4rem auto;
  padding: 1rem;
  color: var(--fg-primary-color);
  line-height: 1.6;
  background-color: rgba(var(--bg-header-color), 0.4);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 8px;
  box-shadow: 0 0 5px var(--bg-overlay-primary-color);

  h1 {
    font-size: 2rem;
    color: var(--fg-accent-color);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--border-accent-color);
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--fg-action-color);
    margin: 1rem 0;
    margin-bottom: 0;
  }

  p {
    margin: 0.5rem 0;
    color: var(--fg-secondary-color);
  }

  ul {
    padding-left: 1rem;
    li {
      margin: 0.3rem 0;
      font-size: 0.9rem;
      color: var(--fg-tertiary-color);
      &::marker {
        color: var(--border-accent-color);
      }
    }
  }

  .source {
    white-space: nowrap;
    display: inline-flex;
    padding: 0 6px;
    align-items: center;
    gap: 4px;
    color: var(--fg-secondary-color);
    background-color: var(--bg-tertiary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 4px;
    opacity: 0.7;

    a {
      color: var(--fg-secondary-color);
    }

    &:hover {
      color: var(--fg-action-color);
      background-color: var(--bg-tertiary-color);
      border: 1px solid var(--border-accent-color);
      box-shadow: 0px 0px 0px 1px var(--border-accent-color);
      opacity: 1;
    }
  }
}

.section {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: var(--bg-tertiary-color);
  border-left: 3px solid var(--border-accent-color);
  border-radius: 4px;
}
</style>
