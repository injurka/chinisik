const ammountSpacing: Record<SplitGlyphsType | 'key', number> = {
  sentence: 0,
  word: 1,
  hieroglyph: 2,
  key: 3,
}

const typeCopmonentMapping = {
  sentence: 'Предложение',
  hieroglyph: 'Иероглиф',
  word: 'Слово',
  key: 'Ключ',
}

const typeSplitMapping = {
  0: 'sentence',
  1: 'hieroglyph',
  2: 'word',
  3: 'key',
}

export {
  ammountSpacing,
  typeCopmonentMapping,
  typeSplitMapping,
}
