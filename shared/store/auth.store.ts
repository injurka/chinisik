//* --- State ----------------------------------------------- *//
interface AuthState {
  user: User | null
  token: string | null
}

//* --- Store ----------------------------------------------- *//
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),
})

//* --- Utils ----------------------------------------------- *//

export type AuthStore = ReturnType<typeof useAuthStore>
