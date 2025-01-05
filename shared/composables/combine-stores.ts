import { useHieroglyphWordStore } from '~/components/domain/hieroglyph-word'
import { usePinyinTextStore } from '~/components/domain/pinyin-text'

import { useKeysStore } from '~/components/modules/keys/store/keys.store'
import { usePinyinStore } from '~/components/modules/pinyin/store/pinyin.store'
import { useSplitGlyphsStore } from '~/components/modules/split-glyphs/store/split-glyphs.store'

type ExtractStoreId<T> = T extends { $id: infer U } ? U : never

interface IStoreTypes {
  request: ReturnType<typeof useRequestWrapperStore>
  keys: ReturnType<typeof useKeysStore>
  pinyin: ReturnType<typeof usePinyinStore>
  splitGlyphs: ReturnType<typeof useSplitGlyphsStore>

  // * domain components
  hieroglyphWord: ReturnType<typeof useHieroglyphWordStore>
  pinyinText: ReturnType<typeof usePinyinTextStore>

  // * global
  auth: ReturnType<typeof useAuthStore>
}

type StoreKeys = ExtractStoreId<IStoreTypes[keyof IStoreTypes]>

export const stores: Readonly<{ [K in StoreKeys]: () => IStoreTypes[K] }> = Object.freeze({
  request: useRequestWrapperStore,
  keys: useKeysStore,
  pinyin: usePinyinStore,
  splitGlyphs: useSplitGlyphsStore,

  // * domain components
  hieroglyphWord: useHieroglyphWordStore,
  pinyinText: usePinyinTextStore,

  // * global
  auth: useAuthStore,

})

function useStore<T extends StoreKeys>(key: T): Readonly<IStoreTypes[T]>
function useStore<T extends StoreKeys>(keys: T[]): Readonly<{ [K in T]: IStoreTypes[K]; }>
function useStore<T extends StoreKeys>(keysOrKey: T[] | T) {
  if (Array.isArray(keysOrKey))
    return Object.fromEntries(keysOrKey.map(key => [key, stores[key]()])) as { [K in T]: IStoreTypes[K] }

  return stores[keysOrKey]()
}

export { useStore }
