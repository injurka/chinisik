interface GitHubTokenData {
  access_token: string
  token_type: 'bearer' | 'basic'
  scope: string
}

interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: 'User' | 'Organization'
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string // ISO 8601 format
  updated_at: string // ISO 8601 format
  // Дополнительные поля
  user_view_type?: 'public' | 'private'
  notification_email?: string | null
}

interface GitHubEmail {
  email: string
  primary: boolean
  verified: boolean
  visibility: 'public' | 'private' | null
}

interface GitHubNormalizedUser {
  id: string
  email?: string
  name: string
  username: string
  avatarUrl: string
  profileUrl: string
  createdAt: Date
  updatedAt: Date
  emails: Array<{
    address: string
    primary: boolean
    verified: boolean
  }>
}

function normalizeGitHubUser(
  user: GitHubUser,
  emails: GitHubEmail[] = [],
): GitHubNormalizedUser {
  return {
    id: user.id.toString(),
    email: emails.find(e => e.primary && e.verified)?.email || user.email || undefined,
    name: user.name || user.login,
    username: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    createdAt: new Date(user.created_at),
    updatedAt: new Date(user.updated_at),
    emails: emails.map(e => ({
      address: e.email,
      primary: e.primary,
      verified: e.verified,
    })),
  }
}

export type { GitHubEmail, GitHubNormalizedUser, GitHubTokenData, GitHubUser }
export { normalizeGitHubUser }
