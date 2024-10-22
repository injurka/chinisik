import type { ApiStatus } from '../types'
import type { IRequestReturn, IRequestWrapperPayload } from './store'
import type { CreateApiParams } from '~/shared/api'

// Типизация для useRequest
export type UseRequest = <T>(payload: IRequestWrapperPayload<T>) => Promise<IRequestReturn<Awaited<T>>>

// Типизация для useRequestStatus
export type UseRequestStatus = (keys: string[], status?: ApiStatus) => boolean

// Типизация для useApi
export type UseApiInitParams = Partial<CreateApiParams>
export type UseApi = () => {
  init: (params: UseApiInitParams) => Promise<void>
  api: IApi
}
