enum PersonalNavItemType {
  File = 'file',
  Directory = 'directory',
}

interface PersonalNavItem {
  sysname: string
  title: string
  type: PersonalNavItemType
  children?: PersonalNavItem[]
}

export { PersonalNavItemType }
export type { PersonalNavItem }
