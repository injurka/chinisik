interface GoogleTokenData {
  access_token: string
  expires_in: number
  token_type: string
  id_token: string
}

interface GoogleUser {
  sub: string
  name: string
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: boolean
  locale: string
}

interface GoogleNormalizedUser {
  id: string
  email?: string
  name: string
  avatarUrl: string
}

function normalizeGoogleUser(
  user: GoogleUser,
): GoogleNormalizedUser {
  return {
    id: user.sub.toString(),
    email: (user.email && user.email_verified) ? user.email : undefined,
    name: user.name,
    avatarUrl: user.picture,
  }
}

export { normalizeGoogleUser }
export type { GoogleNormalizedUser, GoogleTokenData, GoogleUser }
