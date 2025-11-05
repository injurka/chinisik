interface User {
  id: number
  email: string
  name?: string
  avatarUrl?: string

  githubId?: string
  googleId?: string

  createdAt: Date
  updatedAt: Date
}

export enum Permission {
  AiGenerate = 'AiGenerate',
}
const permissions: Permission[] = [Permission.AiGenerate]

export {
  permissions,
}
export type {
  User,
}
