import type { CreateApiMethodType, MethodOption } from '../../api-client.types'
import { createMethodWrapper } from '../../utils'
import type * as DTO from './types'

interface IOptions {
  all: MethodOption<void, DTO.IKeysAllR>
}

const options: IOptions = {
  all: {
    url: () => '/keys/',
    method: 'get',
    adapter: (_, url) => ({ path: url(), options: {} }),
  },
}

function methods(baseUrl: string, create: CreateApiMethodType) {
  const createMethod = createMethodWrapper('v1', baseUrl, create)

  return {
    all: createMethod(options.all),
  }
}

export default methods
