export interface IAuthSmsR {
  confirmation_token: string
}

export interface IConfirmAuthSmsR {
  user_id: string
  access_token: string
  token_type: string
  expires_in: string
}

export interface IRegSmsR {
  confirmation_token: string
}

export interface IConfirmRegSmsR {
  user_id: string
  access_token: string
  token_type: string
  expires_in: string
}
