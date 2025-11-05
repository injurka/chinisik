import type { Context, Next } from 'hono'
import { UserService } from '~/services'
import { jwtDecode } from '~/utils/jwt'

async function jwtGuard(c: Context, next: Next) {
  const authHeader = c.req.header('x-authorization') ?? c.req.header('authorization') ?? c.req.header('Authorization')

  if (!authHeader) {
    return c.json({ message: 'Авторизуйтесь для доступа' }, 401)
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader

  if (!token) {
    return c.json({ message: 'Токен авторизации не найден' }, 401)
  }

  try {
    const userService = new UserService()

    const decoded = await jwtDecode(token)
    const user = await userService.getUserByUserId(decoded.userId)
    const userPermissions = await userService.getPermissionsByUserId(user.id)

    if (!user) {
      return c.json({ message: 'Некорректный пользователь' }, 401)
    }

    c.set('jwt', token)
    c.set('user', user)
    c.set('permissions', userPermissions)

    await next()
  }
  catch {
    return c.json({ message: 'Некорректный токен авторизации' }, 401)
  }
}

export { jwtGuard }
