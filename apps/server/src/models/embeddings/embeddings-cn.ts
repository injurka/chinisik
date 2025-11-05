import type { HieroglyphHsk } from '../hieroglyph-hsk'
import type { HieroglyphKey } from '../hieroglyph-key'

interface EmbeddingsCn {
  hsk: (HieroglyphHsk & { embedding: any })[]
  keys: (HieroglyphKey & { embedding: any })[]
}

export type { EmbeddingsCn }
