type ExtractStoreId<T> = T extends { $id: infer U } ? U : never

interface IStoreTypes {
  //
}

type StoreKeys = ExtractStoreId<IStoreTypes[keyof IStoreTypes]>

export const stores: Readonly<{ [K in StoreKeys]: () => IStoreTypes[K] }> = Object.freeze({
  //
})

function useStore<T extends StoreKeys>(key: T): Readonly<IStoreTypes[T]>
function useStore<T extends StoreKeys>(keys: T[]): Readonly<{ [K in T]: IStoreTypes[K]; }>
function useStore<T extends StoreKeys>(keysOrKey: T[] | T) {
  if (Array.isArray(keysOrKey))
    return Object.fromEntries(keysOrKey.map(key => [key, stores[key]()])) as { [K in T]: IStoreTypes[K] }

  // @ts-expect-error nope
  return stores[keysOrKey]()
}

export { useStore }
