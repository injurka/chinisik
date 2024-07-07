export interface IAuthSmsP {
  phone: string
}

export interface IConfirmAuthSmsP {
  code: string
  confirmationToken: string | undefined
}

export interface IRegSmsP {
  name?: string
  phone: string
}

export interface IConfirmRegSmsP {
  code: string
  confirmationToken: string | undefined
}
