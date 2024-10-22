import type { UseRequest, UseRequestStatus } from '../../types'
import { useRequestWrapperStore } from '../store/request-wrapper.store'

const useRequest: UseRequest = (payload) => {
  return useRequestWrapperStore().requestWrapper(payload)
}

const useRequestStatus: UseRequestStatus = (keys, status) => {
  return useRequestWrapperStore().checkStatus(keys, status ?? 'PENDING')
}

export { useRequest, useRequestStatus }
