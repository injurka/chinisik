import { resolve } from 'path'

export function toAbsolute(path: string): string {
  return resolve(import.meta.dir, path)
}
