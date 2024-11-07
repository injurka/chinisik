interface User {
  id: number
  email: string
  name?: string
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
