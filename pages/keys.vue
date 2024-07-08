<script lang="ts" setup>
import HieroglyphKeyItem from '~/components/modules/keys/key-hieroglyph.vue'

const isPinyinShowed = ref(false)
const isTranslateShowed = ref(false)

const keys: HieroglyphKey[] = mockHieroglyphKeys

definePageMeta({ layout: 'base' })
</script>

<template>
  <section class="content">
    <div class="description">
      <h2>214 радикалы, чтобы управлять всеми персонажами</h2>
      <p>Знание 214 радикалов облегчит вам процесс изучения китайского языка. Почему? </p>
      <p>Потому что, когда вы знаете радикалы, вам легче запомнить, как они сочетаются друг с другом, образуя более сложные символы. </p>
      <p>Радикалы могут выполнять одну из следующих функций или обе:</p>
      <ul>
        <li><em>семантический</em>, предоставление части или всего смысла;</li>
        <li><em>фонетика</em>, придание звука персонажу или чему-то очень близкому к нему.</li>
      </ul>
      <h2>Концепция ключевых</h2>
      <p>Каждый символ имеет один и только один радикал с функцией 'key', которая позволяет найти символ в словаре. Во многих случаях радикал слева или вверху символа является ключевым. Однако с увеличением использования цифровых словарей на смартфонах, в которых вы можете нарисовать символ  n, знание ключей становится менее критичным.</p>
    </div>

    <div class="keys">
      <div
        class="keys-item"
        :class="{ actived: isPinyinShowed }"
        @click="isPinyinShowed = !isPinyinShowed"
      >
        <button class="keys-button">
          {{
            isPinyinShowed
              ? 'скрыть пиньин'
              : 'показать пиньин'
          }}
        </button>
        <Icon class="keys-selected" name="Checked" size="20" />
      </div>
      <div
        class="keys-item"
        :class="{ actived: isTranslateShowed }"
        @click="isTranslateShowed = !isTranslateShowed"
      >
        <button class="keys-button">
          {{
            isTranslateShowed
              ? 'скрыть перевод'
              : 'показать перевод'
          }}
        </button>
        <Icon class="keys-selected" name="Checked" size="20" />
      </div>
    </div>

    <div class="list">
      <HieroglyphKeyItem
        v-for="item in keys"
        :key="item.index"
        :is-translate-showed="isTranslateShowed"
        :is-pinyin-showed="isPinyinShowed"
        :hieroglyph="item"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.content {
  padding: 16px;

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

  .keys {
    display: flex;
    align-items: center;
    justify-content: center;
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
      min-width: 160px;
      font-size: 0.9rem;
      text-align: center;
      cursor: pointer;

      &.actived {
        border: 2px solid var(--border-accent-color);
        box-shadow: 0 0 3px var(--bg-accent-color);

        .keys {
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
