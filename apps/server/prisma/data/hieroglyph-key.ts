import type { HieroglyphKey } from '~/models/hieroglyph-key/hieroglyph-key'
import hieroglyphKeys from '../../data/hieroglyph-key/hieroglyph-keys.json'

export function mockHieroglyphKeys() {
  return hieroglyphKeys as HieroglyphKey[]
}
