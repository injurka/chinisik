import type {
  UseRequest,
  UseRequestError,
  UseRequestErrors,
  UseRequestStatus,
} from '../../types'
import { useRequestWrapperStore } from '../store/request-wrapper.store'

const useRequest: UseRequest = (payload) => {
  return useRequestWrapperStore().requestWrapper(payload)
}

const useRequestStatus: UseRequestStatus = (keys, status) => {
  return useRequestWrapperStore().checkStatus(keys, status ?? 'PENDING')
}

const useRequestError: UseRequestError = (key) => {
  return useRequestWrapperStore().getError(key)
}

const useRequestErrors: UseRequestErrors = (key) => {
  return useRequestWrapperStore().getAnyError(key)
}

export {
  useRequest,
  useRequestError,
  useRequestErrors,
  useRequestStatus,
}
