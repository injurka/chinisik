import { Permission } from '~/models/user'

export function mockUserPermission() {
  return [{
    userId: 1,
    permission: Permission.AiGenerate,
  }]
}
