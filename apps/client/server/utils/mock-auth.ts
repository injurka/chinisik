export const MOCK_USER = {
  id: 1,
  email: 'dev@dev.dev',
  password: '12345678',
  name: 'Иван Чайнизик',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivan',
  githubId: 'mock-github-id',
  googleId: 'mock-google-id',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

export function generateToken() {
  return `mock_access_token_${Math.random().toString(36).substr(2)}`
}

export function generateRefreshToken() {
  return `mock_refresh_token_${Math.random().toString(36).substr(2)}`
}
