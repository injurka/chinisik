import type {
  IAuthSmsP,
  IAuthSmsR,
  IConfirmAuthSmsP,
  IConfirmAuthSmsR,
  IRegSmsP,
  IRegSmsR,
} from './types'
import type { MethodPayload } from '~/shared/api/api-client'

export interface IAuthMethods {
  v1: {
    authSms: MethodPayload<IAuthSmsP, IAuthSmsR>
    authConfirmSms: MethodPayload<IConfirmAuthSmsP, IConfirmAuthSmsR>
    regSms: MethodPayload<IRegSmsP, IRegSmsR>
    regConfirmSms: MethodPayload<IConfirmAuthSmsP, IConfirmAuthSmsR>
  }
}

const options = {
  authSms: {
    url: () => '/auth/login/sms',
    method: 'post',
  },
  authConfirmSms: {
    url: (confirmationToken: string) => `/auth/login/sms/${confirmationToken}/`,
    method: 'post',
  },
  regSms: {
    url: () => '/auth/registration/sms',
    method: 'post',
  },
  regConfirmSms: {
    url: (confirmationToken: string) => `/auth/registration/sms/${confirmationToken}`,
    method: 'post',
  },
} as const

function authMethods(baseUrl = ''): IAuthMethods {
  const sharedOptV1 = { baseUrl, version: 'v1' as const }

  const v1: IAuthMethods['v1'] = {
    authSms: createApiMethod({
      ...sharedOptV1,
      ...options.authSms,
    }, (body, url) => ({
      path: url(),
      options: { body },
    })),
    authConfirmSms: createApiMethod({
      ...sharedOptV1,
      ...options.authConfirmSms,
    }, ({ confirmationToken, ...body }, url) => ({
      path: url(confirmationToken),
      options: { body },
    })),
    regSms: createApiMethod({
      ...sharedOptV1,
      ...options.regSms,
    }, (body, url) => ({
      path: url(),
      options: { body },
    })),
    regConfirmSms: createApiMethod({
      ...sharedOptV1,
      ...options.regConfirmSms,
    }, ({ confirmationToken, ...body }, url) => ({
      path: url(confirmationToken),
      options: { body },
    })),
  }

  return { v1 }
}

export { authMethods }
