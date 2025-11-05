interface SignUpUserPayload {
  password: string
  email: string
  email_verification_code: string
}

interface SignInUserPayload {
  password: string
  email: string
}

export type {
  SignInUserPayload,
  SignUpUserPayload,
}
