import { type IApi, type Interceptops, createApi } from '~/shared/api'

let api: IApi

export interface IUseApi {
  init: ({ interceptops }: { interceptops: Interceptops }) => void
  api: IApi
}

export function useApi(): IUseApi {
  const params = useRuntimeConfig().public

  const init: IUseApi['init'] = ({ interceptops }) => {
    api = createApi(
      `${params.apiUrl}`,
      interceptops,
    )
  }

  return { init, api }
}
