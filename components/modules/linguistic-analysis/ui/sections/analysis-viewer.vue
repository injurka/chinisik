<script setup lang="ts">
interface Props {
  content: any
}

defineProps<Props>()
</script>

<template>
  <div class="linguistic-analysis">
    <div v-for="(sentence, sIndex) in content.sentences" :key="sIndex" class="sentence-card">
      <!-- Sentence Header -->
      <div class="sentence-header">
        <h2 class="glyph">{{ sentence.glyph }}</h2>
        <div class="pinyin">
          <span v-for="(p, pIndex) in sentence.pinyin" :key="pIndex" class="syllable">
            {{ p.value }}<sup class="tone">{{ p.toneType !== 5 ? p.toneType : '⁰' }}</sup>
          </span>
        </div>
        <div class="translation">{{ sentence.translate }}</div>
        <div class="transcription">Произношение: {{ sentence.transcription }}</div>
      </div>

      <!-- Sentence Structure -->
      <div class="section">
        <h3>Структура предложения</h3>
        <div class="structure">
          <span class="structure-type">{{ sentence.structure.type }}</span>
          <p class="structure-desc">{{ sentence.structure.description }}</p>
        </div>
      </div>

      <!-- Grammar Rules -->
      <details class="collapsible">
        <summary>Грамматические правила ({{ sentence.grammarRules.length }})</summary>
        <div v-for="(rule, rIndex) in sentence.grammarRules" :key="rIndex" class="rule">
          <div class="rule-header">
            <span class="rule-type">{{ rule.type }}</span>
            <span v-if="rule.example" class="rule-example">Пример: {{ rule.example }}</span>
          </div>
          <p class="rule-desc">{{ rule.description }}</p>
        </div>
      </details>

      <!-- Components -->
      <div class="components">
        <h3>Составные элементы</h3>
        <div v-for="(component, cIndex) in sentence.components" :key="cIndex" class="component">
          <!-- Hieroglyph Component -->
          <div v-if="component.type === 'hieroglyph'" class="hieroglyph">
            <div class="component-header">
              <div class="main-info">
                <span class="glyph">{{ component.glyph }}</span>
                <div class="pinyin-translation">
                  <div class="pinyin">
                    <span v-for="(p, pIndex) in component.pinyin" :key="pIndex" class="syllable">
                      {{ p.value }}<sup class="tone">{{ p.toneType !== 5 ? p.toneType : '⁰' }}</sup>
                    </span>
                  </div>
                  <div class="translation">{{ component.translate }}</div>
                </div>
              </div>
              <span class="part-of-speech">{{ component.partOfSpeech }}</span>
            </div>
            
            <div class="details-grid">
              <div class="detail-item">
                <span class="detail-label">Черт:</span>
                {{ component.strokeCount }}
              </div>
              <div class="detail-item">
                <span class="detail-label">Этимология:</span>
                {{ component.etymology }}
              </div>
              <div class="detail-item full-width">
                <span class="detail-label">Мнемоника:</span>
                {{ component.mnemonic }}
              </div>
            </div>

            <!-- Grammar & Hints -->
            <div class="sub-sections">
              <details v-if="component.grammarRules?.length" class="collapsible">
                <summary>Грамматика ({{ component.grammarRules.length }})</summary>
                <div v-for="(rule, rIndex) in component.grammarRules" :key="rIndex" class="rule">
                  <div class="rule-header">
                    <span class="rule-type">{{ rule.type }}</span>
                    <span v-if="rule.example" class="rule-example">Пример: {{ rule.example }}</span>
                  </div>
                  <p class="rule-desc">{{ rule.description }}</p>
                </div>
              </details>

              <details v-if="component.hints?.length" class="collapsible">
                <summary>Подсказки ({{ component.hints.length }})</summary>
                <ul class="hints-list">
                  <li v-for="(hint, hIndex) in component.hints" :key="hIndex">{{ hint }}</li>
                </ul>
              </details>
            </div>

            <!-- Keys -->
            <div class="keys-section">
              <h4 class="keys-section-header">Составные ключи</h4>
              <div v-for="(key, kIndex) in component.keys" :key="kIndex" class="key">
                <div class="key-header">
                  <div class="key-meta">
                    <span class="key-glyph">{{ key.glyph }}</span>
                    <span class="key-translation">{{ key.translate }}</span>
                  </div>
                  <div class="key-tags">
                    <span class="key-position">{{ key.position }}</span>
                    <span class="key-role">{{ key.role }}</span>
                  </div>
                </div>
                <div v-if="key.keyInfo" class="kangxi-info">
                  Канси #{{ key.keyInfo.number }} ({{ key.keyInfo.name }}),
                  частота: {{ key.keyInfo.frequencyRank }}
                </div>
              </div>
            </div>
          </div>

          <!-- Word Component -->
          <div v-else-if="component.type === 'word'" class="word">
            <div class="component-header">
              <div class="main-info">
                <span class="glyph">{{ component.glyph }}</span>
                <div class="pinyin-translation">
                  <div class="pinyin">
                    <span v-for="(p, pIndex) in component.pinyin" :key="pIndex" class="syllable">
                      {{ p.value }}<sup class="tone">{{ p.toneType !== 5 ? p.toneType : '⁰' }}</sup>
                    </span>
                  </div>
                  <div class="translation">{{ component.translate }}</div>
                </div>
              </div>
              <span class="part-of-speech">{{ component.partOfSpeech }}</span>
            </div>

            <!-- Nested Hieroglyphs -->
            <div class="nested-hieroglyphs">
              <div v-for="(hieroglyph, hIndex) in component.hieroglyphs" :key="hIndex" class="hieroglyph nested">
                <!-- Повтор структуры для иероглифа -->
                <div class="component-header">
                  <div class="main-info">
                    <span class="glyph">{{ hieroglyph.glyph }}</span>
                    <div class="pinyin-translation">
                      <div class="pinyin">
                        <span v-for="(p, pIndex) in hieroglyph.pinyin" :key="pIndex" class="syllable">
                          {{ p.value }}<sup class="tone">{{ p.toneType !== 5 ? p.toneType : '⁰' }}</sup>
                        </span>
                      </div>
                      <div class="translation">{{ hieroglyph.translate }}</div>
                    </div>
                  </div>
                  <span class="part-of-speech">{{ hieroglyph.partOfSpeech }}</span>
                </div>

                <div class="details-grid">
                  <div class="detail-item">
                    <span class="detail-label">Черт:</span>
                    {{ hieroglyph.strokeCount }}
                  </div>
                  <div class="detail-item full-width">
                    <span class="detail-label">Этимология:</span>
                    {{ hieroglyph.etymology }}
                  </div>
                </div>

                <!-- Keys for nested hieroglyph -->
                <div class="keys-section">
                  <h5 class="keys-section-header">Составные ключи</h5>
                  <div v-for="(key, kIndex) in hieroglyph.keys" :key="kIndex" class="key">
                    <div class="key-header">
                      <div class="key-meta">
                        <span class="key-glyph">{{ key.glyph }}</span>
                        <span class="key-translation">{{ key.translate }}</span>
                      </div>
                      <div class="key-tags">
                        <span class="key-position">{{ key.position }}</span>
                        <span class="key-role">{{ key.role }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;

  .main-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .glyph {
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
    }
  }

  .pinyin-translation {
    .pinyin {
      font-size: 0.95em;
    }
    .translation {
      color: var(--fg-tertiary-color);
      font-size: 0.9em;
    }
  }

  .part-of-speech {
    background: var(--bg-secondary-color);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    color: var(--fg-tertiary-color);
    align-self: flex-start;
  }
}

.key-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  .key-tags {
    display: flex;
    gap: 6px;

    > span {
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.75em;
    }
  }

  .key-position { background: #e0f2fe; color: #0369a1; }
  .key-role { background: #f3e8ff; color: #6b21a8; }
}

.collapsible {
  background: var(--bg-tertiary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 6px;
  margin: 8px 0;
  padding: 0 12px;

  summary {
    padding: 8px 0;
    cursor: pointer;
    color: var(--fg-accent-color);
    font-weight: 500;
    list-style: none;
  }
}

.nested-hieroglyphs {
  margin-left: 24px;
  border-left: 2px solid var(--border-secondary-color);
  padding-left: 16px;

  .hieroglyph {
    margin: 12px 0;
    padding: 12px;
    background: var(--bg-primary-color);
  }
}

.sentence-card {
  background: var(--bg-primary-color);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--bg-overlay-primary-color);
  padding: 24px;
  margin-bottom: 32px;
}

.sentence-header {
  text-align: center;
  margin-bottom: 24px;

  .glyph {
    font-size: 48px;
    margin-bottom: 8px;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 5px;
    background: var(--bg-accent-color);
    box-shadow: inset 0 0 2px var(--border-accent-color);
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }

  .pinyin {
    margin-bottom: 8px;
    color: var(--fg-secondary-color);
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.2px;
    font-family: var(--font-family-cn);
    font-weight: 500;
  }

  .translation {
    color: var(--fg-primary-color);
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.2px;
  }

  .transcription {
    color: var(--fg-tertiary-color);
    font-size: 14px;
  }
}

.section {
  margin: 20px 0;
  padding: 16px;
  background: var(--bg-primary-color);
  border-radius: 8px;

  h3 {
    color: var(--fg-primary-color);
    font-size: 18px;
    margin-bottom: 12px;
  }
}

.rule {
  margin: 12px 0;
  padding: 12px;
  background: var(--bg-secondary-color);
  border-left: 4px solid var(--border-accent-color);
  border-radius: 4px;

  .rule-header {
    display: flex;
    gap: 8px;
    margin-bottom: 6px;

    .rule-type {
      font-weight: 600;
      color: var(--fg-accent-color);
    }

    .rule-example {
      color: var(--fg-action-color);
      font-style: italic;
    }
  }
}

.components {
  margin-top: 32px;
}
.component {
  margin: 16px 0;
  padding: 16px;
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 8px;
}

.keys-section{
  &-header {
    margin-top: 16px;
    color: var(--fg-tertiary-color);
  }
}
.key {
  margin: 12px 0;
  padding: 12px;
  background: var(--bg-primary-color);
  border-radius: 6px;

  .key-glyph {
    letter-spacing: 2px;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 5px;
    background: var(--bg-accent-color);
    box-shadow: inset 0 0 2px var(--border-accent-color);
    color: var(--fg-primary-color);
    font-family: var(--font-family-cn);
  }
  .key-translation {
    margin-left: 8px;
    color: var(--fg-primary-color);
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.2px;
  }
}

.tone {
  font-size: 0.8em;
  vertical-align: super;
  color: var(--fg-accent-color);
}

.detail-item {
  margin: 8px 0;
  color: var(--fg-tertiary-color);

  .detail-label {
    color: var(--fg-primary-color);
    font-weight: 500;
  }
}
</style>
