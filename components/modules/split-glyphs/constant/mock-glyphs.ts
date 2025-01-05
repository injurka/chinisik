const mockGlyphs: SplitedGlyphs = [
  {
    type: 'sentence',
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
    components: [
      '打',
      '电话',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '打',
    pinyin: 'da',
    toneType: 3,
    toneIndex: 1,
    translate: [
      {
        pos: 'verb',
        value: 'звонить',
        freq: 0.8,
      },
      {
        pos: 'verb',
        value: 'бить',
        freq: 0.5,
      },
    ],
    transcription: 'да',
    components: [
      '扌',
      '丁',
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
    translate: 'телефон',
    transcription: 'диан хуа',
    components: [
      '电',
      '话',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '电',
    pinyin: 'dian',
    toneType: 4,
    toneIndex: 2,
    translate: [
      {
        pos: 'noun',
        value: 'телефон',
        freq: 0.9,
      },
      {
        pos: 'noun',
        value: 'электричество',
        freq: 0.7,
      },
    ],
    transcription: 'диан',
    components: [
      '曰',
      '乚',
    ],
  },
  {
    type: 'hieroglyph',
    glyph: '话',
    pinyin: 'hua',
    toneType: 4,
    toneIndex: 2,
    translate: [
      {
        pos: 'noun',
        value: 'разговор',
        freq: 0.9,
      },
      {
        pos: 'noun',
        value: 'речь',
        freq: 0.8,
      },
    ],
    transcription: 'хуа',
    components: [
      '讠',
      '舌',
    ],
  },
]

export { mockGlyphs }
