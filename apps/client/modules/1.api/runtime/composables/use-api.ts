import type { UseApi, UseApiInitParams } from '../../types'

let api: IApi = {} as IApi
let refreshUserTokens: (() => Promise<void>) | null = null

const useApi: UseApi = () => {
  const init = async (params: Partial<UseApiInitParams>) => {
    const {
      baseUrl = '',
      verbose = true,
      interceptops = [],
      refresh = null,
    } = params

    refreshUserTokens = refresh
    api = createApi({
      baseUrl,
      verbose,
      interceptops,
    })
  }

  return { init, api, refresh: refreshUserTokens }
}

export { useApi }
