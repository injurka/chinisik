<script lang="ts" setup>
import HieroglyphKeyItem from '~/components/modules/keys/key-hieroglyph.vue'
import KeyHieroglyphInfo from '~/components/modules/keys/dialog/key-hieroglyph-info.vue'

const keys: HieroglyphKey[] = mockHieroglyphKeys

const isPinyinShowed = ref<boolean>(false)
const isPinyinColored = ref<boolean>(false)
const isTranslateShowed = ref<boolean>(false)
const isTranscription = ref<boolean>(false)

//* Expanded hieroglyph key
const dialog = ref<boolean>(false)
const expandedHieroglyphKey = ref<HieroglyphKey>()

function onHieroglyphExpand(hieroglyph: HieroglyphKey) {
  expandedHieroglyphKey.value = hieroglyph
  dialog.value = true
}
//*

definePageMeta({ layout: 'base' })
</script>

<template>
  <section class="content">
    <div class="description">
      <h2>214 радикалы, чтобы управлять всеми иероглифами</h2>
      <p>Знание 214 радикалов облегчит вам процесс изучения китайского языка. Почему? </p>
      <p>Потому что, когда вы знаете радикалы, вам легче запомнить, как они сочетаются друг с другом, образуя более сложные символы. </p>
      <p>Радикалы могут выполнять одну из следующих функций или обе:</p>
      <ul>
        <li><em>семантический</em>, предоставление части или всего смысла;</li>
        <li><em>фонетика</em>, придание звука персонажу или чему-то очень близкому к нему.</li>
      </ul>
      <p>
        По-китайски ключи именуются 部首 bùshǒu (палл. бушоу) – дословно “голова раздела”. Также китайские ключи часто называют “радикалами” (от английского radicals).
      </p>
      <p>
        На протяжении истории количество иероглифов в таблицах ключей варьировалось. Наиболее широкое распространение получила система из словаря Канси (康熙字典), насчитывающая 214 иероглифических ключей.
      </p>
    </div>

    <div class="controls">
      <div
        class="controls-item"
        :class="{ actived: isPinyinShowed }"
        @click="isPinyinShowed = !isPinyinShowed"
      >
        <button class="controls-button">
          Пиньин
        </button>
        <Icon class="controls-selected" name="Checked" size="20" />
      </div>
      <div
        class="controls-item"
        :class="{ actived: isTranslateShowed }"
        @click="isTranslateShowed = !isTranslateShowed"
      >
        <button class="controls-button">
          Перевод
        </button>
        <Icon class="controls-selected" name="Checked" size="20" />
      </div>
      <div
        class="controls-item"
        :class="{ actived: isTranscription }"
        @click="isTranscription = !isTranscription"
      >
        <button class="controls-button">
          Транскрипция
        </button>
        <Icon class="controls-selected" name="Checked" size="20" />
      </div>
      <div
        class="controls-item"
        :class="{ actived: isPinyinColored }"
        @click="isPinyinColored = !isPinyinColored"
      >
        <button class="controls-button">
          Цветной пиньин
        </button>
        <Icon class="controls-selected" name="Checked" size="20" />
      </div>
    </div>

    <div class="list">
      <HieroglyphKeyItem
        v-for="item in keys"
        :key="item.index"
        :is-translate-showed
        :is-pinyin-showed
        :is-transcription
        :is-pinyin-colored
        :hieroglyph="item"
        @on-expand="onHieroglyphExpand"
      />
    </div>

    <KeyHieroglyphInfo
      v-model="dialog"
      :hieroglyph="expandedHieroglyphKey"
    />
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;
  font-family: 'Rubik';

  @include mobile() {
    padding: 12px;
  }

  .description {
    font-size: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    margin: 25px 0;

    &-item {
      position: relative;

      background-color: var(--bg-secondary-color);
      border: 2px solid var(--border-secondary-color);
      color: var(--fg-primary-color);

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px 10px;
      border-radius: 10px;
      min-width: 140px;
      font-size: 0.9rem;
      text-align: center;
      cursor: pointer;

      &.actived {
        border: 2px solid var(--border-accent-color);
        box-shadow: 0 0 3px var(--bg-accent-color);

        .controls {
          &-selected {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            fill: var(--bg-accent-color);
          }
        }
      }
    }

    &-button {
      cursor: pointer;
      color: var(--fg-primary-color);
    }

    &-selected {
      position: absolute;
      top: -10px;
      right: -5px;
      opacity: 0;
      transform: scale(0);
      transition: all 0.2s ease-out;
    }
  }

  .list {
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    padding-bottom: 64px;
  }
}
</style>
