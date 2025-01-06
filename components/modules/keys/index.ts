import type { ControlHieroglyphKey, KeysStore } from './store/keys.store'
import { useKeysStore } from './store/keys.store'
import KeyHieroglyphInfo from './ui/dialog/key-hieroglyph-info.vue'
import KeyHieroglyphControl from './ui/key-hieroglyph-control.vue'
import KeyHieroglyph from './ui/key-hieroglyph.vue'

export type {
  ControlHieroglyphKey,
  KeysStore,
}

export {
  KeyHieroglyph,
  KeyHieroglyphControl,
  KeyHieroglyphInfo,
  useKeysStore,
}
