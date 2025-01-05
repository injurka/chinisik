const ammountSpacing: Record<SplitGlyphsType, number> = {
  sentence: 0,
  word: 1,
  hieroglyph: 2,
  key: 3,
}

const typeCopmonentMapping = {
  sentence: 'Предложение',
  word: 'Слово',
  hieroglyph: 'Иероглиф',
  key: 'Ключ',
}

const typeCopmonentMappingForControl = {
  sentence: 'Предложение',
  word: 'Слово',
  hieroglyph: 'Иероглиф',
}

const typeSplitMapping = {
  0: 'sentence',
  1: 'word',
  2: 'hieroglyph',
  3: 'key',
}

export {
  ammountSpacing,
  typeCopmonentMapping,
  typeCopmonentMappingForControl,
  typeSplitMapping,
}
