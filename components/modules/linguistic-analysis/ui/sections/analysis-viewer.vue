<script setup lang="ts">
import { PinyinText } from '~/components/domain/pinyin-text'
import { positionTranslations, roleTranslations } from '../../constant'

interface Props {
  content: any
}

defineProps<Props>()
</script>

<template>
  <div class="linguistic-analysis">
    <div v-for="(sentence, sIndex) in content.sentences" :key="sIndex" class="sentence">
      <!-- Sentence Header -->
      <div class="sentence-header">
        <div class="glyph-block">
          {{ sentence.glyph }}
        </div>
        <div class="pinyin-block">
          <div v-for="(p, pIndex) in sentence.pinyin" :key="pIndex">
            <PinyinText
              :pinyin="p.value"
              :tone="{
                index: p.toneIndex,
                type: p.toneType as ToneType,
              }"
            />
          </div>
        </div>
        <div class="translation-block">
          {{ sentence.translate }}
        </div>
        <div class="transcription-block">
          ({{ sentence.transcription }})
        </div>
      </div>

      <!-- Sentence Additional -->
      <div>
        <!-- Sentence Structure -->
        <details class="collapsible">
          <summary>
            <div>Структура предложения</div>
          </summary>
          <div class="collapsible-content">
            <div class="collapsible-card">
              <div class="collapsible-card-header">
                {{ sentence.structure.description }}
              </div>
            </div>
          </div>
        </details>

        <!-- Grammar Rules -->
        <details class="collapsible">
          <summary>
            <div>Грамматические правила</div>
            <div>({{ sentence.grammarRules.length }})</div>
          </summary>
          <div class="collapsible-content">
            <div v-for="(rule, rIndex) in sentence.grammarRules" :key="rIndex" class="collapsible-card">
              <div class="collapsible-card-header">
                {{ rule.description }}
              </div>
              <p v-if="rule.example" class="collapsible-card-desc">
                Пример: {{ rule.example }}
              </p>
            </div>
          </div>
        </details>
      </div>

      <!-- Components -->
      <div class="components">
        <h3 class="components-header">
          Составные элементы
        </h3>
        <template v-for="(component, cIndex) in sentence.components" :key="cIndex">
          <div class="component">
            <!-- Hieroglyph Component -->
            <div v-if="component.type === 'hieroglyph'" class="hieroglyph">
              <div class="component-header">
                <div class="main-info">
                  <span class="glyph">{{ component.glyph }}</span>
                  <div class="pinyin-translation">
                    <div class="pinyin-translation-pinyin">
                      <div v-for="(p, pIndex) in component.pinyin" :key="pIndex">
                        <PinyinText
                          :pinyin="p.value"
                          :tone="{
                            index: p.toneIndex,
                            type: p.toneType as ToneType,
                          }"
                        />
                      </div>
                    </div>
                    <div class="pinyin-translation-translation">
                      {{ component.translate }}
                    </div>
                  </div>
                </div>
                <span class="part-of-speech">{{ component.partOfSpeech }}</span>
              </div>

              <div class="details-grid">
                <div class="detail-item">
                  <span class="detail-label">Черт:</span>
                  <span class="detail-desc">{{ component.strokeCount }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Этимология:</span>
                  <span class="detail-desc">{{ component.etymology }}</span>
                </div>
                <div class="detail-item full-width">
                  <span class="detail-label">Мнемоника:</span>
                  <span class="detail-desc">{{ component.mnemonic }}</span>
                </div>
              </div>

              <!-- Grammar & Hints -->
              <div class="sub-sections">
                <details v-if="component.grammarRules?.length" class="collapsible">
                  <summary>
                    <div>Грамматика</div>
                    <div>({{ component.grammarRules.length }})</div>
                  </summary>
                  <div class="collapsible-content">
                    <div v-for="(rule, rIndex) in component.grammarRules" :key="rIndex" class="collapsible-card">
                      <div class="collapsible-card-header">
                        {{ rule.description }}
                      </div>
                      <p v-if="rule.example" class="collapsible-card-desc">
                        Пример: {{ rule.example }}
                      </p>
                    </div>
                  </div>
                </details>

                <details v-if="component.hints?.length" class="collapsible">
                  <summary>
                    <div>Особенности</div>
                    <div>({{ component.hints.length }})</div>
                  </summary>
                  <div class="collapsible-content">
                    <ul>
                      <li v-for="(hint, hIndex) in component.hints" :key="hIndex">
                        {{ hint }}
                      </li>
                    </ul>
                  </div>
                </details>
              </div>

              <!-- Keys -->
              <div class="keys-section">
                <h4 class="keys-section-header">
                  Составные ключи
                </h4>
                <div v-for="(key, kIndex) in component.keys" :key="kIndex" class="key-block">
                  <div class="key-header">
                    <div class="key-meta">
                      <div class="key-glyph">
                        {{ key.glyph }}
                      </div>
                      <span class="key-pinyin">
                        <div v-for="(p, pIndex) in key.pinyin" :key="pIndex">
                          <PinyinText
                            :pinyin="p.value"
                            :tone="{
                              index: p.toneIndex,
                              type: p.toneType as ToneType,
                            }"
                          />
                        </div>
                      </span>
                      <span v-if="key.translate" class="key-translation">- {{ key.translate }}</span>
                    </div>
                    <div class="key-tags">
                      <span class="key-position">{{ positionTranslations[key.position] ?? key.position }}</span>
                      <span class="key-role">{{ roleTranslations[key.role] ?? key.role }}</span>
                    </div>
                  </div>
                  <div v-if="key.keyInfo" class="kangxi-info">
                    Канси #{{ key.keyInfo.number }} ({{ key.keyInfo.name }}),
                    Частота: {{ key.keyInfo.frequencyRank }}
                  </div>
                  <span v-if="key.keyInfo?.variants?.length" class="key-variants">
                    Варианты написания:
                    <span v-for="glyph in key.keyInfo.variants" :key="glyph" class="key-variants-glyph">
                      {{ glyph }}
                    </span>
                  </span>
                  <span v-if="key.description" class="key-description"> > {{ key.description }}</span>
                </div>
              </div>
            </div>

            <!-- Word Component -->
            <div v-else-if="component.type === 'word'" class="word">
              <div class="component-header">
                <div class="main-info">
                  <span class="glyph">{{ component.glyph }}</span>
                  <div class="pinyin-translation">
                    <div class="pinyin-translation-pinyin">
                      <div v-for="(p, pIndex) in component.pinyin" :key="pIndex">
                        <PinyinText
                          :pinyin="p.value"
                          :tone="{
                            index: p.toneIndex,
                            type: p.toneType as ToneType,
                          }"
                        />
                      </div>
                    </div>
                    <div class="pinyin-translation-translation">
                      {{ component.translate }}
                    </div>
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
                        <div class="pinyin-translation-pinyin">
                          <div v-for="(p, pIndex) in hieroglyph.pinyin" :key="pIndex">
                            <PinyinText
                              :pinyin="p.value"
                              :tone="{
                                index: p.toneIndex,
                                type: p.toneType as ToneType,
                              }"
                            />
                          </div>
                        </div>
                        <div class="pinyin-translation-translation">
                          {{ hieroglyph.translate }}
                        </div>
                      </div>
                    </div>
                    <span class="part-of-speech">{{ hieroglyph.partOfSpeech }}</span>
                  </div>

                  <div class="details-grid">
                    <div v-if="hieroglyph.strokeCount" class="detail-item">
                      <span class="detail-label">Черт:</span>
                      <span class="detail-desc">{{ hieroglyph.strokeCount }}</span>
                    </div>
                    <div v-if="hieroglyph.etymology" class="detail-item">
                      <span class="detail-label">Этимология:</span>
                      <span class="detail-desc">{{ hieroglyph.etymology }}</span>
                    </div>
                    <div v-if="hieroglyph.mnemonic" class="detail-item full-width">
                      <span class="detail-label">Мнемоника:</span>
                      <span class="detail-desc">{{ hieroglyph.mnemonic }}</span>
                    </div>
                  </div>

                  <!-- Grammar & Hints -->
                  <div class="sub-sections">
                    <details v-if="hieroglyph.grammarRules?.length" class="collapsible">
                      <summary>
                        <div>Грамматика</div>
                        <div>({{ hieroglyph.grammarRules.length }})</div>
                      </summary>
                      <div class="collapsible-content">
                        <div v-for="(rule, rIndex) in hieroglyph.grammarRules" :key="rIndex" class="collapsible-card">
                          <div class="collapsible-card-header">
                            {{ rule.description }}
                          </div>
                          <p v-if="rule.example" class="collapsible-card-desc">
                            Пример: {{ rule.example }}
                          </p>
                        </div>
                      </div>
                    </details>

                    <details v-if="hieroglyph.hints?.length" class="collapsible">
                      <summary>
                        <div>Особенности</div>
                        <div>({{ hieroglyph.hints.length }})</div>
                      </summary>
                      <div class="collapsible-content">
                        <ul>
                          <li v-for="(hint, hIndex) in hieroglyph.hints" :key="hIndex">
                            {{ hint }}
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>

                  <!-- Keys for nested hieroglyph -->
                  <div class="keys-section">
                    <h4 class="keys-section-header">
                      Составные ключи
                    </h4>
                    <div v-for="(key, kIndex) in hieroglyph.keys" :key="kIndex" class="key-block">
                      <div class="key-header">
                        <div class="key-meta">
                          <div class="key-glyph">
                            {{ key.glyph }}
                          </div>
                          <span class="key-pinyin">
                            <div v-for="(p, pIndex) in key.pinyin" :key="pIndex">
                              <PinyinText
                                :pinyin="p.value"
                                :tone="{
                                  index: p.toneIndex,
                                  type: p.toneType as ToneType,
                                }"
                              />
                            </div>
                          </span>
                          <span v-if="key.translate" class="key-translation">- {{ key.translate }}</span>
                        </div>
                        <div class="key-tags">
                          <span class="key-position">{{ positionTranslations[key.position] ?? key.position }}</span>
                          <span class="key-role">{{ roleTranslations[key.role] ?? key.role }}</span>
                        </div>
                      </div>
                      <div v-if="key.keyInfo" class="kangxi-info">
                        Канси #{{ key.keyInfo.number }} ({{ key.keyInfo.name }}),
                        Частота: {{ key.keyInfo.frequencyRank }}
                      </div>
                      <span v-if="key.keyInfo?.variants?.length" class="key-variants">
                        Варианты написания:
                        <span v-for="glyph in key.keyInfo.variants" :key="glyph" class="key-variants-glyph">
                          {{ glyph }}
                        </span>
                      </span>
                      <span v-if="key.description" class="key-description"> > {{ key.description }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="divider">
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sentence {
  background: var(--bg-primary-color);
  border-left: 2px solid var(--border-secondary-color);
  border-right: 2px solid var(--border-secondary-color);
  padding: 16px;

  @include mobile {
    border: none;
    padding: 2px;
  }

  &-header {
    text-align: center;
    margin-bottom: 24px;

    .glyph-block {
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

    .pinyin-block {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      .pinyin-tone {
        font-size: 1.4rem;
      }

      > div {
        margin: 4px;
        display: flex;
      }

      border-bottom: 2px dashed var(--border-secondary-color);
    }

    .translation-block {
      color: var(--fg-primary-color);
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 0.2px;
    }

    .transcription-block {
      color: var(--fg-tertiary-color);
      font-size: 14px;
    }
  }
}

.collapsible {
  background: var(--bg-secondary-color);
  border: 1px solid var(--border-secondary-color);
  border-radius: 6px;
  margin: 8px 0;
  padding: 0 12px;

  @include mobile {
    padding: 0 6px;
  }

  &-content {
    margin-bottom: 8px;
    font-size: 1rem;

    @include mobile {
      font-size: 0.9rem;
    }
  }

  &-card {
    margin: 12px 0;
    margin-top: 4px;
    padding: 12px;
    background: var(--bg-tertiary-color);
    border-left: 4px solid var(--border-accent-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @include mobile {
      margin: 6px 0;
    }

    &-header {
      display: flex;
      gap: 8px;
      color: var(--fg-action-color);
      font-style: italic;
      font-size: 1rem;

      @include mobile {
        font-size: 0.9rem;
      }
    }

    &-desc {
      font-size: 0.9rem;

      @include mobile {
        font-size: 0.8rem;
      }
    }
  }

  summary {
    padding: 8px 4px;
    cursor: pointer;
    color: var(--fg-accent-color);
    font-weight: 500;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
}

.details-grid {
  .detail-item {
    display: flex;
    margin: 4px 0;
    font-size: 0.9rem;

    @include mobile {
      flex-wrap: wrap;
      margin: 8px 0;
    }

    .detail-label {
      color: var(--fg-primary-color);
      font-weight: 400;
      margin-right: 8px;
    }

    .detail-desc {
      color: var(--fg-tertiary-color);
      font-weight: 300;
    }
  }
}

.divider {
  border: 2px dashed var(--border-secondary-color);
}

.components {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 2px dashed var(--border-secondary-color);

  &-header {
    color: var(--fg-tertiary-color);
    text-align: center;
  }

  .component {
    margin: 16px 0;
    padding: 16px;
    border-left: 2px solid var(--border-accent-color);

    @include mobile {
      padding: 8px;
    }

    .component-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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
        &-pinyin {
          font-size: 1em;
          display: flex;
          gap: 8px;
        }
        &-translation {
          color: var(--fg-tertiary-color);
          font-size: 1em;
        }
      }

      .part-of-speech {
        background: var(--bg-tertiary-color);
        color: var(--fg-tertiary-color);
        border: 1px solid var(--border-secondary-color);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        align-self: flex-start;

        @include mobile {
          font-size: 0.7em;
          padding: 2px 4px;
        }
      }
    }

    .sub-sections {
      margin-top: 16px;
    }
  }
}

//

.nested-hieroglyphs {
  padding-left: 16px;
  border-left: 2px solid var(--border-secondary-color);

  @include mobile {
    padding-left: 8px;
  }

  .hieroglyph {
    margin: 12px 0;
    padding: 12px 0;
    background: var(--bg-primary-color);
  }
}

.keys-section {
  margin-top: 32px;
  border-top: 2px dashed var(--border-secondary-color);

  &-header {
    margin-top: 16px;
    color: var(--fg-tertiary-color);
    text-align: center;
  }

  .kangxi-info {
    margin-top: 8px;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
  }

  .key-description {
    display: flex;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    margin-top: 4px;
  }

  .key-variants {
    margin-top: 8px;
    font-size: 0.9rem;
    color: var(--fg-tertiary-color);
    &-glyph {
      border-radius: 10px;
      text-align: center;
      min-width: 34px;
      min-height: 34px;
      letter-spacing: 2px;
      font-weight: 500;
      margin-left: 8px;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--bg-accent-color);
      box-shadow: inset 0 0 2px var(--border-accent-color);
      color: var(--fg-primary-color);
      font-family: var(--font-family-cn);
    }
  }

  .key-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .key-tags {
      display: flex;
      gap: 6px;

      @include mobile {
        flex-direction: column;
      }

      > span {
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.75em;
      }

      .key-position {
        background: #e0f2fe;
        color: #0369a1;
        border: 1px solid var(--border-secondary-color);
      }
      .key-role {
        background: #f3e8ff;
        color: #6b21a8;
        border: 1px solid var(--border-secondary-color);
      }
    }

    .key-meta {
      display: flex;
      align-items: center;
      gap: 8px;

      .key-glyph {
        font-size: 1.2rem;
        border-radius: 10px;
        text-align: center;
        min-width: 34px;
        min-height: 34px;
        letter-spacing: 2px;
        font-weight: 500;
        padding: 2px 4px;
        border-radius: 5px;
        background: var(--bg-accent-color);
        box-shadow: inset 0 0 2px var(--border-accent-color);
        color: var(--fg-primary-color);
        font-family: var(--font-family-cn);
      }
      .key-pinyin {
        color: var(--fg-secondary-color);
      }
      .key-translation {
        color: var(--fg-primary-color);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 0.2px;
      }
    }
  }

  .key-block {
    margin: 12px 0;
    padding: 4px 0;
    padding-left: 8px;
    background: var(--bg-primary-color);
    border-left: 2px solid var(--border-secondary-color);
  }
}

.tone {
  font-size: 0.8em;
  vertical-align: super;
  color: var(--fg-accent-color);
}
</style>
