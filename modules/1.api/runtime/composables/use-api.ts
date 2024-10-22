import type { UseApi, UseApiInitParams } from '../../types'

let api: IApi = {} as IApi

const useApi: UseApi = () => {
  const init = async (params: Partial<UseApiInitParams>) => {
    const {
      baseUrl = '',
      verbose = true,
      interceptops = [],
    } = params

    api = createApi({
      baseUrl,
      verbose,
      interceptops,
    })
  }

  return { init, api }
}

export { useApi }
