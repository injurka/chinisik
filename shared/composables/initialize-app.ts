import type { NuxtApp } from '#app'

interface IInitialize {
  user: User | null
}

async function initializeApp(_?: NuxtApp): Promise<IInitialize> {
  const store = useStore(['auth'])
  const { data } = await store.auth.me()

  return { user: data?.user ?? null }
}

export { initializeApp }
