import type * as DTO from './v1.types'
import type { Instance } from '~/shared/api'

function method(instance: Instance) {
  return {
    all() {
      return instance<DTO.IGetBooksR>('/v1/books', { method: 'GET' })
    },
    details(payload: DTO.IGetBookDetailsP) {
      return instance<DTO.IGetBookDetailsR>(`/v1/books/${payload.id}`, { method: 'GET' })
    },
    content(payload: DTO.IGetBookContentP) {
      return instance<DTO.IGetBookContentR>(`/v1/books/${payload.id}/content`, { method: 'GET' })
    },
  }
}

export default method
