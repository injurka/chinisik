const linguisticAnalysisMock = {
  sentences: [
    {
      type: 'sentence',
      structure: {
        type: 'verb-object',
        description: 'Глагол + объект действия',
      },
      glyph: '打电话',
      pinyin: [
        {
          value: 'da',
          toneType: 3,
          toneIndex: 1,
        },
        {
          value: 'dian',
          toneType: 4,
          toneIndex: 2,
        },
        {
          value: 'hua',
          toneType: 4,
          toneIndex: 2,
        },
      ],
      translate: 'позвонить по телефону',
      transcription: 'да диан хуа',
      grammarRules: [
        {
          type: 'verb-object_construction',
          description: 'Схема \'глагол + объект\' для обозначения целенаправленного действия',
          example: '吃饭 (есть пищу)',
        },
        {
          type: 'preposition_absence',
          description: 'Отсутствие предлогов в конструкциях с прямым дополнением',
          example: '打电话 вместо «по телефону»',
        },
        {
          type: 'fixed_expression',
          description: 'Устойчивое сочетание 电话 для обозначения телефонной связи',
          example: '手机 (shǒujī) - мобильный телефон',
        },
      ],
      hints: [
        'Нейтральный тон в 话 (hua) произносится кратко и без ударения',
        'Для смягчения фразы можно добавить счётное слово: 打个电话',
      ],
      components: [
        {
          type: 'hieroglyph',
          glyph: '打',
          pinyin: [
            {
              value: 'da',
              toneType: 3,
              toneIndex: 1,
            },
          ],
          partOfSpeech: 'глагол',
          translate: 'звонить',
          transcription: 'да',
          strokeCount: 5,
          etymology: 'Изначально изображало руку (扌), ударяющую по предмету (丁)',
          mnemonic: 'Рука (扌), ударяющая по гвоздю (丁)',
          keys: [
            {
              glyph: '扌',
              position: 'left',
              role: 'semantic',
              translate: 'рука',
              keyInfo: {
                number: 64,
                name: '手',
                variants: [
                  '手',
                  '才',
                ],
                frequencyRank: 23,
              },
              pinyin: [
                {
                  value: 'shou',
                  toneType: 3,
                  toneIndex: 2,
                },
              ],
            },
            {
              glyph: '丁',
              position: 'right',
              role: 'phonetic',
              translate: 'гвоздь',
              keyInfo: null,
              description: 'В древнекитайском языке произношение 丁 было ближе к dǎ, что объясняет его роль как фонетика',
              pinyin: [
                {
                  value: 'ding',
                  toneType: 1,
                  toneIndex: 1,
                },
              ],
            },
          ],
          grammarRules: [
            {
              type: 'lexical',
              description: 'В китайском многие действия с объектами выражаются через глагол + существительное без предлогов',
              example: '打篮球 (dǎ lánqiú) - «играть в баскетбол» (дословно: «бить баскетбол»).',
            },
          ],
          hints: [
            'Глагол, буквально означает «бить», «ударять», но в сочетании с 电话 (diànhuà) приобретает значение «звонить».',
            'Часто используется с счётными словами: 打一个电话 (один звонок)',
          ],
        },
        {
          type: 'word',
          glyph: '电话',
          pinyin: [
            {
              value: 'dian',
              toneType: 4,
              toneIndex: 2,
            },
            {
              value: 'hua',
              toneType: 4,
              toneIndex: 2,
            },
          ],
          partOfSpeech: 'существительное',
          translate: 'телефон',
          transcription: 'диан хуа',
          grammarRules: [
            {
              type: 'compound_noun',
              description: 'Составные существительные через объединение смысловых компонентов',
              example: '电 (электричество) + 话 (речь) = электрическая речь → телефон',
            },
          ],
          hints: [
            '电 произносится с резко падающим 4-м тоном',
            '话 в этом сочетании теряет тональность (нейтральный тон)',
          ],
          hieroglyphs: [
            {
              type: 'hieroglyph',
              glyph: '电',
              pinyin: [
                {
                  value: 'dian',
                  toneType: 4,
                  toneIndex: 2,
                },
              ],
              partOfSpeech: 'существительное',
              translate: 'электричество',
              transcription: 'дянь',
              strokeCount: 5,
              etymology: 'Упрощенная форма иероглифа 電. Изначально изображало молнию, исходящую из облаков.',
              mnemonic: 'Молния, ударяющая в поле (田) с искрой (乚)',
              grammarRules: [
                {
                  type: 'semantic_component',
                  description: 'Часто выступает как смысловой компонент в словах, связанных с электричеством',
                  example: '电视 (diànshì) - телевизор',
                },
              ],
              hints: [
                'Ключ 曰 в упрощённой форме заменяет 田',
                'Используется в технической терминологии: 电脑 (компьютер)',
              ],
              keys: [
                {
                  glyph: '曰',
                  position: 'top',
                  role: 'semantic',
                  translate: 'солнце/поле (вариант 田)',
                  description: 'В данном случае может ассоциироваться с яркостью или светом (как у электричества).',
                  keyInfo: {
                    number: 73,
                    name: '日',
                    variants: [
                      '日',
                      '曰',
                    ],
                    frequencyRank: 5,
                  },
                  pinyin: [
                    {
                      value: 'yue',
                      toneType: 1,
                      toneIndex: 2,
                    },
                  ],
                },
                {
                  glyph: '乚',
                  position: 'bottom',
                  role: 'structural',
                  description: 'В традиционном иероглифе 電 заменялась элементом 厶 (sī — «частный») и ⻗ (дождь). В упрощённой версии остался лишь условный штрих, не являющийся самостоятельным ключом.',
                  pinyin: [
                    {
                      value: 'yin',
                      toneType: 3,
                      toneIndex: 1,
                    },
                  ],
                },
              ],
            },
            {
              type: 'hieroglyph',
              glyph: '话',
              pinyin: [
                {
                  value: 'hua',
                  toneType: 4,
                  toneIndex: 2,
                },
              ],
              partOfSpeech: 'глагол',
              translate: 'речь, разговор',
              transcription: 'хуа',
              strokeCount: 8,
              etymology: 'Сочетание ключа 讠(речь) и компонента 舌 (язык), подчеркивающее устное общение.',
              mnemonic: 'Речь (讠), рождаемая языком (舌)',
              grammarRules: [
                {
                  type: 'semantic-phonetic',
                  description: 'Типичная структура: смысловой компонент (讠) + фонетик (舌)',
                  example: '语 (yǔ) - язык, речь',
                },
              ],
              hints: [
                'Ключ 讠 всегда указывает на связь с речью или коммуникацией',
                'В сочетаниях часто теряет тональность: 电话 (diànhuà)',
              ],
              keys: [
                {
                  glyph: '讠',
                  position: 'left',
                  role: 'semantic',
                  translate: 'речь',
                  keyInfo: {
                    number: 149,
                    name: '言',
                    variants: [
                      '言',
                      '讠',
                    ],
                    frequencyRank: 40,
                  },
                  pinyin: [
                    {
                      value: 'yan',
                      toneType: 2,
                      toneIndex: 1,
                    },
                  ],
                },
                {
                  glyph: '舌',
                  position: 'right',
                  role: 'phonetic',
                  translate: 'язык',
                  keyInfo: null,
                  description: 'Хотя в современном языке 舌 читается как shé, в древнекитайском произношение этого компонента было ближе к huà, что объясняет его роль как фонетика',
                  pinyin: [
                    {
                      value: 'she',
                      toneType: 2,
                      toneIndex: 2,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export { linguisticAnalysisMock }
